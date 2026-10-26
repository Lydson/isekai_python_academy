const TEXT = {};
TEXT.en = {
  print: {
    tab: "print()", arc: "The Summoning", title: "Hello, Other World",
    story: `
<p>You were crossing the street, looking at your phone, when you heard a very loud horn. Then everything went white.</p>
<p>You are floating in an endless white void. A goddess sits on a cloud, eating a sandwich. She looks surprised to see you.</p>
<p><span class="dialogue">"Oh! Another one. Sorry about the truck. Let me give you a skill before I send you to my world."</span></p>
<div class="sysmsg">[SYSTEM] Welcome, <b>Lydson</b>. You have been granted the unique skill: <b>PYTHON</b>.<br>[SYSTEM] First technique unlocked: <b>print()</b> — make the System say something.</div>
<p>Every spell in this world is written in Python. The simplest spell is <code class="i">print()</code>. Whatever you put inside the parentheses appears in the terminal.</p>
@@ex1@@
<ul>
<li>Text must be inside quotes: <code class="i">"like this"</code> or <code class="i">'like this'</code>. Text in Python is called a <strong>string</strong>.</li>
<li>Numbers don't need quotes.</li>
<li>Commas let you print several things at once. Python adds a space between them.</li>
<li>A line that starts with <code class="i">#</code> is a <strong>comment</strong>. Python ignores it. It's a note for humans.</li>
</ul>
<h3>Quotes change everything</h3>
@@ex2@@
<p>With quotes, Python shows the text exactly as you wrote it. Without quotes, Python <em>calculates</em> it first.</p>`,
    quest: `<ol>
<li>Print <code class="i">Hello, System!</code></li>
<li>Print <code class="i">I am ready.</code> (with the period!)</li>
<li>Print the result of <code class="i">6 * 7</code>. Let Python do the math: don't type 42 yourself!</li>
</ol>`,
    hint: `Three lines: print("Hello, System!") then print("I am ready.") then print(6 * 7) (no quotes on the last one).`,
    starter: `# Your first spell. Write three print() lines below.

`,
    words: [["void", "a completely empty space"], ["to be summoned", "to be called to come somewhere (often by magic)"], ["horn", "the loud sound a car or truck makes"]]
  },
  vars: {
    tab: "variables", arc: "Character Creation", title: "Name Your Hero",
    story: `
<p>The goddess finishes her sandwich and opens a giant glowing menu.</p>
<p><span class="dialogue">"Character creation time! The System remembers things using <strong>variables</strong>. Think of a variable as a box with a label on it."</span></p>
@@ex1@@
<ul>
<li><code class="i">name = "Lydson"</code> means "put the text Lydson in a box called name". The <code class="i">=</code> sign <strong>stores</strong> a value; it doesn't mean "equals" like in math.</li>
<li>There are four basic types of values: <strong>str</strong> (text), <strong>int</strong> (whole number), <strong>float</strong> (decimal number) and <strong>bool</strong> (True or False).</li>
<li><code class="i">type(x)</code> tells you the type of a value.</li>
<li>Variable names use lowercase and underscores: <code class="i">hero_name</code>, not <code class="i">Hero Name</code>.</li>
</ul>
<h3>Changing a variable and f-strings</h3>
<p>A variable can change. And an <strong>f-string</strong> (a string with <code class="i">f</code> before the quotes) lets you put variables inside text using <code class="i">{ }</code>.</p>
@@ex2@@`,
    quest: `<ol>
<li>Fill in <code class="i">hero_name</code> with your name (inside the quotes).</li>
<li>Set <code class="i">hero_class</code> to <code class="i">"mage"</code> and <code class="i">hp</code> to <code class="i">100</code>.</li>
<li>Use an f-string to print: <code class="i">Lydson the mage has 100 HP.</code> (with your hero_name).</li>
</ol>`,
    hint: `print(f"{hero_name} the {hero_class} has {hp} HP.")`,
    starter: `# Create your character
hero_name = ""     # your name inside the quotes
hero_class = ""    # your class: mage
hp = 0             # change to 100

# Print your character card with an f-string
`,
    words: [["to store", "to keep something to use later"], ["label", "a small tag with a name on it"], ["glowing", "giving off a soft light"]]
  },
  math: {
    tab: "math & types", arc: "The First Village", title: "The Innkeeper's Bill",
    story: `
<p>You land face-first in a small village. You have 50 gold coins and no idea how money works here. The innkeeper smiles a little too much.</p>
<div class="sysmsg">[SYSTEM] Skill unlocked: <b>ARITHMETIC</b> — never get cheated again.</div>
@@ex1@@
<ul>
<li><code class="i">/</code> always gives a decimal (float). <code class="i">//</code> gives a whole number and throws away the rest.</li>
<li><code class="i">%</code> (modulo) gives the <strong>remainder</strong>. <code class="i">10 % 3</code> is 1 because 10 = 3 + 3 + 3 + <strong>1</strong>.</li>
<li><code class="i">**</code> is power: <code class="i">2 ** 3</code> = 2 × 2 × 2.</li>
<li>Shortcuts: <code class="i">gold -= 5</code> is the same as <code class="i">gold = gold - 5</code>. Same for <code class="i">+=</code> and <code class="i">*=</code>.</li>
</ul>
<h3>The trap of text numbers</h3>
<p>The innkeeper writes your bill on paper: <code class="i">"5"</code>. That's a string, not a number!</p>
@@ex2@@
<p><code class="i">int()</code> turns text into a whole number, <code class="i">float()</code> into a decimal, and <code class="i">str()</code> turns a number into text.</p>`,
    quest: `<ol>
<li>One night at the inn costs <code class="i">price = 7</code> gold. You stay <code class="i">nights = 3</code>. You have <code class="i">gold = 50</code>.</li>
<li>Create <code class="i">cost</code> (price × nights) and <code class="i">change</code> (the gold you keep). Use the variables, not the numbers.</li>
<li>Create <code class="i">max_nights</code>: how many full nights 50 gold can pay for. Use <code class="i">//</code>.</li>
<li>Print: <code class="i">You pay 21 gold and keep 29.</code> using an f-string.</li>
</ol>`,
    hint: `cost = price * nights, change = gold - cost, max_nights = gold // price, then print(f"You pay {cost} gold and keep {change}.")`,
    starter: `price = 7
nights = 3
gold = 50

# Calculate cost, change and max_nights


# Print the bill
`,
    words: [["bill", "a paper that shows how much you must pay"], ["change", "the money you get back after paying"], ["to cheat (someone)", "to trick someone to get something unfairly"]]
  },
  if: {
    tab: "if / elif / else", arc: "The Crossroads", title: "The Fork in the Road",
    story: `
<p>You leave the village and reach a fork in the road. A wooden sign says: <em>"Left: monsters. Right: more monsters."</em> Great.</p>
<p>You already know this magic, but the System makes you review it anyway.</p>
<div class="sysmsg">[SYSTEM] Skill review: <b>IF / ELIF / ELSE</b> — make decisions.</div>
@@ex1@@
<ul>
<li>Python checks from top to bottom and runs only the <strong>first</strong> block that is True.</li>
<li>Comparisons: <code class="i">==</code> (equal), <code class="i">!=</code> (not equal), <code class="i">&gt;</code>, <code class="i">&lt;</code>, <code class="i">&gt;=</code>, <code class="i">&lt;=</code>.</li>
<li>Don't mix them up: <code class="i">=</code> stores a value, <code class="i">==</code> compares two values.</li>
</ul>
<h3>and, or, not</h3>
@@ex2@@
<ul>
<li><code class="i">and</code>: both must be True. <code class="i">or</code>: at least one must be True. <code class="i">not</code>: flips True and False.</li>
</ul>`,
    quest: `<ol>
<li>Keep <code class="i">hp = 35</code> on the first line.</li>
<li>Create a variable <code class="i">action</code>: <code class="i">"attack"</code> if hp is more than 70, <code class="i">"defend"</code> if hp is more than 30, otherwise <code class="i">"run"</code>.</li>
<li>Print the action. The System will test your code with different hp values!</li>
</ol>`,
    hint: `if hp > 70: action = "attack"  /  elif hp > 30: action = "defend"  /  else: action = "run". Each action line goes indented under its condition.`,
    starter: `hp = 35

# Decide the action with if / elif / else


print("Action:", action)
`,
    words: [["fork in the road", "a place where one road splits into two"], ["to review", "to study something again"], ["to flip", "to turn something to the opposite side"]]
  },
  for: {
    tab: "for loops", arc: "The First Battle", title: "The Goblin Horde",
    story: `
<p>You take the left path into a meadow that smells like rain and bad decisions. Suddenly, the blue window flashes red.</p>
<div class="sysmsg">[SYSTEM] Warning: hostile monsters approaching.</div>
<p>A goblin jumps out of the bushes. Then another. Then <em>five more</em>.</p>
<p><span class="dialogue">"Am I supposed to write <code class="i">attack()</code> seven times?!"</span> you shout.</p>
<div class="sysmsg">[SYSTEM] New skill unlocked: <b>FOR LOOP</b> — repeat a spell once for every item in a group.</div>
<p>The goblins are in a <strong>list</strong>: values between <code class="i">[ ]</code>, separated by commas.</p>
@@ex1@@
<p>The loop takes each goblin from the list, one at a time, puts it in the variable <code class="i">goblin</code>, and runs the indented code. Seven goblins, one spell.</p>
<h3>The range() technique</h3>
<p>When you just need to repeat something a number of times, use <code class="i">range()</code>.</p>
@@ex2@@
<ul>
<li><code class="i">range(3)</code> gives <code class="i">0, 1, 2</code>. It <strong>stops before</strong> the number. Every isekai hero forgets this at least once.</li>
<li><code class="i">range(1, 4)</code> gives <code class="i">1, 2, 3</code> (start, stop).</li>
<li>The code that repeats must be <strong>indented</strong> (4 spaces).</li>
</ul>`,
    quest: `<ol>
<li>The list <code class="i">goblins</code> and the counter <code class="i">defeated = 0</code> are ready.</li>
<li>Use a <code class="i">for</code> loop to print <code class="i">You defeat Gob!</code> (and the same for the others).</li>
<li>Inside the loop, add 1 to <code class="i">defeated</code> each time.</li>
</ol>`,
    hint: `for goblin in goblins:  then, indented:  print(f"You defeat {goblin}!")  and  defeated += 1`,
    starter: `goblins = ["Gob", "Grub", "Snot"]
defeated = 0

# Write your for loop here

print("Goblins defeated:", defeated)
`,
    words: [["horde", "a very large group (usually of enemies)"], ["to defeat", "to win against someone"], ["meadow", "a field of grass and flowers"]]
  },
  list: {
    tab: "lists", arc: "The Merchant", title: "The Bottomless Bag",
    story: `
<p>A suspicious merchant sells you a magic bag. <span class="dialogue">"It holds anything, in order, forever! Only 3 gold!"</span> It is a Python <strong>list</strong>.</p>
@@ex1@@
<ul>
<li><code class="i">.append(x)</code> puts an item at the end.</li>
<li><code class="i">.remove(x)</code> takes out the first item equal to x.</li>
<li><code class="i">.pop()</code> takes out the last item and gives it to you.</li>
<li><code class="i">len(bag)</code> counts the items. <code class="i">x in bag</code> checks if it's there.</li>
<li><code class="i">bag[0]</code> is the first item. <code class="i">bag[-1]</code> is the last.</li>
</ul>
<h3>Slicing and the list spell</h3>
@@ex2@@
<p>The last line is a <strong>list comprehension</strong>: a for loop folded into one line. Advanced magic, but very common in real code.</p>`,
    quest: `<ol>
<li>Start with <code class="i">inventory = ["sword", "potion"]</code>.</li>
<li>Add <code class="i">"map"</code> to the end. Remove <code class="i">"potion"</code> (you drank it).</li>
<li>Create <code class="i">item_count</code> with the number of items, using <code class="i">len()</code>.</li>
</ol>`,
    hint: `inventory.append("map"), inventory.remove("potion"), item_count = len(inventory)`,
    starter: `inventory = ["sword", "potion"]

# Your bag spells here

print(inventory)
`,
    words: [["bottomless", "without a bottom; it never fills up"], ["suspicious", "seems dishonest or strange"], ["to drink (drank, drunk)", "irregular verb: the past is 'drank'"]]
  },
  while: {
    tab: "while loops", arc: "The Dungeon", title: "The Endless Corridor",
    story: `
<p>You enter your first dungeon. The corridor goes on and on. You don't know how many rooms there are, so a <code class="i">for</code> loop over a list doesn't help.</p>
<div class="sysmsg">[SYSTEM] New skill unlocked: <b>WHILE LOOP</b> — repeat <b>while</b> a condition is True.</div>
@@ex1@@
<p>A <code class="i">while</code> loop checks its condition before every repetition. When the condition becomes <code class="i">False</code>, the loop stops.</p>
<div class="sysmsg">[SYSTEM] ⚠ Curse warning: if the condition never becomes False, you are trapped in an <b>infinite loop</b>. In this world, the System will rescue you after 200,000 steps.</div>
<h3>break and continue</h3>
<ul>
<li><code class="i">break</code> exits the loop immediately (an emergency teleport).</li>
<li><code class="i">continue</code> skips the rest of this round and jumps to the next one.</li>
</ul>
@@ex2@@`,
    quest: `<ol>
<li>Start with <code class="i">hp = 100</code> (the boss's HP) and <code class="i">turns = 0</code>.</li>
<li>Use a <code class="i">while</code> loop: while <code class="i">hp &gt; 0</code>, hit the boss for 30 damage and add 1 to <code class="i">turns</code>.</li>
<li>Print the boss's HP after each hit. At the end, <code class="i">turns</code> should be 4.</li>
</ol>`,
    hint: `while hp > 0:   then indented:   hp -= 30   turns += 1   print("Boss HP:", hp)`,
    starter: `hp = 100
turns = 0

# Write your while loop here

print("Boss defeated in", turns, "turns!")
`,
    words: [["corridor", "a long, narrow passage inside a building"], ["to be trapped", "to be unable to escape"], ["to skip", "to not do one step and go to the next"]]
  },
  def: {
    tab: "functions", arc: "The Mentor", title: "Def-sensei's Spellbook",
    story: `
<p>In the next town, an old wizard watches you practice. His robe has the word <code class="i">def</code> embroidered on the back.</p>
<p><span class="dialogue">"Boy. Why do you shout the entire fireball incantation every single time? Seal it into a <strong>function</strong>. Then you only say its name."</span></p>
@@ex1@@
<p>Def-sensei taps your forehead with his staff. <span class="dialogue">"Remember the four parts."</span></p>
<ul>
<li><code class="i">def</code> creates the spell. The name follows the same rules as variables.</li>
<li><code class="i">target</code> and <code class="i">power</code> are <strong>parameters</strong>: the ingredients you pass in.</li>
<li><code class="i">return</code> sends a result back, so you can keep it in a variable.</li>
<li>Without <code class="i">return</code>, a function gives back <code class="i">None</code>: an empty potion bottle.</li>
</ul>
<h3>Default ingredients</h3>
<p>Parameters can have a default value. If you don't pass it, Python uses the default.</p>
@@ex2@@
<div class="sysmsg">[SYSTEM] Tip: <b>print</b> shows something on the screen. <b>return</b> gives a value back to the code. They are not the same thing!</div>`,
    quest: `<ol>
<li>Write a function <code class="i">heal(hp, amount=20)</code>.</li>
<li>It must <strong>return</strong> the new hp (<code class="i">hp + amount</code>).</li>
<li>Test it: <code class="i">heal(10)</code> should give <code class="i">30</code>, <code class="i">heal(5, 50)</code> should give <code class="i">55</code>.</li>
</ol>`,
    hint: `def heal(hp, amount=20):  then on the next line, indented:  return hp + amount`,
    starter: `# Write the heal function here


print(heal(10))      # should show 30
print(heal(5, 50))   # should show 55
`,
    words: [["to seal", "to close something tightly (here: to save a spell)"], ["ingredient", "one of the things you need to make something"], ["embroidered", "decorated with sewn thread"]]
  },
  match: {
    tab: "match / case", arc: "The Capital", title: "The Gatekeeper's Ledger",
    story: `
<p>The royal capital has a huge gate. A tired knight checks every traveler's class and hands them a weapon. He is using a very long <code class="i">if / elif / elif / elif</code> chain and looks like he wants to cry.</p>
<div class="sysmsg">[SYSTEM] New skill unlocked: <b>MATCH / CASE</b> — compare one value against many patterns.</div>
@@ex1@@
<ul>
<li><code class="i">match</code> takes the value you want to check.</li>
<li>Each <code class="i">case</code> is one possible value.</li>
<li><code class="i">case "a" | "b":</code> means "a <strong>or</strong> b".</li>
<li><code class="i">case _:</code> catches everything else, like <code class="i">else</code>.</li>
</ul>
<p>Here is the same logic with <code class="i">if/elif</code>. Both work, but <code class="i">match</code> is easier to read when you check one value many times.</p>
@@ex2@@
<p>The knight sheds a single grateful tear. <span class="dialogue">"Thank you, stranger. Now please automate my job."</span></p>`,
    quest: `<ol>
<li>Complete the function <code class="i">weapon_for(job)</code> using <code class="i">match</code>.</li>
<li>Return <code class="i">"sword"</code> for <code class="i">"warrior"</code> or <code class="i">"knight"</code>, <code class="i">"staff"</code> for <code class="i">"mage"</code>, <code class="i">"bow"</code> for <code class="i">"archer"</code>.</li>
<li>Return <code class="i">"fists"</code> for anything else.</li>
</ol>`,
    hint: `Inside the function: match job:  then  case "warrior" | "knight":  return "sword"  … and finish with  case _:  return "fists"`,
    starter: `def weapon_for(job):
    # use match / case here
    pass


print(weapon_for("knight"))   # sword
print(weapon_for("mage"))     # staff
print(weapon_for("bard"))     # fists
`,
    words: [["ledger", "a book where records are written"], ["to hand (someone) something", "to give it to them with your hand"], ["to shed a tear", "to cry a little"]]
  },
  dict: {
    tab: "dictionaries", arc: "Awakening", title: "Status Window, Open!",
    story: `
<p>Every isekai hero eventually shouts the sacred words. You raise your hand.</p>
<p><span class="dialogue">"STATUS!"</span></p>
<div class="sysmsg">[SYSTEM] Your status window is a <b>dictionary</b>: each value has a name (a <b>key</b>).</div>
@@ex1@@
<ul>
<li>A dictionary uses <code class="i">{ key: value }</code>.</li>
<li><code class="i">status["hp"]</code> reads a value. <code class="i">status["hp"] = 90</code> changes it.</li>
<li>Assigning a new key adds it: <code class="i">status["title"] = "Hero"</code>.</li>
<li><code class="i">status.get("mp", 0)</code> reads safely: if the key doesn't exist, you get <code class="i">0</code> instead of an error.</li>
</ul>
<h3>Looping over the window</h3>
@@ex2@@`,
    quest: `<ol>
<li>Create a dictionary <code class="i">status</code> with <code class="i">"name": "Lydson"</code>, <code class="i">"level": 1</code> and <code class="i">"hp": 100</code>.</li>
<li>Level up! Add 1 to <code class="i">status["level"]</code>.</li>
<li>Loop with <code class="i">.items()</code> and print every line as <code class="i">key: value</code> (for example <code class="i">level: 2</code>).</li>
</ol>`,
    hint: `status["level"] += 1   then   for key, value in status.items(): print(f"{key}: {value}")`,
    starter: `# Create the status dictionary


# Level up


# Print the status window
`,
    words: [["to raise your hand", "to lift your hand up"], ["sacred", "holy, very special"], ["to level up", "to reach the next level (gaming)"]]
  },
  boss: {
    tab: "boss fight", arc: "Final Arc", title: "The Slime King",
    story: `
<p>The ground shakes. A slime the size of a castle appears, wearing a tiny golden crown.</p>
<p><span class="dialogue">"So you are the otherworlder who knows Python,"</span> it gurgles. <span class="dialogue">"Let's see if you remember EVERYTHING."</span></p>
<div class="sysmsg">[SYSTEM] Final quest: combine <b>functions</b>, <b>loops</b>, <b>if</b> and <b>return</b>.</div>
<p>You remember a useful trick: <code class="i">enumerate()</code> gives you the position and the item at the same time.</p>
@@ex1@@
<p>And a <code class="i">return</code> inside a loop stops the whole function immediately. Perfect for finishing a boss.</p>
@@ex2@@`,
    quest: `<ol>
<li>Complete <code class="i">fight(boss_hp, damages)</code>. <code class="i">damages</code> is a list of numbers, one per turn.</li>
<li>Subtract each damage from <code class="i">boss_hp</code>, in order.</li>
<li>When <code class="i">boss_hp</code> reaches 0 or less, <strong>return the turn number</strong> (the first turn is 1).</li>
<li>If the boss survives every turn, return <code class="i">-1</code>.</li>
</ol>`,
    hint: `for turn, dmg in enumerate(damages, start=1): boss_hp -= dmg; if boss_hp <= 0: return turn. After the loop: return -1.`,
    starter: `def fight(boss_hp, damages):
    # Your final spell
    pass


print(fight(50, [20, 20, 20]))   # 3
print(fight(100, [10, 10]))      # -1
print(fight(10, [50, 1]))        # 1
`,
    words: [["to gurgle", "to make a bubbling, liquid sound"], ["to survive", "to stay alive"], ["otherworlder", "someone from another world (isekai slang)"]]
  }
};
