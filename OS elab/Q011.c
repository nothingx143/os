#include <stdio.h>

int num, n, i, g, arr[1005];

#define READ for(i=0;i<num;i++) scanf("%d",&arr[i]); scanf("%d",&n);

#define SEARCH for(i=0;i<num;i++){if(arr[i]==n){g=1;printf("%d found at location %d",n,i+1);break;}} \
    if(!g) printf("%d is not present in array", n);

int main() {
    if (scanf("%d", &num) != 1) return 0;
    puts("Sequential file");
    READ
    SEARCH
    return 0;
}
