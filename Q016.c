#include <stdio.h>

int n, i, x, cur, top, st[1005];

#define SOLVE cur=1; top=0; \
    for(i=0;i<n;i++) { \
        scanf("%d", &x); \
        while(top > 0 && st[top-1] == cur) { top--; cur++; } \
        if(x == cur) cur++; else st[top++] = x; \
    } \
    while(top > 0 && st[top-1] == cur) { top--; cur++; } \
    if(cur == n+1) puts("sequential"); else puts("not sequential");

int main() {
    while(scanf("%d", &n) == 1 && n > 0) {
        SOLVE
    }
    return 0;
}
