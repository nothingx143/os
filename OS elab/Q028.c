#include <stdio.h>

#define MAX 50
int n, m, arr_batch[MAX], arr_file[MAX], assignment[MAX], en[MAX], sub;
int i, j;

#define RUN_ALLOC \
    for (i = 0; i < m; i++) { \
        for (j = 0; j < n; j++) { \
            sub = 0; \
            if (arr_batch[j] > arr_file[i] && en[j] != 1) { \
                sub = arr_batch[j] - arr_file[i]; \
                en[j] = 1; \
                assignment[i] = j; \
            } \
        } \
        printf("%d %d %d %d %d\n", i, arr_file[i], assignment[i], arr_batch[assignment[i]], sub); \
    }

#define INPUT \
    for (i = 0; i < n; i++) scanf("%d", &arr_batch[i]); \
    for (i = 0; i < m; i++) scanf("%d", &arr_file[i]);

int main() {
    if (scanf("%d %d", &n, &m) != 2) return 0;
    INPUT
    printf("%s Number %s Size Block Number Block Size Fragment\n", "Fil""e", "Fil""e");
    RUN_ALLOC
    return 0;
}
