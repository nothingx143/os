#include <stdio.h>

#define SWAP_AND_PRINT \
    for (int k = 0; k < n - 1; k += 2) { \
        int t = array[k]; \
        array[k] = array[k+1]; \
        array[k+1] = t; \
    } \
    for (int k = 0; k < n; k++) { \
        printf("%d%c", array[k], k == n - 1 ? '\n' : ' '); \
    }

int main() {
    int n;
    scanf("%d", &n);
    int array[n];
    for(int i=0;i<n;i++) scanf("%d", &array[i]);
    for(int i=0;i<n;i++) {
        for (int j = i + 1; j < n; j++) {
            if(array[i]>array[j]) {
                int t = array[i];
                array[i] = array[j];
                array[j] = t;
            }
        }
    }
    SWAP_AND_PRINT
    return 0;
}
