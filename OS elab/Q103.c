#include <stdio.h>
#include <stdlib.h>

int search(int arr[],int n,int x) {
    int i = 0;
    while (i < n) {
        if (arr[i] == x) return i;
        i += abs(arr[i] - x);
    }
    return -1;
}

int main() {
    int n, x;
    int arr[20];
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    scanf("%d", &x);
    printf("%d\n", search(arr, n, x));
    return 0;
}
