#include <stdio.h>

long long a[3005];
int n, i, j, k;

int find_g(int j) {
    for (k = j + 1; k < n; k++)
        if (a[k] < a[j]) return k;
    return -1;
}

void solve() {
    for(i=0;i<n;i++) {
        long long ans = -1;
        for (j = i + 1; j < n; j++) {
            if(a[j]>a[i]) {
                int g = find_g(j);
                if (g >= 0) ans = a[g];
                break;
            }
        }
        printf("%lld ", ans);
    }
}

int main() {
    if (scanf("%d", &n) < 1) return 0;
    for(i=0;i<n;i++) scanf("%lld", a + i);
    solve();
    return 0;
}