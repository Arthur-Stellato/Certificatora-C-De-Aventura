# Roteiro — Módulo 7: A Ficha Completa do Herói (≈6 min)

### Fala e ações

**[0:00–0:40] Abertura e o problema**
> "Oi pessoal! O nosso jogo já tem uma aventura inteira: criar personagem, comparar poder, escolher, lutar, explorar. Mas olha o código do `main`: o herói é nome, vida, força, mana, multiplicador, mochila... tudo solto. E o inimigo, mais três variáveis. Imagina três inimigos: nove variáveis soltas. Hoje a gente arruma essa bagunça com uma `struct`: a ficha completa do herói."

*(Ação: rolar o `main` do módulo 6 mostrando as variáveis soltas: `nome`, `vida`, `forca`, `mana`, `multiplicadorDano`, `mochila`, `forcaInimigo`, `manaInimigo`, `vidaInimigo`.)*

**[0:40–1:40] O molde da ficha**
> "Uma `struct` é um tipo novo, criado por você, que junta vários campos numa coisa só. Diferente do vetor, que guarda tudo do mesmo tipo, a struct mistura: texto, inteiro, decimal e até um vetor, que é a nossa mochila. Atenção: isso aqui é só o molde. Ainda não existe nenhum personagem, é como a ficha em branco."

*(Ação: logo depois dos `#define`, digitar `struct Personagem { char nome[50]; int vida; int forca; int mana; float multiplicadorDano; int mochila[TAM_MOCHILA]; };`. Lembrar do `;` no final: erro clássico.)*

**[1:40–3:00] Criando o herói**
> "Agora eu crio o herói a partir desse molde: `struct Personagem heroi`. Os valores entre chaves vão na ordem dos campos: nome vazio, vida cheia, força e mana zero, que o jogador vai digitar, multiplicador 1.5, e a mochila com a poção e a chave. Pra chegar em um campo, é o nome da variável, um ponto, e o nome do campo: `heroi.vida`."

*(Ação: no `main`, apagar as declarações soltas do herói (`nome`, `vida`, `forca`, `mana`, `multiplicadorDano`, `mochila`) e digitar `struct Personagem heroi = {"", VIDA_MAX, 0, 0, 1.5, {POCAO, CHAVE}};`. Trocar os `scanf`: `scanf("%49s", heroi.nome)` — "sem o `&`, porque o nome já é um vetor" — e `scanf("%d", &heroi.forca)` e `&heroi.mana`.)*

**[3:00–3:45] Trocando os usos**
> "Agora é ir trocando cada variável solta pelo campo da struct. O truque é deixar o compilador ajudar: ele reclama de cada nome que não existe mais, e a gente vai corrigindo um por um."

*(Ação: trocar `vida` por `heroi.vida`, `nome` por `heroi.nome`, `forca` e `mana` por `heroi.forca` e `heroi.mana` (cuidado com `vidaInimigo`, `novaVida`, `vidaAlvo`), e `mochila` por `heroi.mochila` na chamada do `mostrarMochila` antes do mapa e na linha da espada (`heroi.mochila[2] = ESPADA;`). A chamada do `mostrarMochila` do final você troca na etapa 3, dentro da ficha completa. Compilar e rodar: o jogo funciona igualzinho.)*

**[3:45–4:30] Uma função pra mostrar a ficha**
> "Lembra daqueles cinco `printf` da ficha, lá do módulo 1? Agora vira uma função que recebe a ficha inteira: `mostrarFicha`. Ela recebe uma cópia da struct, e pra só mostrar na tela isso basta. Se a função precisasse alterar a ficha, igual o `int` do módulo 5, teria que devolver a ficha nova."

*(Ação: digitar `void mostrarFicha(struct Personagem p)` com os `printf` dos campos (`p.nome`, `p.vida`, `p.forca`, `p.mana`, `p.multiplicadorDano`). No `main`, apagar os `printf` da ficha do módulo 1 e chamar `mostrarFicha(heroi);`. Rodar.)*

**[4:30–5:20] O inimigo com o mesmo molde**
> "E o inimigo? Ele também é um Personagem. Mesmo molde, outra variável: um Goblin, com 50 de vida, força 12 e mana 8. A mochila dele eu nem preencho, então começa vazia. E a mesma função `mostrarFicha` já serve pra ele."

*(Ação: apagar `forcaInimigo`, `manaInimigo` e `vidaInimigo`. Digitar `struct Personagem inimigo = {"Goblin", 50, 12, 8, 1.0};` e `mostrarFicha(inimigo);`. Corrigir `poderInimigo = inimigo.forca + inimigo.mana`. No combate: `inimigo.vida = atacar(heroi.nome, danoHeroi, inimigo.vida);` e `heroi.vida = atacar(inimigo.nome, danoInimigo, heroi.vida);`. Rodar.)*

> "Olha que legal: agora o inimigo tem nome, aparece 'Goblin ataca' em vez de 'Inimigo ataca'. E repara que o `calcularDano` e o `atacar` não mudaram uma linha: eles recebem número e texto, a gente só passa os campos certos."

**[5:20–6:00] A ficha completa**
> "Pra fechar a aventura, no final do jogo eu mostro a ficha completa do herói: a ficha com a vida que sobrou e a mochila com tudo que ele pegou. A mochila agora faz parte do herói: `heroi.mochila`."

*(Ação: no fim do `main`, no lugar do último `mostrarMochila(mochila);`, digitar `printf("\n=== FICHA COMPLETA DO HERÓI ===");`, `mostrarFicha(heroi);` e `mostrarMochila(heroi.mochila);`. Rodar com força 20 / mana 10 e `d d s d d s`: vida final 40 e a "Espada Lendária" na mochila, como terceiro item.)*

**[6:00–6:30] Encerramento**
> "E é isso, pessoal! A gente começou com uma variável e terminou com um RPG de texto: variáveis, comparações, decisões, repetições, funções, vetores, matrizes e agora structs. O código completo está no repositório. Fica o desafio: coloca um segundo inimigo, inventa itens novos, aumenta o mapa. E se quiser ir além, os próximos passos em C são ponteiros e arquivos, pra salvar o jogo. Valeu, e até a próxima aventura!"

*(Nota: como este é o último vídeo, o "gancho" é o convite pra continuar estudando, em vez de apontar pra um próximo módulo.)*
