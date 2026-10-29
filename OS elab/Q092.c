#include <stdio.h>
#include <math.h>

int main() {
    int t;
    scanf("%d", &t);
    double phi = (1.0 + sqrt(5.0)) / 2.0;
    while(t--) {
        long long a, b;
        scanf("%lld %lld", &a, &b);
        long long x = a, y = b;
        if (a > b) { x = b; y = a; }
        long long p = (long long)((y - x) * phi);
        puts(x == p ? "sami" : "canthi");
    }
    return 0;
}