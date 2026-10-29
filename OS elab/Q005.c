#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define CMDS 5
#define TOKENS 4
#define MAXWORDS 100

int cl[CMDS];
int idx[CMDS];
char *lists[CMDS][MAXWORDS];
char *tokens[TOKENS]={"[N]","[AV]","[V]","[AJ]"};
char *cmds[CMDS]={"NOUNS","ADVERBS","VERBS","ADJECTIVES","END"};
char story[500], line[100];
int cur = -1;

#define READ while(fgets(line, sizeof(line), stdin)) { \
    line[strcspn(line, "\r\n")] = 0; \
    if (strcmp(line, "END") == 0) break; \
    int found = -1; \
    for (int i = 0; i < CMDS - 1; i++) if (strcmp(line, cmds[i]) == 0) { found = i; break; } \
    if (found != -1) cur = found; \
    else if (cur != -1) lists[cur][cl[cur]++] = strdup(line); \
}

#define PRINT_STORY for(int round=0; round<2; round++) { \
    char buf[500]; strcpy(buf, story); \
    char *w = strtok(buf, " "); \
    int first = 1; \
    while(w) { \
        if (!first) printf(" "); \
        first = 0; \
        int t_idx = -1; \
        for(int t=0; t<TOKENS; t++) if(strcmp(w, tokens[t]) == 0) { t_idx = t; break; } \
        if(t_idx != -1) printf("%s", lists[t_idx][idx[t_idx]++]); \
        else printf("%s", w); \
        w = strtok(NULL, " "); \
    } \
    printf("\n"); \
}

int main() {
    if (!fgets(story, sizeof(story), stdin)) return 0;
    story[strcspn(story, "\r\n")] = 0;
    READ
    PRINT_STORY
    return 0;
}
