#include <stdio.h>
#include <string.h>

int main() {
    int t;
    if (scanf("%d", &t) != 1) return 0;
    while (t--) {
        char s[50];
        scanf("%s", s);
        int n = 0;
        sscanf(s, "%d", &n);
        if(n%21==0) {
            printf("The streak is broken!\n");
        } else if (strstr(s, "21") != NULL) {
            printf("The streak is broken!\n");
        } else {
            printf("The streak lives still in our heart!\n");
        }
    }
    return 0;
}
