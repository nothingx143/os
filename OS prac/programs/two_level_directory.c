#include <stdio.h>
#include <string.h>
struct ufd { char name[20]; char file[10][20]; int n; };
int find(struct ufd *u, char *f)
{
    int i; for (i = 0; i < u->n; i++) if (strcmp(u->file[i], f) == 0) 
return i;
    return -1;
}
int main()
{
    struct ufd mfd[3], *u;
    char *uname[3] = {"user1", "user2", "user3"};
    int own[6] = {0, 0, 1, 1, 0, 2};
    char *fn[6] = {"a.txt", "b.c", "a.txt", "c.dat", "a.txt", "b.c"};
    int i, j, pos;
    for (i = 0; i < 3; i++) { strcpy(mfd[i].name, uname[i]); mfd[i].n 
= 0; }
    printf("Two Level Directory\n");
    for (i = 0; i < 6; i++)
    {
        u = &mfd[own[i]];
        if (find(u, fn[i]) != -1) printf("%s : create %s failed (already exists)\n", u->name, fn[i]);
        else { strcpy(u->file[u->n++], fn[i]); printf("%s : create %s done\n", u->name, fn[i]); }
    }
    pos = find(&mfd[1], "a.txt"); printf("\nSearch a.txt in user2 : %s\n", pos != -1 ? "found" : "not found");
    pos = find(&mfd[2], "a.txt"); printf("Search a.txt in user3 : %s\n", pos != -1 ? "found" : "not found");
    pos = find(&mfd[0], "b.c");
    if (pos != -1) { for (j = pos; j < mfd[0].n - 1; j++) 
strcpy(mfd[0].file[j], mfd[0].file[j + 1]); mfd[0].n--; 
printf("Delete b.c from user1 : done\n"); }
    printf("\nMaster File Directory\n");
    for (i = 0; i < 3; i++) { printf("%s : ", mfd[i].name); for (j = 
0; j < mfd[i].n; j++) printf("%s ", mfd[i].file[j]); printf("\n"); }
    return 0;
}
