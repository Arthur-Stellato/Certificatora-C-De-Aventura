# Roteiro — Módulo 2: Teste de Sorte (≈5 min)

**Arquivo:** `modulo2_teste_de_sorte.c` (já inclui a base do Módulo 1, pra fazer sentido sozinho)
**Antes de gravar:** compilar uma vez (`gcc -Wall -o modulo2 modulo2_teste_de_sorte.c`). Prepare dois testes: um com o herói mais forte (ex: força 20, mana 10) e outro mais fraco (ex: força 5, mana 3) — assim os dois caminhos do `if/else` aparecem no vídeo.

### Fala e ações

**[0:00–0:30] Abertura**
> "Na aula passada criamos o herói. Agora um inimigo apareceu — vamos ver quem é mais forte."

*(Nota: ao rodar o programa, a ficha do herói vai mostrar de novo o multiplicador de dano crítico (float) que vimos no Módulo 1 — é só o recap, não precisa reexplicar, pode passar direto.)*

**[0:30–1:30] Poder do inimigo**
> "O inimigo também tem força e mana, e o poder dele é a soma dos dois — o mesmo cálculo que já vimos."

*(Ação: digitar `int forcaInimigo = 12;`, `int manaInimigo = 8;`, `int poderInimigo = forcaInimigo + manaInimigo;`. Reforçar: "é a mesma soma do módulo passado, só que aplicada a outro personagem".)*

**[1:30–2:30] Subtração pra comparar**
> "Pra comparar os dois poderes, a gente usa subtração de novo: a diferença entre o poder do herói e o do inimigo."

*(Ação: digitar `int diferencaDePoder = poderTotal - poderInimigo;` e rodar até essa linha, mostrando o número — positivo, negativo ou zero.)*

**[2:30–4:00] A expressão relacional e o `if`**
> "E agora entra um conceito novo: o `if`. Ele testa uma condição — nesse caso, `poderTotal > poderInimigo` — e essa comparação só pode dar dois resultados: verdadeiro ou falso. É isso que chamamos de expressão relacional."

*(Ação: digitar o bloco `if (poderTotal > poderInimigo) { ... } else { ... }`. Pode citar rapidinho outros operadores relacionais — `<`, `==`, `>=` — sem se aprofundar, só plantando a semente.)*

**[4:00–5:00] Rodando os dois cenários**
> "Vamos rodar duas vezes pra ver o `if` decidindo coisas diferentes. Primeiro com o herói bem forte..."

*(Ação: rodar com força 20 / mana 10 → sai "Você é mais forte: ataca primeiro!")*

> "...e agora com o herói mais fraco."

*(Ação: rodar com força 5 / mana 3 → sai "O inimigo ataca primeiro...". Reforçar: "o código não mudou nada — só os valores de entrada. É o `if` decidindo sozinho qual caminho seguir".)*

**[Gancho de fechamento]**
> "Só que até agora a gente só decidiu quem ataca primeiro. E se o jogador tivesse que escolher um caminho, com consequências diferentes? Isso é o próximo módulo."

