#include <stdio.h>
int main()
{
    int pages[] = {1, 2, 3, 2, 1, 5, 2, 1, 6, 2, 5, 6, 3, 1, 3};
    int n = 15, frames = 3, frame[3], freq[3], arrival[3];
    int i, j, hit, used = 0, faults = 0, victim;
    printf("LFU Page Replacement\nPage\tFrame1\tFrame2\tFrame3\tResult\n");
    for (i = 0; i < n; i++)
    {
        hit = -1;
        for (j = 0; j < used; j++) if (frame[j] == pages[i]) hit = j;
        if (hit != -1) freq[hit]++;
        else
        {
            faults++;
            if (used < frames) { frame[used] = pages[i]; freq[used] = 
1; arrival[used] = i; used++; }
            else
            {
                victim = 0;
                for (j = 1; j < frames; j++)
                    if (freq[j] < freq[victim] || (freq[j] == 
freq[victim] && arrival[j] < arrival[victim])) victim = j;
                frame[victim] = pages[i]; freq[victim] = 1; 
arrival[victim] = i;
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
