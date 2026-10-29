#include <stdio.h>
int main()
{
    int pages[] = {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1};
    int n = 14, frames = 3;
    int frame[3] = {-1, -1, -1};
    int i, j, hit, next = 0, faults = 0;
    printf("Page\tFrame1\tFrame2\tFrame3\tResult\n");
    for (i = 0; i < n; i++)
    {
        hit = 0;
        for (j = 0; j < frames; j++)
            if (frame[j] == pages[i]) hit = 1;
        if (hit == 0)
        {
            frame[next] = pages[i];
            next = (next + 1) % frames;
            faults++;
        }
        printf("%d\t", pages[i]);
        for (j = 0; j < frames; j++)
            if (frame[j] == -1) printf("-\t");
            else printf("%d\t", frame[j]);
        if (hit == 1) printf("Hit\n"); else printf("Fault\n");
    }
    printf("\nTotal page faults = %d\n", faults);
    printf("Total page hits = %d\n", n - faults);
    return 0;
}
