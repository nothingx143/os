#include <stdio.h>

int cap[100005];

int main() {
    int n, m, k, ans = 0;
    if (scanf("%d %d %d", &n, &m, &k) != 3) return 0;
    for (int i = 0; i < n; i++) {
        int p;
        scanf("%d", &p);
        if (p < 1 || p > m) continue;
        if (cap[p] < k) {
            cap[p]++;
        } else {
            ans++;
            int x = (p % m) + 1, y = p;
            while(x!=y) {
                if (cap[x] < k) {
                    cap[x]++;
                    break;
                }
                x = (x % m) + 1;
            }
        }
    }
    printf("%d\n", ans);
    return 0;
}
