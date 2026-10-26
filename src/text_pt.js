TEXT.pt = {
  print: {
    tab: "print()", arc: "A Invocação", title: "Olá, Outro Mundo",
    story: `
<p>Você estava atravessando a rua, olhando o celular, quando ouviu uma buzina muito alta. Depois, tudo ficou branco.</p>
<p>Você está flutuando em um vazio branco sem fim. Uma deusa está sentada em uma nuvem, comendo um sanduíche. Ela parece surpresa ao te ver.</p>
<p><span class="dialogue">"Ah! Mais um. Desculpa pelo caminhão. Deixa eu te dar uma habilidade antes de te mandar para o meu mundo."</span></p>
<div class="sysmsg">[SISTEMA] Bem-vindo, <b>Lydson</b>. Você recebeu a habilidade única: <b>PYTHON</b>.<br>[SISTEMA] Primeira técnica desbloqueada: <b>print()</b> — faz o Sistema dizer alguma coisa.</div>
<p>Todo feitiço deste mundo é escrito em Python. O feitiço mais simples é o <code class="i">print()</code>. Tudo o que você coloca dentro dos parênteses aparece no terminal.</p>
@@ex1@@
<ul>
<li>Texto precisa estar entre aspas: <code class="i">"assim"</code> ou <code class="i">'assim'</code>. Em Python, texto se chama <strong>string</strong>.</li>
<li>Números não precisam de aspas.</li>
<li>Vírgulas deixam você mostrar várias coisas de uma vez. O Python coloca um espaço entre elas.</li>
<li>Uma linha que começa com <code class="i">#</code> é um <strong>comentário</strong>. O Python ignora. É uma anotação para humanos.</li>
</ul>
<h3>As aspas mudam tudo</h3>
@@ex2@@
<p>Com aspas, o Python mostra o texto exatamente como você escreveu. Sem aspas, o Python <em>calcula</em> primeiro.</p>`,
    quest: `<ol>
<li>Mostre <code class="i">Hello, System!</code></li>
<li>Mostre <code class="i">I am ready.</code> (com o ponto final!)</li>
<li>Mostre o resultado de <code class="i">6 * 7</code>. Deixe o Python fazer a conta: não digite 42 você mesmo!</li>
</ol>`,
    hint: `Três linhas: print("Hello, System!") depois print("I am ready.") depois print(6 * 7) (sem aspas na última).`,
    starter: `# Seu primeiro feitiço. Escreva três linhas com print() abaixo.

`,
    words: [["void", "um espaço completamente vazio"], ["to be summoned", "ser chamado para algum lugar (geralmente por magia)"], ["horn", "buzina: o som alto de um carro ou caminhão"]]
  },
  vars: {
    tab: "variáveis", arc: "Criação de Personagem", title: "Dê Nome ao Seu Herói",
    story: `
<p>A deusa termina o sanduíche e abre um menu gigante e brilhante.</p>
<p><span class="dialogue">"Hora de criar o personagem! O Sistema guarda as coisas usando <strong>variáveis</strong>. Pense em uma variável como uma caixa com uma etiqueta."</span></p>
@@ex1@@
<ul>
<li><code class="i">name = "Lydson"</code> quer dizer "coloque o texto Lydson em uma caixa chamada name". O sinal <code class="i">=</code> <strong>guarda</strong> um valor; ele não quer dizer "igual" como na matemática.</li>
<li>Existem quatro tipos básicos de valores: <strong>str</strong> (texto), <strong>int</strong> (número inteiro), <strong>float</strong> (número decimal) e <strong>bool</strong> (True ou False).</li>
<li><code class="i">type(x)</code> mostra o tipo de um valor.</li>
<li>Nomes de variáveis usam letras minúsculas e underline: <code class="i">hero_name</code>, e não <code class="i">Hero Name</code>.</li>
</ul>
<h3>Mudando uma variável e f-strings</h3>
<p>Uma variável pode mudar. E uma <strong>f-string</strong> (uma string com <code class="i">f</code> antes das aspas) deixa você colocar variáveis dentro do texto usando <code class="i">{ }</code>.</p>
@@ex2@@`,
    quest: `<ol>
<li>Preencha <code class="i">hero_name</code> com o seu nome (dentro das aspas).</li>
<li>Coloque <code class="i">"mage"</code> em <code class="i">hero_class</code> e <code class="i">100</code> em <code class="i">hp</code>.</li>
<li>Use uma f-string para mostrar: <code class="i">Lydson the mage has 100 HP.</code> (com o seu hero_name).</li>
</ol>`,
    hint: `print(f"{hero_name} the {hero_class} has {hp} HP.")`,
    starter: `# Crie seu personagem
hero_name = ""     # seu nome dentro das aspas
hero_class = ""    # sua classe: mage
hp = 0             # mude para 100

# Mostre a ficha do personagem com uma f-string
`,
    words: [["to store", "guardar algo para usar depois"], ["label", "etiqueta: um pequeno papel com um nome"], ["glowing", "brilhante, que emite uma luz suave"]]
  },
  math: {
    tab: "contas e tipos", arc: "A Primeira Vila", title: "A Conta do Estalajadeiro",
    story: `
<p>Você cai de cara em uma vilazinha. Tem 50 moedas de ouro e nenhuma ideia de como o dinheiro funciona aqui. O estalajadeiro sorri um pouco demais.</p>
<div class="sysmsg">[SISTEMA] Habilidade desbloqueada: <b>ARITMÉTICA</b> — nunca mais seja enganado.</div>
@@ex1@@
<ul>
<li><code class="i">/</code> sempre dá um decimal (float). <code class="i">//</code> dá um número inteiro e joga fora o resto.</li>
<li><code class="i">%</code> (módulo) dá o <strong>resto</strong> da divisão. <code class="i">10 % 3</code> é 1 porque 10 = 3 + 3 + 3 + <strong>1</strong>.</li>
<li><code class="i">**</code> é potência: <code class="i">2 ** 3</code> = 2 × 2 × 2.</li>
<li>Atalhos: <code class="i">gold -= 5</code> é o mesmo que <code class="i">gold = gold - 5</code>. O mesmo vale para <code class="i">+=</code> e <code class="i">*=</code>.</li>
</ul>
<h3>A armadilha dos números em texto</h3>
<p>O estalajadeiro escreve sua conta no papel: <code class="i">"5"</code>. Isso é uma string, não um número!</p>
@@ex2@@
<p><code class="i">int()</code> transforma texto em número inteiro, <code class="i">float()</code> em decimal, e <code class="i">str()</code> transforma um número em texto.</p>`,
    quest: `<ol>
<li>Uma noite na estalagem custa <code class="i">price = 7</code> moedas. Você fica <code class="i">nights = 3</code> noites. Você tem <code class="i">gold = 50</code>.</li>
<li>Crie <code class="i">cost</code> (price × nights) e <code class="i">change</code> (o ouro que sobra). Use as variáveis, não os números.</li>
<li>Crie <code class="i">max_nights</code>: quantas noites completas 50 moedas pagam. Use <code class="i">//</code>.</li>
<li>Mostre: <code class="i">You pay 21 gold and keep 29.</code> usando uma f-string.</li>
</ol>`,
    hint: `cost = price * nights, change = gold - cost, max_nights = gold // price, depois print(f"You pay {cost} gold and keep {change}.")`,
    starter: `price = 7
nights = 3
gold = 50

# Calcule cost, change e max_nights


# Mostre a conta
`,
    words: [["bill", "conta: o papel que mostra quanto você precisa pagar"], ["change", "troco: o dinheiro que volta depois de pagar"], ["to cheat (someone)", "enganar alguém para levar vantagem"]]
  },
  if: {
    tab: "if / elif / else", arc: "A Encruzilhada", title: "A Bifurcação na Estrada",
    story: `
<p>Você sai da vila e chega a uma bifurcação na estrada. Uma placa de madeira diz: <em>"Esquerda: monstros. Direita: mais monstros."</em> Ótimo.</p>
<p>Você já conhece esta magia, mas o Sistema faz você revisar mesmo assim.</p>
<div class="sysmsg">[SISTEMA] Revisão de habilidade: <b>IF / ELIF / ELSE</b> — tomar decisões.</div>
@@ex1@@
<ul>
<li>O Python confere de cima para baixo e roda só o <strong>primeiro</strong> bloco que for True.</li>
<li>Comparações: <code class="i">==</code> (igual), <code class="i">!=</code> (diferente), <code class="i">&gt;</code>, <code class="i">&lt;</code>, <code class="i">&gt;=</code>, <code class="i">&lt;=</code>.</li>
<li>Não confunda: <code class="i">=</code> guarda um valor, <code class="i">==</code> compara dois valores.</li>
</ul>
<h3>and, or, not</h3>
@@ex2@@
<ul>
<li><code class="i">and</code>: os dois precisam ser True. <code class="i">or</code>: pelo menos um precisa ser True. <code class="i">not</code>: inverte True e False.</li>
</ul>`,
    quest: `<ol>
<li>Mantenha <code class="i">hp = 35</code> na primeira linha.</li>
<li>Crie uma variável <code class="i">action</code>: <code class="i">"attack"</code> se hp for maior que 70, <code class="i">"defend"</code> se hp for maior que 30, senão <code class="i">"run"</code>.</li>
<li>Mostre a ação. O Sistema vai testar seu código com valores diferentes de hp!</li>
</ol>`,
    hint: `if hp > 70: action = "attack"  /  elif hp > 30: action = "defend"  /  else: action = "run". Cada linha de action vai indentada embaixo da sua condição.`,
    starter: `hp = 35

# Decida a ação com if / elif / else


print("Action:", action)
`,
    words: [["fork in the road", "bifurcação: lugar onde uma estrada se divide em duas"], ["to review", "revisar, estudar algo de novo"], ["to flip", "inverter, virar para o lado oposto"]]
  },
  for: {
    tab: "loops for", arc: "A Primeira Batalha", title: "A Horda de Goblins",
    story: `
<p>Você pega o caminho da esquerda e entra em um campo que cheira a chuva e a más decisões. De repente, a janela azul pisca em vermelho.</p>
<div class="sysmsg">[SISTEMA] Alerta: monstros hostis se aproximando.</div>
<p>Um goblin pula do mato. Depois outro. Depois <em>mais cinco</em>.</p>
<p><span class="dialogue">"Eu vou ter que escrever <code class="i">attack()</code> sete vezes?!"</span> você grita.</p>
<div class="sysmsg">[SISTEMA] Nova habilidade desbloqueada: <b>LOOP FOR</b> — repete um feitiço uma vez para cada item de um grupo.</div>
<p>Os goblins estão em uma <strong>lista</strong>: valores entre <code class="i">[ ]</code>, separados por vírgulas.</p>
@@ex1@@
<p>O loop pega cada goblin da lista, um de cada vez, coloca na variável <code class="i">goblin</code> e roda o código indentado. Sete goblins, um feitiço.</p>
<h3>A técnica do range()</h3>
<p>Quando você só precisa repetir algo um certo número de vezes, use <code class="i">range()</code>.</p>
@@ex2@@
<ul>
<li><code class="i">range(3)</code> dá <code class="i">0, 1, 2</code>. Ele <strong>para antes</strong> do número. Todo herói isekai esquece isso pelo menos uma vez.</li>
<li><code class="i">range(1, 4)</code> dá <code class="i">1, 2, 3</code> (início, fim).</li>
<li>O código que se repete precisa estar <strong>indentado</strong> (4 espaços).</li>
</ul>`,
    quest: `<ol>
<li>A lista <code class="i">goblins</code> e o contador <code class="i">defeated = 0</code> já estão prontos.</li>
<li>Use um loop <code class="i">for</code> para mostrar <code class="i">You defeat Gob!</code> (e o mesmo para os outros).</li>
<li>Dentro do loop, some 1 em <code class="i">defeated</code> a cada vez.</li>
</ol>`,
    hint: `for goblin in goblins:  depois, indentado:  print(f"You defeat {goblin}!")  e  defeated += 1`,
    starter: `goblins = ["Gob", "Grub", "Snot"]
defeated = 0

# Escreva seu loop for aqui

print("Goblins defeated:", defeated)
`,
    words: [["horde", "horda: um grupo muito grande (geralmente de inimigos)"], ["to defeat", "derrotar, vencer alguém"], ["meadow", "campo de grama e flores"]]
  },
  list: {
    tab: "listas", arc: "O Mercador", title: "A Bolsa Sem Fundo",
    story: `
<p>Um mercador suspeito te vende uma bolsa mágica. <span class="dialogue">"Ela guarda qualquer coisa, em ordem, para sempre! Só 3 moedas!"</span> É uma <strong>lista</strong> do Python.</p>
@@ex1@@
<ul>
<li><code class="i">.append(x)</code> coloca um item no final.</li>
<li><code class="i">.remove(x)</code> tira o primeiro item igual a x.</li>
<li><code class="i">.pop()</code> tira o último item e entrega para você.</li>
<li><code class="i">len(bag)</code> conta os itens. <code class="i">x in bag</code> confere se ele está lá.</li>
<li><code class="i">bag[0]</code> é o primeiro item. <code class="i">bag[-1]</code> é o último.</li>
</ul>
<h3>Fatiamento e o feitiço de lista</h3>
@@ex2@@
<p>A última linha é uma <strong>list comprehension</strong>: um loop for dobrado em uma linha só. Magia avançada, mas muito comum em código de verdade.</p>`,
    quest: `<ol>
<li>Comece com <code class="i">inventory = ["sword", "potion"]</code>.</li>
<li>Adicione <code class="i">"map"</code> no final. Tire <code class="i">"potion"</code> (você bebeu).</li>
<li>Crie <code class="i">item_count</code> com o número de itens, usando <code class="i">len()</code>.</li>
</ol>`,
    hint: `inventory.append("map"), inventory.remove("potion"), item_count = len(inventory)`,
    starter: `inventory = ["sword", "potion"]

# Seus feitiços de bolsa aqui

print(inventory)
`,
    words: [["bottomless", "sem fundo; nunca enche"], ["suspicious", "suspeito, parece desonesto ou estranho"], ["to drink (drank, drunk)", "beber; verbo irregular: o passado é 'drank'"]]
  },
  while: {
    tab: "loops while", arc: "A Masmorra", title: "O Corredor Sem Fim",
    story: `
<p>Você entra na sua primeira masmorra. O corredor não acaba nunca. Você não sabe quantas salas existem, então um loop <code class="i">for</code> em uma lista não ajuda.</p>
<div class="sysmsg">[SISTEMA] Nova habilidade desbloqueada: <b>LOOP WHILE</b> — repete <b>enquanto</b> uma condição for True.</div>
@@ex1@@
<p>Um loop <code class="i">while</code> confere a condição antes de cada repetição. Quando a condição vira <code class="i">False</code>, o loop para.</p>
<div class="sysmsg">[SISTEMA] ⚠ Alerta de maldição: se a condição nunca virar False, você fica preso em um <b>loop infinito</b>. Neste mundo, o Sistema te resgata depois de 200.000 passos.</div>
<h3>break e continue</h3>
<ul>
<li><code class="i">break</code> sai do loop na hora (um teletransporte de emergência).</li>
<li><code class="i">continue</code> pula o resto desta rodada e vai para a próxima.</li>
</ul>
@@ex2@@`,
    quest: `<ol>
<li>Comece com <code class="i">hp = 100</code> (o HP do chefe) e <code class="i">turns = 0</code>.</li>
<li>Use um loop <code class="i">while</code>: enquanto <code class="i">hp &gt; 0</code>, acerte o chefe com 30 de dano e some 1 em <code class="i">turns</code>.</li>
<li>Mostre o HP do chefe depois de cada golpe. No final, <code class="i">turns</code> deve ser 4.</li>
</ol>`,
    hint: `while hp > 0:   depois, indentado:   hp -= 30   turns += 1   print("Boss HP:", hp)`,
    starter: `hp = 100
turns = 0

# Escreva seu loop while aqui

print("Boss defeated in", turns, "turns!")
`,
    words: [["corridor", "corredor: passagem longa e estreita dentro de um prédio"], ["to be trapped", "estar preso, sem conseguir escapar"], ["to skip", "pular uma etapa e ir para a próxima"]]
  },
  def: {
    tab: "funções", arc: "O Mestre", title: "O Grimório do Def-sensei",
    story: `
<p>Na cidade seguinte, um mago velho observa você treinar. O manto dele tem a palavra <code class="i">def</code> bordada nas costas.</p>
<p><span class="dialogue">"Garoto. Por que você grita o encantamento inteiro da bola de fogo toda vez? Sele ele em uma <strong>função</strong>. Aí você só fala o nome."</span></p>
@@ex1@@
<p>Def-sensei bate na sua testa com o cajado. <span class="dialogue">"Lembre-se das quatro partes."</span></p>
<ul>
<li><code class="i">def</code> cria o feitiço. O nome segue as mesmas regras das variáveis.</li>
<li><code class="i">target</code> e <code class="i">power</code> são <strong>parâmetros</strong>: os ingredientes que você entrega.</li>
<li><code class="i">return</code> devolve um resultado, para você guardar em uma variável.</li>
<li>Sem <code class="i">return</code>, a função devolve <code class="i">None</code>: um frasco de poção vazio.</li>
</ul>
<h3>Ingredientes padrão</h3>
<p>Parâmetros podem ter um valor padrão. Se você não passar, o Python usa o padrão.</p>
@@ex2@@
<div class="sysmsg">[SISTEMA] Dica: <b>print</b> mostra algo na tela. <b>return</b> devolve um valor para o código. Não são a mesma coisa!</div>`,
    quest: `<ol>
<li>Escreva uma função <code class="i">heal(hp, amount=20)</code>.</li>
<li>Ela precisa <strong>retornar</strong> o novo hp (<code class="i">hp + amount</code>).</li>
<li>Teste: <code class="i">heal(10)</code> deve dar <code class="i">30</code>, <code class="i">heal(5, 50)</code> deve dar <code class="i">55</code>.</li>
</ol>`,
    hint: `def heal(hp, amount=20):  e na linha seguinte, indentado:  return hp + amount`,
    starter: `# Escreva a função heal aqui


print(heal(10))      # deve mostrar 30
print(heal(5, 50))   # deve mostrar 55
`,
    words: [["to seal", "selar, fechar bem (aqui: guardar um feitiço)"], ["ingredient", "ingrediente: uma das coisas que você precisa para fazer algo"], ["embroidered", "bordado com linha"]]
  },
  match: {
    tab: "match / case", arc: "A Capital", title: "O Livro do Guardião",
    story: `
<p>A capital do reino tem um portão enorme. Um cavaleiro cansado confere a classe de cada viajante e entrega uma arma. Ele usa uma corrente enorme de <code class="i">if / elif / elif / elif</code> e parece que vai chorar.</p>
<div class="sysmsg">[SISTEMA] Nova habilidade desbloqueada: <b>MATCH / CASE</b> — compara um valor com vários padrões.</div>
@@ex1@@
<ul>
<li><code class="i">match</code> recebe o valor que você quer conferir.</li>
<li>Cada <code class="i">case</code> é um valor possível.</li>
<li><code class="i">case "a" | "b":</code> quer dizer "a <strong>ou</strong> b".</li>
<li><code class="i">case _:</code> pega todo o resto, como o <code class="i">else</code>.</li>
</ul>
<p>Aqui está a mesma lógica com <code class="i">if/elif</code>. As duas funcionam, mas o <code class="i">match</code> é mais fácil de ler quando você confere um valor muitas vezes.</p>
@@ex2@@
<p>O cavaleiro derrama uma única lágrima de gratidão. <span class="dialogue">"Obrigado, forasteiro. Agora, por favor, automatize meu trabalho."</span></p>`,
    quest: `<ol>
<li>Complete a função <code class="i">weapon_for(job)</code> usando <code class="i">match</code>.</li>
<li>Retorne <code class="i">"sword"</code> para <code class="i">"warrior"</code> ou <code class="i">"knight"</code>, <code class="i">"staff"</code> para <code class="i">"mage"</code>, <code class="i">"bow"</code> para <code class="i">"archer"</code>.</li>
<li>Retorne <code class="i">"fists"</code> para qualquer outra coisa.</li>
</ol>`,
    hint: `Dentro da função: match job:  depois  case "warrior" | "knight":  return "sword"  … e termine com  case _:  return "fists"`,
    starter: `def weapon_for(job):
    # use match / case aqui
    pass


print(weapon_for("knight"))   # sword
print(weapon_for("mage"))     # staff
print(weapon_for("bard"))     # fists
`,
    words: [["ledger", "livro de registros"], ["to hand (someone) something", "entregar algo na mão de alguém"], ["to shed a tear", "derramar uma lágrima, chorar um pouco"]]
  },
  dict: {
    tab: "dicionários", arc: "O Despertar", title: "Janela de Status, Abra!",
    story: `
<p>Todo herói isekai uma hora grita as palavras sagradas. Você levanta a mão.</p>
<p><span class="dialogue">"STATUS!"</span></p>
<div class="sysmsg">[SISTEMA] Sua janela de status é um <b>dicionário</b>: cada valor tem um nome (uma <b>chave</b>).</div>
@@ex1@@
<ul>
<li>Um dicionário usa <code class="i">{ chave: valor }</code>.</li>
<li><code class="i">status["hp"]</code> lê um valor. <code class="i">status["hp"] = 90</code> muda o valor.</li>
<li>Atribuir uma chave nova adiciona ela: <code class="i">status["title"] = "Hero"</code>.</li>
<li><code class="i">status.get("mp", 0)</code> lê com segurança: se a chave não existir, você recebe <code class="i">0</code> em vez de um erro.</li>
</ul>
<h3>Percorrendo a janela</h3>
@@ex2@@`,
    quest: `<ol>
<li>Crie um dicionário <code class="i">status</code> com <code class="i">"name": "Lydson"</code>, <code class="i">"level": 1</code> e <code class="i">"hp": 100</code>.</li>
<li>Suba de nível! Some 1 em <code class="i">status["level"]</code>.</li>
<li>Faça um loop com <code class="i">.items()</code> e mostre cada linha como <code class="i">chave: valor</code> (por exemplo <code class="i">level: 2</code>).</li>
</ol>`,
    hint: `status["level"] += 1   depois   for key, value in status.items(): print(f"{key}: {value}")`,
    starter: `# Crie o dicionário status


# Suba de nível


# Mostre a janela de status
`,
    words: [["to raise your hand", "levantar a mão"], ["sacred", "sagrado, muito especial"], ["to level up", "subir de nível (games)"]]
  },
  boss: {
    tab: "chefe final", arc: "Arco Final", title: "O Rei Slime",
    story: `
<p>O chão treme. Um slime do tamanho de um castelo aparece, usando uma coroinha de ouro.</p>
<p><span class="dialogue">"Então você é o forasteiro que sabe Python,"</span> ele borbulha. <span class="dialogue">"Vamos ver se você lembra de TUDO."</span></p>
<div class="sysmsg">[SISTEMA] Missão final: combine <b>funções</b>, <b>loops</b>, <b>if</b> e <b>return</b>.</div>
<p>Você lembra de um truque útil: <code class="i">enumerate()</code> te dá a posição e o item ao mesmo tempo.</p>
@@ex1@@
<p>E um <code class="i">return</code> dentro de um loop para a função inteira na hora. Perfeito para acabar com um chefe.</p>
@@ex2@@`,
    quest: `<ol>
<li>Complete <code class="i">fight(boss_hp, damages)</code>. <code class="i">damages</code> é uma lista de números, um por turno.</li>
<li>Subtraia cada dano de <code class="i">boss_hp</code>, em ordem.</li>
<li>Quando <code class="i">boss_hp</code> chegar a 0 ou menos, <strong>retorne o número do turno</strong> (o primeiro turno é 1).</li>
<li>Se o chefe sobreviver a todos os turnos, retorne <code class="i">-1</code>.</li>
</ol>`,
    hint: `for turn, dmg in enumerate(damages, start=1): boss_hp -= dmg; if boss_hp <= 0: return turn. Depois do loop: return -1.`,
    starter: `def fight(boss_hp, damages):
    # Seu feitiço final
    pass


print(fight(50, [20, 20, 20]))   # 3
print(fight(100, [10, 10]))      # -1
print(fight(10, [50, 1]))        # 1
`,
    words: [["to gurgle", "borbulhar, fazer um som de líquido"], ["to survive", "sobreviver, continuar vivo"], ["otherworlder", "alguém de outro mundo (gíria de isekai)"]]
  }
};
