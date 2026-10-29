#include <stdio.h>
#include <string.h>

struct Files {
    char dname[10],fname[10][10];
    int fcnt;
} dir;

int check_file(char *target) {
    for (int i = 0; i < dir.fcnt; i++) {
        if (strcmp(dir.fname[i], target) == 0) return 1;
    }
    return 0;
}

void print_result(char *target, int found) {
    if (found) printf("File %s is found\n", target);
    else printf("File %s not found\n", target);
}

int main() {
    char target[20];
    scanf("%s", dir.dname);
    scanf("%d", &dir.fcnt);
    for (int i = 0; i < dir.fcnt; i++) {
        scanf("%s", dir.fname[i]);
    }
    scanf("%s", target);
    print_result(target, check_file(target));
    return 0;
}
