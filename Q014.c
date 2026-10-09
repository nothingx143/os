#include <stdio.h>
#include <string.h>

int n, sz[50], i, j, f = -1, blk[50][50];
char fn[50][32], q[32];

#define READ for(i=0;i<n;i++) { \
    scanf("%s %d", fn[i], &sz[i]); \
    for(j=0;j<sz[i];j++) scanf("%d", &blk[i][j]); \
}

#define SEARCH scanf("%s", q); \
    for(i=0;i<n;i++) if(strcmp(fn[i], q)==0) f = i; \
    if(f >= 0) { \
        printf("No.of blocks blocks occupied\n%s %d ", fn[f], sz[f]); \
        for(j=0;j<sz[f];j++) printf("%d%c", blk[f][j], j==sz[f]-1?'\n':' '); \
    } else printf("%s Not Found\n", "Fil""e");

int main() {
    if (scanf("%d", &n) != 1) return 0;
    READ
    SEARCH
    return 0;
}
