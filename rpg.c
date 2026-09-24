#include <stdio.h>
 
int main(void) {
 
    /* ---------- MÓDULO 1 ---------- */
 
    char nome[50];
    int vida;
    int forca;
    int mana;
 
    const int VIDA_INICIAL = 100;
 
    printf("=== CRIACAO DO PERSONAGEM ===\n");
    printf("Digite o nome do seu heroi: ");
    scanf("%49s", nome);
 
    printf("Distribua 20 pontos entre forca e mana.\n");
    printf("Pontos de FORCA: ");
    scanf("%d", &forca);
    printf("Pontos de MANA: ");
    scanf("%d", &mana);
 
    vida = VIDA_INICIAL;
 
    printf("\n--- Ficha do Heroi ---\n");
    printf("Nome:  %s\n", nome);
    printf("Vida:  %d\n", vida);
    printf("Forca: %d\n", forca);
    printf("Mana:  %d\n", mana);
 
    int poderTotal = forca + mana; /* soma ja vista no Modulo 1 */
    printf("Poder total do heroi: %d\n", poderTotal);
 
 return 0;
}