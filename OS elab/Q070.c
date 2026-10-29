#include <stdio.h>
#include <string.h>

#define N 64

double T[N][N], res[N][N];

void mult(double aa[][N],double bb[][N],double cc[][N]) {
    double t[N][N] = {0};
    for (int ik = 0; ik < 4096; ik++) {
        int i = ik >> 6, k = ik & 63;
        for (int j = 0; j < N; j++)
            t[i][j] += aa[i][k] * bb[k][j];
    }
    memcpy(cc, t, sizeof(t));
}

void power(int k) {
    for (int i = 0; i < N; i++) res[i][i] = 1.0;
    while (k > 0) {
        if (k & 1) mult(res, T, res);
        mult(T, T, T);
        k >>= 1;
    }
}

void init() {
    int dr[] = {-1, 1, 0, 0}, dc[] = {0, 0, -1, 1};
    for (int u = 0; u < 64; u++) {
        int r = u >> 3, c = u & 7;
        int cnt = (r > 0) + (r < 7) + (c > 0) + (c < 7);
        for (int d = 0; d < 4; d++) {
            int nr = r + dr[d], nc = c + dc[d];
            if (!((nr | nc) & ~7))
                T[u][nr * 8 + nc] = 1.0 / cnt;
        }
    }
}

int main() {
    int k, u, v;
    if (scanf("%d", &k) != 1) return 0;
    init();
    power(k);
    double ans = 0.0;
    for (v = 0; v < N; v++) {
        double p = 1.0;
        for (u = 0; u < N; u++) p *= (1.0 - res[u][v]);
        ans += p;
    }
    printf("%.6f\n", ans);
    return 0;
}
