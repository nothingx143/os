#include <stdio.h>
#include <stdlib.h>
int main()
{
    int req[8] = {95, 180, 34, 119, 11, 123, 62, 64};
    int n = 8, head = 50, size = 200, i, j, temp, index = 0, total = 0, pos;
    for (i = 0; i < n - 1; i++) for (j = 0; j < n - i - 1; j++)
        if (req[j] > req[j + 1]) { temp = req[j]; req[j] = req[j + 1]; req[j + 
1] = temp; }
    for (i = 0; i < n; i++) if (req[i] > head) { index = i; break; }
    printf("SCAN Disk Scheduling (head moving towards higher tracks)\n");
    printf("Initial head position = %d, disk size = %d\n", head, size);
    printf("Seek sequence: %d", head); pos = head;
    for (i = index; i < n; i++) { total += abs(req[i] - pos); pos = req[i]; 
printf(" -> %d", pos); }
    total += abs(size - 1 - pos); pos = size - 1; printf(" -> %d", pos);
    for (i = index - 1; i >= 0; i--) { total += abs(req[i] - pos); pos = 
req[i]; printf(" -> %d", pos); }
    printf("\nTotal head movement = %d\n", total);
    return 0;
}
