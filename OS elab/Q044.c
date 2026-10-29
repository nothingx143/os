#include <stdio.h>

typedef long long int llint;
#define M 1000005

int n, a[M], nxt[M], prv[M], T[M], top;
llint stack[M];

void push(llint num) { stack[top++]=num; }
llint pop() { return stack[--top]; }
llint peek() { return stack[top - 1]; }
int empty() { return !top; }
int sz() { return top; }

void run_st(int *target, int start, int end, int step) {
    top = 0;
    for (int i = start; i != end; i += step) {
        while (!empty() && a[i] > a[peek()]) target[pop()] = i;
        push(i);
    }
}

void upd(int d, int s) { if (s > T[d]) T[d] = s; }
void chk(int i) { if (nxt[i] < n) upd(nxt[i] - i - 1, i - prv[i]); }
void calc() { for (int i = 0; i < n; i++) chk(i); }

llint sum() {
    llint s = 0;
    for (int i = 0; i < n; i++) s += T[i];
    return s;
}

void init() {
    for (int i = 0; i < n; i++) { nxt[i] = n; prv[i] = -1; }
}

int main() {
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", a + i);
    init();
    run_st(nxt, 0, n, 1);
    run_st(prv, n - 1, -1, -1);
    calc();
    printf("%lld\n", sum());
    return 0;
}
