#include <stdio.h>

#define MAX 200005
#define FULL(l, r, ql, qr) (ql <= l && r <= qr)
#define REC_UPD if (ql <= mid) upd(2 * k, l, mid, ql, qr); if (qr > mid) upd(2 * k + 1, mid + 1, r, ql, qr)
#define REC_QRY if (ql <= mid) res += qry(2 * k, l, mid, ql, qr); if (qr > mid) res += qry(2 * k + 1, mid + 1, r, ql, qr)

long long sum[800020], la[800020], ld[800020];
int t[MAX], n, q, type, a, b, i;

void apply(int k, int l, int r, long long a_val, long long d_val) {
    long long len = r - l + 1;
    sum[k] += len * a_val + len * (len - 1) / 2 * d_val;
    la[k] += a_val;
    ld[k] += d_val;
}

void push(int k, int l, int r) {
    int mid = (l + r) / 2;
    apply(2 * k, l, mid, la[k], ld[k]);
    apply(2 * k + 1, mid + 1, r, la[k] + (long long)(mid - l + 1) * ld[k], ld[k]);
    la[k] = ld[k] = 0;
}

void build(int k,int l,int r) {
    if (l == r) {
        sum[k] = t[l];
        return;
    }
    int mid = (l + r) / 2;
    build(2 * k, l, mid);
    build(2 * k + 1, mid + 1, r);
    sum[k] = sum[2 * k] + sum[2 * k + 1];
}

void upd(int k, int l, int r, int ql, int qr) {
    if (FULL(l, r, ql, qr)) {
        apply(k, l, r, l - ql + 1, 1);
        return;
    }
    push(k, l, r);
    int mid = (l + r) / 2;
    REC_UPD;
    sum[k] = sum[2 * k] + sum[2 * k + 1];
}

long long qry(int k, int l, int r, int ql, int qr) {
    if (FULL(l, r, ql, qr)) return sum[k];
    push(k, l, r);
    int mid = (l + r) / 2;
    long long res = 0;
    REC_QRY;
    return res;
}

void read_input() {
    for (i = 1; i <= n; i++) scanf("%d", &t[i]);
}

void proc_query() {
    scanf("%d%d%d", &type, &a, &b);
    if (type == 1) upd(1, 1, n, a, b);
    else printf("%lld\n", qry(1, 1, n, a, b));
}

int main() {
    scanf("%d%d", &n, &q);
    read_input();
    build(1, 1, n);
    while (q--) proc_query();
    return 0;
}
