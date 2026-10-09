#include <stdio.h>

int n, i, bt[30], at[30], wt[30], tat[30];
char f[30][50];
double sw, st;

#define CALC for(i=0;i<n;i++) scanf("%s", f[i]); \
    for(i=0;i<n;i++) scanf("%d", &bt[i]); \
    for(i=0;i<n;i++) scanf("%d", &at[i]); \
    wt[0]=0; tat[0]=bt[0]; sw=0; st=tat[0]; \
    for(i=1;i<n;i++) { wt[i]=wt[i-1]+bt[i-1]; tat[i]=wt[i]+bt[i]; sw+=wt[i]; st+=tat[i]; }

#define PRINT puts("\nWaiting Time"); \
    for(i=0;i<n;i++) printf("Time Taken for %s=%d\n", f[i], wt[i]); \
    printf("Average Waiting Time=%f\nTurnAround Time\n", n ? sw/n : 0); \
    for(i=0;i<n;i++) printf("Time Taken for %s=%d\n", f[i], tat[i]); \
    printf("Average TurnAround Time=%f\n", n ? st/n : 0);

int main() {
    if (scanf("%d", &n) != 1) return 0;
    CALC
    PRINT
    return 0;
}
