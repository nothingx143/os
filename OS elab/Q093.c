#include <stdio.h>
#include <stdlib.h>

#define MAXN 100005

struct Node {
    long long val;
    int idx;
} arr[MAXN];

long long a[MAXN];
int n;

int cmfn1(const void *a,const void *b) {
    const struct Node *x = (const struct Node*)a;
    const struct Node *y = (const struct Node*)b;
    if (x->val < y->val) return -1;
    if (x->val > y->val) return 1;
    return x->idx - y->idx;
}

#define LESS(mid) (arr[mid].val < tv || (arr[mid].val == tv && arr[mid].idx < ti))

int lower_bound(long long tv, int ti) {
    int l = 0, r = n, mid;
    while (l < r) {
        mid = (l + r) / 2;
        if (LESS(mid)) l = mid + 1;
        else r = mid;
    }
    return l;
}

int main() {
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        scanf("%lld", &a[i]);
        arr[i - 1].val = a[i] + 1LL * i * i;
        arr[i - 1].idx = i;
    }
    qsort(arr, n, sizeof(struct Node), cmfn1);
    long long ans = 0;
    for (int j = 1; j <= n; j++) {
        long long target = a[j] - 1LL * j * j;
        int left = lower_bound(target, 0);
        int right = lower_bound(target, j);
        ans += (right - left);
    }
    printf("%lld\n", ans);
    return 0;
}
