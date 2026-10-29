#include <stdio.h>

int n, a[100005], stck[100005], top = -1;
long long ans = 0;

int main() {
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", a + i);
    for (int i = 0; i < n; i++) {
        while (top!=-1 && stck[top]<a[i]) {
            ans++;
            top--;
        }
        ans += (top != -1);
        stck[++top] = a[i];
    }
    printf("%lld\n", ans);
    return 0;
}
