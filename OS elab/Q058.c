#include <stdio.h>

int frames[1005], pages[1005], m, n, k = 0, faults = 0;

int get_frame(int j) {
    return frames[j];
}

void display() {
    for (int j = 0; j < m; j++) printf("%d ", frames[j]);
    printf("\n");
}

int is_present(int p) {
    for (int j = 0; j < m; j++)
        if (frames[j] == p) return 1;
    return 0;
}

void step(int p) {
    if (!is_present(p)) {
        frames[k] = p;
        k = (k + 1) % m;
        faults++;
    }
    display();
}

int main() {
    scanf("%d", &n);
    for (int i = 0; i < n; i++) scanf("%d", &pages[i]);
    scanf("%d", &m);
    for (int j = 0; j < m; j++) frames[j] = -1;
    for (int i = 0; i < n; i++) step(pages[i]);
    printf("Total Page Faults:%d\n", faults);
    return 0;
}
