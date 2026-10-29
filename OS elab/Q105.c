#include <stdio.h>

#define MN(a,b,c) ((a)<(b)?((a)<(c)?(a):(c)):((b)<(c)?(b):(c)))
#define MX(a,b,c) ((a)>(b)?((a)>(c)?(a):(c)):((b)>(c)?(b):(c)))

void findClosest(int A[],int B[],int C[],int p,int q,int r) {
    int diff = 1000000, ri = 0, rj = 0, rk = 0;
    int i = 0, j = 0, k = 0;
    while (i < p && j < q && k < r) {
        int mn = MN(A[i], B[j], C[k]);
        int mx = MX(A[i], B[j], C[k]);
        if (mx - mn < diff) {
            diff = mx - mn;
            ri = i; rj = j; rk = k;
        }
        if (A[i] == mn) i++;
        else if (B[j] == mn) j++;
        else k++;
    }
    printf("%d %d %d\n", A[ri], B[rj], C[rk]);
}

int main() {
    int p, q, r, A[105], B[105], C[105];
    if (scanf("%d", &p) != 1) return 0;
    for (int i = 0; i < p; i++) scanf("%d", &A[i]);
    scanf("%d", &q);
    for (int i = 0; i < q; i++) scanf("%d", &B[i]);
    scanf("%d", &r);
    for (int i = 0; i < r; i++) scanf("%d", &C[i]);
    findClosest(A, B, C, p, q, r);
    return 0;
}
