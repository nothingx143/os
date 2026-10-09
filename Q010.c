#include <stdio.h>

int n, i, j, pos, t, p[50], b[50], a[50], c[50];

#define READ for(i=0;i<n;i++) scanf("%d",&p[i]); \
    for(i=0;i<n;i++) scanf("%d",&b[i]); \
    for(i=0;i<n;i++) scanf("%d",&a[i]);

#define SORT for(i=0;i<n;i++){pos=i;for(j=i+1;j<n;j++)if(b[j]<b[pos])pos=j; \
    t=b[i];b[i]=b[pos];b[pos]=t; t=p[i];p[i]=p[pos];p[pos]=t;}

#define PRINT puts("The gantt chart"); \
    for(i=0;i<n;i++) printf("P%d ", p[i]); \
    printf("\n0 "); c[0]=0; \
    for(i=0;i<n;i++){c[i+1]=c[i]+b[i]; printf("%d ", c[i+1]);}

int main() {
    if (scanf("%d", &n) != 1) return 0;
    READ
    SORT
    PRINT
    return 0;
}
