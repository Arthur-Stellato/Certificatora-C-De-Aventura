#include <stdio.h>
 
int main() {
 
    /* ---------- MÓDULO 1 ---------- */

    char nome[50];
    int vida;
    int forca;
    int mana;

    const int VIDA_MAX = 100;

    vida = VIDA_MAX;

    printf("Digite o nome do personagem:");
    scanf("%49s", &nome);

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

    return 0;
}