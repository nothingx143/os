#include <stdio.h>

int f, n, fr[20], p[1005], pf, i, j, r, m, k, d, x;

int at(int *a, int l, int v) {
    for (x = 0; x < l && a[x] != v; x++);
    return x;
}

int opt(int c) {
    r = m = 0;
    for (k = 0; k < f; k++)
        if (fr[k] < 0) return k;
        else if ((d = c + at(p + c, n - c, fr[k])) > m) m = d, r = k;
    return r;
}

void init() {
    for (i = 0; i < n;) fr[i < f ? i : 0] = -1, scanf("%d", p + i++);
}

void pr() {
    for (j = 0; j < f;) printf("%d\t", fr[j++]);
    putchar(10);
}

int main() {
    scanf("%d%d", &f, &n);
    init();
    for (i = 0; i < n; i++) {
        if (at(fr, f, p[i]) >= f) fr[opt(i + 1)] = p[i], pf++;
        pr();
    }
    printf("Total Page Faults = %d\n", pf);
}
