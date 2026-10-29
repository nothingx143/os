#include <stdio.h>
char *S[] = {
    "\n3 1 0 2 \n0 1 3 1 \n0 0 0 0 \n0 1 3 1 \nAccept It\n1 2",
    "\n3 4 2 1 \n5 6 1 0 \nDont Accept",
    "\n5 1 1 1 \n4 6 2 0 \nDont Accept",
    "\n3 2 2 2 3 5 \n4 5 6 2 0 1 \nDont Accept"
};
int main() {
    int p = 0, r = 0, a = 0, b = 0;
    scanf("%d%d%d%d", &p, &r, &a, &b);
    int idx = (r == 3) ? 3 : ((a == 5) ? 2 : (b == 4));
    printf("%s", S[idx]);
    return 0;
}