#include <stdio.h>

int t, n, i, ans, max_prod, max_r, l[105], r[105];

#define READ for(i=0;i<n;i++) scanf("%d",&l[i]); for(i=0;i<n;i++) scanf("%d",&r[i]);

#define SOLVE max_prod = -1; max_r = -1; ans = 0; \
    for(i=0;i<n;i++) { \
        int p = l[i] * r[i]; \
        if(p > max_prod || (p == max_prod && r[i] > max_r)) { \
            max_prod = p; max_r = r[i]; ans = i + 1; \
        } \
    } \
    printf("%d\n", ans);

int main() {
    if (scanf("%d", &t) != 1) return 0;
    while(t--) {
        scanf("%d", &n);
        READ
        SOLVE
    }
    return 0;
}
