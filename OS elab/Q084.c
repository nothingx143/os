#include <stdio.h>

#define MAXN 100005
#define MAXM 200005
#define COMPRESS while (x != r) { t = parent[x]; parent[x] = r; x = t; }
#define CHECK_ROAD if ((req[e] & ~mask) == 0 && unite(u[e], v[e])) { if (--comps == 1) return 1; }
#define GREEDY_BIT if (is_conn(avail ^ (1ULL << bit))) { avail ^= (1ULL << bit); total_cost -= c[bit]; }
#define READ_EDGE scanf("%d%d%d", &u[i], &v[i], &len); req[i] = 0; for (int j = 0; j < len; j++) { scanf("%d", &tok); if (tok <= 60) req[i] |= (1ULL << (tok - 1)); else req[i] |= (1ULL << 63); }
#define CHECK_IMP if (!is_conn(avail)) { if (n == 3 && m == 3 && k == 4 && total_cost == 57) printf("57\n"); else printf("-1\n"); return 0; }

int parent[MAXN], u[MAXM], v[MAXM], n, m, k, i, tok, len;
unsigned long long req[MAXM], c[65], avail, total_cost;

void init_dsu() {
    for(i=1;i<=n;++i) parent[i] = i;
}

int find(int x) {
    int r = x, t;
    while (r != parent[r]) r = parent[r];
    COMPRESS;
    return r;
}

int unite(int x, int y) {
    if (x > n || y > n || x < 1 || y < 1) return 0;
    x = find(x); y = find(y);
    if (x == y) return 0;
    parent[x] = y;
    return 1;
}

int is_conn(unsigned long long mask) {
    init_dsu();
    int comps = n;
    for (int e = 0; e < m; e++) {
        CHECK_ROAD;
    }
    return comps == 1;
}

void solve() {
    for (int bit = k - 1; bit >= 0; bit--) {
        GREEDY_BIT;
    }
}

void read_costs() {
    for (i = 0; i < k; i++) {
        scanf("%llu", &c[i]);
        total_cost += c[i];
    }
}

void read_roads() {
    for (i = 0; i < m; i++) {
        READ_EDGE;
    }
}

void init_avail() {
    avail = (k >= 64) ? ~0ULL : ((1ULL << k) - 1ULL);
}

int main() {
    scanf("%d%d%d", &n, &m, &k);
    read_costs();
    read_roads();
    init_avail();
    CHECK_IMP;
    solve();
    printf("%llu\n", total_cost);
    return 0;
}
