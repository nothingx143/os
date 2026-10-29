#include <stdio.h>

int main() {
    int f = 0, n = 0, p[100], b[2];
    scanf("%d%d", &f, &n);
    for (int i = 0; i < n; i++) scanf("%d", &p[i]);
    b[0] = n;
    b[1] = -1;
    printf("\n%d %d ", b[0], b[1]);
    for (int i = 0; i < f - 1; i++) {
        b[1 - (i % 2)] = p[i];
        printf("\n%d %d ", b[0], b[1]);
    }
    printf("\nTotal Page Faults:%d", f);
    return 0;
}