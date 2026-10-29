#include <stdio.h>
#include <stdlib.h>

struct Crew {
    long long h;
    long long start;
    long long end;
} crew[100005];

int crew_cnt = 0;

void enqueue(long long h,long long start,long long end) {
    crew[crew_cnt].h = h;
    crew[crew_cnt].start = start;
    crew[crew_cnt].end = end;
    crew_cnt++;
}

int main() {
    long long H;
    int c, q;
    if (scanf("%lld%d%d", &H, &c, &q) != 3) return 0;
    while(c--) {
        long long h, s, e;
        if (scanf("%lld%lld%lld", &h, &s, &e) == 3) {
            enqueue(h, s, e);
        }
    }
    for (int k = 0; k < q; k++) {
        long long qh = 0, qt = 0;
        if (scanf("%lld%lld", &qh, &qt) != 2) {
            puts("YES");
            continue;
        }
        int allowed = 1;
        for (int i = 0; i < crew_cnt; i++) {
            if (qt >= crew[i].start && qt <= crew[i].end) {
                if (qh <= crew[i].h) {
                    allowed = 0;
                    break;
                }
            }
        }
        if (allowed) puts("YES");
        else puts("NO");
    }
    return 0;
}