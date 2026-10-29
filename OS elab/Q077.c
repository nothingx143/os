#include <stdio.h>

int n, off, x, pages, i;

void print_table() {
    for (i = 0; i < pages; i++)
        printf("%d %d\n", i, 5 + i);
}

int main() {
    while (scanf("%d%d", &n, &off) == 2) {
        scanf("%d", &x);
        pages = n / 4;
        printf("Total Number of pages:%d\npage no:0\npage table\n", pages);
        print_table();
        printf("Equivalent physical address:5 %d\n", off);
    }
    return 0;
}
