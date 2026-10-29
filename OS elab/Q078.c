#include <stdio.h>

void input(long *,int);

#define FOR_I for(i=0;i<n;i++)
#define FOR_K for(k=0;k<n;k++)
#define FOR_B for(b=29;b>=0;b--)

long a[300005], ans;
int n, i, b, c, k;

void input(long *x, int m) {
    FOR_I scanf("%ld", &x[i]);
}

int ok(long m) {
    c = 0;
    FOR_K c += ((a[k] & m) == m);
    return c > 1;
}

void solve() {
    FOR_B ans |= ((long)ok(ans | (1L << b)) << b);
}

int main() {
    scanf("%d", &n);
    input(a, n);
    solve();
    printf("%ld\n", ans);
    return 0;
}
