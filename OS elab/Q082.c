#include <stdio.h>

int n, i;
long long a, b, c;

int main() {
    if (scanf("%d", &n) != 1) return 0;
    a = 0; b = 1;
    for (i = 0; i < n; i++) {
        printf("%lld", a);
        c = a + b;
        a = b;
        b = c;
    }
    printf("\n");
    return 0;
}
