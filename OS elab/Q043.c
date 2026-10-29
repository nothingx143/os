#include <stdio.h>

int n, m, N, done, a[1000], f[50];

void P(int *p) {
    for (int j = 0; j < m; j++) printf("%d ", *p++);
}

void R(int p) {
    printf("P%d ", p + 1);
    P(a + N + p * m);
    P(a + p * m);
    if (!p) P(a + 2 * N);
    puts("");
}

int C(int p) {
    if (f[p]) return 0;
    int d = 0;
    for (int j = 0; j < m; j++)
        d += a[p * m + j] - a[N + p * m + j] > a[2 * N + j];
    return !d;
}

void U(int p) {
    f[p] = 1;
    done++;
    for (int j = 0; j < m; j++) a[2 * N + j] += a[N + p * m + j];
}

int step() {
    for (int p = 0; p < n; p++)
        if (C(p)) {
            U(p);
            return 1;
        }
    return 0;
}

void dead() {
    printf("System is in Deadlock");
    for (int i = 0; i < n; i++)
        if (!f[i]) printf(" P%d", i);
    puts("");
}

void rep() {
    while (step());
    if (done < n) dead();
    else puts("System is deadlock free");
}

int main() {
    scanf("%d%d", &n, &m);
    N = n * m;
    for (int i = 0; i < 2 * N + m; i++) scanf("%d", a + i);
    puts("\nProcess Allocation Max Available");
    for (int i = 0; i < n; i++) R(i);
    rep();
    return 0;
}
