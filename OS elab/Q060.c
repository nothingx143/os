#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) < 1) return 0;
    long long a[n];
    long long biggest = -1, big = -1, small = -1;
    for (int i = 0; i < n; i++) {
        scanf("%lld", a + i);
        if(a[i]>biggest) {
            small = big;
            big = biggest;
            biggest = a[i];
        } else if (a[i] > big) {
            small = big;
            big = a[i];
        } else if (a[i] > small) {
            small = a[i];
        }
        if(biggest<big) biggest = big;
        if (i < 2) printf("-1\n");
        else printf("%lld\n", biggest * big * small);
    }
    return 0;
}