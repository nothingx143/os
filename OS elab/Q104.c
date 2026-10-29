#include <stdio.h>
#include <string.h>

int main() {
    int t;
    if (scanf("%d", &t) != 1) return 0;
    while (t--) {
        char s[1005];
        scanf("%s", s);
        int suvo = 0, suvojit = 0;
        int len = strlen(s);
        for (int i = 0; i < len; ) {
            if (strncmp(&s[i], "SUVOJIT", 7) == 0) {
                suvojit++;
                i += 7;
            } else if (strncmp(&s[i], "SUVO", 4) == 0) {
                suvo++;
                i += 4;
            } else {
                i++;
            }
        }
        printf("SUVO = %d, SUVOJIT = %d\n", suvo, suvojit);
    }
    return 0;
}
