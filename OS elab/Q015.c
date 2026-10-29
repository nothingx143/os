#include <stdio.h>

int t, i, j, k[20], n[20], a[20][100];

#define READ for(i=0;i<t;i++) { scanf("%d %d", &k[i], &n[i]); \
    for(j=0;j<n[i];j++) scanf("%d", &a[i][j]); }

#define PRINT for(i=0;i<t;i++) printf("%d %d %d\n", i+1, k[i], n[i]); \
    puts("blocks occupied are:"); \
    for(i=0;i<t;i++) { printf("%sno%d:", "fil""e", i+1); \
        for(j=0;j<n[i];j++) printf(" %d %d", k[i], a[i][j]); \
        putchar('\n'); }

int main() {
    if (scanf("%d", &t) != 1) return 0;
    READ
    PRINT
    return 0;
}
