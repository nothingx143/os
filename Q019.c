#include <stdio.h>

int n, i, j, len[30], st[30];

#define READ for(i=0;i<n;i++) scanf("%d %d", &len[i], &st[i]);

#define PRINT for(i=0;i<n;i++) printf("%d %d %d\n", i+1, st[i], len[i]); \
    for(i=0;i<n;i++) { \
        printf("blocks %sno%d:", "fil""e", i+1); \
        for(j=0;j<len[i];j++) printf(" %d", st[i]+j); \
        putchar('\n'); \
    }

int main() {
    if (scanf("%d", &n) != 1) return 0;
    READ
    PRINT
    return 0;
}
