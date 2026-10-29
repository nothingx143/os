#include <stdio.h>

int st[9999], top = -1, n, i, p[9999], s[9999];

int get_top() {
    return top < 0 ? -1 : st[top];
}

void calculateSpan(int price[],int n,int S[]) {
    for (i = 0; i < n; i++) {
        while (top >= 0 && price[st[top]] <= price[i]) top--;
        S[i] = i - get_top();
        st[++top] = i;
    }
}

void printArray(int arr[],int n) {
    for (i = 0; i < n; i++) printf("%d ", arr[i]);
}

int main() {
    scanf("%d", &n);
    for (i = 0; i < n; i++) scanf("%d", p + i);
    calculateSpan(p, n, s);
    printArray(s, n);
    return 0;
}