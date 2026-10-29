#include <stdio.h>

char cc[500005];
long long last[128];

int main() {
    scanf("%s", cc);
    long long total = 1, mod = 1000000007;
    int i;
    for(i=0;cc[i];i++) {
        long long cur = total;
        total = (total * 2 - last[(unsigned char)cc[i]] + mod) % mod;
        last[(unsigned char)cc[i]] = cur;
    }
    printf("%lld", (total - 1 + mod) % mod);
    return 0;
}