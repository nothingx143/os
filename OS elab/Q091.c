#include <stdio.h>

char key[256], ans[256];
int n, ch, i;
char a, b, tmp;

int toInt(char a) {
    return (int)(unsigned char)a;
}

#define INIT_KEYS for (i = 0; i < 256; i++) key[i] = i;
#define READ_SWAPS for (i = 0; i < n; i++) { scanf(" %c %c", &a, &b); tmp = key[toInt(a)]; key[toInt(a)] = key[toInt(b)]; key[toInt(b)] = tmp; }
#define INVERT_KEYS for (i = 0; i < 256; i++) ans[toInt(key[i])] = i;
#define CONSUME_NL while ((ch = getchar()) != '\n' && ch != EOF);
#define PROCESS_TEXT while ((ch = getchar()) != EOF) putchar(ans[toInt(ch)]);
#define SOLVE INIT_KEYS; READ_SWAPS; INVERT_KEYS; CONSUME_NL; PROCESS_TEXT;

void solve() {
    SOLVE;
}

int main() {
    scanf("%d", &n);
    solve();
    return 0;
}
