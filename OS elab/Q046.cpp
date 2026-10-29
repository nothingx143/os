#include <iostream>
#include <stack>
#include <string>
#include <cctype>

using namespace std;

bool isOperand(char x) {
    return isalnum(x);
}

string getInfix(string exp) {
    stack<string> s;
    int len = exp.length();
    for (int i = 0; i < len; i++) {
        if (isOperand(exp[i])) {
            string op(1, exp[i]);
            s.push(op);
        } else {
            string op1 = s.top(); s.pop();
            string op2 = s.top(); s.pop();
            s.push("(" + op2 + exp[i] + op1 + ")");
        }
    }
    return s.top();
}

int main() {
    string exp;
    if (cin >> exp) {
        cout << getInfix(exp) << endl;
    }
    return 0;
}
