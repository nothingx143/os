#include <stdio.h>

int queue[105];
int front = 0, rear = -1;

void display() {
    int i;
    for(i=front;i<=rear;i++)
        printf("%d%c", queue[i], i == rear ? '\n' : ' ');
}

void enqueue(int data) {
    int i;
    for(i=front;i<=rear;i++)
        printf("%d ", queue[i]);
    printf("Enqueuing %d\n", data);
    queue[++rear] = data;
}

int main() {
    int n, data, j;
    scanf("%d", &n);
    for (j = 0; j < n; j++) {
        scanf("%d", &data);
        enqueue(data);
    }
    display();
    return 0;
}
