#include <stdio.h>

long long times[100005];
long long pref[100005];

int lower_bound(long long val, int n) {
    int l = 1, r = n, ans = n + 1;
    while (l <= r) {
        int mid = (l + r) / 2;
        if (times[mid] >= val) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

int main() {
    int q, type, cnt = 0;
    if (scanf("%d", &q) != 1) return 0;
    while (q--) {
        scanf("%d", &type);
        if (type == 1) {
            long long x, t;
            scanf("%lld %lld", &x, &t);
            cnt++;
            times[cnt] = t;
            pref[cnt] = pref[cnt - 1] + x;
        } else {
            long long k, t;
            scanf("%lld %lld", &k, &t);
            int idx = lower_bound(t - k, cnt);
            if (idx <= cnt) {
                printf("%lld\n", pref[cnt] - pref[idx - 1]);
            } else {
                printf("0\n");
            }
        }
    }
    return 0;
}
