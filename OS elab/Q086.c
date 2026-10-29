#include <stdio.h>

int mutex = 1, full = 0, empty = 3, x = 0, choice;

void producer() {
    --mutex;
    ++full;
    --empty;
    x++;
    printf("Producer produces the item %d\n", x);
    ++mutex;
}

void consumer() {
    --mutex;
    --full;
    ++empty;
    printf("Consumer consumes item %d\n", x);
    x--;
    ++mutex;
}

void handle_produce() {
    if (empty != 0) producer();
    else printf("Buffer is full\n");
}

void handle_consume() {
    if (full != 0) consumer();
    else printf("Buffer is empty\n");
}

void step(int c) {
    if (c == 1) handle_produce();
    else if (c == 2) handle_consume();
}

int main() {
    while (scanf("%d", &choice) == 1) {
        if (choice == 3) break;
        step(choice);
    }
    return 0;
}
