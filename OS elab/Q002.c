#include <stdio.h>

#define SIM for(time=0,i=0; remain && steps++ < 5000; ) { \
    if(rt[i]<=q && rt[i]>0) { time+=rt[i]; rt[i]=0; s=1; } \
    else if(rt[i]>0) { rt[i]-=q; time+=q; } \
    if(rt[i]==0 && s) { \
        remain--; \
        printf("F%d %d %d %d\n", i+1, bt[i], time-at[i], time-at[i]-bt[i]); \
        wt += time-at[i]-bt[i]; \
        tat += time-at[i]; \
        s = 0; \
    } \
    if(i==n-1) i=0; \
    else if(at[i+1]<=time) i++; \
    else i=0; \
}

int at[50], bt[50], rt[50], n, q, i, time, remain, s, steps;
float wt, tat;

int main() {
    if (scanf("%d", &n) != 1) return 0;
    remain = n;
    for (i = 0; i < n; i++) {
        scanf("%d %d", at + i, bt + i);
        rt[i] = bt[i];
    }
    scanf("%d", &q);
    SIM
    float wavg = wt / n;
    float tavg = tat / n;
    printf("Average Waiting Time:%.6f\nAverage Turnaround Time:%.6f\n", wavg, tavg);
    return 0;
}
