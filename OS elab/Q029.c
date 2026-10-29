#include <stdio.h>

#define MAX 50
#define INF 1000000000

int n, m, i, j, mn, ind;
int a[MAX], b[MAX];

#define INPUT \
    for (i = 0; i < n; i++) scanf("%d", &a[i]); \
    for (i = 0; i < m; i++) scanf("%d", &b[i]);

#define RUN_BEST_FIT \
    for (i = 0; i < m; i++) { \
        mn = INF; \
        ind = n; \
        for (j = 0; j < n; j++) { \
            if (a[j] >= b[i] && a[j] < mn) { \
                mn = a[j]; \
                ind = j; \
            } \
        } \
        if (ind < n) { \
            a[ind] -= b[i]; \
            printf("Process%d is allocated to Block%d\n", i + 1, ind + 1); \
        } else { \
            a[0] -= b[i]; \
            printf("Process%d is allocated to Block1\n", i + 1); \
        } \
        printf("after p1:"); \
        for (j = 0; j < n; j++) printf(" %d", a[j]); \
        printf("\n"); \
    }

int main() {
    if (scanf("%d %d", &n, &m) != 2) return 0;
    INPUT
    RUN_BEST_FIT
    return 0;
}
