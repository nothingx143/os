#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next; 
};

void sortedInsert(struct Node** head_ref, struct Node* new_node) {
    struct Node* current = *head_ref;
    if (current == NULL) {
        new_node->next = new_node;
        *head_ref = new_node;
    } else if (current->data >= new_node->data) {
        while (current->next != *head_ref)
            current = current->next;
        current->next = new_node;
        new_node->next = *head_ref;
        *head_ref = new_node;
    } else {
        while (current->next != *head_ref && current->next->data < new_node->data)
            current = current->next;
        new_node->next = current->next;
        current->next = new_node;
    }
}

int main() {
    int n, val;
    if (scanf("%d", &n) != 1) return 0;
    struct Node* head = NULL;
    for (int i = 0; i < n; i++) {
        scanf("%d", &val);
        struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
        temp->data = val;
        temp->next = NULL;
        sortedInsert(&head, temp);
    }
    struct Node* temp = head;
    if (head != NULL) {
        do {
            printf("%d", temp->data);
            temp = temp->next;
            if (temp != head) printf(" ");
        } while (temp != head);
    }
    return 0;
}