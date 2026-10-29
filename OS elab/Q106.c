#include <stdio.h>

void printSums(int N) {
    int start = 1, end = 1, sum = 1;
    while (start <= N / 2) {
        if (sum < N) {
            end++;
            sum += end;
        } else if (sum > N) {
            sum -= start;
            start++;
        } else {
            for (int i = start; i <= end; i++) {
                printf("%d ", i);
            }
            printf("\n");
            sum -= start;
            start++;
        }
    }
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    printSums(n);
    return 0;
}
