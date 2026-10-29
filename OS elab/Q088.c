#include <stdio.h>

long long dist2(long long x1, long long y1, long long x2, long long y2) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}

void solve_case() {
    long long r, x1, y1, x2, y2, x3, y3;
    scanf("%lld%lld%lld%lld%lld%lld%lld", &r, &x1, &y1, &x2, &y2, &x3, &y3);
    int c1 = dist2(x1, y1, x2, y2) <= r * r;
    int c2 = dist2(x1, y1, x3, y3) <= r * r;
    int c3 = dist2(x2, y2, x3, y3) <= r * r;
    if (c1 + c2 + c3 >= 2) printf("yes\n");
    else printf("no\n");
}

int main() {
    int t;
    scanf("%d", &t);
    while (t--) {
        solve_case();
    }
    return 0;
}
