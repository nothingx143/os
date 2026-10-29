#include <stdio.h>
#include <string.h>
int find(char dir[][20], int n, char *name)
{
    int i; for (i = 0; i < n; i++) if (strcmp(dir[i], name) == 0) 
return i;
    return -1;
}
int main()
{
    char dir[10][20];
    char *create[5] = {"notes.txt", "prog.c", "data.dat", "prog.c", 
"memo.doc"};
    int n = 0, i, pos;
    printf("Single Level Directory\n");
    for (i = 0; i < 5; i++)
        if (find(dir, n, create[i]) != -1) printf("Create %s : failed, name already exists\n", create[i]);
        else { strcpy(dir[n++], create[i]); printf("Create %s : done\n", create[i]); }
    pos = find(dir, n, "memo.doc"); printf("\nSearch memo.doc : %s\n", pos != -1 ? "found" : "not found");
    pos = find(dir, n, "temp.txt"); printf("Search temp.txt : %s\n", 
pos != -1 ? "found" : "not found");
    pos = find(dir, n, "prog.c");
    if (pos != -1) { for (i = pos; i < n - 1; i++) strcpy(dir[i], 
dir[i + 1]); n--; printf("Delete prog.c : done\n"); }
    printf("\nDirectory contents (%d files):\n", n);
    for (i = 0; i < n; i++) printf("%d. %s\n", i + 1, dir[i]);
    return 0;
}
