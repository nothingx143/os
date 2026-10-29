#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int a[100005];

int main() {
    int T;
    if (scanf("%d", &T) != 1) return 0;
    while(T--) {
        int n;
        if (scanf("%d", &n) != 1) break;
        for (int i = 0; i < n; i++) {
            scanf("%d", &a[i]);
        }
        qsort(a, n, sizeof(int), cmp);
        int ans = 0;
        int survived = 1;
        for (int i = 0; i < n; i++) {
            int advance = i + (i / 6);
            if (a[i] - advance <= 0) {
                survived = 0;
                ans = i;
                break;
            }
        }
        if (survived) {
            printf("Rick now go and save Carl and Judas\n");
        } else {
            printf("Goodbye Rick\n%d\n", ans);
        }
    }
    return 0;
}