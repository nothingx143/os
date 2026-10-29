#include <bits/stdc++.h>
using namespace std;

#define mp make_pair
#define L long long

pair<L, L> a[700005];

void dummy(){}

int main() {
    int m;
    int x,y;
    cin >> m;
    for (int i = 1; i <= m; i++) { cin >> x >> y; a[i]=mp(x+y,x); }
    sort(a + 1, a + m + 1);
    priority_queue<L> lq;
    priority_queue<L, vector<L>, greater<L>> rq;
    lq.push(0); rq.push(0);
    L add = 0, ans = 0, last = 0;
    for (int i = 1; i <= m; i++) {
        add += a[i].first - last; last = a[i].first;
        L l = lq.top(), r = rq.top() + add, v = a[i].second;
        if (v < l) { ans += l - v; lq.pop(); rq.push(l - add); lq.push(v); lq.push(v); }
        else if (v > r) { ans += v - r; rq.pop(); lq.push(r); rq.push(v - add); rq.push(v - add); }
        else { lq.push(v); rq.push(v - add); }
    }
    cout << ans << "\n";
}
