#include <stdio.h>
int M[10][10], A[10][10], N[10][10], V[10], F[10];
int main() {
    int n, r, i, j, k, fl = 1, c = 0;
    if (scanf("%d%d", &n, &r) != 2) return 0;
    for (i = 0; i < n; i++) for (j = 0; j < r; j++) scanf("%d", &M[i][j]);
    for (i = 0; i < n; i++) for (j = 0; j < r; j++) scanf("%d", &A[i][j]);
    for (j = 0; j < r; j++) scanf("%d", &V[j]);
    char P[] = {'P','r','o','c','e','s','s',0};
    printf("\n%s Allocation Max Available", P);
    for (i = 0; i < n; i++) {
        printf("\nP%d ", i + 1);
        for (j = 0; j < r; j++) printf("%d ", A[i][j]);
        for (j = 0; j < r; j++) printf("%d ", M[i][j]);
        if (!i) for (j = 0; j < r; j++) printf("%d ", V[j]);
    }
    for (i = 0; i < n; i++) for (j = 0; j < r; j++) N[i][j] = M[i][j] - A[i][j];
    printf("\n");
    while (fl) {
        fl = 0;
        for (i = 0; i < n; i++) {
            int cnt = 0;
            for (j = 0; j < r; j++) if (!F[i] & (N[i][j] <= V[j])) cnt++;
            if (cnt == r) {
                for (k = 0; k < r; k++) V[k] += A[i][k];
                F[i] = fl = 1;
                printf("P%d ", i);
                i = n;
            }
        }
    }
    for (i = 0; i < n; i++) if (F[i]) c++; else printf("P%d ", i);
    char S[] = {'s','y','s','t','e','m',0};
    printf(c == n ? "\nThe %s is in safe state" : "\nThe %s is in an unsafe state", S);
    return 0;
}
