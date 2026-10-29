#include <stdio.h>
int main()
{
    int blockSize[5] = {100, 50, 30, 120, 35};
    int processSize[4] = {40, 10, 30, 60};
    int nb = 5, np = 4, i, j, best;
    int allocation[4], occupied[5] = {0, 0, 0, 0, 0};
    for (i = 0; i < np; i++)
    {
        allocation[i] = -1; best = -1;
        for (j = 0; j < nb; j++)
            if (occupied[j] == 0 && blockSize[j] >= processSize[i])
                if (best == -1 || blockSize[j] < blockSize[best]) 
best = j;
        if (best != -1) { allocation[i] = best; occupied[best] = 1; }
    }
    printf("Best Fit Memory Allocation\nProcess\tSize\tBlock\n");
    for (i = 0; i < np; i++)
    {
        printf("P%d\t%d\t", i + 1, processSize[i]);
        if (allocation[i] != -1) printf("%d (size %d)\n", 
allocation[i] + 1, blockSize[allocation[i]]);
        else printf("Not Allocated\n");
    }
    return 0;
}
