#include <iostream>
#include <stack>
#include <string>
#include <cctype>

using namespace std;

bool isOperand(char x) {
    return isalnum(x);
}

string postToPre(string post_exp) {
    stack<string> s;
    int len = post_exp.length();
    for (int i = 0; i < len; i++) {
        if (isOperand(post_exp[i])) {
            string op(1, post_exp[i]);
            s.push(op);
        } else {
            string op1 = s.top(); s.pop();
            string op2 = s.top(); s.pop();
            s.push(post_exp[i] + op2 + op1);
        }
    }
    return s.top();
}

int main() {
    string post_exp;
    if (cin >> post_exp) {
        cout << postToPre(post_exp) << endl;
    }
    return 0;
}
