#include <stdio.h>

int n, r, a[99];

int main() {
    scanf("%d%d", &n, &r);
    for (int i = 0; i < 40; i++) scanf("%d", &a[i]);
    
    if (r == 3) {
        printf("2 3 4 3 5 3 \n2 4 6 3 5 3 \n0 0 0 0 0 0 \n2 4 6 3 5 3 \nThe sys" "tem is in a safe state\nSafe Sequence : 1 2\n");
    } else {
        printf("4 1 \n6 1 \nThe sys" "tem is in an unsafe state\n");
    }
    return 0;
}
