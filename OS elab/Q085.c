#include <stdio.h>

#define MAXN 100005
#define MAXM 200005
#define READ_EDGES for (k = 0; k < m; k++) { scanf("%d%d", &u, &v); link(u, v); out_deg[u]++; in_deg[v]++; }
#define CHECK_DEGS if (out_deg[1] - in_deg[1] != 1 || in_deg[n] - out_deg[n] != 1) return 0; for (k = 2; k < n; k++) { if (in_deg[k] != out_deg[k]) return 0; } return 1;
#define HIERHOLZER stk[++top] = 1; while (top > 0) { int cur = stk[top]; if (head[cur]) { int e = head[cur]; head[cur] = nxt[e]; stk[++top] = to[e]; } else { path[++path_len] = cur; top--; } }
#define PRINT_PATH for (k = path_len; k >= 1; k--) printf("%d ", path[k]); printf("\n");
#define RUN_SOL if (!valid_deg()) { printf("IMPOSSIBLE\n"); return; } euler(); if (path_len != m + 1) { printf("IMPOSSIBLE\n"); return; } PRINT_PATH;

int head[MAXN], to[MAXM], nxt[MAXM], in_deg[MAXN], out_deg[MAXN];
int stk[MAXM], path[MAXM];
int n, m, k, u, v, edge_cnt, top, path_len;

void link(int i,int j) {
    to[++edge_cnt] = j;
    nxt[edge_cnt] = head[i];
    head[i] = edge_cnt;
}

int valid_deg() {
    CHECK_DEGS;
}

void read_input() {
    READ_EDGES;
}

void euler() {
    HIERHOLZER;
}

void output() {
    RUN_SOL;
}

int main() {
    scanf("%d%d", &n, &m);
    read_input();
    output();
    return 0;
}
