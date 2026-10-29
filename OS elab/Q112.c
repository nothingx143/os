#include <stdio.h>
#include <stdlib.h>
#define L long long
#define G x[j+1]-x[j]

L x[200005], d[200005];

int k(const L*a,const L*b){return*a>*b?1:-1;}

int main() {
    L m, r, a;
    int j, cnt = 0;
    scanf("%lld%lld%lld", &m, &r, &a);
    for(j=1;j<=m;++j) scanf("%lld", x + j);
    qsort(x + 1, m, 8, (void*)k);
    for (j = 1; j < m; j++) if (G > a) d[cnt++] = (G - 1) / a;
    qsort(d, cnt, 8, (void*)k);
    m = cnt + 1;
    for (j = 0; j < cnt && r >= d[j]; j++) { r -= d[j]; m--; }
    printf("%lld\n", m);
}
