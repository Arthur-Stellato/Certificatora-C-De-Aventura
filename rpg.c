#include <stdio.h>

int main()
{

    /* ---------- MÓDULO 1 ---------- */

    char nome[50];
    int vida;
    int forca;
    int mana;

    const int VIDA_MAX = 70;

    vida = VIDA_MAX;

    printf("Digite o nome do personagem:");
    scanf("%49s", nome);

    printf("Digite a força do personagem:");
    scanf("%d", &forca);

    printf("Digite a mana do personagem");
    scanf("%d", &mana);

    float multiplicadorDano = 1.5;

    printf("\n--- Ficha do Heroi ---\n");
    printf("Nome:  %s\n", nome);
    printf("Vida:  %d\n", vida);
    printf("Forca: %d\n", forca);
    printf("Mana:  %d\n", mana);
    printf("Multiplicador de dano critico: %.2f\n", multiplicadorDano);

    int poderTotal = forca + mana;

    /* ------------ MÓDULO 2 ------------ */

    int forcaInimigo = 12;
    int manaInimigo = 8;
    int poderInimigo = forcaInimigo + manaInimigo;

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

    int escolha;

    printf("\n=== A BIFURCAÇÃO DA MASMORRA ===\n");
    printf("Você chega a uma bifurcação. Escolha um caminho:\n");
    printf("1 - Caminho da Esquerda (arriscado, tesouro maior)\n");
    printf("2 - Caminho da Direita (seguro, tesouro menor)\n");
    printf("Sua escolha: ");
    scanf("%d", &escolha);

    if (escolha == 1){
        if (vida >= 80){
            printf("Você sobrevive ao perigo e encontra um tesouro raro!\n");
        } else{
            printf("Você estava fraco demais e sofreu dano no caminho.\n");
            vida = vida - 30;
        }
        
    } else if(escolha == 2){
        printf("Você segue em segurança e encotnra um pequeno tesouro.\n");
    } else {
        printf("Caminho inválido! Você fica parado, hesitante");
    }
    
    printf("\nVida atual do héroi: %d\n" ,vida);

    return 0;
}