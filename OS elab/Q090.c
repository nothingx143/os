#include <stdio.h>

#define MAXN 505
#define MAXM 4005

struct CutEdge { int u, v; } cuts[MAXM];
int head[MAXN], to[MAXM], cap[MAXM], nxt[MAXM];
int parent_edge[MAXN], vis[MAXN], q[MAXN];
int edge_cnt, n, m, qh, qt, cut_cnt;

void link(int i,int h) {
    to[edge_cnt] = h;
    cap[edge_cnt] = 1;
    nxt[edge_cnt] = head[i];
    head[i] = edge_cnt++;
}

#define INIT_BFS for (int k = 1; k <= n; k++) parent_edge[k] = -1; qh = qt = 0; q[qt++] = s; parent_edge[s] = -2;
#define BFS_STEP int u = q[qh++]; for (int e = head[u]; e != -1; e = nxt[e]) { int v = to[e]; if (parent_edge[v] == -1 && cap[e] > 0) { parent_edge[v] = e; q[qt++] = v; } }
#define BFS_LOOP while (qh < qt && parent_edge[t] == -1) { BFS_STEP; } return parent_edge[t] != -1;

int bfs(int n,int s,int t) {
    INIT_BFS;
    BFS_LOOP;
}

#define AUGMENT int curr = n; while (curr != 1) { int e = parent_edge[curr]; cap[e] -= 1; cap[e ^ 1] += 1; curr = to[e ^ 1]; }
#define MAX_FLOW while (bfs(n, 1, n)) { AUGMENT; }
#define FIND_REACHABLE for (int k = 1; k <= n; k++) vis[k] = 0; qh = qt = 0; q[qt++] = 1; vis[1] = 1; while (qh < qt) { int u = q[qh++]; for (int e = head[u]; e != -1; e = nxt[e]) { int v = to[e]; if (!vis[v] && cap[e] > 0) { vis[v] = 1; q[qt++] = v; } } }
#define COLLECT_CUT cut_cnt = 0; for (int e = 0; e < edge_cnt; e += 2) { int a = to[e ^ 1], b = to[e]; if (vis[a] != vis[b]) { if (a > b) { int tmp = a; a = b; b = tmp; } cuts[cut_cnt].u = a; cuts[cut_cnt++].v = b; } }
#define SORT_CUTS for (int i = 0; i < cut_cnt; i++) { for (int j = i + 1; j < cut_cnt; j++) { if (cuts[i].u > cuts[j].u || (cuts[i].u == cuts[j].u && cuts[i].v > cuts[j].v)) { struct CutEdge tmp = cuts[i]; cuts[i] = cuts[j]; cuts[j] = tmp; } } }
#define PRINT_CUTS printf("%d\n", cut_cnt); for (int i = 0; i < cut_cnt; i++) printf("%d %d\n", cuts[i].u, cuts[i].v);
#define SOLVE_BODY MAX_FLOW; FIND_REACHABLE; COLLECT_CUT; SORT_CUTS; PRINT_CUTS;

void solve() {
    SOLVE_BODY;
}

#define READ_GRAPH for (int k = 1; k <= n; k++) head[k] = -1; for (int k = 0; k < m; k++) { int u, v; scanf("%d%d", &u, &v); if (u != v) { link(u, v); link(v, u); } }

int main() {
    scanf("%d%d", &n, &m);
    READ_GRAPH;
    solve();
    return 0;
}
