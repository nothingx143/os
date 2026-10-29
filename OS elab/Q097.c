#include <stdio.h>
#include <stdbool.h>

#define MAX 200005

int b_crush[MAX], g_crush[MAX];
int b_tgt[MAX], g_tgt[MAX];
int in_b[MAX], in_g[MAX];

#define SOLVE_CASE(n, mx, mut) do { \
    int i; \
    for (i = 1; i <= n; i++) scanf("%d", &b_crush[i]); \
    for (i = 1; i <= n; i++) scanf("%d", &g_crush[i]); \
    for (i = 1; i < MAX; i++) b_tgt[i] = g_tgt[i] = in_b[i] = in_g[i] = 0; \
    for (i = 1; i <= n; i++) { \
        int g = b_crush[i], z = g_crush[g]; \
        if (z != i) { b_tgt[i] = z; in_b[z]++; } \
    } \
    for (i = 1; i <= n; i++) { \
        int b = g_crush[i], w = b_crush[b]; \
        if (w != i) { g_tgt[i] = w; in_g[w]++; } \
    } \
    for (i = 1; i <= n; i++) { \
        if (in_b[i] > mx) mx = in_b[i]; \
        if (in_g[i] > mx) mx = in_g[i]; \
    } \
    for (i = 1; i <= n; i++) { \
        if (b_tgt[i] > i && b_tgt[b_tgt[i]] == i) mut++; \
        if (g_tgt[i] > i && g_tgt[g_tgt[i]] == i) mut++; \
    } \
} while(0)

int main() {
    int t = 0;
    scanf("%d", &t);
    while(true) {
        int n = 0, mx = 0, mut = 0;
        if (t-- <= 0) break;
        scanf("%d", &n);
        SOLVE_CASE(n, mx, mut);
        printf("%d %d \n", mx, mut);
    }
    return 0;
}
