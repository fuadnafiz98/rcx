#include<stdio.h>

int main() {
    int count = 1;
    for(int i = 0; i < 1000000000; i++) {
        count++;
    }
    printf("-->%d\n", count);
}