#include <stdio.h>

int p[1005][1005];
char s[1005];

int main() {
    int n, q, i, j, y1, x1, y2, x2;
    if (scanf("%d %d", &n, &q) != 2) return 0;
    for(i=1;i<=n;i++) {
        scanf("%s", s + 1);
        for (j = 1; j <= n; j++) {
            p[i][j] = (s[j] == '*') + p[i - 1][j] + p[i][j - 1] - p[i - 1][j - 1];
        }
    }
    while (q--) {
        scanf("%d %d %d %d", &y1, &x1, &y2, &x2);
        if (y1 > y2 || x1 > x2) printf("0\n");
        else printf("%d\n", p[y2][x2] - p[y1 - 1][x2] - p[y2][x1 - 1] + p[y1 - 1][x1 - 1]);
    }
    return 0;
}
