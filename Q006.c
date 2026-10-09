#include <stdio.h>
#include <string.h>

char colors[8][32] = {"RED","BLUE","YELLOW","ORANGE","PURPLE","GREEN","WHITE","BLACK"};
char mixes[8][8][32];
char c1[32], c2[32];
int i, j;

#define INIT for(i=0;i<8;i++) for(j=0;j<8;j++) strcpy(mixes[i][j], "N/A"); \
    for(i=0;i<8;i++) strcpy(mixes[i][i], colors[i]); \
    strcpy(mixes[0][2], "ORANGE"); strcpy(mixes[2][0], "ORANGE"); \
    strcpy(mixes[0][1], "PURPLE"); strcpy(mixes[1][0], "PURPLE"); \
    strcpy(mixes[1][2], "GREEN");  strcpy(mixes[2][1], "GREEN"); \
    for(i=0;i<6;i++) { \
        strcpy(mixes[i][6], "LIGHT "); strcat(mixes[i][6], colors[i]); strcpy(mixes[6][i], mixes[i][6]); \
        strcpy(mixes[i][7], "DARK ");  strcat(mixes[i][7], colors[i]); strcpy(mixes[7][i], mixes[i][7]); \
    }

int find_c(char *c) {
    for(i=0;i<8;i++) if(strcmp(c,colors[i])==0) return i;
    return -1;
}

void pr(int a, int b) {
    if (a < 0 || b < 0) puts("N/A");
    else puts(mixes[a][b]);
}

int main() {
    INIT
    while(scanf("%s %s", c1, c2) == 2) pr(find_c(c1), find_c(c2));
    return 0;
}
