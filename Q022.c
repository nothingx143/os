#include <stdio.h>

int main() {
    int rows, i, j;
    if (scanf("%d", &rows) != 1) return 0;
    for(i=1;i<=rows;i++) {
        for (j = 1; j <= i; j++) {
            if (i == rows || j == 1 || j == i)
                printf("1 ");
            else
                printf("0 ");
        }
        printf("\n");
    }
    return 0;
}
