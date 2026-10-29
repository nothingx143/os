#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node* next;
};

struct node *f = NULL;
struct node *r = NULL;

void enqueue(int d) {
    struct node* n;
    n = (struct node*)malloc(sizeof(struct node));
    n->data = d;
    n->next = NULL;
    if (f == NULL) {
        f = r = n;
        r->next = f;
    } else {
        r->next = n;
        r = n;
        n->next = f;
    }
}

void dequeue() {
    if (f == NULL) return;
    if (f == r) {
        free(f);
        f = r = NULL;
    } else {
        struct node* temp = f;
        f = f->next;
        r->next = f;
        free(temp);
    }
}

void display() {
    struct node* t;
    t = f;
    if (f == NULL) return;
    do {
        printf("%d ", t->data);
        t = t->next;
    } while (t != f);
    printf("\n");
}

int main() {
    int n, d;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        scanf("%d", &d);
        enqueue(d);
    }
    display();
    dequeue();
    display();
    dequeue();
    display();
    return 0;
}
