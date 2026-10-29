#include <stdio.h>
#include <stdlib.h>

#define M 524287
#define FND(h, x, p) p = (x) & M; while (h[p] && h[p] != (x)) p = (p + 1) & M
#define RD scanf("%d", &v), ins(v)
#define CMP int cmp(const void *x, const void *y) { return *(int*)x - *(int*)y; }

CMP

int h1[524288], h2[524288], a[200005], b[200005], N, Q, i, na, nb, mx, v, p, q;

void ins(int x) {
    FND(h1, x, p);
    if (!h1[p]) {
        h1[p] = a[na++] = x;
        mx = x > mx ? x : mx;
    } else if (x < mx) {
        FND(h2, x, q);
        if (!h2[q]) h2[q] = b[nb++] = x;
    }
}

int main() {
    scanf("%d", &N);
    for(i=0;i<N;i++) RD;
    scanf("%d", &Q);
    while (Q--) {
        RD;
        printf("%d\n", na + nb);
    }
    qsort(a, na, 4, cmp);
    qsort(b, nb, 4, cmp);
    while (nb) a[na++] = b[--nb];
    for (i = 0; i < na; i++) printf("%d ", a[i]);
}
