// Language-independent part of every chapter: example code, quest checks and XP.
// Quest checks run in Python after the hero's code. OUT = printed text, SRC = source code,
// T(en, es, pt) picks the message in the current language.
const CODE = {
  print: {
    xp: 50,
    examples: {
      ex1: `print("Hello, other world!")
print("My name is Lydson.")

# This is a comment. Python ignores it.
print("Level", 1)
print("HP:", 100, "MP:", 50)`,
      ex2: `print("2 + 2")    # shows the text: 2 + 2
print(2 + 2)      # calculates: 4`
    },
    test: `assert "Hello, System!" in OUT, T("I didn't see 'Hello, System!' in the output. Check the comma, the capital S and the '!'.", "No vi 'Hello, System!' en la salida. Revisa la coma, la S mayúscula y el '!'.", "Não vi 'Hello, System!' na saída. Confira a vírgula, o S maiúsculo e o '!'.")
assert "I am ready." in OUT, T("I didn't see 'I am ready.' in the output. Don't forget the period (.) at the end!", "No vi 'I am ready.' en la salida. ¡No olvides el punto (.) al final!", "Não vi 'I am ready.' na saída. Não esqueça o ponto final (.)!")
assert "42" in OUT, T("I didn't see the result of 6 * 7 in the output.", "No vi el resultado de 6 * 7 en la salida.", "Não vi o resultado de 6 * 7 na saída.")
assert "*" in SRC and "42" not in SRC, T("Let Python do the math: write print(6 * 7), not 42.", "Deja que Python calcule: escribe print(6 * 7), no 42.", "Deixe o Python calcular: escreva print(6 * 7), não 42.")`
  },
  vars: {
    xp: 75,
    examples: {
      ex1: `name = "Lydson"
level = 1
gold = 10.5
is_hero = True

print(name, level, gold, is_hero)
print(type(name))
print(type(level))`,
      ex2: `name = "Lydson"
gold = 10
gold = gold + 5       # the box now holds 15

print(f"{name} has {gold} gold.")`
    },
    test: `assert isinstance(hero_name, str) and hero_name.strip(), T("hero_name is empty. Put your name inside the quotes, like 'Lydson'.", "hero_name está vacío. Pon tu nombre entre las comillas, como 'Lydson'.", "hero_name está vazio. Coloque seu nome entre as aspas, como 'Lydson'.")
assert hero_class == "mage", T(f"hero_class should be 'mage', but it is {hero_class!r}.", f"hero_class debería ser 'mage', pero es {hero_class!r}.", f"hero_class deveria ser 'mage', mas é {hero_class!r}.")
assert hp == 100, T(f"hp should be 100, but it is {hp!r}.", f"hp debería ser 100, pero es {hp!r}.", f"hp deveria ser 100, mas é {hp!r}.")
want = f"{hero_name} the mage has 100 HP."
assert want in OUT, T(f"I expected to see '{want}' in the output.", f"Esperaba ver '{want}' en la salida.", f"Eu esperava ver '{want}' na saída.")
assert 'f"' in SRC or "f'" in SRC, T("Use an f-string: put the letter f before the quotes.", "Usa un f-string: pon la letra f antes de las comillas.", "Use uma f-string: coloque a letra f antes das aspas.")`
  },
  math: {
    xp: 75,
    examples: {
      ex1: `print(10 + 3)    # 13
print(10 - 3)    # 7
print(10 * 3)    # 30
print(10 / 3)    # 3.333...
print(10 // 3)   # 3  (whole division)
print(10 % 3)    # 1  (the remainder)
print(2 ** 3)    # 8  (power)`,
      ex2: `price = "5"
print(price + price)             # 55  (text glued together!)
print(int(price) + int(price))   # 10  (real math)

age = 25
print("Age: " + str(age))`
    },
    test: `assert cost == 21, T(f"cost should be 21 (7 x 3), but it is {cost!r}.", f"cost debería ser 21 (7 x 3), pero es {cost!r}.", f"cost deveria ser 21 (7 x 3), mas é {cost!r}.")
assert "price * nights" in SRC or "nights * price" in SRC, T("Calculate cost with the variables: price * nights.", "Calcula cost con las variables: price * nights.", "Calcule cost com as variáveis: price * nights.")
assert change == 29, T(f"change should be 29 (50 - 21), but it is {change!r}.", f"change debería ser 29 (50 - 21), pero es {change!r}.", f"change deveria ser 29 (50 - 21), mas é {change!r}.")
assert max_nights == 7, T(f"max_nights should be 7 (50 // 7), but it is {max_nights!r}.", f"max_nights debería ser 7 (50 // 7), pero es {max_nights!r}.", f"max_nights deveria ser 7 (50 // 7), mas é {max_nights!r}.")
assert "//" in SRC, T("Use // to calculate max_nights.", "Usa // para calcular max_nights.", "Use // para calcular max_nights.")
assert "You pay 21 gold and keep 29." in OUT, T("I didn't see 'You pay 21 gold and keep 29.' in the output.", "No vi 'You pay 21 gold and keep 29.' en la salida.", "Não vi 'You pay 21 gold and keep 29.' na saída.")`
  },
  if: {
    xp: 100,
    examples: {
      ex1: `hp = 45

if hp > 70:
    print("You feel strong. Attack!")
elif hp > 30:
    print("You are hurt. Defend.")
else:
    print("RUN!")`,
      ex2: `gold = 30
has_sword = True

if gold >= 20 and has_sword:
    print("You can buy armor and still fight.")

if gold < 10 or not has_sword:
    print("You are not ready.")`
    },
    test: `assert "elif" in SRC and "else" in SRC, T("Use if, elif and else for this quest.", "Usa if, elif y else en esta misión.", "Use if, elif e else nesta missão.")
lines = SRC.splitlines()
pos = [i for i, l in enumerate(lines) if l.replace(" ", "").startswith("hp=")]
assert pos, T("Keep the line hp = 35 at the top.", "Mantén la línea hp = 35 al principio.", "Mantenha a linha hp = 35 no começo.")
for val, want in [(35, "defend"), (80, "attack"), (71, "attack"), (70, "defend"), (31, "defend"), (30, "run"), (5, "run")]:
    lines[pos[0]] = f"hp = {val}"
    ns2 = {"__g": __g, "print": lambda *a, **k: None}
    exec(chr(10).join(lines), ns2)
    got = ns2.get("action")
    assert got == want, T(f"The System tested hp = {val}: action should be '{want}', but it is {got!r}.", f"El Sistema probó hp = {val}: action debería ser '{want}', pero es {got!r}.", f"O Sistema testou hp = {val}: action deveria ser '{want}', mas é {got!r}.")`
  },
  for: {
    xp: 100,
    examples: {
      ex1: `goblins = ["Gob1", "Gob2", "Gob3", "Gob4", "Gob5", "Gob6", "Gob7"]

for goblin in goblins:
    print(f"You slash {goblin}!")

print("The horde is defeated.")`,
      ex2: `for i in range(3):
    print("Training swing number", i)

for day in range(1, 4):
    print(f"Day {day} in the new world")`
    },
    test: `assert "for " in SRC, T("The System requires a for loop for this quest.", "El Sistema exige un bucle for en esta misión.", "O Sistema exige um loop for nesta missão.")
for g in ["Gob", "Grub", "Snot"]:
    assert f"You defeat {g}!" in OUT, T(f"I didn't see 'You defeat {g}!' in the output. Check the exact text.", f"No vi 'You defeat {g}!' en la salida. Revisa el texto exacto.", f"Não vi 'You defeat {g}!' na saída. Confira o texto exato.")
assert defeated == 3, T(f"defeated should be 3, but it is {defeated}. Add 1 inside the loop.", f"defeated debería ser 3, pero es {defeated}. Suma 1 dentro del bucle.", f"defeated deveria ser 3, mas é {defeated}. Some 1 dentro do loop.")`
  },
  list: {
    xp: 125,
    examples: {
      ex1: `bag = ["sword", "potion", "bread"]

bag.append("map")
bag.remove("bread")
print(bag)
print("Items:", len(bag))
print("First item:", bag[0])
print("Have potion?", "potion" in bag)

last = bag.pop()
print("Took out:", last)`,
      ex2: `numbers = [10, 20, 30, 40, 50]
print(numbers[1:3])    # [20, 30]  (stops before index 3)
print(numbers[:2])     # [10, 20]

doubled = [n * 2 for n in numbers]
print(doubled)`
    },
    test: `assert inventory == ["sword", "map"], T(f"inventory should be ['sword', 'map'], but it is {inventory}.", f"inventory debería ser ['sword', 'map'], pero es {inventory}.", f"inventory deveria ser ['sword', 'map'], mas é {inventory}.")
assert "item_count" in dir(), T("Create a variable called item_count.", "Crea una variable llamada item_count.", "Crie uma variável chamada item_count.")
assert item_count == 2, T(f"item_count should be 2, but it is {item_count}.", f"item_count debería ser 2, pero es {item_count}.", f"item_count deveria ser 2, mas é {item_count}.")
assert "len(" in SRC, T("Use len() to count the items.", "Usa len() para contar los objetos.", "Use len() para contar os itens.")`
  },
  while: {
    xp: 125,
    examples: {
      ex1: `torches = 3
room = 1

while torches > 0:
    print(f"Room {room}: you light a torch.")
    torches -= 1
    room += 1

print("Out of torches. It's dark now...")`,
      ex2: `room = 0
while True:
    room += 1
    if room == 2:
        print("Room 2 is a trap. Skipping!")
        continue
    if room == 5:
        print("Found the exit!")
        break
    print("Exploring room", room)`
    },
    test: `assert "while" in SRC, T("This quest needs a while loop.", "Esta misión necesita un bucle while.", "Esta missão precisa de um loop while.")
assert hp <= 0, T(f"The boss still has {hp} HP!", f"¡El jefe todavía tiene {hp} HP!", f"O chefe ainda tem {hp} HP!")
assert turns == 4, T(f"turns should be 4, but it is {turns}.", f"turns debería ser 4, pero es {turns}.", f"turns deveria ser 4, mas é {turns}.")
assert hp == -20, T(f"hp should end at -20 (100 - 30 x 4), but it is {hp}.", f"hp debería terminar en -20 (100 - 30 x 4), pero es {hp}.", f"hp deveria terminar em -20 (100 - 30 x 4), mas é {hp}.")`
  },
  def: {
    xp: 150,
    examples: {
      ex1: `def fireball(target, power):
    damage = power * 2
    print(f"Fireball hits {target} for {damage} damage!")
    return damage

fireball("Slime", 10)
total = fireball("Dragon", 50)
print("Damage stored:", total)`,
      ex2: `def greet(name, title="Adventurer"):
    return f"Welcome, {title} {name}!"

print(greet("Lydson"))
print(greet("Lydson", "Hero"))`
    },
    test: `assert "heal" in dir() and callable(heal), T("I can't find a function called heal.", "No encuentro una función llamada heal.", "Não encontrei uma função chamada heal.")
r = heal(10)
assert r is not None, T("heal(10) returned None. Did you forget 'return'?", "heal(10) devolvió None. ¿Olvidaste el 'return'?", "heal(10) retornou None. Você esqueceu o 'return'?")
assert r == 30, T(f"heal(10) should return 30, but returned {r}.", f"heal(10) debería devolver 30, pero devolvió {r}.", f"heal(10) deveria retornar 30, mas retornou {r}.")
r2 = heal(5, 50)
assert r2 == 55, T(f"heal(5, 50) should return 55, but returned {r2}.", f"heal(5, 50) debería devolver 55, pero devolvió {r2}.", f"heal(5, 50) deveria retornar 55, mas retornou {r2}.")
assert heal(0, 1) == 1, T("heal(0, 1) should return 1.", "heal(0, 1) debería devolver 1.", "heal(0, 1) deveria retornar 1.")`
  },
  match: {
    xp: 150,
    examples: {
      ex1: `hero_class = "mage"

match hero_class:
    case "warrior" | "knight":
        print("Take the sword.")
    case "mage":
        print("Take the staff.")
    case "archer":
        print("Take the bow.")
    case _:
        print("...Who even are you?")`,
      ex2: `hero_class = "archer"

if hero_class == "warrior" or hero_class == "knight":
    print("Take the sword.")
elif hero_class == "mage":
    print("Take the staff.")
elif hero_class == "archer":
    print("Take the bow.")
else:
    print("...Who even are you?")`
    },
    test: `assert "match" in SRC and "case" in SRC, T("The knight insists: use match / case for this one.", "El caballero insiste: usa match / case en esta.", "O cavaleiro insiste: use match / case nesta.")
cases = {"warrior": "sword", "knight": "sword", "mage": "staff", "archer": "bow", "bard": "fists", "chef": "fists"}
for job, want in cases.items():
    got = weapon_for(job)
    assert got == want, T(f"weapon_for('{job}') should return '{want}', but returned {got!r}.", f"weapon_for('{job}') debería devolver '{want}', pero devolvió {got!r}.", f"weapon_for('{job}') deveria retornar '{want}', mas retornou {got!r}.")`
  },
  dict: {
    xp: 150,
    examples: {
      ex1: `status = {
    "name": "Lydson",
    "level": 1,
    "hp": 100,
}

print(status["name"])
status["hp"] = status["hp"] - 10
status["title"] = "Otherworlder"
print(status)
print("MP:", status.get("mp", 0))`,
      ex2: `status = {"name": "Lydson", "level": 3, "hp": 120}

for key, value in status.items():
    print(f"{key}: {value}")`
    },
    test: `assert isinstance(status, dict), T("status must be a dictionary: { }.", "status debe ser un diccionario: { }.", "status precisa ser um dicionário: { }.")
assert status.get("name") == "Lydson", T("status['name'] should be 'Lydson'.", "status['name'] debería ser 'Lydson'.", "status['name'] deveria ser 'Lydson'.")
assert status.get("hp") == 100, T("status['hp'] should be 100.", "status['hp'] debería ser 100.", "status['hp'] deveria ser 100.")
lvl = status.get("level")
assert lvl == 2, T(f"status['level'] should be 2 after leveling up, but it is {lvl}.", f"status['level'] debería ser 2 después de subir de nivel, pero es {lvl}.", f"status['level'] deveria ser 2 depois de subir de nível, mas é {lvl}.")
assert ".items()" in SRC, T("Use .items() to loop over the dictionary.", "Usa .items() para recorrer el diccionario.", "Use .items() para percorrer o dicionário.")
for line in ["name: Lydson", "level: 2", "hp: 100"]:
    assert line in OUT, T(f"I didn't see '{line}' in the output.", f"No vi '{line}' en la salida.", f"Não vi '{line}' na saída.")`
  },
  boss: {
    xp: 300,
    examples: {
      ex1: `attacks = ["slash", "fireball", "kick"]

for turn, attack in enumerate(attacks, start=1):
    print(f"Turn {turn}: {attack}")`,
      ex2: `def first_big(numbers):
    for n in numbers:
        if n > 10:
            return n      # the function ends here
    return None           # nothing was big

print(first_big([3, 7, 15, 40]))   # 15
print(first_big([1, 2]))           # None`
    },
    test: `assert callable(fight), T("I can't find the fight function.", "No encuentro la función fight.", "Não encontrei a função fight.")
checks = [((50, [20, 20, 20]), 3), ((100, [10, 10]), -1), ((10, [50, 1]), 1), ((30, [10, 10, 10, 10]), 3), ((5, []), -1)]
for args, want in checks:
    got = fight(*args)
    assert got == want, T(f"fight{args} should return {want}, but returned {got!r}.", f"fight{args} debería devolver {want}, pero devolvió {got!r}.", f"fight{args} deveria retornar {want}, mas retornou {got!r}.")`
  }
};
