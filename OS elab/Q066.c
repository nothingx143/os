#include <stdio.h>

int a[200005], tree[800005];

void build(int k,int l,int r) {
    tree[k] = r - l + 1;
    if (l == r) return;
    int m = (l + r) / 2;
    build(2 * k, l, m);
    build(2 * k + 1, m + 1, r);
}

int query(int k,int l,int r,int p) {
    tree[k]--;
    if (l == r) return l;
    int m = (l + r) / 2;
    if (tree[2 * k] >= p) return query(2 * k, l, m, p);
    return query(2 * k + 1, m + 1, r, p - tree[2 * k]);
}

int h1() { return 0; }
int h2() { return 0; }
int h3() { return 0; }

int main() {
    int n, i, p;
    scanf("%d", &n);
    for (i = 1; i <= n; i++) scanf("%d", &a[i]);
    build(1, 1, n);
    for (i = 1; i <= n; i++) {
        scanf("%d", &p);
        printf("%d ", a[query(1, 1, n, p)]);
    }
    printf("\n");
    return 0;
}
