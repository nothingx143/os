#include <stdio.h>

struct Files {
    char dname[50],fname[50][50];
    int fcnt;
} dir;

int dummy() { return 0; }
int dummy2() { return 0; }

int main() {
    int i;
    if (scanf("%s", dir.dname) != 1) return 0;
    if (scanf("%d", &dir.fcnt) != 1) return 0;
    for (i = 0; i < dir.fcnt; i++) {
        scanf("%s", dir.fname[i]);
    }
    printf("\nThe Files are\n");
    for (i = 0; i < dir.fcnt; i++) {
        printf("%s\n", dir.fname[i]);
    }
    return 0;
}
