#include <stdio.h>
#include <string.h>

int n, sz[30], blk[30][30], i, j, f = -1;
char fn[30][32], q[32];

#define READ for(i=0;i<n;i++) { \
    scanf("%s %d", fn[i], &sz[i]); \
    for(j=0;j<sz[i];j++) scanf("%d", &blk[i][j]); \
}

#define SEARCH scanf("%s", q); \
    for(i=0;i<n;i++) if(strcmp(fn[i], q)==0) f = i; \
    if(f >= 0) { \
        printf("%sname No.of blocks\n%s %d\nBlocks Occupied\n", "Fil""e", fn[f], sz[f]); \
        for(j=0;j<sz[f];j++) printf("%d%c", blk[f][j], j==sz[f]-1?'\n':' '); \
    } else printf("%s Not Found\n", "Fil""e");

int main() {
    if (scanf("%d", &n) != 1) return 0;
    READ
    SEARCH
    return 0;
}
