(function () {
  const $ = (id) => document.getElementById(id);
  const ORDER = ["print", "vars", "math", "if", "for", "list", "while", "def", "match", "dict", "boss"];
  const LANGS = ["en", "es", "pt"];

  /* ---------- storage (best effort) ---------- */
  const KEY = "isekai-python-v1";
  let save = { done: {}, current: 0, drafts: {}, lang: null, theme: null };
  try { const raw = localStorage.getItem(KEY); if (raw) save = Object.assign(save, JSON.parse(raw)); } catch (e) {}
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) {} }

  let lang = save.lang;
  if (!LANGS.includes(lang)) {
    const nav = (navigator.language || "en").toLowerCase();
    lang = nav.startsWith("pt") ? "pt" : nav.startsWith("es") ? "es" : "en";
  }
  const U = () => UI[lang];
  const ch = (i) => Object.assign({ id: ORDER[i] }, CODE[ORDER[i]], TEXT[lang][ORDER[i]]);
  const N = ORDER.length;
  const FINAL_XP = ORDER.reduce((s, id) => s + CODE[id].xp, 0);
  let cur = Math.min(Math.max(0, save.current || 0), N - 1);

  /* ---------- theme ---------- */
  const root = document.documentElement;
  function effectiveTheme() {
    const t = root.getAttribute("data-theme");
    if (t === "light" || t === "dark") return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function applyTheme() {
    if (save.theme) root.setAttribute("data-theme", save.theme);
    $("themeBtn").textContent = effectiveTheme() === "dark" ? U().toLight : U().toDark;
  }
  $("themeBtn").addEventListener("click", () => {
    save.theme = effectiveTheme() === "dark" ? "light" : "dark"; persist(); applyTheme();
  });

  /* ---------- tiny highlighter ---------- */
  const KW = new Set("def return if elif else for in while break continue match case and or not import from as pass True False None class try except finally with lambda is global".split(" "));
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function highlight(src) {
    const re = /(#[^\n]*)|([fF]?"(?:[^"\\\n]|\\.)*"|[fF]?'(?:[^'\\\n]|\\.)*')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)(?=\s*\()|([A-Za-z_]\w*)/g;
    let out = "", last = 0, m;
    while ((m = re.exec(src))) {
      out += esc(src.slice(last, m.index));
      if (m[1]) out += `<span class="tk-com">${esc(m[1])}</span>`;
      else if (m[2]) out += `<span class="tk-str">${esc(m[2])}</span>`;
      else if (m[3]) out += `<span class="tk-num">${m[3]}</span>`;
      else if (m[4]) out += KW.has(m[4]) ? `<span class="tk-kw">${m[4]}</span>` : `<span class="tk-fn">${m[4]}</span>`;
      else out += KW.has(m[5]) ? `<span class="tk-kw">${m[5]}</span>` : m[5];
      last = re.lastIndex;
    }
    return out + esc(src.slice(last));
  }

  /* ---------- terminal + bridges used by Python ---------- */
  const out = $("out");
  window.termWrite = function (text, kind) {
    const span = document.createElement("span");
    span.className = "o-" + (kind || "out");
    span.textContent = text;
    out.appendChild(span);
    if (out.childNodes.length > 4000) out.removeChild(out.firstChild);
    out.scrollTop = out.scrollHeight;
  };
  const sys = (t, k) => window.termWrite(t + "\n", k || "sys");
  window.uiText = (k) => U()[k] || UI.en[k] || k;
  window.reportError = function (name, msg, line) {
    const where = line ? ` (${U().line} ${line})` : "";
    sys(`${name}${where}: ${msg}`, "err");
    let tip = U().tips[name];
    if (name === "SyntaxError" && /=\s*$/m.test(lastSrc.split("\n")[(line || 1) - 1] || "")) tip = U().tipEmptyValue;
    if (tip) sys("[SYSTEM] " + tip, "sys");
    lastError = { name, line, tip };
  };
  let lastSrc = "", lastError = null;

  /* ---------- editor ---------- */
  const code = $("code"), gutter = $("gutter");
  function updateGutter() {
    const n = code.value.split("\n").length;
    let s = ""; for (let i = 1; i <= n; i++) s += i + "\n";
    gutter.textContent = s;
    gutter.scrollTop = code.scrollTop;
  }
  code.addEventListener("input", () => { updateGutter(); save.drafts[ORDER[cur]] = code.value; persist(); });
  code.addEventListener("scroll", () => { gutter.scrollTop = code.scrollTop; });
  function insert(text) {
    code.setRangeText(text, code.selectionStart, code.selectionEnd, "end");
    code.dispatchEvent(new Event("input"));
  }
  code.addEventListener("keydown", (ev) => {
    if ((ev.ctrlKey || ev.metaKey) && ev.key === "Enter") { ev.preventDefault(); run(); return; }
    if (ev.key === "Tab" && !ev.shiftKey) { ev.preventDefault(); insert("    "); return; }
    if (ev.key === "Tab" && ev.shiftKey) {
      ev.preventDefault();
      const s = code.selectionStart, ls = code.value.lastIndexOf("\n", s - 1) + 1;
      const lead = code.value.slice(ls).match(/^ {1,4}/);
      if (lead) { code.setRangeText("", ls, ls + lead[0].length, "start"); code.selectionStart = code.selectionEnd = Math.max(ls, s - lead[0].length); code.dispatchEvent(new Event("input")); }
      return;
    }
    if (ev.key === "Enter") {
      ev.preventDefault();
      const s = code.selectionStart, ls = code.value.lastIndexOf("\n", s - 1) + 1;
      const line = code.value.slice(ls, s);
      let indent = line.match(/^\s*/)[0];
      if (/:\s*(#.*)?$/.test(line)) indent += "    ";
      insert("\n" + indent);
    }
  });

  /* loop guard that keeps line numbers intact */
  function guardLoops(src) {
    return src.split("\n").map((l) => {
      const m = l.match(/^(\s*)while\s+(.*):\s*(#[^'"]*)?$/);
      return m ? `${m[1]}while __g() and (${m[2]}):${m[3] ? " " + m[3] : ""}` : l;
    }).join("\n");
  }

  /* ---------- feedback bar ---------- */
  function feedback(kind, title, msg, showNext) {
    const fb = $("feedback");
    fb.className = "feedback " + kind; fb.hidden = false;
    $("fbTitle").textContent = title;
    $("fbMsg").textContent = msg || "";
    const nb = $("fbNext");
    nb.hidden = !(showNext && cur < N - 1);
    nb.textContent = U().fbNext;
  }
  $("fbNext").addEventListener("click", () => go(cur + 1));

  /* ---------- running ---------- */
  let ready = false, busy = false;
  window.pyReady = function () {
    ready = true;
    setStatus();
    $("runBtn").disabled = false;
    sys(U().bound);
  };
  function setStatus() {
    const s = $("pyStatus");
    s.textContent = ready ? U().ready : U().loading;
    s.classList.toggle("ready", ready);
  }

  function run() {
    if (!ready || busy) return;
    busy = true;
    const c = ch(cur);
    sys("\n" + U().casting, "dim");
    setTimeout(() => {
      lastSrc = code.value; lastError = null;
      let res;
      try { res = window.pyRun(guardLoops(code.value), c.test, lang); }
      catch (e) { res = "error"; sys("Internal error: " + e, "err"); }
      busy = false;
      if (res === "ok") return completeQuest(c);
      if (res.startsWith("fail:")) {
        const msg = res.slice(5);
        sys(U().notYet + " " + msg, "gold");
        feedback("fail", U().fbFail, msg);
      } else {
        const where = lastError && lastError.line ? ` (${U().line} ${lastError.line})` : "";
        feedback("err", U().fbErr + where, lastError && lastError.tip ? lastError.tip : U().fbErrMsg);
      }
    }, 20);
  }

  function completeQuest(c) {
    const first = !save.done[c.id];
    save.done[c.id] = true; persist();
    sys(U().complete(c.title), "ok");
    if (first) sys(`${U().bound.split("]")[0]}] +${c.xp} XP`, "gold"); else sys(U().again, "dim");
    const allDone = ORDER.every((id) => save.done[id]);
    if (allDone && first) sys(U().allDone, "gold");
    else if (cur < N - 1) sys(U().nextUnlocked(ch(cur + 1).title), "sys");
    feedback("ok", first ? U().fbOk(c.xp) : U().fbAgain, allDone && first ? U().allDone.replace("[SYSTEM] ", "") : "", true);
    renderHUD(); renderTabs(); updateQuestBadge();
    if (first) toast(U().fbOk(c.xp));
  }

  $("runBtn").addEventListener("click", run);
  $("clearBtn").addEventListener("click", () => { out.textContent = ""; });
  $("resetBtn").addEventListener("click", () => {
    code.value = ch(cur).starter; delete save.drafts[ORDER[cur]]; persist(); updateGutter();
    $("feedback").hidden = true;
    sys(U().resetMsg);
  });

  const replIn = $("replIn");
  const history = []; let hIdx = 0;
  replIn.addEventListener("keydown", (ev) => {
    if (ev.key === "ArrowUp" && history.length) { ev.preventDefault(); hIdx = Math.max(0, hIdx - 1); replIn.value = history[hIdx]; return; }
    if (ev.key === "ArrowDown" && history.length) { ev.preventDefault(); hIdx = Math.min(history.length, hIdx + 1); replIn.value = history[hIdx] || ""; return; }
    if (ev.key !== "Enter") return;
    const line = replIn.value; if (!line.trim()) return;
    if (!ready) { sys(U().notReady); return; }
    history.push(line); hIdx = history.length; replIn.value = "";
    window.termWrite(">>> " + line + "\n", "gold");
    lastSrc = line;
    try { window.pyRepl(guardLoops(line)); } catch (e) { sys("Internal error: " + e, "err"); }
  });

  /* ---------- rendering ---------- */
  function renderHUD() {
    const doneIds = ORDER.filter((id) => save.done[id]);
    const xp = doneIds.reduce((s, id) => s + CODE[id].xp, 0);
    $("lv").textContent = "Lv. " + (1 + doneIds.length);
    $("xptext").textContent = `${xp} / ${FINAL_XP} XP`;
    $("xpfill").style.width = (xp / FINAL_XP * 100).toFixed(1) + "%";
  }

  function renderStatic() {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = U()[el.dataset.i18n]; });
    $("replIn").placeholder = U().replPh;
    document.querySelectorAll("#langSeg button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    setStatus(); applyTheme();
    if (!$("feedback").hidden) $("feedback").hidden = true;
  }

  function renderTabs() {
    const nav = $("tabs"); nav.textContent = "";
    ORDER.forEach((id, i) => {
      const b = document.createElement("button");
      b.textContent = `${i + 1} · ${TEXT[lang][id].tab}`;
      if (i === cur) { b.classList.add("active"); b.setAttribute("aria-current", "page"); }
      if (save.done[id]) b.classList.add("done");
      b.addEventListener("click", () => go(i));
      nav.appendChild(b);
    });
    const active = nav.querySelector(".active"); if (active) active.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  function updateQuestBadge() {
    const c = ch(cur), el = $("questReward"); if (!el) return;
    const done = !!save.done[c.id];
    el.textContent = `${U().questReward} ${c.xp} XP` + (done ? " · " + U().cleared : "");
    el.classList.toggle("cleared", done);
  }

  function renderStory() {
    const c = ch(cur), u = U();
    const html = c.story.replace(/@@(\w+)@@/g, (_, k) =>
      `<div class="codeblock"><pre><code>${highlight(c.examples[k])}</code></pre><button data-ex="${k}" title="${esc(u.loadTitle)}">${esc(u.load)}</button></div>`);
    const words = c.words.map(([w, d]) => `<dt>${w}</dt><dd>${d}</dd>`).join("");
    $("story").innerHTML = `
      <p class="arc">${u.chapterOf(cur + 1, N)} · ${c.arc}</p>
      <h2>${c.title}</h2>
      ${html}
      <div class="quest">
        <span class="reward" id="questReward"></span>
        <p class="quest-sys">${u.questSys(c.title)}</p>
        <h3>${u.yourQuest}</h3>
        ${c.quest}
        <p class="quest-how">${u.questHow}</p>
        <div class="hint"><button type="button" id="hintBtn">${u.hintBtn}</button><p id="hintText" hidden>${esc(c.hint)}</p></div>
      </div>
      <div class="guild"><h4>${u.guild}</h4><dl>${words}</dl></div>
      <div class="pager">
        <button id="prevBtn" ${cur === 0 ? "disabled" : ""}>${u.prev}</button>
        <button id="nextBtn" ${cur === N - 1 ? "disabled" : ""}>${u.next}</button>
      </div>`;
    updateQuestBadge();
    $("story").querySelectorAll("[data-ex]").forEach((b) => b.addEventListener("click", () => {
      code.value = c.examples[b.dataset.ex]; updateGutter();
      sys(U().exLoaded);
    }));
    $("hintBtn").addEventListener("click", () => { $("hintText").hidden = false; });
    $("prevBtn").addEventListener("click", () => go(cur - 1));
    $("nextBtn").addEventListener("click", () => go(cur + 1));
  }

  function go(i) {
    if (i < 0 || i >= N) return;
    cur = i; save.current = i; persist();
    renderTabs(); renderStory();
    code.value = save.drafts[ORDER[cur]] ?? ch(cur).starter; updateGutter();
    $("feedback").hidden = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll("#langSeg button").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.lang === lang) return;
    // swap an untouched starter for the new language's starter
    const id = ORDER[cur];
    if (code.value === TEXT[lang][id].starter) { delete save.drafts[id]; }
    lang = b.dataset.lang; save.lang = lang; persist();
    renderStatic(); renderTabs(); renderStory();
    if (!save.drafts[id]) { code.value = ch(cur).starter; updateGutter(); }
  }));

  let tt;
  function toast(msg) {
    const t = $("toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 2600);
  }

  renderStatic(); renderHUD(); go(cur);
  if (typeof window.brython !== "function") {
    $("pyStatus").textContent = U().failed;
    sys(U().loadFail, "err");
  }
  setTimeout(() => { if (!ready) { $("pyStatus").textContent = U().slow; sys(U().slowMsg, "err"); } }, 25000);
})();
