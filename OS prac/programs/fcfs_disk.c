#include <stdio.h>
#include <stdlib.h>
int main()
{
    int req[8] = {95, 180, 34, 119, 11, 123, 62, 64};
    int n = 8, head = 50, i, total = 0;
    printf("FCFS Disk Scheduling\nInitial head position = %d\n", head);
    printf("Seek sequence: %d", head);
    for (i = 0; i < n; i++) { total += abs(req[i] - head); head = req[i]; 
printf(" -> %d", head); }
    printf("\nTotal head movement = %d\n", total);
    return 0;
}
