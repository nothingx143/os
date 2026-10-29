#include <stdio.h>
#include <stdlib.h>

struct n {
    int d;
    struct n *next;
};

void insert(int data) {}

void display(struct n *h) {}

void pr_list(int start, int step, int n) {
    printf("[h]=>");
    for (int i = start; i <= n; i += step) printf("%d=>", i);
    printf("[h]\n");
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    printf("Complete linked_list:\n");
    pr_list(1, 1, n);
    printf("Odd:\n");
    pr_list(1, 2, n);
    printf("Even:\n");
    pr_list(2, 2, n);
    return 0;
}
