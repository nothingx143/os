#include <stdio.h>
int main()
{
    int disk[50], i, j, k, start[4] = {5, 8, 20, 2}, len[4] = {3, 4, 
5, 4}, count;
    for (i = 0; i < 50; i++) disk[i] = 0;
    printf("Sequential File Allocation\n");
    for (i = 0; i < 4; i++)
    {
        count = 0;
        for (k = start[i]; k < start[i] + len[i]; k++) if (disk[k] == 
0) count++;
        printf("\nFile %d : start block = %d, length = %d\n", i + 1, 
start[i], len[i]);
        if (count == len[i])
        {
            for (j = start[i]; j < start[i] + len[i]; j++) { disk[j] 
= 1; printf("%d ---> %d\n", j, disk[j]); }
            printf("File %d is allocated to the disk\n", i + 1);
        }
        else printf("File %d is not allocated (blocks already in use) ", i + 1);
    }
    return 0;
}
