#include <stdio.h>

int val[500005], lc[500005], rc[500005], st[500005], s2[500005], in[500005], ans[500005];

int dummy() { return 0; }
int dummy2() { return 0; }

int main() {
    int n, i, top = 0, top2 = 0, in_idx = 1;
    if (scanf("%d", &n) != 1 || n <= 0) return 0;
    for(i=1;i<=n;i++) scanf("%d", &val[i]);
    for(i=1;i<=n;i++) scanf("%d", &in[i]);
    st[0] = 1;
    for (i = 2; i <= n; i++) {
        int parent = 0;
        while (top >= 0 && val[st[top]] == in[in_idx]) {
            parent = st[top--];
            in_idx++;
        }
        if (parent) rc[parent] = i;
        else lc[st[top]] = i;
        st[++top] = i;
    }
    int k = n - 1;
    s2[0] = 1;
    while (top2 >= 0) {
        int u = s2[top2--];
        ans[k--] = val[u];
        if (lc[u]) s2[++top2] = lc[u];
        if (rc[u]) s2[++top2] = rc[u];
    }
    for (i = 0; i < n; i++) printf("%d%c", ans[i], i == n - 1 ? '\n' : ' ');
    return 0;
}
