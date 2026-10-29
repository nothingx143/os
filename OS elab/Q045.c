#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int data;
    struct node* next;
} node;

typedef struct mystack {
    node* head;
    node* tail;
} mystack;

mystack* create_stack() {
    mystack* ms = malloc(sizeof(*ms));
    ms->head = ms->tail = NULL;
    return ms;
}

int is_empty(mystack* ms) {
    return ms->head == NULL;
}

int top_val(mystack* ms) {
    return ms->head->data;
}

void push(int data, mystack* ms) {
    node* temp = malloc(sizeof(*temp));
    temp->data = data;
    temp->next = ms->head;
    if (!ms->head) ms->tail = temp;
    ms->head = temp;
}

int pop(mystack* ms) {
    if (!ms->head) return -1;
    node* temp = ms->head;
    int val = temp->data;
    ms->head = ms->head->next;
    free(temp);
    return val;
}

void merge(mystack* ms1, mystack* ms2) {
    if (!ms1->head) {
        ms1->head = ms2->head;
        ms1->tail = ms2->tail;
        return;
    }
    if (!ms2->head) return;
    ms1->tail->next = ms2->head;
    ms1->tail = ms2->tail;
}

void read_push(mystack* ms, int count) {
    int val;
    for (int i = 0; i < count; i++) {
        scanf("%d", &val);
        push(val, ms);
    }
}

void print_stack(mystack* ms) {
    while (ms->head) {
        printf("%d", pop(ms));
        if (ms->head) printf(" ");
    }
    printf("\n");
}

int main() {
    int n, m;
    scanf("%d%d", &n, &m);
    mystack* ms1 = create_stack(), *ms2 = create_stack();
    read_push(ms1, n);
    read_push(ms2, m);
    merge(ms1, ms2);
    print_stack(ms1);
    return 0;
}
