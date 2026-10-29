#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

#define SOLVE { \
    int N; cin >> N; string s; cin >> s; \
    vector<int> b(N+1); \
    for (int i = 0; i < N; i++) b[i+1] = b[i] + (s[i] - '0'); \
    int len = (N + 1) / 2, ans = 0; \
    for (int i = len; i <= N; i++) ans = max(ans, b[i] - b[i - len]); \
    cout << ans << endl; \
}

int main() {
    int T, k;
    if (cin >> T) for(k=1;k<=T;++k) SOLVE
    return 0;
}
