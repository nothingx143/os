#include <stdio.h>

#define CALC for(i=0; i<n; i++) { \
    if (i > 0) wt[i] = wt[i-1] + b[i-1]; \
    tat[i] = wt[i] + b[i]; \
    sw += wt[i]; \
    st += tat[i]; \
    printf("F%d %.2f %.2f %.2f\n", i+1, b[i], wt[i], tat[i]); \
}

int n, i;
float b[100], wt[100], tat[100], sw, st;

int main() {
    if (scanf("%d", &n) != 1) return 0;
    for (i = 0; i < n; i++) scanf("%f", b + i);
    CALC
    printf("Average Waiting Time=%f\nAverage Turnaround Time=%f\n", sw / n, st / n);
    return 0;
}
