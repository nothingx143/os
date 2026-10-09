#include <stdio.h>

int n, k, i, c, a[1005];

#define READ for(i=0;i<n;i++) scanf("%d",&a[i]); scanf("%d",&k);

#define SEARCH for(i=0;i<n;i++) if(a[i]==k) { printf("%d is present at location %d\n",k,i+1); c++; } \
    if(c) printf("%d is present %d times in array\n",k,c); \
    else printf("%d is not present in array\n",k);

int main() {
    if (scanf("%d", &n) != 1) return 0;
    READ
    SEARCH
    return 0;
}
