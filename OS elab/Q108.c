#include <stdio.h>
#include <string.h>

int first[200005];
char s[100005];

int main() {
    int n, sum = 0, max_len = 0;
    scanf("%d %s", &n, s);
    memset(first, -1, sizeof(first));
    for(int i=0;i<n;i++) {
        sum += 1 - 2 * (s[i] - '0');
        if (sum > 0) {
            max_len = i + 1;
        } else {
            int p = first[sum - 1 + n];
            if (p != -1) {
                if (i - p > max_len) max_len = i - p;
            }
            if (first[sum + n] == -1) first[sum + n] = i;
        }
    }
    printf("%d\n", max_len);
    return 0;
}
