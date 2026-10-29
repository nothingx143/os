#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

typedef pair<int, char> pr;

bool cmp(pr &p1,pr &p2) {
    if (p1.first != p2.first) return p1.first < p2.first;
    return p1.second > p2.second;
}

#define COUNT_CHARS for (char c : s) freq[c - 'a']++;
#define INIT_PR for (int i = 0; i < 26; i++) a[i] = {freq[i], (char)('a' + i)};
#define PRINT_PR for (int i = 0; i < 26; i++) cout << a[i].second << (i == 25 ? "" : " "); cout << "\n";
#define SOLVE_BODY string s; cin >> s; int freq[26] = {0}; COUNT_CHARS; pr a[26]; INIT_PR; sort(a, a + 26, cmp); PRINT_PR;

void solve() {
    SOLVE_BODY;
}

#define RUN_TESTS int t; cin >> t; while (t--) solve();

int main() {
    RUN_TESTS;
    return 0;
}
