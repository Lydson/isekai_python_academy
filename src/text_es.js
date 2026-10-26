TEXT.es = {
  print: {
    tab: "print()", arc: "La Invocación", title: "Hola, Otro Mundo",
    story: `
<p>Estabas cruzando la calle, mirando el celular, cuando escuchaste una bocina muy fuerte. Después, todo se volvió blanco.</p>
<p>Estás flotando en un vacío blanco sin fin. Una diosa está sentada en una nube, comiendo un sándwich. Parece sorprendida de verte.</p>
<p><span class="dialogue">"¡Oh! Otro más. Perdón por lo del camión. Déjame darte una habilidad antes de enviarte a mi mundo."</span></p>
<div class="sysmsg">[SISTEMA] Bienvenido, <b>Lydson</b>. Has recibido la habilidad única: <b>PYTHON</b>.<br>[SISTEMA] Primera técnica desbloqueada: <b>print()</b> — hace que el Sistema diga algo.</div>
<p>Todos los hechizos de este mundo se escriben en Python. El hechizo más simple es <code class="i">print()</code>. Todo lo que pongas dentro de los paréntesis aparece en la terminal.</p>
@@ex1@@
<ul>
<li>El texto tiene que ir entre comillas: <code class="i">"así"</code> o <code class="i">'así'</code>. En Python, el texto se llama <strong>string</strong>.</li>
<li>Los números no necesitan comillas.</li>
<li>Las comas te dejan mostrar varias cosas a la vez. Python pone un espacio entre ellas.</li>
<li>Una línea que empieza con <code class="i">#</code> es un <strong>comentario</strong>. Python lo ignora. Es una nota para humanos.</li>
</ul>
<h3>Las comillas lo cambian todo</h3>
@@ex2@@
<p>Con comillas, Python muestra el texto exactamente como lo escribiste. Sin comillas, Python primero lo <em>calcula</em>.</p>`,
    quest: `<ol>
<li>Muestra <code class="i">Hello, System!</code></li>
<li>Muestra <code class="i">I am ready.</code> (¡con el punto!)</li>
<li>Muestra el resultado de <code class="i">6 * 7</code>. Deja que Python haga la cuenta: ¡no escribas 42 tú mismo!</li>
</ol>`,
    hint: `Tres líneas: print("Hello, System!") luego print("I am ready.") luego print(6 * 7) (sin comillas en la última).`,
    starter: `# Tu primer hechizo. Escribe tres líneas con print() abajo.

`,
    words: [["void", "un espacio completamente vacío"], ["to be summoned", "ser llamado a un lugar (a menudo por magia)"], ["horn", "bocina: el sonido fuerte de un auto o camión"]]
  },
  vars: {
    tab: "variables", arc: "Creación de Personaje", title: "Nombra a Tu Héroe",
    story: `
<p>La diosa termina su sándwich y abre un menú gigante y brillante.</p>
<p><span class="dialogue">"¡Hora de crear tu personaje! El Sistema recuerda las cosas usando <strong>variables</strong>. Piensa en una variable como una caja con una etiqueta."</span></p>
@@ex1@@
<ul>
<li><code class="i">name = "Lydson"</code> significa "pon el texto Lydson en una caja llamada name". El signo <code class="i">=</code> <strong>guarda</strong> un valor; no significa "igual" como en matemáticas.</li>
<li>Hay cuatro tipos básicos de valores: <strong>str</strong> (texto), <strong>int</strong> (número entero), <strong>float</strong> (número decimal) y <strong>bool</strong> (True o False).</li>
<li><code class="i">type(x)</code> te dice el tipo de un valor.</li>
<li>Los nombres de variables usan minúsculas y guiones bajos: <code class="i">hero_name</code>, no <code class="i">Hero Name</code>.</li>
</ul>
<h3>Cambiar una variable y f-strings</h3>
<p>Una variable puede cambiar. Y un <strong>f-string</strong> (un string con <code class="i">f</code> antes de las comillas) te deja poner variables dentro del texto usando <code class="i">{ }</code>.</p>
@@ex2@@`,
    quest: `<ol>
<li>Completa <code class="i">hero_name</code> con tu nombre (entre las comillas).</li>
<li>Pon <code class="i">"mage"</code> en <code class="i">hero_class</code> y <code class="i">100</code> en <code class="i">hp</code>.</li>
<li>Usa un f-string para mostrar: <code class="i">Lydson the mage has 100 HP.</code> (con tu hero_name).</li>
</ol>`,
    hint: `print(f"{hero_name} the {hero_class} has {hp} HP.")`,
    starter: `# Crea tu personaje
hero_name = ""     # tu nombre entre las comillas
hero_class = ""    # tu clase: mage
hp = 0             # cámbialo a 100

# Muestra la ficha de tu personaje con un f-string
`,
    words: [["to store", "guardar algo para usarlo después"], ["label", "etiqueta: un papelito con un nombre"], ["glowing", "brillante, que da una luz suave"]]
  },
  math: {
    tab: "cuentas y tipos", arc: "La Primera Aldea", title: "La Cuenta del Posadero",
    story: `
<p>Caes de cara en una pequeña aldea. Tienes 50 monedas de oro y ni idea de cómo funciona el dinero aquí. El posadero sonríe un poco demasiado.</p>
<div class="sysmsg">[SISTEMA] Habilidad desbloqueada: <b>ARITMÉTICA</b> — que nunca más te engañen.</div>
@@ex1@@
<ul>
<li><code class="i">/</code> siempre da un decimal (float). <code class="i">//</code> da un número entero y tira el resto.</li>
<li><code class="i">%</code> (módulo) da el <strong>resto</strong> de la división. <code class="i">10 % 3</code> es 1 porque 10 = 3 + 3 + 3 + <strong>1</strong>.</li>
<li><code class="i">**</code> es potencia: <code class="i">2 ** 3</code> = 2 × 2 × 2.</li>
<li>Atajos: <code class="i">gold -= 5</code> es lo mismo que <code class="i">gold = gold - 5</code>. Igual con <code class="i">+=</code> y <code class="i">*=</code>.</li>
</ul>
<h3>La trampa de los números en texto</h3>
<p>El posadero escribe tu cuenta en papel: <code class="i">"5"</code>. ¡Eso es un string, no un número!</p>
@@ex2@@
<p><code class="i">int()</code> convierte texto en número entero, <code class="i">float()</code> en decimal, y <code class="i">str()</code> convierte un número en texto.</p>`,
    quest: `<ol>
<li>Una noche en la posada cuesta <code class="i">price = 7</code> monedas. Te quedas <code class="i">nights = 3</code> noches. Tienes <code class="i">gold = 50</code>.</li>
<li>Crea <code class="i">cost</code> (price × nights) y <code class="i">change</code> (el oro que te queda). Usa las variables, no los números.</li>
<li>Crea <code class="i">max_nights</code>: cuántas noches completas pagan 50 monedas. Usa <code class="i">//</code>.</li>
<li>Muestra: <code class="i">You pay 21 gold and keep 29.</code> usando un f-string.</li>
</ol>`,
    hint: `cost = price * nights, change = gold - cost, max_nights = gold // price, luego print(f"You pay {cost} gold and keep {change}.")`,
    starter: `price = 7
nights = 3
gold = 50

# Calcula cost, change y max_nights


# Muestra la cuenta
`,
    words: [["bill", "cuenta: el papel que dice cuánto debes pagar"], ["change", "vuelto/cambio: el dinero que te devuelven al pagar"], ["to cheat (someone)", "engañar a alguien para sacar ventaja"]]
  },
  if: {
    tab: "if / elif / else", arc: "La Encrucijada", title: "La Bifurcación del Camino",
    story: `
<p>Sales de la aldea y llegas a una bifurcación del camino. Un cartel de madera dice: <em>"Izquierda: monstruos. Derecha: más monstruos."</em> Genial.</p>
<p>Ya conoces esta magia, pero el Sistema te hace repasarla igual.</p>
<div class="sysmsg">[SISTEMA] Repaso de habilidad: <b>IF / ELIF / ELSE</b> — tomar decisiones.</div>
@@ex1@@
<ul>
<li>Python revisa de arriba hacia abajo y ejecuta solo el <strong>primer</strong> bloque que sea True.</li>
<li>Comparaciones: <code class="i">==</code> (igual), <code class="i">!=</code> (distinto), <code class="i">&gt;</code>, <code class="i">&lt;</code>, <code class="i">&gt;=</code>, <code class="i">&lt;=</code>.</li>
<li>No los confundas: <code class="i">=</code> guarda un valor, <code class="i">==</code> compara dos valores.</li>
</ul>
<h3>and, or, not</h3>
@@ex2@@
<ul>
<li><code class="i">and</code>: los dos deben ser True. <code class="i">or</code>: al menos uno debe ser True. <code class="i">not</code>: invierte True y False.</li>
</ul>`,
    quest: `<ol>
<li>Mantén <code class="i">hp = 35</code> en la primera línea.</li>
<li>Crea una variable <code class="i">action</code>: <code class="i">"attack"</code> si hp es mayor que 70, <code class="i">"defend"</code> si hp es mayor que 30, si no <code class="i">"run"</code>.</li>
<li>Muestra la acción. ¡El Sistema probará tu código con distintos valores de hp!</li>
</ol>`,
    hint: `if hp > 70: action = "attack"  /  elif hp > 30: action = "defend"  /  else: action = "run". Cada línea de action va con sangría debajo de su condición.`,
    starter: `hp = 35

# Decide la acción con if / elif / else


print("Action:", action)
`,
    words: [["fork in the road", "bifurcación: lugar donde un camino se divide en dos"], ["to review", "repasar, estudiar algo otra vez"], ["to flip", "invertir, dar vuelta al lado opuesto"]]
  },
  for: {
    tab: "bucles for", arc: "La Primera Batalla", title: "La Horda de Goblins",
    story: `
<p>Tomas el camino de la izquierda y entras en una pradera que huele a lluvia y a malas decisiones. De pronto, la ventana azul parpadea en rojo.</p>
<div class="sysmsg">[SISTEMA] Alerta: monstruos hostiles acercándose.</div>
<p>Un goblin salta de los arbustos. Luego otro. Luego <em>cinco más</em>.</p>
<p><span class="dialogue">"¡¿Tengo que escribir <code class="i">attack()</code> siete veces?!"</span> gritas.</p>
<div class="sysmsg">[SISTEMA] Nueva habilidad desbloqueada: <b>BUCLE FOR</b> — repite un hechizo una vez por cada elemento de un grupo.</div>
<p>Los goblins están en una <strong>lista</strong>: valores entre <code class="i">[ ]</code>, separados por comas.</p>
@@ex1@@
<p>El bucle toma cada goblin de la lista, uno por uno, lo pone en la variable <code class="i">goblin</code> y ejecuta el código con sangría. Siete goblins, un hechizo.</p>
<h3>La técnica de range()</h3>
<p>Cuando solo necesitas repetir algo cierta cantidad de veces, usa <code class="i">range()</code>.</p>
@@ex2@@
<ul>
<li><code class="i">range(3)</code> da <code class="i">0, 1, 2</code>. <strong>Se detiene antes</strong> del número. Todo héroe isekai lo olvida al menos una vez.</li>
<li><code class="i">range(1, 4)</code> da <code class="i">1, 2, 3</code> (inicio, fin).</li>
<li>El código que se repite debe tener <strong>sangría</strong> (4 espacios).</li>
</ul>`,
    quest: `<ol>
<li>La lista <code class="i">goblins</code> y el contador <code class="i">defeated = 0</code> ya están listos.</li>
<li>Usa un bucle <code class="i">for</code> para mostrar <code class="i">You defeat Gob!</code> (y lo mismo con los demás).</li>
<li>Dentro del bucle, suma 1 a <code class="i">defeated</code> cada vez.</li>
</ol>`,
    hint: `for goblin in goblins:  luego, con sangría:  print(f"You defeat {goblin}!")  y  defeated += 1`,
    starter: `goblins = ["Gob", "Grub", "Snot"]
defeated = 0

# Escribe tu bucle for aquí

print("Goblins defeated:", defeated)
`,
    words: [["horde", "horda: un grupo muy grande (normalmente de enemigos)"], ["to defeat", "derrotar, vencer a alguien"], ["meadow", "pradera: campo de pasto y flores"]]
  },
  list: {
    tab: "listas", arc: "El Mercader", title: "La Bolsa Sin Fondo",
    story: `
<p>Un mercader sospechoso te vende una bolsa mágica. <span class="dialogue">"¡Guarda cualquier cosa, en orden, para siempre! ¡Solo 3 monedas!"</span> Es una <strong>lista</strong> de Python.</p>
@@ex1@@
<ul>
<li><code class="i">.append(x)</code> pone un objeto al final.</li>
<li><code class="i">.remove(x)</code> quita el primer objeto igual a x.</li>
<li><code class="i">.pop()</code> saca el último objeto y te lo da.</li>
<li><code class="i">len(bag)</code> cuenta los objetos. <code class="i">x in bag</code> revisa si está.</li>
<li><code class="i">bag[0]</code> es el primer objeto. <code class="i">bag[-1]</code> es el último.</li>
</ul>
<h3>Rebanadas y el hechizo de lista</h3>
@@ex2@@
<p>La última línea es una <strong>list comprehension</strong>: un bucle for doblado en una sola línea. Magia avanzada, pero muy común en código real.</p>`,
    quest: `<ol>
<li>Empieza con <code class="i">inventory = ["sword", "potion"]</code>.</li>
<li>Agrega <code class="i">"map"</code> al final. Quita <code class="i">"potion"</code> (te la bebiste).</li>
<li>Crea <code class="i">item_count</code> con la cantidad de objetos, usando <code class="i">len()</code>.</li>
</ol>`,
    hint: `inventory.append("map"), inventory.remove("potion"), item_count = len(inventory)`,
    starter: `inventory = ["sword", "potion"]

# Tus hechizos de bolsa aquí

print(inventory)
`,
    words: [["bottomless", "sin fondo; nunca se llena"], ["suspicious", "sospechoso, parece deshonesto o raro"], ["to drink (drank, drunk)", "beber; verbo irregular: el pasado es 'drank'"]]
  },
  while: {
    tab: "bucles while", arc: "La Mazmorra", title: "El Pasillo Sin Fin",
    story: `
<p>Entras en tu primera mazmorra. El pasillo sigue y sigue. No sabes cuántas salas hay, así que un bucle <code class="i">for</code> sobre una lista no ayuda.</p>
<div class="sysmsg">[SISTEMA] Nueva habilidad desbloqueada: <b>BUCLE WHILE</b> — repite <b>mientras</b> una condición sea True.</div>
@@ex1@@
<p>Un bucle <code class="i">while</code> revisa su condición antes de cada repetición. Cuando la condición se vuelve <code class="i">False</code>, el bucle se detiene.</p>
<div class="sysmsg">[SISTEMA] ⚠ Alerta de maldición: si la condición nunca se vuelve False, quedas atrapado en un <b>bucle infinito</b>. En este mundo, el Sistema te rescata después de 200.000 pasos.</div>
<h3>break y continue</h3>
<ul>
<li><code class="i">break</code> sale del bucle de inmediato (un teletransporte de emergencia).</li>
<li><code class="i">continue</code> salta el resto de esta vuelta y pasa a la siguiente.</li>
</ul>
@@ex2@@`,
    quest: `<ol>
<li>Empieza con <code class="i">hp = 100</code> (el HP del jefe) y <code class="i">turns = 0</code>.</li>
<li>Usa un bucle <code class="i">while</code>: mientras <code class="i">hp &gt; 0</code>, golpea al jefe con 30 de daño y suma 1 a <code class="i">turns</code>.</li>
<li>Muestra el HP del jefe después de cada golpe. Al final, <code class="i">turns</code> debe ser 4.</li>
</ol>`,
    hint: `while hp > 0:   luego, con sangría:   hp -= 30   turns += 1   print("Boss HP:", hp)`,
    starter: `hp = 100
turns = 0

# Escribe tu bucle while aquí

print("Boss defeated in", turns, "turns!")
`,
    words: [["corridor", "pasillo: un paso largo y estrecho dentro de un edificio"], ["to be trapped", "estar atrapado, sin poder escapar"], ["to skip", "saltarse un paso e ir al siguiente"]]
  },
  def: {
    tab: "funciones", arc: "El Maestro", title: "El Grimorio de Def-sensei",
    story: `
<p>En el siguiente pueblo, un mago anciano te mira entrenar. Su túnica tiene la palabra <code class="i">def</code> bordada en la espalda.</p>
<p><span class="dialogue">"Muchacho. ¿Por qué gritas el conjuro completo de la bola de fuego cada vez? Séllalo en una <strong>función</strong>. Así solo dices su nombre."</span></p>
@@ex1@@
<p>Def-sensei te golpea la frente con su bastón. <span class="dialogue">"Recuerda las cuatro partes."</span></p>
<ul>
<li><code class="i">def</code> crea el hechizo. El nombre sigue las mismas reglas que las variables.</li>
<li><code class="i">target</code> y <code class="i">power</code> son <strong>parámetros</strong>: los ingredientes que le pasas.</li>
<li><code class="i">return</code> devuelve un resultado, para que lo guardes en una variable.</li>
<li>Sin <code class="i">return</code>, la función devuelve <code class="i">None</code>: un frasco de poción vacío.</li>
</ul>
<h3>Ingredientes por defecto</h3>
<p>Los parámetros pueden tener un valor por defecto. Si no lo pasas, Python usa ese valor.</p>
@@ex2@@
<div class="sysmsg">[SISTEMA] Consejo: <b>print</b> muestra algo en la pantalla. <b>return</b> devuelve un valor al código. ¡No son lo mismo!</div>`,
    quest: `<ol>
<li>Escribe una función <code class="i">heal(hp, amount=20)</code>.</li>
<li>Debe <strong>devolver</strong> el nuevo hp (<code class="i">hp + amount</code>).</li>
<li>Pruébala: <code class="i">heal(10)</code> debe dar <code class="i">30</code>, <code class="i">heal(5, 50)</code> debe dar <code class="i">55</code>.</li>
</ol>`,
    hint: `def heal(hp, amount=20):  y en la línea siguiente, con sangría:  return hp + amount`,
    starter: `# Escribe la función heal aquí


print(heal(10))      # debe mostrar 30
print(heal(5, 50))   # debe mostrar 55
`,
    words: [["to seal", "sellar, cerrar bien (aquí: guardar un hechizo)"], ["ingredient", "ingrediente: una de las cosas que necesitas para hacer algo"], ["embroidered", "bordado con hilo"]]
  },
  match: {
    tab: "match / case", arc: "La Capital", title: "El Libro del Guardián",
    story: `
<p>La capital del reino tiene una puerta enorme. Un caballero cansado revisa la clase de cada viajero y le entrega un arma. Usa una cadena larguísima de <code class="i">if / elif / elif / elif</code> y parece que va a llorar.</p>
<div class="sysmsg">[SISTEMA] Nueva habilidad desbloqueada: <b>MATCH / CASE</b> — compara un valor con muchos patrones.</div>
@@ex1@@
<ul>
<li><code class="i">match</code> recibe el valor que quieres revisar.</li>
<li>Cada <code class="i">case</code> es un valor posible.</li>
<li><code class="i">case "a" | "b":</code> significa "a <strong>o</strong> b".</li>
<li><code class="i">case _:</code> atrapa todo lo demás, como <code class="i">else</code>.</li>
</ul>
<p>Aquí está la misma lógica con <code class="i">if/elif</code>. Las dos funcionan, pero <code class="i">match</code> se lee mejor cuando revisas un valor muchas veces.</p>
@@ex2@@
<p>El caballero derrama una sola lágrima de gratitud. <span class="dialogue">"Gracias, forastero. Ahora, por favor, automatiza mi trabajo."</span></p>`,
    quest: `<ol>
<li>Completa la función <code class="i">weapon_for(job)</code> usando <code class="i">match</code>.</li>
<li>Devuelve <code class="i">"sword"</code> para <code class="i">"warrior"</code> o <code class="i">"knight"</code>, <code class="i">"staff"</code> para <code class="i">"mage"</code>, <code class="i">"bow"</code> para <code class="i">"archer"</code>.</li>
<li>Devuelve <code class="i">"fists"</code> para cualquier otra cosa.</li>
</ol>`,
    hint: `Dentro de la función: match job:  luego  case "warrior" | "knight":  return "sword"  … y termina con  case _:  return "fists"`,
    starter: `def weapon_for(job):
    # usa match / case aquí
    pass


print(weapon_for("knight"))   # sword
print(weapon_for("mage"))     # staff
print(weapon_for("bard"))     # fists
`,
    words: [["ledger", "libro de registros"], ["to hand (someone) something", "entregarle algo en la mano a alguien"], ["to shed a tear", "derramar una lágrima, llorar un poco"]]
  },
  dict: {
    tab: "diccionarios", arc: "El Despertar", title: "¡Ventana de Estado, Ábrete!",
    story: `
<p>Todo héroe isekai tarde o temprano grita las palabras sagradas. Levantas la mano.</p>
<p><span class="dialogue">"¡STATUS!"</span></p>
<div class="sysmsg">[SISTEMA] Tu ventana de estado es un <b>diccionario</b>: cada valor tiene un nombre (una <b>clave</b>).</div>
@@ex1@@
<ul>
<li>Un diccionario usa <code class="i">{ clave: valor }</code>.</li>
<li><code class="i">status["hp"]</code> lee un valor. <code class="i">status["hp"] = 90</code> lo cambia.</li>
<li>Asignar una clave nueva la agrega: <code class="i">status["title"] = "Hero"</code>.</li>
<li><code class="i">status.get("mp", 0)</code> lee con seguridad: si la clave no existe, recibes <code class="i">0</code> en vez de un error.</li>
</ul>
<h3>Recorrer la ventana</h3>
@@ex2@@`,
    quest: `<ol>
<li>Crea un diccionario <code class="i">status</code> con <code class="i">"name": "Lydson"</code>, <code class="i">"level": 1</code> y <code class="i">"hp": 100</code>.</li>
<li>¡Sube de nivel! Suma 1 a <code class="i">status["level"]</code>.</li>
<li>Recórrelo con <code class="i">.items()</code> y muestra cada línea como <code class="i">clave: valor</code> (por ejemplo <code class="i">level: 2</code>).</li>
</ol>`,
    hint: `status["level"] += 1   luego   for key, value in status.items(): print(f"{key}: {value}")`,
    starter: `# Crea el diccionario status


# Sube de nivel


# Muestra la ventana de estado
`,
    words: [["to raise your hand", "levantar la mano"], ["sacred", "sagrado, muy especial"], ["to level up", "subir de nivel (videojuegos)"]]
  },
  boss: {
    tab: "jefe final", arc: "Arco Final", title: "El Rey Slime",
    story: `
<p>El suelo tiembla. Aparece un slime del tamaño de un castillo, con una coronita de oro.</p>
<p><span class="dialogue">"Así que tú eres el forastero que sabe Python,"</span> burbujea. <span class="dialogue">"Veamos si recuerdas TODO."</span></p>
<div class="sysmsg">[SISTEMA] Misión final: combina <b>funciones</b>, <b>bucles</b>, <b>if</b> y <b>return</b>.</div>
<p>Recuerdas un truco útil: <code class="i">enumerate()</code> te da la posición y el elemento al mismo tiempo.</p>
@@ex1@@
<p>Y un <code class="i">return</code> dentro de un bucle detiene toda la función de inmediato. Perfecto para acabar con un jefe.</p>
@@ex2@@`,
    quest: `<ol>
<li>Completa <code class="i">fight(boss_hp, damages)</code>. <code class="i">damages</code> es una lista de números, uno por turno.</li>
<li>Resta cada daño de <code class="i">boss_hp</code>, en orden.</li>
<li>Cuando <code class="i">boss_hp</code> llegue a 0 o menos, <strong>devuelve el número de turno</strong> (el primer turno es 1).</li>
<li>Si el jefe sobrevive a todos los turnos, devuelve <code class="i">-1</code>.</li>
</ol>`,
    hint: `for turn, dmg in enumerate(damages, start=1): boss_hp -= dmg; if boss_hp <= 0: return turn. Después del bucle: return -1.`,
    starter: `def fight(boss_hp, damages):
    # Tu hechizo final
    pass


print(fight(50, [20, 20, 20]))   # 3
print(fight(100, [10, 10]))      # -1
print(fight(10, [50, 1]))        # 1
`,
    words: [["to gurgle", "burbujear, hacer un sonido de líquido"], ["to survive", "sobrevivir, seguir vivo"], ["otherworlder", "alguien de otro mundo (jerga isekai)"]]
  }
};
