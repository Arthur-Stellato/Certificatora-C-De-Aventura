# Roteiro — Módulo 1: Criação do Personagem (≈6 min)

**Arquivo:** `modulo1_criacao_personagem.c`
**Antes de gravar:** compilar uma vez (`gcc -Wall -o modulo1 modulo1_criacao_personagem.c`).

### Fala e ações

**[0:00–0:40] Abertura**
> "Oi pessoal! Hoje a gente começa a construir um RPG de texto em C, do zero. E o legal é que cada mecânica do jogo vai te ensinar um conceito de programação. Hoje: como criar o personagem do nosso herói."

**[0:40–1:30] O que é uma variável**
> "Uma variável é uma caixinha que guarda um valor. Ela tem um nome e um tipo — por exemplo, `int` guarda números inteiros, e um vetor de `char` guarda texto."

*(Ação: digitar `char nome[50];`, `int vida;`, `int forca;`, `int mana;`, explicando cada tipo enquanto escreve.)*

**[1:30–2:30] Lendo dados do usuário**
> "Pra criar o personagem, a gente precisa perguntar o nome e distribuir pontos. Isso a gente faz com `scanf` pra ler e `printf` pra mostrar na tela."

*(Ação: digitar os `printf`/`scanf` de nome, força e mana. Rodar o programa até essa parte e mostrar a saída no terminal.)*

**[2:30–3:00] Detalhe de segurança do scanf**
> "Reparem que eu escrevi `scanf("%49s", nome)`, e não só `%s`. Isso é importante: `nome` só tem espaço pra 50 caracteres. Se alguém digitar um nome gigante sem esse limite, o programa escreve além do que devia na memória — isso se chama buffer overflow, um dos erros mais clássicos de C. O `%49s` garante que no máximo 49 caracteres entram, sobrando sempre 1 espaço pro caractere que marca o fim da string."

*(Ação: apontar o `%49s` no código, sem precisar se aprofundar demais — é só um alerta de boa prática.)*

**[3:00–4:30] Matemática básica, uma operação por vez**
> "Agora vem a parte legal: usar matemática básica com os atributos do personagem."

Vá digitando linha por linha, explicando cada operador:
- "Soma: força mais mana dá o poder total."
- "Subtração: a diferença entre força e mana."
- "Multiplicação: se a gente dobrar o dano da força."
- "Divisão: metade da vida, por exemplo pra saber quando ativar um modo de fúria."
- "Resto da divisão, o operador `%`: útil pra saber se um número é par, ímpar, ou pra ciclos no jogo."

*(Ação: digitar cada `printf` de operação, rodar o programa completo no final e mostrar a saída da "Matemática Básica do Personagem".)*

**[4:30–5:00] O tipo float**
> "Só mais uma coisa antes de fechar: até agora só usamos `int`, números inteiros. Mas nem tudo em programação é número redondo — então criei um `multiplicadorDano`, do tipo `float`, que aceita casas decimais."

*(Ação: apontar `float multiplicadorDano = 1.5;` e o `printf` com `%.2f` — explicar rapidamente que `%.2f` mostra o número com 2 casas decimais.)*

**[5:00–5:40] Recapitular a ficha**
> "Prontinho — nosso herói já tem nome, vida, força, mana e até um multiplicador de dano crítico. Essa ficha vai ser usada em todos os módulos daqui pra frente."

**[5:40–6:00] Gancho**
> "Mas e se aparecer um inimigo? Como a gente compara quem é mais forte? Isso é assunto do próximo módulo."

