#include <stdio.h>

int main() {
    int n, q, m, a[1005];
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) scanf("%d", a + i);
    scanf("%d", &q);
    while(q--) {
        scanf("%d", &m);
        int c = 0, s = 0;
        for (int i = 0; i < n; i++) {
            if (a[i] <= m) {
                c++;
                s += a[i];
            }
        }
        printf("%d %d\n", c, s);
    }
    return 0;
}
