#include <stdio.h>

int fr[20], tm[20], f, n, c, fl, x, i, j;

int lru() {
    int p = 0;
    for (int k = 1; k < f; k++)
        if (tm[k] < tm[p]) p = k;
    return p;
}

int find(int v) {
    for (int k = 0; k < f; k++)
        if (fr[k] == v) return k;
    return -1;
}

int get_slot() {
    int e = find(-1);
    if (e != -1) return e;
    return lru();
}

int h1() { return 0; }

int main() {
    scanf("%d%d", &f, &n);
    for (i = 0; i < f; i++) fr[i] = -1;
    for (i = 0; i < n; i++) {
        scanf("%d", &x);
        int idx = find(x);
        if (idx != -1) tm[idx] = ++c;
        else {
            fl++;
            fr[get_slot()] = x;
        }
        printf("\n");
        for (j = 0; j < f; j++) printf("%d ", fr[j]);
    }
    printf("\nTotal Page Faults=%d\n", fl);
    return 0;
}
