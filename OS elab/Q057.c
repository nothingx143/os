#include <stdio.h>

int F[1005], T[1005], m, n, rate;

int get_time(int j) {
    return T[j];
}

void display() {
    for (int j = 0; j < m; j++) printf("%d ", F[j]);
    printf("\n");
}

int get_target(int p) {
    int empty = -1, lru = 0;
    for (int j = 0; j < m; j++) {
        if (F[j] == p) return j;
        if (empty == -1 && F[j] == -1) empty = j;
        if (get_time(j) < get_time(lru)) lru = j;
    }
    if (empty != -1) return empty;
    rate++;
    return lru;
}

void step(int p, int time) {
    int target = get_target(p);
    F[target] = p;
    T[target] = time;
    display();
}

int main() {
    int p;
    if (scanf("%d %d", &m, &n) != 2) return 0;
    for (int j = 0; j < m; j++) F[j] = -1;
    for (int i = 0; i < n; i++) {
        scanf("%d", &p);
        step(p, i);
    }
    printf("Fault rate:%d\n", rate);
    return 0;
}
