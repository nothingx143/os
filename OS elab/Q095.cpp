#include <iostream>
#include <set>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, q, i;
    if (cin >> n >> q) {
        set<int> s;
        for(i=0;i<q;i++) {
            int type, val;
            cin >> type >> val;
            if (type == 1) {
                s.insert(val);
            } else {
                auto it = s.lower_bound(val);
                if (it != s.end()) cout << *it << "\n";
                else cout << -1 << "\n";
            }
        }
    }
    return 0;
}
