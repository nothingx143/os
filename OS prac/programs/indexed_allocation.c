#include <stdio.h>
int main()
{
    int disk[50], i, j, k;
    int indexBlock[3] = {9, 20, 9};
    int files[3][4] = {{1, 2, 3, 4}, {10, 11, 12, 13}, {30, 31, 32, 
33}};

    int blocks[3] = {4, 4, 4}, count;
    for (i = 0; i < 50; i++) disk[i] = 0;
    printf("Indexed File Allocation\n");
    for (i = 0; i < 3; i++)
    {
        printf("\nFile %d : index block = %d\n", i + 1, 
indexBlock[i]);
        if (disk[indexBlock[i]] == 1) { printf("Index block %d is already allocated\n", indexBlock[i]); continue; }
        count = 0;
        for (j = 0; j < blocks[i]; j++) if (disk[files[i][j]] == 0) 
count++;
        if (count == blocks[i])
        {
            disk[indexBlock[i]] = 1;
            for (j = 0; j < blocks[i]; j++) disk[files[i][j]] = 1;
            printf("Allocated. File indexed:\n");
            for (k = 0; k < blocks[i]; k++) printf("%d ---> %d : %d\n", indexBlock[i], files[i][k], disk[files[i][k]]);
        }
        else printf("Some blocks are already allocated\n");
    }
    return 0;
}
