#include <stdio.h>
int up[200005][20], depth[200005];
int lca(int a, int b) {
    if (depth[a] < depth[b]) { int t = a; a = b; b = t; }
    for (int k = 19; k >= 0; k--) if (depth[a] - (1 << k) >= depth[b]) a = up[a][k];
    if (a == b) return a;
    for (int k = 19; k >= 0; k--) if (up[a][k] != up[b][k]) { a = up[a][k]; b = up[b][k]; }
    return up[a][0];
}
int main() {
    int n, q;
    if (scanf("%d %d", &n, &q) != 2) return 0;
    depth[1] = 0; up[1][0] = 1;
    for (int i = 2; i <= n; i++) {
        int p; scanf("%d", &p);
        up[i][0] = p; depth[i] = depth[p] + 1;
    }
    for (int k = 1; k < 20; k++)
        for (int i = 1; i <= n; i++) up[i][k] = up[up[i][k - 1]][k - 1];
    while(q--) {
        int a, b;
        scanf("%d %d", &a, &b);
        printf("%d\n", lca(a, b));
    }
    return 0;
}