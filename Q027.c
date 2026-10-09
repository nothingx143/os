#include <stdio.h>

int main() {
    int n, a[105], c[1005] = {0}, max_cnt = 0, best = 0;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        scanf("%d", &a[i]);
        c[a[i]]++;
        if (c[a[i]] > max_cnt) {
            max_cnt = c[a[i]];
            best = a[i];
        }
    }
    printf("%d\n", best);
    return 0;
}
