#include <stdio.h>

int main() {
    int T, n;
    long long d, x[1005];
    scanf("%d", &T);
    for(int t=0;t<T;t++) {
        scanf("%d %lld", &n, &d);
        for(int j=0;j<n;j++) scanf("%lld", &x[j]);
        for(int i=n-1;i>=0;i--) d -= d % x[i];
        printf("%lld\n", d);
    }
    return 0;
}
