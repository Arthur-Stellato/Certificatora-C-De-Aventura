#include <stdio.h>

#define TAM_MOCHILA 5

#define POCAO 1
#define CHAVE 2
#define ESPADA 3

#define LINHAS 5
#define COLUNAS 7


struct Personagem{
    char nome[50];
    int vida;
    int forca;
    int mana;
    float multiplicadorDano;
    int mochila[TAM_MOCHILA];
};

void mostrarFicha(struct Personagem p){
    printf("\n--- Ficha do %s ---\n", p.nome);
    printf("Vida: %d\n", p.vida);
    printf("Forca: %d\n", p.forca);
    printf("Mana: %d\n", p.mana);
    printf("Multiplicador de dano critico: %.2f\n", p.multiplicadorDano);
}

void mostrarMochila(int mochila[]){
    printf("Itens na mochila:\n");
    for(int i = 0; i < TAM_MOCHILA; i++){
        if(mochila[i] == POCAO){
            printf("- Poção de Vida\n");
        } else if(mochila[i] == CHAVE){
            printf("- Chave do Cofre\n");
        } else if(mochila[i] == ESPADA){
            printf("- Espada Lendária\n");
        } else {
            printf("- Espaço vazio\n");
        }
    }
}

void desenharMapa(char mapa[LINHAS][COLUNAS], int linhaHeroi, int colunaHeroi){
    printf("\nMapa do jogo:\n");
    for(int i = 0; i < LINHAS; i++){
        for(int j = 0; j < COLUNAS; j++){
            if(i == linhaHeroi && j == colunaHeroi){
                printf("@");
            }
            else{
                printf("%c", mapa[i][j]);
            }
        }
        printf("\n");
    }
}


int calcularDano(int poder){
    return poder / 2;
}

int atacar(char nomeAtacante[], int dano, int vidaAlvo){
    int novaVida = vidaAlvo - dano;
    printf("%s ataca! O alvo perde %d de vida. Vida restante do alvo: %d\n", nomeAtacante, dano, novaVida);
    return novaVida;
}

int main()
{

    const int VIDA_MAX = 70;

    /* ---------- MÓDULO 1 ---------- */

    struct Personagem heroi = {"", VIDA_MAX, 0, 0, 1.5, {POCAO, CHAVE}};


    printf("Digite o nome do personagem:");
    scanf("%49s", heroi.nome);

    printf("Digite a força do personagem:");
    scanf("%d", &heroi.forca);

    printf("Digite a mana do personagem:");
    scanf("%d", &heroi.mana);

    float multiplicadorDano = 1.5;

    mostrarFicha(heroi);

    int poderTotal = heroi.forca + heroi.mana;

    /* ------------ MÓDULO 2 ------------ */

    struct Personagem inimigo = {"Goblin", 50, 12, 8, 1.0};

    mostrarFicha(inimigo);

    int poderInimigo = inimigo.forca + inimigo.mana;

    int diferencaPoder = poderTotal - poderInimigo;

    printf("Diferença de poder: %d\n", diferencaPoder);

    if (poderTotal > poderInimigo)
    {
        printf("O Herói é mais forte que o inimigo!");
    }
    else if (poderTotal < poderInimigo)
    {
        printf("O Inimigo é mais forte que o Herói");
    }
    else if (poderTotal == poderInimigo)
    {
        printf("Poder Total entre ambos é o mesmo");
    }

        /* ------------ MÓDULO 3 ------------ */
    int escolha = 0;

    printf("\n=== A BIFURCAÇÃO DA MASMORRA ===\n");
    printf("1 - Caminho da Esquerda (arriscado, tesouro maior)\n");
    printf("2 - Caminho da Direita (seguro, tesouro menor)\n");
    printf("Sua escolha: ");
    scanf("%d", &escolha);

    if (escolha == 1){
        if (heroi.vida >= 80){
            printf("Você sobrevive ao perigo e encontra um tesouro raro!\n");
        } else {
            printf("Você estava fraco demais e sofreu dano no caminho.\n");
            heroi.vida = heroi.vida - 30;
        }
    } else if (escolha == 2){
        printf("Você segue em segurança e encontra um pequeno tesouro.\n");
    } else {
        printf("Caminho inválido! Você fica parado, hesitante.\n");
    }

    printf("\nVida atual do herói: %d\n", heroi.vida);

    /* ------------ MÓDULO 4 ------------ */

    printf("Preparando para a batalha final\n");
    
    for(int contagem = 3; contagem >= 1; contagem--){
        printf("Contagem regressiva: %d\n", contagem);
    }

    int turno = 1;

    const int LIMITE_TURNOS = 10;

    printf("Vida do herói: %d | Vida do inimigo: %d\n", heroi.vida, inimigo.vida);

    while(heroi.vida > 0 && inimigo.vida > 0 && turno <= LIMITE_TURNOS){

        int danoHeroi = calcularDano(poderTotal);
        inimigo.vida = atacar(heroi.nome, danoHeroi, inimigo.vida);

        if(inimigo.vida <= 0){
            printf("O inimigo foi derrotado!\n");
            break;
        }

        int danoInimigo = calcularDano(poderInimigo);
        heroi.vida = atacar(inimigo.nome, danoInimigo, heroi.vida);

        if(heroi.vida <= 0){
            printf("O herói foi derrotado!\n");
            break;
        }

        turno = turno + 1;

    }

    printf("Total de turnos: %d\n", turno);
    printf("Vida final do herói: %d | Vida final do inimigo: %d\n", heroi.vida, inimigo.vida);


   int mochila[TAM_MOCHILA] = {POCAO, CHAVE};
    mostrarMochila(heroi.mochila);

    char mapa[LINHAS][COLUNAS] = {
        {'#','#','#','#','#','#','#'},
        {'#','.','.','.','#','.','#'},
        {'#','.','#','.','.','.','#'},
        {'#','.','.','.','#','T','#'},
        {'#','#','#','#','#','#','#'}
    };

    int linhaHeroi = 1;
    int colunaHeroi = 1;

    char comando;

    printf("\n=== A MASMORRA ===\n");
    printf("Use w/a/s/d para andar e ache o tesouro (T).\n");

    while(mapa[linhaHeroi][colunaHeroi] != 'T'){

        desenharMapa(mapa, linhaHeroi, colunaHeroi);

        printf("Comando (w/a/s/d): ");
        scanf(" %c", &comando); // o espaço antes do %c pula o Enter que sobrou


        int novaLinha = linhaHeroi;
        int novaColuna = colunaHeroi;

        if(comando == 'w'){
            novaLinha = novaLinha - 1;
        } else if(comando == 's'){
            novaLinha = novaLinha + 1;
        } else if(comando == 'a'){
            novaColuna = novaColuna - 1;
        } else if(comando == 'd'){
            novaColuna = novaColuna + 1;
        } 

        if(mapa[novaLinha][novaColuna] == '#'){
            printf("Uma parede bloqueia seu caminho! Escolha outro movimento.\n");
        } else {
            linhaHeroi = novaLinha;
            colunaHeroi = novaColuna;
        }

    }

    desenharMapa(mapa, linhaHeroi, colunaHeroi);
    printf("\n Você encontrou o tesouro: uma espada curta!\n");
    heroi.mochila[2] = ESPADA;

    printf("\n=== Ficha Final do Heroi ===\n");
    mostrarFicha(heroi);
    mostrarMochila(heroi.mochila);

    return 0;
}
