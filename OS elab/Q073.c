#include <stdio.h>

#define MAX 1000002
#define LVL 20

int up[LVL][MAX], n, q, a, b, i, j;

void init() {
    for (i = 0; i < MAX; i++)
        up[0][i] = MAX;
    for (i = 0; i < n; i++) {
        scanf("%d%d", &a, &b);
        if (b < up[0][a]) up[0][a] = b;
    }
}

void prep() {
    for (i = MAX - 2; i >= 1; i--)
        if (up[0][i + 1] < up[0][i])
            up[0][i] = up[0][i + 1];
}

void lift() {
    for (j = 1; j < LVL; j++)
        for (i = 1; i < MAX; i++) {
            int nxt = up[j - 1][i];
            up[j][i] = (nxt < MAX) ? up[j - 1][nxt] : MAX;
        }
}

int main() {
    if (scanf("%d%d", &n, &q) != 2) return 0;
    init();
    prep();
    lift();
    while(q--) {
        scanf("%d%d", &a, &b);
        int ans = 0;
        for (j = LVL - 1; j >= 0; j--)
            if (up[j][a] <= b) {
                ans += (1 << j);
                a = up[j][a];
            }
        printf("%d\n", ans);
    }
    return 0;
}
