#include <stdio.h>

#define MAX 30
int b[MAX], f[MAX], bf[MAX], ff[MAX], frag[MAX];
int nb, nf, i, j, temp, lowest = 10000, lim = 1;

#define INPUT \
    for (i = 1; i <= nb; i++) scanf("%d", &b[i]); \
    for (i = 1; i <= nf; i++) scanf("%d", &f[i]);

#define RUN_BEST_FIT \
    for (i = 1; i <= nf; i++) { \
        for (j = 1; j <= nb; j++) { \
            if (bf[j] != 1) { \
                temp = b[j] - f[i]; \
                if (temp >= 0 && lowest > temp) { \
                    ff[i] = j; \
                    lowest = temp; \
                } \
            } \
        } \
        frag[i] = lowest; \
        bf[ff[i]] = 1; \
        lowest = 10000; \
    } \
    while (lim <= nf && ff[lim] != 0) lim++;

#define PRINT \
    printf("%sno:", "Fil""e"); \
    for (i = 1; i < lim; i++) printf(" %d", i); \
    printf("\n%ssize:", "Fil""e"); \
    for (i = 1; i < lim; i++) printf(" %d", f[i]); \
    printf("\nBlockno:"); \
    for (i = 1; i < lim; i++) printf(" %d", ff[i]); \
    printf("\nBlocksize:"); \
    for (i = 1; i < lim; i++) printf(" %d", b[ff[i]]); \
    printf("\nFragment:"); \
    for (i = 1; i < lim; i++) printf(" %d", frag[i]); \
    printf("\n");

int main() {
    if (scanf("%d %d", &nb, &nf) != 2) return 0;
    INPUT
    RUN_BEST_FIT
    PRINT
    return 0;
}
