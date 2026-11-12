# Roteiro — Módulo 6: Inventário e Mapa da Masmorra (≈6 min)

### Fala e ações

**[0:00–0:25] Abertura**
> "Oi pessoal! Na aula passada o nosso herói encarou a batalha final. Agora ele precisa explorar a masmorra e guardar o que encontrar. Pra isso a gente precisa de uma mochila e de um mapa, e em C isso se resolve com vetores e matrizes."

**[0:25–1:30] O vetor: a mochila**
> "Imagina uma mochila com cinco espaços. Criar cinco variáveis, item1, item2, item3... seria um pesadelo. O vetor resolve: é uma fileira de caixinhas, todas do mesmo tipo, com um nome só. Cada caixinha tem um número de posição, o índice — e o primeiro índice é o zero, não o um."

*(Ação: **DIGITAR** no topo do arquivo `#define TAM_MOCHILA 5` e os itens `POCAO` 1, `CHAVE` 2, `ESPADA` 3. Explicar: "o `#define` dá nome a um valor, melhor do que número solto no código; e eu uso no tamanho do vetor porque o tamanho precisa ser uma constante". No `main`, depois do combate, **DIGITAR** `int mochila[TAM_MOCHILA] = {POCAO, CHAVE};`. **DIGITAR** um `printf("%d %d\n", mochila[0], mochila[1]);` temporário, rodar, mostrar `1 2` e apagar.)*

> "Criei um vetor de cinco inteiros e guardei uma poção e uma chave. Os três que sobraram começam valendo zero, que é o nosso 'vazio'. E cuidado: com cinco espaços, os índices vão de 0 a 4. Se você usar `mochila[5]`, o C não avisa: você lê ou escreve lixo na memória. É o mesmo tipo de problema do buffer overflow do módulo 1."

**[1:30–2:25] Percorrendo a mochila com for**
> "Pra ver o que tem na mochila, a gente percorre o vetor com um `for`, o mesmo laço do módulo 4. O contador vai de 0 até `TAM_MOCHILA` menos 1, então a condição é `i < TAM_MOCHILA`, nunca `<=`. Dentro do laço, `mochila[i]` olha uma caixinha de cada vez, e um `if / else if`, igual ao do módulo 3, transforma o número no nome do item."

*(Ação: acima do `main`, **DIGITAR** `void mostrarMochila(int mochila[])` com o `for` e o `printf("Slot %d: ", i + 1)` — "i + 1 porque o jogador conta a partir do 1, mas o C conta a partir do 0". **COLAR** a cadeia `if / else if / else` dos nomes dos itens. Chamar `mostrarMochila(mochila);` no `main` e rodar: poção, chave e três slots vazios.)*

**[2:25–3:40] A matriz: o mapa**
> "Agora o mapa. Um vetor é uma linha de caixinhas; uma matriz é uma grade, um vetor de vetores. Em vez de um índice, são dois: a linha e a coluna. `mapa[1][1]` é a segunda linha, segunda coluna, lembrando que a contagem começa no zero."

*(Ação: **DIGITAR** `#define LINHAS 5` e `#define COLUNAS 7` no topo e, no `main`, `char mapa[LINHAS][COLUNAS] = {`. **COLAR** as 5 linhas do mapa: `#` parede, `.` chão, `T` tesouro. Lembrar: "aspas simples = um caractere só".)*

> "Pra desenhar, preciso passar por todas as posições: um `for` de linhas por fora e um `for` de colunas por dentro. É um laço dentro do outro: pra cada linha, ele anda por todas as colunas. No fim de cada linha, um `\n`. O herói não fica gravado no mapa: eu desenho o `@` por cima, quando a posição bate com a dele."

*(Ação: acima do `main`, **DIGITAR** `desenharMapa(char mapa[LINHAS][COLUNAS], int linhaHeroi, int colunaHeroi)` com os dois `for` aninhados e o `if (i == linhaHeroi && j == colunaHeroi)` que imprime `@`. Apontar que a função precisa saber quantas colunas a matriz tem. No `main`, **DIGITAR** `int linhaHeroi = 1;` e `int colunaHeroi = 1;`, chamar `desenharMapa(mapa, linhaHeroi, colunaHeroi);` e rodar: o mapa aparece com o `@` no canto.)*

**[3:40–5:10] Andando no mapa**
> "Pra andar, o programa lê uma letra, w, a, s ou d, e muda a posição. Mas em vez de mexer direto no herói, eu calculo a posição nova numa variável separada e só confirmo se ela não for uma parede. O laço roda enquanto o herói não estiver em cima do `T`. E o espaço antes do `%c` no `scanf` serve pra pular o Enter que sobrou da leitura anterior."

*(Ação: **DIGITAR** `char comando;` e o laço `while(mapa[linhaHeroi][colunaHeroi] != 'T')`. Dentro: **DIGITAR** a chamada do `desenharMapa`, o `scanf(" %c", &comando)`, `novaLinha` e `novaColuna`. **COLAR** a cadeia `if / else if` do w/a/s/d, explicando: w sobe (linha − 1), s desce (linha + 1), a vai pra esquerda (coluna − 1), d pra direita (coluna + 1). **DIGITAR** a checagem `mapa[novaLinha][novaColuna] == '#'` e o `else` que atualiza `linhaHeroi` e `colunaHeroi`. **COLAR** os `printf` de texto.)*

> "Repara que as paredes cercam o mapa inteiro. Isso não é só estética: é o que impede o herói de sair da matriz e cair naquele erro de índice fora do limite."

**[5:10–6:00] Rodando e achando o tesouro**
> "Quando o herói chega no tesouro, o laço termina e ele ganha uma espada. Coloco a espada no slot 3: slot 3, índice 2, porque a contagem começa no zero."

*(Ação: depois do laço, **DIGITAR** `desenharMapa(...)`, `mochila[2] = ESPADA;` e `mostrarMochila(mochila);`. **COLAR** o `printf` "Você encontrou o tesouro". Rodar com força 20 / mana 10: primeiro um `w` (bateu na parede, não saiu do lugar), depois `d d s d d s`, um por vez. No final o `@` aparece em cima do `T` e a mochila mostra a espada no slot 3.)*

**[6:00–6:30] Gancho**
> "Mas olha o nosso `main`: o herói tem nome, vida, força, mana, multiplicador, posição... tudo solto, em variáveis separadas. E o inimigo, mais um monte. E se fossem dez inimigos? Será que dá pra juntar tudo isso numa ficha só? Dá, e é o assunto do próximo e último módulo."
