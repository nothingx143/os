#include <stdio.h>

#define C c[j][0]
#define D c[j][1]
#define CHK if(C!=(k+1-s%2)/2)ok=0;s+=k;C=D=0;

int c[100005][2];
char *ans[] = {"No", "Yes"};

int main() {
    int t, m, j, x, s, ok, k;
    scanf("%d", &t);
    while (t--) {
        scanf("%d", &m);
        for(j=0;j<m;j++) { scanf("%d", &x); c[x][j % 2]++; }
        s = 0; ok = 1;
        for (j = 1; j <= 100000; j++) { k = C + D; if (k) { CHK } }
        puts(ans[ok]);
    }
}
