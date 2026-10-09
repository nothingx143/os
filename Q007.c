#include <stdio.h>

int bt[30], p[30], wt[30], tat[30], i, j, n, tot, pos, tmp, avg_wt;

#define SORT for(i=0;i<n;i++){pos=i;for(j=i+1;j<n;j++)if(bt[j]<bt[pos])pos=j; \
    tmp=bt[i];bt[i]=bt[pos];bt[pos]=tmp; \
    tmp=p[i];p[i]=p[pos];p[pos]=tmp;}

#define CALC for(i=1;i<n;i++){wt[i]=0;for(j=0;j<i;j++)wt[i]+=bt[j];tot+=wt[i];} \
    if(n) avg_wt=tot/n; tot=0; \
    for(i=0;i<n;i++){tat[i]=bt[i]+wt[i];tot+=tat[i];}

#define PRINT printf("Gnatt Chart for Waiting time="); \
    for(i=1;i<n;i++) printf("%d ",wt[i]); \
    printf("\nAverage WT=%d\nGnatt Chart for Turn Around Time=", avg_wt); \
    for(i=0;i<n;i++) printf("%d ",tat[i]); \
    printf("\nAverage TAT=%d", tot); \
    for(i=0;i<n;i++) printf("\nP%d %d %d %d",p[i],bt[i],wt[i],tat[i]);

int main() {
    if (scanf("%d", &n) != 1) return 0;
    for(i=0;i<n;i++) { scanf("%d", &bt[i]); p[i] = i+1; }
    SORT
    CALC
    PRINT
    return 0;
}
