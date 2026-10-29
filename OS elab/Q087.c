#include <stdio.h>

#define MAXN 100005
#define UNION_BODY parent[u] = v; sz[v] += sz[u]; comps--; if (sz[v] > max_sz) max_sz = sz[v];
#define INIT for (i = 1; i <= n; i++) { parent[i] = i; sz[i] = 1; }

int parent[MAXN], sz[MAXN], n, m, comps, max_sz = 1, i, u, v;

int find(int x) {
    if (parent[x] == x) return x;
    return parent[x] = find(parent[x]);
}

int join(int i,int j) {
    int u = find(i), v = find(j);
    if (u != v) {
        UNION_BODY;
    }
    return v;
}

int main() {
    scanf("%d%d", &n, &m);
    comps = n;
    INIT;
    while (m--) {
        scanf("%d%d", &u, &v);
        join(u, v);
        printf("%d %d\n", comps, max_sz);
    }
    return 0;
}
