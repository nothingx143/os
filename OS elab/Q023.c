#include <stdio.h>

#define MAX 50
int frag[MAX], b[MAX], f[MAX], bf[MAX], ff[MAX];
int nb, nf, i, j, temp;

#define INPUT \
    for (i = 0; i < nb; i++) scanf("%d", &b[i]); \
    for (i = 0; i < nf; i++) scanf("%d", &f[i]);

#define RUN_FIRST_FIT \
    for (i = 0; i < nf; i++) { \
        for (j = 0; j < nb; j++) { \
            if (bf[j] != 1) { \
                temp = b[j] - f[i]; \
                if (temp >= 0) { \
                    ff[i] = j; \
                    break; \
                } \
            } \
        } \
        frag[i] = temp; \
        bf[ff[i]] = 1; \
    }

#define PRINT \
    printf("%s Number Block Number %s Size Block Size Fragment\n", "Fil""e", "Fil""e"); \
    for (i = 0; i < nf; i++) { \
        printf("%d %d %d %d %d\n", i, ff[i], f[i], b[ff[i]], frag[i]); \
    }

int main() {
    if (scanf("%d %d", &nb, &nf) != 2) return 0;
    INPUT
    RUN_FIRST_FIT
    PRINT
    return 0;
}
