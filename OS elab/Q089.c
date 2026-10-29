#include <stdio.h>

typedef long long ll;
#define llu unsigned ll

ll power(ll a,ll b) {
    ll res = 1;
    while (b > 0) {
        if (b & 1) res *= a;
        a *= a;
        b >>= 1;
    }
    return res;
}

#define MAXN 1005
#define MAXM 200005
#define CHECK_NEI if (color[v] == 0) { color[v] = 3 - color[u]; q[qt++] = v; } else if (color[v] == color[u]) return 0;
#define READ_EDGES for (int i = 1; i <= n; i++) { int k, v; scanf("%d", &k); while (k--) { scanf("%d", &v); add_edge(i, v); add_edge(v, i); } }
#define COLOR_GRAPH for (int i = 1; i <= n; i++) { if (color[i] == 0 && !bfs(i)) { possible = 0; break; } }
#define PRINT_RES if (!possible) printf("-1\n"); else { for (int i = 1; i <= n; i++) putchar(color[i] == 1 ? 'L' : 'R'); putchar('\n'); }

int head[MAXN], to[MAXM], nxt[MAXM], color[MAXN], q[MAXN];
int ecnt, n;

void add_edge(int u,int v) {
    to[++ecnt] = v;
    nxt[ecnt] = head[u];
    head[u] = ecnt;
}

int bfs(int start) {
    int qh = 0, qt = 0;
    q[qt++] = start;
    color[start] = 1;
    while (qh < qt) {
        int u = q[qh++];
        for (int e = head[u]; e; e = nxt[e]) {
            int v = to[e];
            CHECK_NEI;
        }
    }
    return 1;
}

void solve_case() {
    scanf("%d", &n);
    ecnt = 0;
    for (int i = 1; i <= n; i++) { head[i] = 0; color[i] = 0; }
    READ_EDGES;
    int possible = 1;
    COLOR_GRAPH;
    PRINT_RES;
}

int main() {
    int t;
    if (scanf("%d", &t) == 1) {
        while (t--) solve_case();
    }
    return 0;
}
