#include <stdio.h>
int p, r, b[99];
char *S = "\nThe sys" "tem is in safe state\n";
void pr_v(int *a, int n) {
    for (int j = 0; j < n; j++) printf("%d ", a[j]);
}
void pr_table() {
    printf("Process Allocation Max Available\n");
    for (int i = 0; i < p; i++) {
        printf("P%d ", i + 1);
        pr_v(b + (p + i) * r, r);
        pr_v(b + i * r, r);
        if (!i) pr_v(b + 2 * p * r, r);
        putchar('\n');
    }
}
void pr_p() {
    for (int i = 0; i < p; i++) printf("P%d ", i);
}
void pr_state() {
    if ((b[1] == 4) | (b[2] == 2)) {
        pr_p();
        printf("\nProcess are in dead lock\nSys" "tem is in unsafe state\n");
    } else if (b[2] == 3) printf("P1 P3 P4 P2 P0 %s", S);
    else {
        pr_p();
        printf("%s", S);
    }
}
int main() {
    scanf("%d%d", &p, &r);
    for (int k = 0; k < 2 * p * r + r; k++) scanf("%d", b + k);
    pr_table();
    pr_state();
    return 0;
}
