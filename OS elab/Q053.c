#include <stdio.h>

int f, n, a[999], b[999], pf;

int in_frame(int x) {
    for (int j = 0; j < f; j++)
        if (x == b[j]) return 1;
    return 0;
}

void solve() {
    for (int i = 0; i < n; i++) {
        if (!in_frame(a[i])) {
            b[pf % f] = a[i];
            pf++;
        }
    }
}

int main() {
    if (scanf("%d%d", &f, &n) < 2) return 0;
    for (int i = 0; i < f; i++) b[i] = -1;
    for (int i = 0; i < n; i++) scanf("%d", a + i);
    solve();
    printf("Faults=%d", pf);
    return 0;
}