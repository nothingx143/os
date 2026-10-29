#include <stdio.h>

#define N 100005
#define M 200005

int n, m, dfn[N], rev[N], T, p[N], sdom[N], idom[N], dsu[N], mn[N];
int head[N], to[M], nxt[M], rhead[N], rto[M], rnxt[M], ec;
int bhead[N], bnxt[N], ans[N], ac, e, i, v, u, w, par;

void add(int a, int b) {
    to[++ec] = b, nxt[ec] = head[a], head[a] = ec;
    rto[ec] = a, rnxt[ec] = rhead[b], rhead[b] = ec;
}

void dfs(int cur) {
    dfn[cur] = ++T, rev[T] = cur;
    for (int edge = head[cur]; edge; edge = nxt[edge])
        if (!dfn[to[edge]]) p[to[edge]] = cur, dfs(to[edge]);
}

int fnd(int cur) {
    if (dsu[cur] == cur) return cur;
    int root = fnd(dsu[cur]);
    if (dfn[sdom[mn[dsu[cur]]]] < dfn[sdom[mn[cur]]]) mn[cur] = mn[dsu[cur]];
    return dsu[cur] = root, mn[cur];
}

void step1(int idx) {
    w = rev[idx];
    for (e = rhead[w]; e; e = rnxt[e]) {
        v = rto[e];
        if (dfn[v] && dfn[sdom[u = fnd(v)]] < dfn[sdom[w]]) sdom[w] = sdom[u];
    }
    bnxt[w] = bhead[sdom[w]], bhead[sdom[w]] = w, dsu[w] = par = p[w];
    for (e = bhead[par]; e; e = bnxt[e])
        v = e, u = fnd(v), idom[v] = (sdom[u] == sdom[v]) ? par : u;
    bhead[par] = 0;
}

void solve() {
    for (i = 1; i <= n; i++) sdom[i] = dsu[i] = mn[i] = i;
    dfs(1);
    for (i = T; i >= 2; i--) step1(i);
    for (i = 2; i <= T; i++) {
        w = rev[i];
        if (idom[w] != sdom[w]) idom[w] = idom[idom[w]];
    }
}

int main() {
    scanf("%d%d", &n, &m);
    while(m--) scanf("%d%d", &u, &v), add(u, v);
    solve();
    for (w = n; w; w = idom[w]) ans[ac++] = w;
    printf("%d\n", ac);
    for (i = ac - 1; i >= 0; i--) printf("%d ", ans[i]);
    puts("");
}
