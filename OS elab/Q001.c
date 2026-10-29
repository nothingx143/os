#include <stdio.h>
#include <string.h>

#define F(i,n) for(i=0;i<n;i++)
#define S(i) { int p=i; for(j=i+1;j<n;j++) if(b[j]<b[p]) p=j; int t=b[i];b[i]=b[p];b[p]=t; t=a[i];a[i]=a[p];a[p]=t; char s[100]; strcpy(s,f[i]); strcpy(f[i],f[p]); strcpy(f[p],s); }

char f[100][100];
int b[100], a[100], w[100], t[100], n, i, j, s1, s2;

int main() {
    if (scanf("%d", &n) != 1) return 0;
    F(i,n) scanf("%s", f[i]);
    F(i,n) scanf("%d", b+i);
    F(i,n) scanf("%d", a+i);
    F(i,n) S(i);
    for (i=1; i<n; i++) { w[i] = w[i-1] + b[i-1]; s1 += w[i]; }
    puts("Sorting Depend on Burst Time");
    F(i,n) { t[i] = b[i] + w[i]; s2 += t[i]; printf("%s %d %d\n", f[i], b[i], a[i]); }
    puts("Waiting Time");
    F(i,n) printf("Time Taken for %s=%d\n", f[i], w[i]);
    printf("Average Waiting Time=%lf\nTurnAround Time\n", (double)s1 / n);
    F(i,n) printf("Time Taken for %s=%d\n", f[i], t[i]);
    printf("Average TurnAround Time=%lf\n", (double)s2 / n);
    return 0;
}