#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char nums[13][256] = {
    "ZERO", "ONE", "TWO", "THREE", "FOUR",
    "FIVE", "SIX", "SEVEN", "EIGHT", "NINE",
    "TEN", "ELEVEN", "TWELVE"
};

int main() {
    char s[64];
    int cnt[26] = {0}, n, v;
    while (scanf("%s", s) == 1) {
        v = atoi(s);
        if (v == 999) {
            printf("%s.", s);
            break;
        }
        printf("%s ", s);
        if (v >= 0 && v <= 12) {
            for (int j = 0; nums[v][j]; j++) cnt[nums[v][j] - 'A']++;
        }
    }
    for(n=0;n<26;n++) {
        while (cnt[n] > 0) {
            printf(" %c", 'A' + n);
            cnt[n]--;
        }
    }
    printf("\n");
    return 0;
}
