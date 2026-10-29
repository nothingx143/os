#include <stdio.h>

int main() {
    int n1, n2, i;
    if (scanf("%d %d", &n1, &n2) != 2) return 0;
    for (i = n1; i < n1 + n2; i++) printf("%d 1\n", i);
    puts("the file is allocated to disk");
    return 0;
}
