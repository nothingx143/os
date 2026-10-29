#include <stdio.h>
#include <stdlib.h>
#define L long long
#define QS qsort(a, n, 8, (void*)k)
#define CHK sum+=a[i];if(sum<(n-i)*x)break;ans=n-i;

L a[100005];

int k(const L*a,const L*b){return*a>*b?1:-1;}

int main() {
    int t, n, i, ans;
    L x, sum;
    scanf("%d", &t);
    while (t--) {
        scanf("%d %lld", &n, &x);
        for(i=0;i<n;i++) scanf("%lld", a + i);
        QS;
        sum = ans = 0;
        for(i=n-1;i>=0;i--) { CHK }
        printf("%d\n", ans);
    }
}
