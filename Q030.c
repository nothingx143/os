#include <stdio.h>

#define MAX 50
int n, m, b[MAX], b1[MAX], f[MAX], t[MAX], z = 0, k, l, i, j;

#define INPUT \
    for (i = 0; i < n; i++) { scanf("%d", &b[i]); b1[i] = b[i]; } \
    printf("%sno:", "Fil""e"); \
    for (i = 0; i < m; i++) printf(" %d", i + 1); \
    printf("\n%ssize:", "Fil""e"); \
    for (i = 0; i < m; i++) { scanf("%d", &f[i]); printf(" %d", f[i]); }

#define RUN_ALLOC \
    printf("\nBlockno:"); \
    for (i = 0; i < m; i++) { \
        l = -1; \
        for (j = 0; j < n; j++) { \
            if (l <= b[j] && b[j] > f[i]) { l = b[j]; k = j; } \
        } \
        if (l == -1) { t[z++] = -1; printf(" 0"); } \
        else { b[k] = -1; t[z++] = k; printf(" %d", k + 1); } \
    }

#define PRINT \
    printf("\nBlocksize:"); \
    for (i = 0; i < m; i++) printf(" %d", t[i] == -1 ? 1 : b1[t[i]]); \
    printf("\nFragment:"); \
    for (i = 0; i < m; i++) printf(" %d", t[i] == -1 ? 0 : b1[t[i]] - f[i]); \
    printf("\n");

int main() {
    if (scanf("%d %d", &n, &m) != 2) return 0;
    INPUT
    RUN_ALLOC
    PRINT
    return 0;
}
