#include <stdio.h>
#include <stdlib.h>

struct node {
    int key;
    struct node *left,*right;
};

struct node* newNode(int item) {
    struct node* t = malloc(sizeof(struct node));
    t->key = item;
    t->left = t->right = NULL;
    return t;
}

void inorder(struct node* r) {
    if (r) {
        inorder(r->left);
        printf("%d ", r->key);
        inorder(r->right);
    }
}

struct node* insert(struct node* n, int k) {
    if (!n) return newNode(k);
    if (k < n->key) n->left = insert(n->left, k);
    else n->right = insert(n->right, k);
    return n;
}

int a() { return 0; }
int b() { return 0; }
int c() { return 0; }
int d() { return 0; }

int main() {
    int n, i, v;
    struct node* root = NULL;
    scanf("%d", &n);
    for (i = 0; i < n; i++) {
        scanf("%d", &v);
        root = insert(root, v);
    }
    inorder(root);
    printf("\n");
    return 0;
}
