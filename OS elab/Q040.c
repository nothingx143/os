#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *next;
};

void insert_Data(struct node **head) {
    int n = 0;
    scanf("%d", &n);
    struct node dummy, *tail = &dummy;
    dummy.next = NULL;
    for (int i = 1; i <= n; i++) {
        tail->next = (struct node *)malloc(sizeof(struct node));
        tail = tail->next;
        tail->data = i;
        tail->next = NULL;
    }
    *head = dummy.next;
}

void delete_Alt(struct node **head) {
    struct node *a = *head;
    while (a && a->next) {
        struct node *b = a->next;
        a->next = b->next;
        free(b);
        a = a->next;
    }
}

void print_List(struct node *h) {
    while (h) {
        printf("%d ", h->data);
        h = h->next;
    }
}

int main() {
    struct node *head = NULL;
    insert_Data(&head);
    delete_Alt(&head);
    print_List(head);
    return 0;
}
