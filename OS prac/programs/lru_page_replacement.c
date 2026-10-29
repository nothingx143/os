#include <stdio.h>
int main()
{
    int pages[] = {1, 2, 3, 2, 1, 5, 2, 1, 6, 2, 5, 6, 3, 1, 3};
    int n = 15, frames = 3, frame[3], last[3];
    int i, j, hit, used = 0, faults = 0, victim;
    printf("LRU Page Replacement\nPage\tFrame1\tFrame2\tFrame3\tResult\n");
    for (i = 0; i < n; i++)
    {
        hit = -1;
        for (j = 0; j < used; j++) if (frame[j] == pages[i]) hit = j;
        if (hit != -1) last[hit] = i;
        else
        {
            faults++;
            if (used < frames) { frame[used] = pages[i]; last[used] = 
i; used++; }
            else
            {
                victim = 0;
                for (j = 1; j < frames; j++) if (last[j] < 
last[victim]) victim = j;
                frame[victim] = pages[i]; last[victim] = i;
            }
        }
        printf("%d\t", pages[i]);
        for (j = 0; j < frames; j++) if (j < used) printf("%d\t", 
frame[j]); else printf("-\t");
        if (hit != -1) printf("Hit\n"); else printf("Fault\n");
    }
    printf("\nTotal page faults = %d\n", faults);
    return 0;
}
