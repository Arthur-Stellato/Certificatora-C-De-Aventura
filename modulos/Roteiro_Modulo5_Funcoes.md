# Roteiro — Módulo 5: Funções (≈6 min)

### Fala e ações

**[0:00–0:30] Abertura**
> "Oi pessoal! Na aula passada o nosso herói entrou em combate, turno a turno. O jogo funciona, mas olha o código do `while`: a conta do dano e a mensagem do ataque aparecem duas vezes, uma pro herói e outra pro inimigo, quase iguais. Hoje a gente arruma isso com funções."

*(Ação: mostrar o `while` do combate do módulo 4, destacando as linhas repetidas: `poderTotal / 2`, a subtração da vida e o `printf` do ataque.)*

**[0:30–1:20] O que é uma função**
> "Uma função é um bloco de código com nome, que você escreve uma vez e usa quantas vezes quiser. Ela recebe valores, que são os parâmetros, faz uma conta e devolve um resultado. Você já usou funções sem perceber: `printf` e `scanf` são funções que alguém escreveu pra gente."

**[1:20–2:50] Primeira função: calcularDano**
> "Vamos começar pela conta do dano. Acima do `main`, eu escrevo: `int calcularDano`, que quer dizer que ela devolve um inteiro. Entre parênteses, o parâmetro: `int poder`, o poder de quem vai atacar. Dentro, `return poder / 2`. O `return` devolve o resultado pra quem chamou."

*(Ação: digitar `int calcularDano(int poder){ return poder / 2; }` acima do `main`. Explicar: "o C lê de cima pra baixo, então a função precisa ficar antes de quem usa". Depois, no combate, trocar a conta do herói por `int danoHeroi = calcularDano(poderTotal);` e a do inimigo por `int danoInimigo = calcularDano(poderInimigo);`.)*

> "Repara: a mesma função serve pros dois. Muda só o valor que eu passo. E se um dia o dano mudar de fórmula, eu mexo em um lugar só."

**[2:50–4:30] Segunda função: atacar**
> "Agora o ataque inteiro. A função `atacar` recebe três coisas: o nome de quem ataca, o dano e a vida do alvo. Ela calcula a vida nova, mostra a mensagem na tela e devolve a vida nova."

*(Ação: digitar `int atacar(char nomeAtacante[], int dano, int vidaAlvo)`: `int novaVida = vidaAlvo - dano;`, o `printf("%s ataca! ...")` com `nomeAtacante`, `dano` e `novaVida`, e o `return novaVida;`. Explicar rápido o `char nomeAtacante[]`: "o nome é um texto, por isso o parâmetro é assim; texto em detalhe a gente vê no próximo módulo".)*

> "E por que ela devolve a vida nova? Porque quando você passa um número pra uma função, ela recebe uma cópia. Se a função mudasse a cópia, a vida lá no `main` continuava igual. Então ela devolve o resultado, e quem chamou guarda."

*(Ação: no combate, trocar o bloco do herói por `vidaInimigo = atacar(nome, danoHeroi, vidaInimigo);` e o do inimigo por `vida = atacar("Inimigo", danoInimigo, vida);`. Mostrar que o `while` ficou bem menor.)*

**[4:30–5:30] Rodando**
> "Bora rodar. O herói tira 15, o inimigo tira 10, e olha: a saída é exatamente a mesma de antes. O jogo não mudou, o código é que ficou mais limpo e mais fácil de mexer."

*(Ação: rodar com força 20 / mana 10. Mostrar os turnos: "Aldric ataca... 35", "Inimigo ataca... 60", e assim até o inimigo cair no turno 4, com a vida final do herói em 40.)*

**[5:30–6:00] Gancho**
> "Só que o herói venceu e agora? Ele precisa explorar a masmorra e guardar o que encontrar. Pra isso a gente precisa de uma mochila e de um mapa, e isso é assunto do próximo módulo: vetores e matrizes."
