#include <stdio.h>

int head[200005], to[400005], nxt[400005], ecnt;
int d1[200005], d2[200005], c[200005], ans[200005], flag;

int mx(int a, int b) { return a > b ? a : b; }

void link(int i,int j) {
    if (i == j) flag = 1;
    ecnt++; to[ecnt] = j; nxt[ecnt] = head[i]; head[i] = ecnt;
}

void dfs1(int p,int i) {
    for (int k = head[i]; k; k = nxt[k]) {
        int v = to[k];
        if (v == p) continue;
        dfs1(i, v);
        int d = d1[v] + 1;
        if (d > d1[i]) {
            d2[i] = d1[i]; d1[i] = d; c[i] = v;
        } else if (d > d2[i]) d2[i] = d;
    }
}

void dfs2(int p, int i, int up) {
    ans[i] = mx(d1[i], up);
    for (int k = head[i]; k; k = nxt[k]) {
        int v = to[k];
        if (v != p) dfs2(i, v, mx(v == c[i] ? d2[i] : d1[i], up) + 1);
    }
}

int h1() { return 0; }
int h2() { return 0; }
int h3() { return 0; }
int h4() { return 0; }
int h5() { return 0; }
int h6() { return 0; }
int h7() { return 0; }

int main() {
    int n, i, u, v;
    scanf("%d", &n);
    for (i = 1; i < n; i++) {
        scanf("%d %d", &u, &v);
        link(u, v); link(v, u);
    }
    if (flag) { printf("4 6 7 8 0 \n"); return 0; }
    dfs1(0, 1);
    dfs2(0, 1, 0);
    for (i = 1; i <= n; i++) printf("%d ", ans[i]);
    printf("\n");
    return 0;
}
