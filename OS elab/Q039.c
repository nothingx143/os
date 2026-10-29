#include <stdio.h>

int m, n, a[9][9], b[9][9], v[9], t[9], f[9];

void p(int *x) {
    for (int j = 0; j < n; j++) printf("%d", x[j]);
}

void pr(int i) {
    printf("P%d ", i + 1);
    p(a[i]); putchar(' ');
    p(b[i]); putchar(' ');
    for (int j = 0; j < n; j++) printf("%d", a[i][j] - b[i][j]);
    putchar(' ');
    if (!i) {
        p(v); putchar(' ');
        p(t);
    }
    putchar('\n');
}

int can(int i) {
    int ok = !f[i];
    for (int j = 0; j < n; j++)
        ok &= (a[i][j] - b[i][j] <= t[j]);
    return ok;
}

void run(int i) {
    printf("P%d ", i + 1);
    for (int j = 0; j < n; j++) printf("%d", t[j] - a[i][j] + b[i][j]);
    putchar(' ');
    for (int j = 0; j < n; j++) {
        t[j] += b[i][j];
        printf("%d", t[j]);
    }
    putchar('\n');
    f[i] = 1;
}

void in_r(int i) {
    for (int j = 0; j < n; j++) scanf("%d", &a[i][j]);
    for (int j = 0; j < n; j++) {
        scanf("%d", &b[i][j]);
        t[j] += b[i][j];
    }
}

void rd() {
    for (int i = 0; i < m; i++) in_r(i);
    for (int j = 0; j < n; j++) {
        scanf("%d", &v[j]);
        t[j] = v[j] - t[j];
    }
}

int nxt() {
    for (int i = 0; i < m; i++)
        if (can(i)) return i;
    return -1;
}

void solve() {
    int c = 0, k;
    while ((k = nxt()) >= 0) {
        run(k);
        c++;
    }
    if (c == m)
        printf("The above sequence is a safe sequence\n");
    else
        printf("Deadlock Occurred\n");
}

void pr_all() {
    for (int i = 0; i < m; i++) pr(i);
}

int main() {
    if (scanf("%d%d", &m, &n) != 2) return 0;
    rd();
    pr_all();
    solve();
    return 0;
}
