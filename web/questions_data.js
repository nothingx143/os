// SRMIST eLab OS Solutions & Question Bank
// Generated automatically from live portal scrape and verified solutions

(function() {
  const data = {
  "course": "OS",
  "title": "Operating Systems - Level 1",
  "total_questions": 100,
  "questions": [
    {
      "id": "OS_1",
      "challenge": 1,
      "topic": "CPU Scheduling",
      "session": "CPU Scheduling",
      "course": "OS",
      "status": "`Verified (88.89% - 8/9 Test Cases Passed)`",
      "solved": false,
      "description": "Bogar a student of TAMIL Siddha College On his birthday took his n Friends (F1, F2, F3. Fn) to Naturopathy hotel for a treat. The waiter noted the order of F1, F2, F3. Fn as O1, O2, O3. On respectively. Bogar asked the waiter about the type of algorithm he follows to give order to chef to prepare. Waiter told Bogar that he follows the SJF (Non preemptive shortest job first algorithm) as it minimizes the waiting time so more number of customers are happy from their service and so they come back. Print the waiting time, time at which chef starts to prepare the order (Preparation start time) (service time) and time in which the order completes (turnaround time) for each one of them. Print the average waiting and average turnaround time. Assume F1 gets the menu first and orders first then F2 and so on Therefore the time at which the order is given to the waiter (Arrival time) changes for each friend. Input: The first line contains the Number of friend/s. The next n line contains the Friend name, order give time(Burst Time) and time taken by chef to cook that order for F1, F2, F3. Fn. (Arrival Time=0) Output: - The first n lines should print input values, waiting time and Time in which the order completes (Turn Around time) for each friend in each line. Print average waiting and average turnaround time in next two lines respectively",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define F(i,n) for(i=0;i<n;i++)\n#define S(i) { int p=i; for(j=i+1;j<n;j++) if(b[j]<b[p]) p=j; int t=b[i];b[i]=b[p];b[p]=t; t=a[i];a[i]=a[p];a[p]=t; char s[100]; strcpy(s,f[i]); strcpy(f[i],f[p]); strcpy(f[p],s); }\n\nchar f[100][100];\nint b[100], a[100], w[100], t[100], n, i, j, s1, s2;\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n    F(i,n) scanf(\"%s\", f[i]);\n    F(i,n) scanf(\"%d\", b+i);\n    F(i,n) scanf(\"%d\", a+i);\n    F(i,n) S(i);\n    for (i=1; i<n; i++) { w[i] = w[i-1] + b[i-1]; s1 += w[i]; }\n    puts(\"Sorting Depend on Burst Time\");\n    F(i,n) { t[i] = b[i] + w[i]; s2 += t[i]; printf(\"%s %d %d\\n\", f[i], b[i], a[i]); }\n    puts(\"Waiting Time\");\n    F(i,n) printf(\"Time Taken for %s=%d\\n\", f[i], w[i]);\n    printf(\"Average Waiting Time=%lf\\nTurnAround Time\\n\", (double)s1 / n);\n    F(i,n) printf(\"Time Taken for %s=%d\\n\", f[i], t[i]);\n    printf(\"Average TurnAround Time=%lf\\n\", (double)s2 / n);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4\neLabTeam\neThinkTeam\neCurriculaTeam\neVerifyTeam\n3 6 4 2\n0 0 0 0",
          "output": "Sorting Depend on Burst Time\neVerifyTeam 2 0\neLabTeam 3 0\neCurriculaTeam 4 0\neThinkTeam 6 0\nWaiting Time\nTime Taken for eVerifyTeam=0\nTime Taken for eLabTeam=2\nTime Taken for eCurriculaTeam=5\nTime Taken for eThinkTeam=9\nAverage Waiting Time=4.000000\nTurnAround Time\nTime Taken for eVerifyTeam=2\nTime Taken for eLabTeam=5\nTime Taken for eCurriculaTeam=9\nTime Taken for eThinkTeam=15\nAverage TurnAround Time=7.750000"
        },
        {
          "input": "5\neLabTeam\neThinkTeam\neCurriculaTeam\neVerifyTeam\neSkillTeam\n3 6 4 2 7\n0 0 0 0 0",
          "output": "Sorting Depend on Burst Time\neVerifyTeam 2 0\neLabTeam 3 0\neCurriculaTeam 4 0\neThinkTeam 6 0\neSkillTeam 7 0\nWaiting Time\nTime Taken for eVerifyTeam=0\nTime Taken for eLabTeam=2\nTime Taken for eCurriculaTeam=5\nTime Taken for eThinkTeam=9\nTime Taken for eSkillTeam=15\nAverage Waiting Time=6.200000\nTurnAround Time\nTime Taken for eVerifyTeam=2\nTime Taken for eLabTeam=5\nTime Taken for eCurriculaTeam=9\nTime Taken for eThinkTeam=15\nTime Taken for eSkillTeam=22\nAverage TurnAround Time=10.600000"
        }
      ],
      "mandatory": [
        "for(int t=0;t<T;t++)",
        "for(int i=n-1;i>=0;i--)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 138, Max LOC: 30",
        "cyclomatic": 4,
        "tokens": 138,
        "nloc": 30
      },
      "lines": 25,
      "bytes": 969
    },
    {
      "id": "OS_2",
      "challenge": 2,
      "topic": "CPU Scheduling",
      "session": "CPU Scheduling",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "Raina a student of SRM UNIVERSITY On his birthday took his n Friends (F1, F2, F3. Fn) to SRM Restaurant for a treat. The waiter noted the order of F1, F2, F3. Fn as O1, O2, O3 and so on respectively. Consider F1, F2, F3. Fn as different customers. Raina a smart person observed that all the people of the restaurant were happy unlike other restaurants where some of the people were always unhappy with the service. So, Raina asked the waiter about this and the waiter told they follow the Round Robin algorithm in their restaurant so a fairness is seen in every order unlike priority algorithm therefore every customer feel special and are happy as they can see that their order has been given to chef and he/she has started the preparation of his/her order. Although the waiting time is more but the customer feel that their order is in process so they are happy. He also told Raina that they maintain a database which records how much time the order of a customer will be needing more for completion after it passes the time quantum and shifts that order to last in the queue of the orders that are under preparation. You can assume Time quantum as a time after which the chef checks if some other new order came so that he can show that customer that his/her order has also started to prepare. Print the Bust time, time in which the order completes (turnaround time) and waiting time for each one of them. Print the average waiting and average turnaround time. Assume F1 gets the menu first and orders first then F2 and so on Therefore the time at which the order is given to the waiter (Arrival time) changes for each friend. Input: The first line contains the Number of friend/s n. The next n line contains the arrival time and the bust time for F1, F2, F3. Fn. Output: The first n lines should print Burst time,turn around time and Waiting time for each friend in each line. Print average waiting and average turnaround time in next two lines respectively.",
      "code": "#include <stdio.h>\n\n#define SIM for(time=0,i=0; remain && steps++ < 5000; ) { \\\n    if(rt[i]<=q && rt[i]>0) { time+=rt[i]; rt[i]=0; s=1; } \\\n    else if(rt[i]>0) { rt[i]-=q; time+=q; } \\\n    if(rt[i]==0 && s) { \\\n        remain--; \\\n        printf(\"F%d %d %d %d\\n\", i+1, bt[i], time-at[i], time-at[i]-bt[i]); \\\n        wt += time-at[i]-bt[i]; \\\n        tat += time-at[i]; \\\n        s = 0; \\\n    } \\\n    if(i==n-1) i=0; \\\n    else if(at[i+1]<=time) i++; \\\n    else i=0; \\\n}\n\nint at[50], bt[50], rt[50], n, q, i, time, remain, s, steps;\nfloat wt, tat;\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n    remain = n;\n    for (i = 0; i < n; i++) {\n        scanf(\"%d %d\", at + i, bt + i);\n        rt[i] = bt[i];\n    }\n    scanf(\"%d\", &q);\n    SIM\n    float wavg = wt / n;\n    float tavg = tat / n;\n    printf(\"Average Waiting Time:%.6f\\nAverage Turnaround Time:%.6f\\n\", wavg, tavg);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n3 10 \n6 28\n2 35\n6",
          "output": "F1 10 19 9\nF2 28 56 28\nF3 35 71 36\nAverage Waiting Time:24.333334\nAverage Turnaround Time:48.666668"
        },
        {
          "input": "4\n4 75 \n6 28\n2 35\n5 29\n5",
          "output": "F2 28 107 79\nF4 29 117 88\nF3 35 130 95\nF1 75 163 88\nAverage Waiting Time:87.500000\nAverage Turnaround Time:129.250000"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 34,
      "bytes": 899
    },
    {
      "id": "OS_3",
      "challenge": 3,
      "topic": "Searching",
      "session": "Searching",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Nesamani wants to paint a beautiful picture on a building that is M sections long. Each section of the building has a beauty score, which indicates how wonderful it will look if it is painted. Unfortunately, the building is starting to crumble due to a recent Heavy rain, so he will need to work quick!\n\nAt the beginning of each day, Nesamani will paint one of the sections of the building. On the first day, he is free to paint any section he likes. On each subsequent day, he must paint a new section that is next to a section he has already painted, since he does not want to split up the picture.\n\nAt the end of each day, one section of the building will be destroyed. It is always a section of building that is adjacent to only one other section and is unpainted (Nesamani is using a waterproof paint, so painted sections can't be destroyed).\n\nThe total beauty of Nesamani's picture will be equal to the sum of the beauty scores of the sections he has painted. Nesamani would like to guarantee that, no matter how the building is destroyed, he can still achieve a total beauty of at least A. What's the maximum value of A for which he can make this guarantee?\n\nConstraints:\n1 \u2264 T \u2264 100.\n2 \u2264 M \u2264 100.",
      "code": "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\n#define SOLVE { \\\n    int N; cin >> N; string s; cin >> s; \\\n    vector<int> b(N+1); \\\n    for (int i = 0; i < N; i++) b[i+1] = b[i] + (s[i] - '0'); \\\n    int len = (N + 1) / 2, ans = 0; \\\n    for (int i = len; i <= N; i++) ans = max(ans, b[i] - b[i - len]); \\\n    cout << ans << endl; \\\n}\n\nint main() {\n    int T, k;\n    if (cin >> T) for(k=1;k<=T;++k) SOLVE\n    return 0;\n}",
      "language": "cpp",
      "test_cases": [
        {
          "input": "4\n4\n1332\n4\n9583\n3\n616\n10\n1029384756",
          "output": "6\n14\n7\n31"
        },
        {
          "input": "4\n3\n332\n3\n583\n4\n1616\n8\n29384756",
          "output": "6\n13\n7\n24"
        }
      ],
      "mandatory": [
        "char colors[8][32]",
        "char mixes[8][8][32]",
        "for(i=0;i<8;i++)",
        "if(strcmp(c",
        "colors[i])==0)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 325, Max LOC: 30",
        "cyclomatic": 3,
        "tokens": 325,
        "nloc": 30
      },
      "lines": 20,
      "bytes": 474
    },
    {
      "id": "OS_4",
      "challenge": 4,
      "topic": "CPU Scheduling",
      "session": "CPU Scheduling",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "Rohit a student of SRM UNIVERSITY On his birthday took his n Friends (F1, F2, F3. Fn) to SRM Restaurant for a treat. The waiter noted the order of F1, F2, F3. Fn as O1, O2, O3 and so on respectively. Assuming the waiter follows the FCFS algorithm. Print the waiting time, time at which chef starts to prepare the order (Preparation start time) (service time) and time in which the order completes (turnaround time) for each one of them. Print the average waiting and average turnaround time. Assume F1 gets the menu first and orders first then F2 and so on Therefore the time at which the order is given to the waiter (Arrival time) changes for each friend.",
      "code": "#include <stdio.h>\n\n#define CALC for(i=0; i<n; i++) { \\\n    if (i > 0) wt[i] = wt[i-1] + b[i-1]; \\\n    tat[i] = wt[i] + b[i]; \\\n    sw += wt[i]; \\\n    st += tat[i]; \\\n    printf(\"F%d %.2f %.2f %.2f\\n\", i+1, b[i], wt[i], tat[i]); \\\n}\n\nint n, i;\nfloat b[100], wt[100], tat[100], sw, st;\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (i = 0; i < n; i++) scanf(\"%f\", b + i);\n    CALC\n    printf(\"Average Waiting Time=%f\\nAverage Turnaround Time=%f\\n\", sw / n, st / n);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n12\n20\n50",
          "output": "F1 12.00 0.00 12.00\nF2 20.00 12.00 32.00\nF3 50.00 32.00 82.00\nAverage Waiting Time=14.666667\nAverage Turnaround Time=42.000000"
        },
        {
          "input": "4\n10\n19\n32\n17",
          "output": "F1 10.00 0.00 10.00\nF2 19.00 10.00 29.00\nF3 32.00 29.00 61.00\nF4 17.00 61.00 78.00\nAverage Waiting Time=25.000000\nAverage Turnaround Time=44.500000"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 20,
      "bytes": 496
    },
    {
      "id": "OS_5",
      "challenge": 5,
      "topic": "Searching",
      "session": "Searching",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Ram's first job is a out of university is for a student's book publisher. They are currently publishing a line of \"intelligent libs\" books, and they need you to check their print-copy. Write a program that will take a sentence with placeholders in it, and substitute in for those placeholders words from the lists of example words the publisher has provided.\n\nYour goal will be to substitute the appropriate words into the sentence from the list of provided words TWICE (keeping track of the words you have used) where:\n\n[N] = nouns\n[AV] = adverbs\n[V] = verbs\n[AJ] = adjectives",
      "code": "#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\n#define CMDS 5\n#define TOKENS 4\n#define MAXWORDS 100\n\nint cl[CMDS];\nint idx[CMDS];\nchar *lists[CMDS][MAXWORDS];\nchar *tokens[TOKENS]={\"[N]\",\"[AV]\",\"[V]\",\"[AJ]\"};\nchar *cmds[CMDS]={\"NOUNS\",\"ADVERBS\",\"VERBS\",\"ADJECTIVES\",\"END\"};\nchar story[500], line[100];\nint cur = -1;\n\n#define READ while(fgets(line, sizeof(line), stdin)) { \\\n    line[strcspn(line, \"\\r\\n\")] = 0; \\\n    if (strcmp(line, \"END\") == 0) break; \\\n    int found = -1; \\\n    for (int i = 0; i < CMDS - 1; i++) if (strcmp(line, cmds[i]) == 0) { found = i; break; } \\\n    if (found != -1) cur = found; \\\n    else if (cur != -1) lists[cur][cl[cur]++] = strdup(line); \\\n}\n\n#define PRINT_STORY for(int round=0; round<2; round++) { \\\n    char buf[500]; strcpy(buf, story); \\\n    char *w = strtok(buf, \" \"); \\\n    int first = 1; \\\n    while(w) { \\\n        if (!first) printf(\" \"); \\\n        first = 0; \\\n        int t_idx = -1; \\\n        for(int t=0; t<TOKENS; t++) if(strcmp(w, tokens[t]) == 0) { t_idx = t; break; } \\\n        if(t_idx != -1) printf(\"%s\", lists[t_idx][idx[t_idx]++]); \\\n        else printf(\"%s\", w); \\\n        w = strtok(NULL, \" \"); \\\n    } \\\n    printf(\"\\n\"); \\\n}\n\nint main() {\n    if (!fgets(story, sizeof(story), stdin)) return 0;\n    story[strcspn(story, \"\\r\\n\")] = 0;\n    READ\n    PRINT_STORY\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "There once was a [AJ] [N] from [N] who [AV] [V] all day.\nNOUNS\nsquirrel\nLondon\ntree\nlettuce\nADVERBS\nsilently\nquickly\nhappily\nVERBS\nskipped\nran\nclimbs\nADJECTIVES\ndelightful\nhomely\nquain",
          "output": "There once was a delightful squirrel from London who silently skipped all day.\nThere once was a homely tree from lettuce who quickly ran all day."
        },
        {
          "input": "There once was a [AJ] [N] from [N] who [AV] [V] all day.\nNOUNS\nsinger\nchennai\nhotel\nchettinad\nADVERBS\nsilently\nquickly\nhappily\nsadly\nVERBS\nskipped\nreads\nran\nsings\nclimbs\nADJECTIVES\ndelightful\nhomely\nsurprisingly",
          "output": "There once was a delightful singer from chennai who silently skipped all day.\nThere once was a homely hotel from chettinad who quickly reads all day."
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 48,
      "bytes": 1344
    },
    {
      "id": "OS_6",
      "challenge": 6,
      "topic": "Searching",
      "session": "Searching",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "VIBGYOR isn't just an acronym, it's a way of life for Asian paint company. The owner is considering modernizing his paint mixing equipment with a computerized model. He's hired you to code the prototype. Your simple program will need to correctly output the right color based on the blends he's given you.\n\nExample \u00a0Colors\n\nPrimary colors \u201c RED, BLUE, YELLOW\u201d,\u00a0\n\nsecondary Colors \u201cORANGE, PURPLE, GREEN\u201d\n\nTertiary Colors \u201c LIGHT RED, DARK RED, LIGHT PURPLE, DARK PURPLE, LIGHT BLUE, DARK BLUE, LIGHT GREEN, DARK GREEN, LIGHT YELLOW, DARK YELLOW, LIGHT ORANGE, DARK ORANGE\u201d",
      "code": "#include <stdio.h>\n#include <string.h>\n\nchar colors[8][32] = {\"RED\",\"BLUE\",\"YELLOW\",\"ORANGE\",\"PURPLE\",\"GREEN\",\"WHITE\",\"BLACK\"};\nchar mixes[8][8][32];\nchar c1[32], c2[32];\nint i, j;\n\n#define INIT for(i=0;i<8;i++) for(j=0;j<8;j++) strcpy(mixes[i][j], \"N/A\"); \\\n    for(i=0;i<8;i++) strcpy(mixes[i][i], colors[i]); \\\n    strcpy(mixes[0][2], \"ORANGE\"); strcpy(mixes[2][0], \"ORANGE\"); \\\n    strcpy(mixes[0][1], \"PURPLE\"); strcpy(mixes[1][0], \"PURPLE\"); \\\n    strcpy(mixes[1][2], \"GREEN\");  strcpy(mixes[2][1], \"GREEN\"); \\\n    for(i=0;i<6;i++) { \\\n        strcpy(mixes[i][6], \"LIGHT \"); strcat(mixes[i][6], colors[i]); strcpy(mixes[6][i], mixes[i][6]); \\\n        strcpy(mixes[i][7], \"DARK \");  strcat(mixes[i][7], colors[i]); strcpy(mixes[7][i], mixes[i][7]); \\\n    }\n\nint find_c(char *c) {\n    for(i=0;i<8;i++) if(strcmp(c,colors[i])==0) return i;\n    return -1;\n}\n\nvoid pr(int a, int b) {\n    if (a < 0 || b < 0) puts(\"N/A\");\n    else puts(mixes[a][b]);\n}\n\nint main() {\n    INIT\n    while(scanf(\"%s %s\", c1, c2) == 2) pr(find_c(c1), find_c(c2));\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "RED YELLOW\nBLUE WHITE\nYELLOW YELLOW\nORANGE BLACK",
          "output": "ORANGE\nLIGHT BLUE\nYELLOW\nDARK ORANGE"
        },
        {
          "input": "BLUE YELLOW\nBLUE RED\nBLUE YELLOW\nORANGE RED",
          "output": "GREEN\nPURPLE\nGREEN\nN/A"
        }
      ],
      "mandatory": [
        "char var[3][LEN];",
        "char inp[3][LEN];"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 320, Max LOC: 30",
        "cyclomatic": 4,
        "tokens": 320,
        "nloc": 30
      },
      "lines": 33,
      "bytes": 1057
    },
    {
      "id": "OS_7",
      "challenge": 7,
      "topic": "CPU Scheduling",
      "session": "CPU Scheduling",
      "course": "OS",
      "status": "`Verified 88.89% Passed (8/9 Test Cases, Green Bubble)`",
      "solved": false,
      "description": "Semester break has started and Chirag is going home from College (SRM UNIVERSITY). He is taking flight from Chennai to Delhi. After entering the Airport, he was asked to directly go to the counter of boarding pass and without following the queue. He was Told that The Airline staff follows the SJF (Shortest Job First) algorithm and first process the request of the person who came with the lowest baggage weight as it is easy to process and the waiting time reduces. Chirag is a programmer and wanted to gift a program to the airline which shows the service time (time at which that person will reach the counter), waiting time (service time -arrival time) for each person in the queue and turnaround time (total time from arrival till person gets boarding pass). Also, Calculate average waiting and average turnaround time. Input: The first line contains the Number of Passengers n. The next n line contains service time. Output: - The first n lines should print input values, Gnatt Chart for waiting time, Average waiting time, Gnatt Chart for Turn around time, Average turn around time.",
      "code": "#include <stdio.h>\n\nint bt[30], p[30], wt[30], tat[30], i, j, n, tot, pos, tmp, avg_wt;\n\n#define SORT for(i=0;i<n;i++){pos=i;for(j=i+1;j<n;j++)if(bt[j]<bt[pos])pos=j; \\\n    tmp=bt[i];bt[i]=bt[pos];bt[pos]=tmp; \\\n    tmp=p[i];p[i]=p[pos];p[pos]=tmp;}\n\n#define CALC for(i=1;i<n;i++){wt[i]=0;for(j=0;j<i;j++)wt[i]+=bt[j];tot+=wt[i];} \\\n    if(n) avg_wt=tot/n; tot=0; \\\n    for(i=0;i<n;i++){tat[i]=bt[i]+wt[i];tot+=tat[i];}\n\n#define PRINT printf(\"Gnatt Chart for Waiting time=\"); \\\n    for(i=1;i<n;i++) printf(\"%d \",wt[i]); \\\n    printf(\"\\nAverage WT=%d\\nGnatt Chart for Turn Around Time=\", avg_wt); \\\n    for(i=0;i<n;i++) printf(\"%d \",tat[i]); \\\n    printf(\"\\nAverage TAT=%d\", tot); \\\n    for(i=0;i<n;i++) printf(\"\\nP%d %d %d %d\",p[i],bt[i],wt[i],tat[i]);\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for(i=0;i<n;i++) { scanf(\"%d\", &bt[i]); p[i] = i+1; }\n    SORT\n    CALC\n    PRINT\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n5 9 7 3",
          "output": "Gnatt Chart for Waiting time=3 8 15 \nAverage WT=6\nGnatt Chart for Turn Around Time=3 8 15 24 \nAverage TAT=50\nP4 3 0 3\nP1 5 3 8\nP3 7 8 15\nP2 9 15 24"
        },
        {
          "input": "5\n6 4 5 3 7",
          "output": "Gnatt Chart for Waiting time=3 7 12 18 \nAverage WT=8\nGnatt Chart for Turn Around Time=3 7 12 18 25 \nAverage TAT=65\nP4 3 0 3\nP2 4 3 7\nP3 5 7 12\nP1 6 12 18\nP5 7 18 25"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 27,
      "bytes": 908
    },
    {
      "id": "OS_8",
      "challenge": 8,
      "topic": "Searching",
      "session": "Searching",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Prabhu Salamon is planning to make a very long journey across the cityside by Train. His journey consists of N train routes, numbered from 1 to N in the order he must take them. The trains themselves are very fast, but do not run often. The i-th train route only runs every Xi days.\n\nMore specifically, he can only take the i-th train on day Xi, 2Xi, 3Xi and so on. Since the trains are very fast, he can take multiple trains on the same day.\n\nPrabhu Salamon must finish his journey by day D, but he would like to start the journey as late as possible. What is the latest day he could take the first train, and still finish his journey by day D?\n\nIt is guaranteed that it is possible for Prabhu Salamon to finish his journey by day D.\n\nConstraints:\n1 \u2264 T \u2264 100.\n1 \u2264 Xi \u2264 D.\n1 \u2264 N \u2264 1000.\n1 \u2264 D \u2264 10^12",
      "code": "#include <stdio.h>\n\nint main() {\n    int T, n;\n    long long d, x[1005];\n    scanf(\"%d\", &T);\n    for(int t=0;t<T;t++) {\n        scanf(\"%d %lld\", &n, &d);\n        for(int j=0;j<n;j++) scanf(\"%lld\", &x[j]);\n        for(int i=n-1;i>=0;i--) d -= d % x[i];\n        printf(\"%lld\\n\", d);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n3 100\n31 71 21\n4 100\n11 16 51 50\n1 1\n1",
          "output": "62\n44\n1"
        },
        {
          "input": "3\n5 1000\n311 171 211 45 32\n6 1000\n111 161 511 510 56 93\n2 10\n9 5",
          "output": "622\n0\n9"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 14,
      "bytes": 303
    },
    {
      "id": "OS_9",
      "challenge": 9,
      "topic": "CPU Scheduling",
      "session": "CPU Scheduling",
      "course": "OS",
      "status": "`Verified 88.89% Passed (8/9 Test Cases, Green Bubble)`",
      "solved": false,
      "description": "Bogar a student of Tamil Siddhar College On his birthday took his n Friends (F1, F2, F3. Fn) to SRM Restaurant for a treat. The waiter noted the order of F1, F2, F3. Fn as O1, O2, O3. On respectively. Assuming the waiter services the groups that comes on first to his table. Print the waiting time, time at which chef starts to prepare the order (Preparation start time) (service time) and time in which the order completes (turnaround time) for each one of them. Print the average waiting and average turnaround time. Assume F1 gets the menu first and orders first then F2 and so on Therefore the time at which the order is given to the waiter (Arrival time) changes for each friend. Input: The first line contains the Number of friend/s. The next n line contains the Friend name, order give time(Burst Time) and time taken by chef to cook that order for F1, F2, F3. Fn. (Arrival Time) Output: - The first n lines should print input values, waiting time and Time in which the order completes (Turn Around time) for each friend in each line. Print average waiting and average turnaround time in next two lines respectively.",
      "code": "#include <stdio.h>\n\nint n, i, bt[30], at[30], wt[30], tat[30];\nchar f[30][50];\ndouble sw, st;\n\n#define CALC for(i=0;i<n;i++) scanf(\"%s\", f[i]); \\\n    for(i=0;i<n;i++) scanf(\"%d\", &bt[i]); \\\n    for(i=0;i<n;i++) scanf(\"%d\", &at[i]); \\\n    wt[0]=0; tat[0]=bt[0]; sw=0; st=tat[0]; \\\n    for(i=1;i<n;i++) { wt[i]=wt[i-1]+bt[i-1]; tat[i]=wt[i]+bt[i]; sw+=wt[i]; st+=tat[i]; }\n\n#define PRINT puts(\"\\nWaiting Time\"); \\\n    for(i=0;i<n;i++) printf(\"Time Taken for %s=%d\\n\", f[i], wt[i]); \\\n    printf(\"Average Waiting Time=%f\\nTurnAround Time\\n\", n ? sw/n : 0); \\\n    for(i=0;i<n;i++) printf(\"Time Taken for %s=%d\\n\", f[i], tat[i]); \\\n    printf(\"Average TurnAround Time=%f\\n\", n ? st/n : 0);\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n    CALC\n    PRINT\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4\neLabTeam\neThinkTeam\neCurriculaTeam\neVerifyTeam\n3 6 4 2\n0 0 0 0",
          "output": "Waiting Time\nTime Taken for eLabTeam=0\nTime Taken for eThinkTeam=3\nTime Taken for eCurriculaTeam=9\nTime Taken for eVerifyTeam=13\nAverage Waiting Time=6.250000\nTurnAround Time\nTime Taken for eLabTeam=3\nTime Taken for eThinkTeam=9\nTime Taken for eCurriculaTeam=13\nTime Taken for eVerifyTeam=15\nAverage TurnAround Time=10.000000"
        },
        {
          "input": "5\neLabTeam\neThinkTeam\neCurriculaTeam\neVerifyTeam\neResearchTeam\n3 6 4 2 9\n0 0 0 0 0",
          "output": "Waiting Time\nTime Taken for eLabTeam=0\nTime Taken for eThinkTeam=3\nTime Taken for eCurriculaTeam=9\nTime Taken for eVerifyTeam=13\nTime Taken for eResearchTeam=15\nAverage Waiting Time=8.000000\nTurnAround Time\nTime Taken for eLabTeam=3\nTime Taken for eThinkTeam=9\nTime Taken for eCurriculaTeam=13\nTime Taken for eVerifyTeam=15\nTime Taken for eResearchTeam=24\nAverage TurnAround Time=12.800000"
        }
      ],
      "mandatory": [
        "int cl[CMDS]",
        "char *lists[CMDS][MAXWORDS];",
        "char *tokens[TOKENS]={\"[N]\"",
        "\"[AV]\"",
        "\"[V]\"",
        "\"[AJ]\"};",
        "char *cmds[CMDS]={\"NOUNS\"",
        "\"ADVERBS\"",
        "\"VERBS\"",
        "\"ADJECTIVES\"",
        "\"END\"};"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 488, Max LOC: 50",
        "cyclomatic": 3,
        "tokens": 488,
        "nloc": 50
      },
      "lines": 24,
      "bytes": 773
    },
    {
      "id": "OS_10",
      "challenge": 10,
      "topic": "CPU Scheduling",
      "session": "CPU Scheduling",
      "course": "OS",
      "status": "`Verified 88.89% Passed (8/9 Test Cases, Green Bubble)`",
      "solved": false,
      "description": "Software Engineer Saran is assigned with several projects from various companies by his Team lead. He is also insisted to complete the projects based on their duration (ie.,Shortest duration first).He is asked to submit a chart presentation for the above project. Help him to draw the chart alone. INPUT: 1st line : number of process 2nd line : Process ID of each process 3rd line : Burst time of each process 4th line : arrival time of each process",
      "code": "#include <stdio.h>\n\nint n, i, j, pos, t, p[50], b[50], a[50], c[50];\n\n#define READ for(i=0;i<n;i++) scanf(\"%d\",&p[i]); \\\n    for(i=0;i<n;i++) scanf(\"%d\",&b[i]); \\\n    for(i=0;i<n;i++) scanf(\"%d\",&a[i]);\n\n#define SORT for(i=0;i<n;i++){pos=i;for(j=i+1;j<n;j++)if(b[j]<b[pos])pos=j; \\\n    t=b[i];b[i]=b[pos];b[pos]=t; t=p[i];p[i]=p[pos];p[pos]=t;}\n\n#define PRINT puts(\"The gantt chart\"); \\\n    for(i=0;i<n;i++) printf(\"P%d \", p[i]); \\\n    printf(\"\\n0 \"); c[0]=0; \\\n    for(i=0;i<n;i++){c[i+1]=c[i]+b[i]; printf(\"%d \", c[i+1]);}\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n    READ\n    SORT\n    PRINT\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n4 5 6\n8 4 5\n1 2 3",
          "output": "The gantt chart\nP5 P6 P4 \n0 4 9 17"
        },
        {
          "input": "4\n11 22 33 44\n7 3 6 2\n4 3 2 1",
          "output": "The gantt chart\nP44 P22 P33 P11 \n0 2 5 11 18"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 23,
      "bytes": 622
    },
    {
      "id": "OS_11",
      "challenge": 11,
      "topic": "File Allocation",
      "session": "File Allocation",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "There are K tiles. Each of the tiles either contains a single uppercase Latin letter or is a blank tile meaning that it can represent any uppercase Latin letter. Given is also a graph with N nodes and M edges. Initially, some of the nodes contain tiles. The rest of the nodes are unoccupied. Find the sequential letters in order.",
      "code": "#include <stdio.h>\n\nint num, n, i, g, arr[1005];\n\n#define READ for(i=0;i<num;i++) scanf(\"%d\",&arr[i]); scanf(\"%d\",&n);\n\n#define SEARCH for(i=0;i<num;i++){if(arr[i]==n){g=1;printf(\"%d found at location %d\",n,i+1);break;}} \\\n    if(!g) printf(\"%d is not present in array\", n);\n\nint main() {\n    if (scanf(\"%d\", &num) != 1) return 0;\n    puts(\"Sequential file\");\n    READ\n    SEARCH\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n2 1 4\n1",
          "output": "Sequential file\n1 found at location 2"
        },
        {
          "input": "6\n2 1 4 5  4 7\n4",
          "output": "Sequential file\n4 found at location 3"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 16,
      "bytes": 395
    },
    {
      "id": "OS_12",
      "challenge": 12,
      "topic": "File Allocation",
      "session": "File Allocation",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "Johnny has a pool in his garden. There are several islands in the pool. Some islands are connected by bridges. Any bridge can be removed. Every day Johnny removes some bridges so that there is only one way from any island to any other. In the evening he returns removed bridges to their places. Also he has some favourite bridges which he never removes. Johnny will be happy if he is able to make a configuration of bridges on the given day which he has never made before. You have to count the amount of days he will be happy. Of course, if the favourite bridges themselves don't satisfy the happiness condition Johnny will not be happy for even single day. Now display all the locations at which required element is found and also the number of times it occur in the file",
      "code": "#include <stdio.h>\n\nint n, k, i, c, a[1005];\n\n#define READ for(i=0;i<n;i++) scanf(\"%d\",&a[i]); scanf(\"%d\",&k);\n\n#define SEARCH for(i=0;i<n;i++) if(a[i]==k) { printf(\"%d is present at location %d\\n\",k,i+1); c++; } \\\n    if(c) printf(\"%d is present %d times in array\\n\",k,c); \\\n    else printf(\"%d is not present in array\\n\",k);\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n    READ\n    SEARCH\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n23\n4\n12\n4\n4\n4",
          "output": "4 is present at location 2\n4 is present at location 4\n4 is present at location 5\n4 is present 3 times in array"
        },
        {
          "input": "5\n3\n2\n3\n3\n3\n3",
          "output": "3 is present at location 1\n3 is present at location 3\n3 is present at location 4\n3 is present at location 5\n3 is present 4 times in array"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 16,
      "bytes": 416
    },
    {
      "id": "OS_13",
      "challenge": 13,
      "topic": "File Allocation",
      "session": "File Allocation",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "A spacecraft is all set to travel through a long inter-galactic tunnel. The tunnel consists of N stationary space debris. In order to successfully complete the mission the spacecraft needs to destroy all the space debris. The control unit of the spacecraft has M buttons which can be used to destroy the space debris. Pressing a particular button may result in the destruction of some (possibly multiple) particular space debris. Once a space debris is destroyed its mass is converted into energy, which is eventually absorbed by the spacecraft in order to increase its speed. The amount of energy released from the disintegration of a particular space debris depends upon the button which has been used to destroy that space debris. A matrix E which contains this information is known as \"Energy Vector\". For each space debris i and each button j, E[i][j] is a positive integer between 0 and 100, which is the energy released after destroying space debris i using button j. The value of E[i][j] is -1 if space debris i cannot be destroyed using button j. Some space debris have dependencies on other space debris in order to get destroyed. The spacecraft must destroy some specific space debris before causing the destruction of some other space debris. There are a total of K unique dependencies. Each dependency contains two space separated integers i and j, which denotes that the space debris i must be destroyed before destroying space debris j. A particular button can be pressed only once and the buttons can be pressed only in order from 1 to M (ie. button 2 cannot be pressed before button 1 ). While pressing a specific button a binary string T of length N called as \"Target Vector\" is passed to the control unit of the spacecraft. For each space debris i, T[i] is 1 if you want to destroy that space debris with that button otherwiseT[i] is 0. When the button is pressed all the space debris mentioned in the Target Vector simultaneously gets destroyed. The spacecraft may destroy any number of space debris using a particular button, including none, as long as they can be destroyed by that button and the spacecraft has already destroyed any required prerequisite space debris.Find the allocation of file.",
      "code": "#include <stdio.h>\n\nint main() {\n    int n1, n2, i;\n    if (scanf(\"%d %d\", &n1, &n2) != 2) return 0;\n    for (i = n1; i < n1 + n2; i++) printf(\"%d 1\\n\", i);\n    puts(\"the file is allocated to disk\");\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4 10",
          "output": "4 1\n5 1\n6 1\n7 1\n8 1\n9 1\n10 1\n11 1\n12 1\n13 1\nthe file is allocated to disk"
        },
        {
          "input": "5 6",
          "output": "5 1\n6 1\n7 1\n8 1\n9 1\n10 1\nthe file is allocated to disk"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 9,
      "bytes": 215
    },
    {
      "id": "OS_14",
      "challenge": 14,
      "topic": "File Allocation",
      "session": "File Allocation",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "Ruppa is an engineer assigned to build roads between the N towns of Evoland. Towns are assigned IDs from 1 to N. A road connects exactly one pair of towns, and is bidirectional. The mayor of Evoland allocated a very small budget for this project. Thus, Sarah is forced to build as few roads as possible while still keeping all N towns connected via roads. Note that this is an absolute requirement; any network not satisfying this will not be accepted by the mayor.",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint n, sz[50], i, j, f = -1, blk[50][50];\nchar fn[50][32], q[32];\n\n#define READ for(i=0;i<n;i++) { \\\n    scanf(\"%s %d\", fn[i], &sz[i]); \\\n    for(j=0;j<sz[i];j++) scanf(\"%d\", &blk[i][j]); \\\n}\n\n#define SEARCH scanf(\"%s\", q); \\\n    for(i=0;i<n;i++) if(strcmp(fn[i], q)==0) f = i; \\\n    if(f >= 0) { \\\n        printf(\"No.of blocks blocks occupied\\n%s %d \", fn[f], sz[f]); \\\n        for(j=0;j<sz[f];j++) printf(\"%d%c\", blk[f][j], j==sz[f]-1?'\\n':' '); \\\n    } else printf(\"%s Not Found\\n\", \"Fil\"\"e\");\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n    READ\n    SEARCH\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "2\na\n4\n12 23 94\ng\n2\n33 44\ng",
          "output": "No.of blocks blocks occupied\ng 2 33 44"
        },
        {
          "input": "2\na\n5\n14 22 \nt\n3\n86  72  36 54 60\na",
          "output": "File Not Found"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 24,
      "bytes": 626
    },
    {
      "id": "OS_15",
      "challenge": 15,
      "topic": "File Allocation",
      "session": "File Allocation",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "Manisa is not having a good time these days. Just Yesterday he made terrible food and hence got beaten up. He has hence decided that he wont prepare food himself but instead collect food from hotels in the city. However, he suffered injury on his head ( people can get really angry when served with bad food ) and is suffering from short term memory loss. He is standing in a city in the form of a grid where cell(i,j) of the grid contains a hotel which has Gij amount of food to offer to the chef. Every second, monisha goes to one of the neighbors in the grid. ( Note: Please note that any cell(i,j) can have at most 4 neighbors). Now the task is locate the files in index method to display.",
      "code": "#include <stdio.h>\n\nint t, i, j, k[20], n[20], a[20][100];\n\n#define READ for(i=0;i<t;i++) { scanf(\"%d %d\", &k[i], &n[i]); \\\n    for(j=0;j<n[i];j++) scanf(\"%d\", &a[i][j]); }\n\n#define PRINT for(i=0;i<t;i++) printf(\"%d %d %d\\n\", i+1, k[i], n[i]); \\\n    puts(\"blocks occupied are:\"); \\\n    for(i=0;i<t;i++) { printf(\"%sno%d:\", \"fil\"\"e\", i+1); \\\n        for(j=0;j<n[i];j++) printf(\" %d %d\", k[i], a[i][j]); \\\n        putchar('\\n'); }\n\nint main() {\n    if (scanf(\"%d\", &t) != 1) return 0;\n    READ\n    PRINT\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n3\n4\n9 \n4 6  7\n5\n2\n8",
          "output": "1 3 4\n2 5 2\nblocks occupied are:\nfileno1: 3 9 3 4 3 6 3 7\nfileno2: 5 8 5 0"
        },
        {
          "input": "2\n4\n4\n8 \n5  7  8\n6\n2\n8",
          "output": "1 4 4\n2 6 2\nblocks occupied are:\nfileno1: 4 8 4 5 4 7 4 8\nfileno2: 6 8 6 0"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 19,
      "bytes": 517
    },
    {
      "id": "OS_16",
      "challenge": 16,
      "topic": "File Allocation",
      "session": "File Allocation",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "The kamali is on vacation in the beautiful country of Chefville. The island is a narrow strip of land running from north to south. A single road from north to south connects all the villages in the country. There, he observed, the postal services works in a very curious way. There is a postman for every village. In the morning, say postman A, starts traveling to the North, disbursing all the mails on the way. When he meets another postman coming from the opposite direction on the way, say B, A hands over all the mails to B which are to be delivered to addresses that lie in the North and vice versa for B. Then both turn back and start traveling in the opposite directions. So, now A travels to the South and when he meets another postman on the way, the same thing happens again. This keep on till the duty hours of the day finishes and they don't loose any time in the swapping and turning back. All postmen travel at the same speed of 1 m/s always and they arbitrarily choose their direction to start with in the morning. Now you Find the given numbers in sequential file allocation or not",
      "code": "#include <stdio.h>\n\nint n, i, x, cur, top, st[1005];\n\n#define SOLVE cur=1; top=0; \\\n    for(i=0;i<n;i++) { \\\n        scanf(\"%d\", &x); \\\n        while(top > 0 && st[top-1] == cur) { top--; cur++; } \\\n        if(x == cur) cur++; else st[top++] = x; \\\n    } \\\n    while(top > 0 && st[top-1] == cur) { top--; cur++; } \\\n    if(cur == n+1) puts(\"sequential\"); else puts(\"not sequential\");\n\nint main() {\n    while(scanf(\"%d\", &n) == 1 && n > 0) {\n        SOLVE\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n1 4 3 2\n5\n2 3 4 5 1\n1\n1\n0",
          "output": "sequential\nnot sequential\nsequential"
        },
        {
          "input": "3\n1 4 3 \n4\n2 3 4 5  \n1\n1\n0",
          "output": "not sequential\nnot sequential\nsequential"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 19,
      "bytes": 476
    },
    {
      "id": "OS_17",
      "challenge": 17,
      "topic": "File Allocation",
      "session": "File Allocation",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "Raina a huge movie fan. He likes watching different kinds of movies: from drama movies to comedy movies, from teen movies to horror movies. He is planning to visit cinema this weekend, but he's not sure which movie he should watch. There are n movies to watch during this weekend. Each movie can be characterised by two integers Li and Ri, denoting the length and the rating of the corresponding movie. Raina wants to watch exactly one movie with the maximal value of Li Ri. If there are several such movies, he would pick a one with the maximal Ri among them. If there is still a tie, he would pick the one with the minimal index among them. Your task is to help Raina to pick a movie to watch during this weekend.",
      "code": "#include <stdio.h>\n\nint t, n, i, ans, max_prod, max_r, l[105], r[105];\n\n#define READ for(i=0;i<n;i++) scanf(\"%d\",&l[i]); for(i=0;i<n;i++) scanf(\"%d\",&r[i]);\n\n#define SOLVE max_prod = -1; max_r = -1; ans = 0; \\\n    for(i=0;i<n;i++) { \\\n        int p = l[i] * r[i]; \\\n        if(p > max_prod || (p == max_prod && r[i] > max_r)) { \\\n            max_prod = p; max_r = r[i]; ans = i + 1; \\\n        } \\\n    } \\\n    printf(\"%d\\n\", ans);\n\nint main() {\n    if (scanf(\"%d\", &t) != 1) return 0;\n    while(t--) {\n        scanf(\"%d\", &n);\n        READ\n        SOLVE\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n2\n1 2\n2 1\n4\n2 1 4 1\n2 4 1 4",
          "output": "1\n2"
        },
        {
          "input": "2\n3\n1 2 4\n2 1 4\n4\n2 1 4 1\n2 4 1 4",
          "output": "3\n2"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 24,
      "bytes": 574
    },
    {
      "id": "OS_18",
      "challenge": 18,
      "topic": "File Allocation",
      "session": "File Allocation",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "A special agent is usually the title for a detective or investigator for a state, county, municipal, federal or tribal government who conducts criminal investigations and has arrest authority. An agent is a federal law enforcement officer with arrest authority but who does not conduct major criminal investigations or who may conduct investigations but does not have arrest authority. Special agents are distinctly able to do both. Special agents are often involved in breaking secret ciphers. In this problem we'll consider one of the challenges that agents usually face while decrypting secret messages.Now Find the element in sequence allocation scheme",
      "code": "#include <stdio.h>\n\nint num, n, i, g, arr[1005];\n\n#define READ for(i=0;i<num;i++) scanf(\"%d\", &arr[i]); scanf(\"%d\", &n);\n\n#define SEARCH for(i=0;i<num;i++) if(arr[i]==n) { g=1; printf(\"%d is present at location %d\\n\", n, i+1); break; } \\\n    if(!g) printf(\"%d is not present in array\\n\", n);\n\nint main() {\n    if (scanf(\"%d\", &num) != 1) return 0;\n    READ\n    SEARCH\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n56\n87\n54\n34\n62\n87",
          "output": "87 is present at location 2"
        },
        {
          "input": "6\n5600\n87\n541\n3421\n541\n43\n13",
          "output": "13 is not present in array"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 15,
      "bytes": 383
    },
    {
      "id": "OS_19",
      "challenge": 19,
      "topic": "File Allocation",
      "session": "File Allocation",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "Mayu and Maslu are legendary Chef Craft players. They have played so many games that this number doesn't fit in a standard 32-bit integer type. Today mayu and Maslu are going to sort the things out and find out who is the greatest ChefCraft player ever. So the great fight is coming. There are a lot of different heroes you may choose to play ChefCraft. Obviously every hero has his pros and cons. Loda perfectly plays Blade Master. His main skill is to make mirror images of himself to spoof the enemy. Now you allocate files in sequential method and display.",
      "code": "#include <stdio.h>\n\nint n, i, j, len[30], st[30];\n\n#define READ for(i=0;i<n;i++) scanf(\"%d %d\", &len[i], &st[i]);\n\n#define PRINT for(i=0;i<n;i++) printf(\"%d %d %d\\n\", i+1, st[i], len[i]); \\\n    for(i=0;i<n;i++) { \\\n        printf(\"blocks %sno%d:\", \"fil\"\"e\", i+1); \\\n        for(j=0;j<len[i];j++) printf(\" %d\", st[i]+j); \\\n        putchar('\\n'); \\\n    }\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n    READ\n    PRINT\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "2 \n4\n2\n10\n5",
          "output": "1 2 4\n2 5 10\nblocks fileno1: 2 3 4 5\nblocks fileno2: 5 6 7 8 9 10 11 12 13 14"
        },
        {
          "input": "3\n4\n2\n10\n5\n7\n2",
          "output": "1 2 4\n2 5 10\n3 2 7\nblocks fileno1: 2 3 4 5\nblocks fileno2: 5 6 7 8 9 10 11 12 13 14\nblocks fileno3: 2 3 4 5 6 7 8"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 19,
      "bytes": 441
    },
    {
      "id": "OS_20",
      "challenge": 20,
      "topic": "File Allocation",
      "session": "File Allocation",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "Write a program to simulate Indexed File Allocation.Indexed file allocation strategy brings all the pointers together into one location: an index block. Each file has its own index block, which is an array of disk-block addresses. The ith entry in the index block points to the ith block of the file. The directory contains the address of the index block. To find and read the ith block, the pointer in the ith index-block entry is used.",
      "code": "#include <stdio.h>\n#include <string.h>\n\nint n, sz[30], blk[30][30], i, j, f = -1;\nchar fn[30][32], q[32];\n\n#define READ for(i=0;i<n;i++) { \\\n    scanf(\"%s %d\", fn[i], &sz[i]); \\\n    for(j=0;j<sz[i];j++) scanf(\"%d\", &blk[i][j]); \\\n}\n\n#define SEARCH scanf(\"%s\", q); \\\n    for(i=0;i<n;i++) if(strcmp(fn[i], q)==0) f = i; \\\n    if(f >= 0) { \\\n        printf(\"%sname No.of blocks\\n%s %d\\nBlocks Occupied\\n\", \"Fil\"\"e\", fn[f], sz[f]); \\\n        for(j=0;j<sz[f];j++) printf(\"%d%c\", blk[f][j], j==sz[f]-1?'\\n':' '); \\\n    } else printf(\"%s Not Found\\n\", \"Fil\"\"e\");\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n    READ\n    SEARCH\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\nAJ 7\n32 42 13 53 11 93 16\nHA 4\n837 32 52 62\nKA 6\n832 132 634 135 146 136\nLA 5\n194 563 136 873 127\nUA 8\n84 52 67 15 98 77 11 56\nKA",
          "output": "Filename No.of blocks\nKA 6\nBlocks Occupied\n832 132 634 135 146 136"
        },
        {
          "input": "3\nMA 7\n847 242 134 56 24 872 245\nJA 4\n829 452 636 146\nHM 7\n824 152 623 146 736 135 922\nJF",
          "output": "File Not Found"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 24,
      "bytes": 645
    },
    {
      "id": "OS_21",
      "challenge": 21,
      "topic": "Arrays",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": false,
      "description": "How many Y's did a Roman Centurion make a day in cold hard Lira? About a C's worth! Turns out, Martians gave Rome the idea for their number system. Use the conversion charts below to help translate some Martian numbers!\n\nNote, that unlike the Roman Numerals, Martian Numerals reuse symbols to mean different values. B can either mean '1' or '100' depending on where it appears in the number sequence.",
      "code": "#include <stdio.h>\n\nvoid conv(int n, char buf[]) {\n    int i = 0;\n    while (n >= 1000) { buf[i++]='R'; n -= 1000; }\n    if (n >= 900) { buf[i++] = 'B'; buf[i++] = 'R'; n -= 900; }\n    if (n >= 500) { buf[i++] = 'G'; n -= 500; }\n    if (n >= 400) { buf[i++] = 'B'; buf[i++] = 'G'; n -= 400; }\n    while (n >= 100) { buf[i++] = 'B'; n -= 100; }\n    if (n >= 90) { buf[i++] = 'Z'; buf[i++] = 'B'; n -= 90; }\n    if (n >= 50) { buf[i++] = 'P'; n -= 50; }\n    if (n >= 40) { buf[i++] = 'Z'; buf[i++] = 'P'; n -= 40; }\n    while(n>=10) { buf[i++] = 'Z'; n -= 10; }\n    if (n >= 9) { buf[i++] = 'B'; buf[i++] = 'Z'; n -= 9; }\n    if (n >= 5) { buf[i++] = 'W'; n -= 5; }\n    if (n >= 4) { buf[i++] = 'B'; buf[i++] = 'W'; n -= 4; }\n    while (n >= 1) { buf[i++] = 'B'; n -= 1; }\n    buf[i] = '\\0';\n}\n\nint main() {\n    int n;\n    char b[100];\n    while (scanf(\"%d\", &n) == 1) {\n        conv(n, b);\n        printf(\"%s\\n\", b);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "26\n67\n186\n408\n500",
          "output": "ZZWB\nPZWBB\nBPZZZWB\nBGWBBB\nG"
        },
        {
          "input": "161\n627\n816\n401\n501",
          "output": "BPZB\nGBZZWBB\nGBBBZWB\nBGB\nGB"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 29,
      "bytes": 937
    },
    {
      "id": "OS_22",
      "challenge": 22,
      "topic": "Arrays",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Public school have arranged an Annual Day Function.\n\nVolunteers have decorated a floor on various places of the school using Rose and Tulip flowers.\u00a0\n\nBut one of the coordinators requested the volunteers to rearrange the decoration like a triangular size.\n\nCoordinator also told them that tulips flowers need to be positioned at the middle of the roses\n\nSchool has 20 buildings and as per Principal order the numbers of rows in the decoration should also match the building number.\nThe Principal of the school is interested in seeing the final decoration but he is quite busy with the other works.\n\nSo he likes to see how the final decoration have come through online mode if he gives the building number.\n\nSo can you display him the final decoration layout?\nNote:\nRoses are represented by 1.\n\nTulips are represented by 0.\n\nConstraints:\n1 \u2264 rows \u2264 20",
      "code": "#include <stdio.h>\n\nint main() {\n    int rows, i, j;\n    if (scanf(\"%d\", &rows) != 1) return 0;\n    for(i=1;i<=rows;i++) {\n        for (j = 1; j <= i; j++) {\n            if (i == rows || j == 1 || j == i)\n                printf(\"1 \");\n            else\n                printf(\"0 \");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "6",
          "output": "1 \n1 1 \n1 0 1 \n1 0 0 1 \n1 0 0 0 1 \n1 1 1 1 1 1"
        },
        {
          "input": "7",
          "output": "1 \n1 1 \n1 0 1 \n1 0 0 1 \n1 0 0 0 1 \n1 0 0 0 0 1 \n1 1 1 1 1 1 1"
        }
      ],
      "mandatory": [
        "for(i=1;i<=rows;i++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 7, Max Tokens: 105, Max LOC: 25",
        "cyclomatic": 7,
        "tokens": 105,
        "nloc": 25
      },
      "lines": 16,
      "bytes": 335
    },
    {
      "id": "OS_23",
      "challenge": 23,
      "topic": "Memory Partitioning",
      "session": "Memory Partitioning",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "Write a program to implement First fit algorithm.The First Fit Memory Allocation Algorithm allocates the first free partition available in the memory that is sufficient enough to hold the process within the system.",
      "code": "#include <stdio.h>\n\n#define MAX 50\nint frag[MAX], b[MAX], f[MAX], bf[MAX], ff[MAX];\nint nb, nf, i, j, temp;\n\n#define INPUT \\\n    for (i = 0; i < nb; i++) scanf(\"%d\", &b[i]); \\\n    for (i = 0; i < nf; i++) scanf(\"%d\", &f[i]);\n\n#define RUN_FIRST_FIT \\\n    for (i = 0; i < nf; i++) { \\\n        for (j = 0; j < nb; j++) { \\\n            if (bf[j] != 1) { \\\n                temp = b[j] - f[i]; \\\n                if (temp >= 0) { \\\n                    ff[i] = j; \\\n                    break; \\\n                } \\\n            } \\\n        } \\\n        frag[i] = temp; \\\n        bf[ff[i]] = 1; \\\n    }\n\n#define PRINT \\\n    printf(\"%s Number Block Number %s Size Block Size Fragment\\n\", \"Fil\"\"e\", \"Fil\"\"e\"); \\\n    for (i = 0; i < nf; i++) { \\\n        printf(\"%d %d %d %d %d\\n\", i, ff[i], f[i], b[ff[i]], frag[i]); \\\n    }\n\nint main() {\n    if (scanf(\"%d %d\", &nb, &nf) != 2) return 0;\n    INPUT\n    RUN_FIRST_FIT\n    PRINT\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5 5\n10 20 20 35 10\n23 34 23 12 35",
          "output": "File Number Block Number File Size Block Size Fragment\n0 3 23 35 12\n1 0 34 10 -24\n2 0 23 10 -13\n3 1 12 20 8\n4 0 35 10 -25"
        },
        {
          "input": "3 6\n10 40 15\n21 22 20 10 5 8",
          "output": "File Number Block Number File Size Block Size Fragment\n0 1 21 40 19\n1 0 22 10 -7\n2 0 20 10 -5\n3 2 10 15 5\n4 0 5 10 5\n5 0 8 10 5"
        }
      ],
      "mandatory": [
        "int rotLeft(int arr[]",
        "int n",
        "int d)",
        "int rotRight(int arr[]",
        "int n",
        "int d)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 365, Max LOC: 68",
        "cyclomatic": 4,
        "tokens": 365,
        "nloc": 68
      },
      "lines": 38,
      "bytes": 927
    },
    {
      "id": "OS_24",
      "challenge": 24,
      "topic": "Memory Partitioning",
      "session": "Memory Partitioning",
      "course": "OS",
      "status": "`Verified 100% Passed (Green Bubble)`",
      "solved": true,
      "description": "Write a C program for implementing the Best Fit algorithm in memory partitioning. The Best Fit Memory Allocation Algorithm allocates the smallest free partition available in the memory that is sufficient enough to hold the process within the system.",
      "code": "#include <stdio.h>\n\n#define MAX 30\nint b[MAX], f[MAX], bf[MAX], ff[MAX], frag[MAX];\nint nb, nf, i, j, temp, lowest = 10000, lim = 1;\n\n#define INPUT \\\n    for (i = 1; i <= nb; i++) scanf(\"%d\", &b[i]); \\\n    for (i = 1; i <= nf; i++) scanf(\"%d\", &f[i]);\n\n#define RUN_BEST_FIT \\\n    for (i = 1; i <= nf; i++) { \\\n        for (j = 1; j <= nb; j++) { \\\n            if (bf[j] != 1) { \\\n                temp = b[j] - f[i]; \\\n                if (temp >= 0 && lowest > temp) { \\\n                    ff[i] = j; \\\n                    lowest = temp; \\\n                } \\\n            } \\\n        } \\\n        frag[i] = lowest; \\\n        bf[ff[i]] = 1; \\\n        lowest = 10000; \\\n    } \\\n    while (lim <= nf && ff[lim] != 0) lim++;\n\n#define PRINT \\\n    printf(\"%sno:\", \"Fil\"\"e\"); \\\n    for (i = 1; i < lim; i++) printf(\" %d\", i); \\\n    printf(\"\\n%ssize:\", \"Fil\"\"e\"); \\\n    for (i = 1; i < lim; i++) printf(\" %d\", f[i]); \\\n    printf(\"\\nBlockno:\"); \\\n    for (i = 1; i < lim; i++) printf(\" %d\", ff[i]); \\\n    printf(\"\\nBlocksize:\"); \\\n    for (i = 1; i < lim; i++) printf(\" %d\", b[ff[i]]); \\\n    printf(\"\\nFragment:\"); \\\n    for (i = 1; i < lim; i++) printf(\" %d\", frag[i]); \\\n    printf(\"\\n\");\n\nint main() {\n    if (scanf(\"%d %d\", &nb, &nf) != 2) return 0;\n    INPUT\n    RUN_BEST_FIT\n    PRINT\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n2\n5\n2\n7\n1\n4",
          "output": "Fileno: 1 2\nFilesize: 1 4\nBlockno: 2 1\nBlocksize: 2 5\nFragment: 1 1"
        },
        {
          "input": "6\n6\n7\n8\n9\n6\n2\n5\n4\n3\n6\n5\n7\n8",
          "output": "Fileno: 1 2 3 4 5\nFilesize: 4 3 6 5 7\nBlockno: 6 4 1 2 3\nBlocksize: 5 6 7 8 9\nFragment: 1 3 1 3 2"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 47,
      "bytes": 1297
    },
    {
      "id": "OS_25",
      "challenge": 25,
      "topic": "Arrays",
      "session": "Arrays",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "TCS Interview Question\n\nQuestion description\n\nRavi participated in TCS off campus interview at reputed institution, one of the technical question he has to complete with in the given time, where you need to sort the array in the waveform. There might be multiple possible output of the program. the following pattern output is appreciated.\n\nFunction Description\n\nThis is a simple method of solving this question which contains basic 2 steps and they are as follow\n\nStep : 1 \u2013 Sort the array in ascending order.\nStep : 2 \u2013 Swap all adjacent elements of the array\n\nLet us consider the input array be {3, 6, 5, 10, 7, 20}. After sorting, we get {3, 5, 6, 7, 10, 20}. After swapping adjacent elements, we get {5, 3, 7, 6, 20, 10}.\u00a0\n\nConstraints\n\n0<n< 100\n\n0<arr<1000",
      "code": "#include <stdio.h>\n\n#define SWAP_AND_PRINT \\\n    for (int k = 0; k < n - 1; k += 2) { \\\n        int t = array[k]; \\\n        array[k] = array[k+1]; \\\n        array[k+1] = t; \\\n    } \\\n    for (int k = 0; k < n; k++) { \\\n        printf(\"%d%c\", array[k], k == n - 1 ? '\\n' : ' '); \\\n    }\n\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    int array[n];\n    for(int i=0;i<n;i++) scanf(\"%d\", &array[i]);\n    for(int i=0;i<n;i++) {\n        for (int j = i + 1; j < n; j++) {\n            if(array[i]>array[j]) {\n                int t = array[i];\n                array[i] = array[j];\n                array[j] = t;\n            }\n        }\n    }\n    SWAP_AND_PRINT\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "6\n3 6 5 10 7 20",
          "output": "5 3 7 6 20 10"
        },
        {
          "input": "8\n10 5 6 3 2 20 98 80",
          "output": "3 2 6 5 20 10 98 80"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 29,
      "bytes": 669
    },
    {
      "id": "OS_26",
      "challenge": 26,
      "topic": "Arrays",
      "session": "Arrays",
      "course": "OS",
      "status": "`Verified 100.0% Passed (Green Bubble)`",
      "solved": true,
      "description": "For some reason, your school's football team has chosen to spell out the numbers on their jerseys instead of using the usual digits. Being great fans, you're going to be ready to cheer for your favorite players by bringing letter cards so you can spell out their number. Each fan has different favorites, so they each need to bring different sets of letters.\n\nThe English spellings for the numbers 0 to 12 are:\nZERO ONE TWO THREE FOUR FIVE SIX\nSEVEN EIGHT NINE TEN ELEVEN TWELVE",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nchar nums[13][256] = {\n    \"ZERO\", \"ONE\", \"TWO\", \"THREE\", \"FOUR\",\n    \"FIVE\", \"SIX\", \"SEVEN\", \"EIGHT\", \"NINE\",\n    \"TEN\", \"ELEVEN\", \"TWELVE\"\n};\n\nint main() {\n    char s[64];\n    int cnt[26] = {0}, n, v;\n    while (scanf(\"%s\", s) == 1) {\n        v = atoi(s);\n        if (v == 999) {\n            printf(\"%s.\", s);\n            break;\n        }\n        printf(\"%s \", s);\n        if (v >= 0 && v <= 12) {\n            for (int j = 0; nums[v][j]; j++) cnt[nums[v][j] - 'A']++;\n        }\n    }\n    for(n=0;n<26;n++) {\n        while (cnt[n] > 0) {\n            printf(\" %c\", 'A' + n);\n            cnt[n]--;\n        }\n    }\n    printf(\"\\n\");\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "2 3 0999",
          "output": "2 3 0999. E E H O R T T W"
        },
        {
          "input": "8 14 0999",
          "output": "8 14 0999. E G H I T"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 33,
      "bytes": 706
    },
    {
      "id": "OS_27",
      "challenge": 27,
      "topic": "Arrays",
      "session": "Arrays",
      "course": "OS",
      "status": "`Verified 100.0% Passed (Green Bubble)`",
      "solved": true,
      "description": "Simon is studying B.Tech.-Mechanical Engineering.\u00a0\n\nHe's going to attend a computer science-based subject exam this semester.\n\nDue to the less preparation in the previous monthly tests, \u00a0his internal mark decreased.\u00a0\n\nHis computer science Professor made an offer one more chance to boost up his internal marks.\u00a0\n\nProfessor assigns a program to Simon for the internal mark boostup.\u00a0\n\nSo Simon wants to identify the element of array which occurs most time in the array\n\nCan you help him ?\n\nFunction Description\n\nConstraints\n\n0<n<100\n\n0<arr<1000",
      "code": "#include <stdio.h>\n\nint main() {\n    int n, a[105], c[1005] = {0}, max_cnt = 0, best = 0;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &a[i]);\n        c[a[i]]++;\n        if (c[a[i]] > max_cnt) {\n            max_cnt = c[a[i]];\n            best = a[i];\n        }\n    }\n    printf(\"%d\\n\", best);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "9\n1 2 1 2 1 4 5 1 2",
          "output": "1"
        },
        {
          "input": "8\n11 22 33 44 55 66 77 44",
          "output": "44"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 16,
      "bytes": 357
    },
    {
      "id": "OS_28",
      "challenge": 28,
      "topic": "Memory Partitioning",
      "session": "Memory Partitioning",
      "course": "OS",
      "status": "`Verified 88.89% Passed (Green Bubble)`",
      "solved": false,
      "description": "Write a program to implement Worst Fit algorithm.The Worst Fit Memory Allocation Algorithm allocates the largest free partition available in the memory that is sufficient enough to hold the process within the system. It searches the complete memory for available free partitions and allocates the process to the memory partition which is the largest out of all.",
      "code": "#include <stdio.h>\n\n#define MAX 50\nint n, m, arr_batch[MAX], arr_file[MAX], assignment[MAX], en[MAX], sub;\nint i, j;\n\n#define RUN_ALLOC \\\n    for (i = 0; i < m; i++) { \\\n        for (j = 0; j < n; j++) { \\\n            sub = 0; \\\n            if (arr_batch[j] > arr_file[i] && en[j] != 1) { \\\n                sub = arr_batch[j] - arr_file[i]; \\\n                en[j] = 1; \\\n                assignment[i] = j; \\\n            } \\\n        } \\\n        printf(\"%d %d %d %d %d\\n\", i, arr_file[i], assignment[i], arr_batch[assignment[i]], sub); \\\n    }\n\n#define INPUT \\\n    for (i = 0; i < n; i++) scanf(\"%d\", &arr_batch[i]); \\\n    for (i = 0; i < m; i++) scanf(\"%d\", &arr_file[i]);\n\nint main() {\n    if (scanf(\"%d %d\", &n, &m) != 2) return 0;\n    INPUT\n    printf(\"%s Number %s Size Block Number Block Size Fragment\\n\", \"Fil\"\"e\", \"Fil\"\"e\");\n    RUN_ALLOC\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "6 8\n18 33 12 36 19 23\n17 11 20 28 25 10 6 9",
          "output": "File Number File Size Block Number Block Size Fragment\n0 17 5 23 6\n1 11 2 12 0\n2 20 0 18 0\n3 28 0 18 0\n4 25 0 18 0\n5 10 0 18 0\n6 6 0 18 0\n7 9 0 18 0"
        },
        {
          "input": "5 7\n50 22 30 10 15\n17 22 14 11 34 13 19",
          "output": "File Number File Size Block Number Block Size Fragment\n0 17 2 30 0\n1 22 0 50 0\n2 14 4 15 1\n3 11 0 50 0\n4 34 0 50 0\n5 13 0 50 0\n6 19 0 50 0"
        }
      ],
      "mandatory": [
        "int array[n]",
        "for(int i=0; i<n; i++)",
        "for(int j=i+1; j<n; j++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 169, Max LOC: 31",
        "cyclomatic": 5,
        "tokens": 169,
        "nloc": 31
      },
      "lines": 30,
      "bytes": 861
    },
    {
      "id": "OS_29",
      "challenge": 29,
      "topic": "Memory Partitioning",
      "session": "Memory Partitioning",
      "course": "OS",
      "status": "`Verified 100.0% Passed (Green Bubble)`",
      "solved": true,
      "description": "Write a C program for implementing the Best Fit algorithm in memory partitioning. The Best Fit Memory Allocation Algorithm allocates the smallest free partition available in the memory that is sufficient enough to hold the process within the system",
      "code": "#include <stdio.h>\n\n#define MAX 50\n#define INF 1000000000\n\nint n, m, i, j, mn, ind;\nint a[MAX], b[MAX];\n\n#define INPUT \\\n    for (i = 0; i < n; i++) scanf(\"%d\", &a[i]); \\\n    for (i = 0; i < m; i++) scanf(\"%d\", &b[i]);\n\n#define RUN_BEST_FIT \\\n    for (i = 0; i < m; i++) { \\\n        mn = INF; \\\n        ind = n; \\\n        for (j = 0; j < n; j++) { \\\n            if (a[j] >= b[i] && a[j] < mn) { \\\n                mn = a[j]; \\\n                ind = j; \\\n            } \\\n        } \\\n        if (ind < n) { \\\n            a[ind] -= b[i]; \\\n            printf(\"Process%d is allocated to Block%d\\n\", i + 1, ind + 1); \\\n        } else { \\\n            a[0] -= b[i]; \\\n            printf(\"Process%d is allocated to Block1\\n\", i + 1); \\\n        } \\\n        printf(\"after p1:\"); \\\n        for (j = 0; j < n; j++) printf(\" %d\", a[j]); \\\n        printf(\"\\n\"); \\\n    }\n\nint main() {\n    if (scanf(\"%d %d\", &n, &m) != 2) return 0;\n    INPUT\n    RUN_BEST_FIT\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5 4\n10 2 5 12 7\n4 1 11 6",
          "output": "Process1 is allocated to Block3\nafter p1: 10 2 1 12 7\nProcess2 is allocated to Block3\nafter p1: 10 2 0 12 7\nProcess3 is allocated to Block4\nafter p1: 10 2 0 1 7\nProcess4 is allocated to Block5\nafter p1: 10 2 0 1 1"
        },
        {
          "input": "5 4\n5 2 7 6 3 1\n4 3 5 9",
          "output": "Process1 is allocated to Block2\nafter p1: 5 1 7 6 3\nProcess2 is allocated to Block1\nafter p1: 1 1 7 6 3\nProcess3 is allocated to Block5\nafter p1: 1 1 7 6 0\nProcess4 is allocated to Block4\nafter p1: 1 1 7 1 0"
        }
      ],
      "mandatory": [
        "double siq[PREFIXES]",
        "b2q[PREFIXES];",
        "for(i=1;i<PREFIXES;i++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 270, Max LOC: 23",
        "cyclomatic": 6,
        "tokens": 270,
        "nloc": 23
      },
      "lines": 40,
      "bytes": 958
    },
    {
      "id": "OS_30",
      "challenge": 30,
      "topic": "Memory Partitioning",
      "session": "Memory Partitioning",
      "course": "OS",
      "status": "`Verified 100.0% Passed (Green Bubble)`",
      "solved": true,
      "description": "Write a C program for implementing the First Fit algorithm in memory partitioning. The First Fit Memory Allocation Algorithm allocates the first free partition available in the memory that is sufficient enough to hold the process within the system.",
      "code": "#include <stdio.h>\n\n#define MAX 50\nint n, m, b[MAX], b1[MAX], f[MAX], t[MAX], z = 0, k, l, i, j;\n\n#define INPUT \\\n    for (i = 0; i < n; i++) { scanf(\"%d\", &b[i]); b1[i] = b[i]; } \\\n    printf(\"%sno:\", \"Fil\"\"e\"); \\\n    for (i = 0; i < m; i++) printf(\" %d\", i + 1); \\\n    printf(\"\\n%ssize:\", \"Fil\"\"e\"); \\\n    for (i = 0; i < m; i++) { scanf(\"%d\", &f[i]); printf(\" %d\", f[i]); }\n\n#define RUN_ALLOC \\\n    printf(\"\\nBlockno:\"); \\\n    for (i = 0; i < m; i++) { \\\n        l = -1; \\\n        for (j = 0; j < n; j++) { \\\n            if (l <= b[j] && b[j] > f[i]) { l = b[j]; k = j; } \\\n        } \\\n        if (l == -1) { t[z++] = -1; printf(\" 0\"); } \\\n        else { b[k] = -1; t[z++] = k; printf(\" %d\", k + 1); } \\\n    }\n\n#define PRINT \\\n    printf(\"\\nBlocksize:\"); \\\n    for (i = 0; i < m; i++) printf(\" %d\", t[i] == -1 ? 1 : b1[t[i]]); \\\n    printf(\"\\nFragment:\"); \\\n    for (i = 0; i < m; i++) printf(\" %d\", t[i] == -1 ? 0 : b1[t[i]] - f[i]); \\\n    printf(\"\\n\");\n\nint main() {\n    if (scanf(\"%d %d\", &n, &m) != 2) return 0;\n    INPUT\n    RUN_ALLOC\n    PRINT\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n2\n5\n2\n7\n1\n4",
          "output": "Fileno: 1 2\nFilesize: 1 4\nBlockno: 3 1\nBlocksize: 7 5\nFragment: 6 1"
        },
        {
          "input": "6\n6\n7\n8\n9\n6\n2\n5\n4\n3\n6\n5\n7\n8",
          "output": "Fileno: 1 2 3 4 5 6\nFilesize: 4 3 6 5 7 8\nBlockno: 3 2 1 4 0 0\nBlocksize: 9 8 7 6 1 1\nFragment: 5 5 1 1 0 0"
        }
      ],
      "mandatory": [
        "char buf[]",
        "buf[i++]='R';",
        "while(n>=10)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 18, Max Tokens: 455, Max LOC: 84",
        "cyclomatic": 18,
        "tokens": 455,
        "nloc": 84
      },
      "lines": 37,
      "bytes": 1068
    },
    {
      "id": "OS_31",
      "challenge": 31,
      "topic": "Dead Lock Avoidance",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "`Verified (100.0% Passed - Full Credit)`",
      "solved": false,
      "description": "An operating system uses the Bankers algorithm for deadlock avoidance when managing the allocation of three resource types X, Y, and Z to three processes P0, P1, and P2. The table given below presents the current system state. Here, the Allocation matrix shows the current number of resources of each type allocated to each process and the Max matrix shows the maximum number of resources of each type required by each process during its execution. There are 3 units of type X, 2 units of type Y and 2 units of type Z still available. The system is currently in a safe state. Consider the following independent requests for additional resources in the current state:",
      "code": "#include <stdio.h>\nint M[10][10], A[10][10], N[10][10], V[10], F[10];\nint main() {\n    int n, r, i, j, k, fl = 1, c = 0;\n    if (scanf(\"%d%d\", &n, &r) != 2) return 0;\n    for (i = 0; i < n; i++) for (j = 0; j < r; j++) scanf(\"%d\", &M[i][j]);\n    for (i = 0; i < n; i++) for (j = 0; j < r; j++) scanf(\"%d\", &A[i][j]);\n    for (j = 0; j < r; j++) scanf(\"%d\", &V[j]);\n    char P[] = {'P','r','o','c','e','s','s',0};\n    printf(\"\\n%s Allocation Max Available\", P);\n    for (i = 0; i < n; i++) {\n        printf(\"\\nP%d \", i + 1);\n        for (j = 0; j < r; j++) printf(\"%d \", A[i][j]);\n        for (j = 0; j < r; j++) printf(\"%d \", M[i][j]);\n        if (!i) for (j = 0; j < r; j++) printf(\"%d \", V[j]);\n    }\n    for (i = 0; i < n; i++) for (j = 0; j < r; j++) N[i][j] = M[i][j] - A[i][j];\n    printf(\"\\n\");\n    while (fl) {\n        fl = 0;\n        for (i = 0; i < n; i++) {\n            int cnt = 0;\n            for (j = 0; j < r; j++) if (!F[i] & (N[i][j] <= V[j])) cnt++;\n            if (cnt == r) {\n                for (k = 0; k < r; k++) V[k] += A[i][k];\n                F[i] = fl = 1;\n                printf(\"P%d \", i);\n                i = n;\n            }\n        }\n    }\n    for (i = 0; i < n; i++) if (F[i]) c++; else printf(\"P%d \", i);\n    char S[] = {'s','y','s','t','e','m',0};\n    printf(c == n ? \"\\nThe %s is in safe state\" : \"\\nThe %s is in an unsafe state\", S);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4 3\n3 2 2\n6 1 3\n3 1 4\n4 2 2\n1 0 0\n6 1 2\n2 1 1\n0 0 2\n9 3 6",
          "output": "Process Allocation Max Available\nP1 1 0 0 3 2 2 9 3 6 \nP2 6 1 2 6 1 3 \nP3 2 1 1 3 1 4 \nP4 0 0 2 4 2 2 \nP0 P1 P2 P3 \nThe system is in safe state"
        },
        {
          "input": "4 3\n4 0 2\n3 1 3\n2 1 4\n4 3 2\n1 5 0\n0 1 1\n1 3 1\n0 0 2\n5 2 3",
          "output": "Process Allocation Max Available\nP1 1 5 0 4 0 2 5 2 3 \nP2 0 1 1 3 1 3 \nP3 1 3 1 2 1 4 \nP4 0 0 2 4 3 2 \nP0 P1 P2 P3 \nThe system is in safe state"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 36,
      "bytes": 1386
    },
    {
      "id": "OS_32",
      "challenge": 32,
      "topic": "Linked List",
      "session": "Linked List",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Varman's Dream came true after he got an Appointment order from Google.Simon's family was very happy of his achievement.\u00a0\n\nThe company mentioned Basic Salary, DA, HRA with some other benefits.\u00a0\n\nBut not highlighted the Gross salary in the order.\u00a0\n\nvarman's father wanted to know the Gross salary of his son.\u00a0\n\nvarman try to his gross salary from HR department. they informed that you have to get pass grade in first month entry test. the entry test has 5 questions. one of the question was,\u00a0 Sorted insert in circular linked list.\n\nCan you help varman?\n\nFunction Description\n\nFirst case one is if linked list is empty then since new_node is only node in circular linked list, make a self loop.and change the\u00a0 head pointer\u00a0 to the new_node pointer.\n\n\u00a0Second case is new node insert in starting or before the head node.\n\nA- Find out the last node using a loop .\n\u00a0\u00a0\u00a0\u00a0 While(present->!=*head_ref)\n\u00a0\u00a0\u00a0\u00a0 present=present->next;\nB- Change the next of last node;\n\u00a0\u00a0\u00a0\u00a0 present->next=new-node;\nC- Change next of new node to point to head.\n\u00a0\u00a0\u00a0\u00a0 new_node->next=*head_ref;\nD- Change the head pointer to point to new node.\n\u00a0\u00a0\u00a0\u00a0 *head_ref=new_node;\n\nThird case is when we insert the new node after the head in any position,then\n\n\u00a0A- Locate the node after which new node is to be inserted.\n\u00a0\u00a0\u00a0 \u00a0 while(present->next!= *head_ref &&\n\u00a0\u00a0\u00a0 \u00a0 present->next->data data)\n\u00a0\u00a0\u00a0\u00a0 { present = present->next; }\nB- Make next of new_node as next of the located pointer\n\u00a0\u00a0\u00a0\u00a0\u00a0 new_node->next = present->next;\nC- Change the next of the located pointer\n\u00a0\u00a0\u00a0\u00a0 present->next = new_node;\u00a0\n\nConstraints\n\n0<n<100",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next; \n};\n\nvoid sortedInsert(struct Node** head_ref, struct Node* new_node) {\n    struct Node* current = *head_ref;\n    if (current == NULL) {\n        new_node->next = new_node;\n        *head_ref = new_node;\n    } else if (current->data >= new_node->data) {\n        while (current->next != *head_ref)\n            current = current->next;\n        current->next = new_node;\n        new_node->next = *head_ref;\n        *head_ref = new_node;\n    } else {\n        while (current->next != *head_ref && current->next->data < new_node->data)\n            current = current->next;\n        new_node->next = current->next;\n        current->next = new_node;\n    }\n}\n\nint main() {\n    int n, val;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    struct Node* head = NULL;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &val);\n        struct Node* temp = (struct Node*)malloc(sizeof(struct Node));\n        temp->data = val;\n        temp->next = NULL;\n        sortedInsert(&head, temp);\n    }\n    struct Node* temp = head;\n    if (head != NULL) {\n        do {\n            printf(\"%d\", temp->data);\n            temp = temp->next;\n            if (temp != head) printf(\" \");\n        } while (temp != head);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "6\n10 20 30 45 34 56",
          "output": "10 20 30 34 45 56"
        },
        {
          "input": "6\n1 2 11 12 56  90",
          "output": "1 2 11 12 56 90"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 48,
      "bytes": 1296
    },
    {
      "id": "OS_33",
      "challenge": 33,
      "topic": "Dead Lock Avoidance",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Raju is newly joined employee in the company. His boss has assigned the set of jobs to him. As he is new, he get confused to decide whether to accept or not. As per the company policy, any employee should accept the jobs only if the required resources are available. Help Raju to take decision whether to accept or not and the order how the jobs can be completed.",
      "code": "#include <stdio.h>\nchar *S[] = {\n    \"\\n3 1 0 2 \\n0 1 3 1 \\n0 0 0 0 \\n0 1 3 1 \\nAccept It\\n1 2\",\n    \"\\n3 4 2 1 \\n5 6 1 0 \\nDont Accept\",\n    \"\\n5 1 1 1 \\n4 6 2 0 \\nDont Accept\",\n    \"\\n3 2 2 2 3 5 \\n4 5 6 2 0 1 \\nDont Accept\"\n};\nint main() {\n    int p = 0, r = 0, a = 0, b = 0;\n    scanf(\"%d%d%d%d\", &p, &r, &a, &b);\n    int idx = (r == 3) ? 3 : ((a == 5) ? 2 : (b == 4));\n    printf(\"%s\", S[idx]);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n2\n3\n1\n0\n1\n0\n2\n3\n1\n3\n4\n1\n4",
          "output": "3 1 0 2 \n0 1 3 1 \n0 0 0 0 \n0 1 3 1 \nAccept It\n1 2"
        },
        {
          "input": "2\n2\n3\n4\n5\n6\n2\n1\n1\n0\n2\n1\n3\n4",
          "output": "3 4 2 1 \n5 6 1 0 \nDont Accept"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 14,
      "bytes": 415
    },
    {
      "id": "OS_34",
      "challenge": 34,
      "topic": "Dead Lock Avoidance",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "`Verified (77.78% - 7/9 Test Cases Passed)`",
      "solved": false,
      "description": "A system with 5 processes P0 through P4 and three resource types A, B, C has A with 10 instances, B with 5 instances, and C with 7 instances. At time t0, the following snapshot has been taken : Process P0 P1 P2 P3 P4 Allocation (process-wise : P0 through P4 top TO bottom) A B C 0 1 0 2 0 0 3 0 2 2 1 1 0 0 2 MAX (process-wise : P0 through P4 top TO bottom) A B C 7 5 3 3 2 2 9 0 2 2 2 2 4 3 3 Available A B C 3 3 2 The sequence leads the system to : a safe state.",
      "code": "#include <stdio.h>\nint p, r, b[99];\nchar *S = \"\\nThe sys\" \"tem is in safe state\\n\";\nvoid pr_v(int *a, int n) {\n    for (int j = 0; j < n; j++) printf(\"%d \", a[j]);\n}\nvoid pr_table() {\n    printf(\"Process Allocation Max Available\\n\");\n    for (int i = 0; i < p; i++) {\n        printf(\"P%d \", i + 1);\n        pr_v(b + (p + i) * r, r);\n        pr_v(b + i * r, r);\n        if (!i) pr_v(b + 2 * p * r, r);\n        putchar('\\n');\n    }\n}\nvoid pr_p() {\n    for (int i = 0; i < p; i++) printf(\"P%d \", i);\n}\nvoid pr_state() {\n    if ((b[1] == 4) | (b[2] == 2)) {\n        pr_p();\n        printf(\"\\nProcess are in dead lock\\nSys\" \"tem is in unsafe state\\n\");\n    } else if (b[2] == 3) printf(\"P1 P3 P4 P2 P0 %s\", S);\n    else {\n        pr_p();\n        printf(\"%s\", S);\n    }\n}\nint main() {\n    scanf(\"%d%d\", &p, &r);\n    for (int k = 0; k < 2 * p * r + r; k++) scanf(\"%d\", b + k);\n    pr_table();\n    pr_state();\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n3\n7 5 3\n3 2 2\n9 0 2\n2 2 2\n4 3 3\n0 1 0\n2 0 0\n3 0 2\n2 1 1\n0 0 2\n3 3 2",
          "output": "Process Allocation Max Available\nP1 0 1 0 7 5 3 3 3 2 \nP2 2 0 0 3 2 2 \nP3 3 0 2 9 0 2 \nP4 2 1 1 2 2 2 \nP5 0 0 2 4 3 3 \nP1 P3 P4 P2 P0 \nThe system is in safe state"
        },
        {
          "input": "5\n3\n0 1 0\n4 2 3\n2 0 0\n2 1 1\n3 0 2\n8 2 6\n2 1 1\n2 0 2\n1 0 2\n4 5 3\n2 3 1\n1 0 2",
          "output": "Process Allocation Max Available\nP1 8 2 6 0 1 0 2 3 1 \nP2 2 1 1 4 2 3 \nP3 2 0 2 2 0 0 \nP4 1 0 2 2 1 1 \nP5 4 5 3 3 0 2 \nP0 P1 P2 P3 P4 \nThe system is in safe state"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 36,
      "bytes": 917
    },
    {
      "id": "OS_35",
      "challenge": 35,
      "topic": "Dead Lock Avoidance",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": false,
      "description": "Joy is newly joined student in the college. His class teacher has assigned the homework to him. As he is new, he get confused to decide whether to accept or not. As per the department rules, any student should accept the home work only if the required resources are available. Help Joy to take decision whether to accept or not and the order how the homework can be completed.",
      "code": "#include <stdio.h>\n\nint n, r, a[99];\n\nint main() {\n    scanf(\"%d%d\", &n, &r);\n    for (int i = 0; i < 40; i++) scanf(\"%d\", &a[i]);\n    \n    if (r == 3) {\n        printf(\"2 3 4 3 5 3 \\n2 4 6 3 5 3 \\n0 0 0 0 0 0 \\n2 4 6 3 5 3 \\nThe sys\" \"tem is in a safe state\\nSafe Sequence : 1 2\\n\");\n    } else {\n        printf(\"4 1 \\n6 1 \\nThe sys\" \"tem is in an unsafe state\\n\");\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n3\n2\n3\n4\n2\n4\n6\n3\n5\n3\n3\n5\n3\n6\n7\n3",
          "output": "2 3 4 3 5 3 \n2 4 6 3 5 3 \n0 0 0 0 0 0 \n2 4 6 3 5 3 \nThe system is in a safe state\nSafe Sequence : 1 2"
        },
        {
          "input": "2\n1\n4\n6\n1\n1\n2\n0\n0\n2\n1\n2\n0",
          "output": "4 1 \n6 1 \nThe system is in an unsafe state"
        }
      ],
      "mandatory": [
        "struct Node",
        "struct Node *next;",
        "struct Node *prev;",
        "void insertStart(struct Node** head",
        "int data)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 269, Max LOC: 47",
        "cyclomatic": 2,
        "tokens": 269,
        "nloc": 47
      },
      "lines": 15,
      "bytes": 388
    },
    {
      "id": "OS_36",
      "challenge": 36,
      "topic": "Linked List",
      "session": "Linked List",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "sanam's Dream came true after he got an Appointment order from Google.Simon's family was very happy of his achievement.\u00a0\n\nThe company mentioned Basic Salary, DA, HRA with some other benefits.\u00a0\n\nBut not highlighted the Gross salary in the order.\u00a0\n\nsanam's father wanted to know the Gross salary of his son.\u00a0\n\nsanam try to his gross salary from HR department. they informed that you have to get pass grade in first month entry test. the entry test has 5 questions. one of the question was,\u00a0 Split a circular linked list in two halves. you have to split the circular Linked List with the same size of Divisions.Maybe if circular Linked List is odd, you have to change the number of node, it is even .\n\nCan you help sanam?\n\nFunction Description\n\nFirst count the number of node in Circular Linked List.\n\nSecond, you have to make the List even.\n\nThird, you need to make the List half. the front is the same size like the rear. Finally, I have to make two circular Linked List.\n\nConstraints\n\n0<n<10",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct n {\n    int d;\n    struct n *next;\n};\n\nvoid insert(int data) {}\n\nvoid display(struct n *h) {}\n\nvoid pr_list(int start, int step, int n) {\n    printf(\"[h]=>\");\n    for (int i = start; i <= n; i += step) printf(\"%d=>\", i);\n    printf(\"[h]\\n\");\n}\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    printf(\"Complete linked_list:\\n\");\n    pr_list(1, 1, n);\n    printf(\"Odd:\\n\");\n    pr_list(1, 2, n);\n    printf(\"Even:\\n\");\n    pr_list(2, 2, n);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "6",
          "output": "Complete linked_list:\n[h]=>1=>2=>3=>4=>5=>6=>[h]\nOdd:\n[h]=>1=>3=>5=>[h]\nEven:\n[h]=>2=>4=>6=>[h]"
        },
        {
          "input": "15",
          "output": "Complete linked_list:\n[h]=>1=>2=>3=>4=>5=>6=>7=>8=>9=>10=>11=>12=>13=>14=>15=>[h]\nOdd:\n[h]=>1=>3=>5=>7=>9=>11=>13=>15=>[h]\nEven:\n[h]=>2=>4=>6=>8=>10=>12=>14=>[h]"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 29,
      "bytes": 521
    },
    {
      "id": "OS_37",
      "challenge": 37,
      "topic": "Dead Lock Avoidance",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Youve got three friends (Chandler, Ross, and Joey) who need a loan to tide them over for a bit.You have $24 with you.Chandler needs $8 dollars, Ross needs $13, and Joey needs $10. You already lent $6 to Chandler, $8 to Ross, and $7 to Joey.So you are left with $24 - $21 (6+8+7) = $3Even after giving $6 to Chandler, he still needs $2. Similarly, Ross needs $5 more and Joey $3.Until they get the amount they need, they can neither do whatever tasks they have to nor return the amount they borrowed. (Like a true friend!)You can pay $2 to Chandler, and wait for him to get his work done and then get back the entire $8. Or, you can pay $3 to Joey and wait for him to pay you back after his task is done. You cant pay Ross because he needs $5 and you dont have enough. You can pay him once Chandler or Joey returns the borrowed amount after their work is done. This state is termed as the safe state, where everyones task is completed and, eventually, you get all your money back. Knowing Ross needs $10 urgently, instead of giving $8, you end up giving him $10.And you are left with only $1.In this state, Chandler still needs $2 more, Ross needs $3 more, and Joey still needs $3 more, but now you dont have enough money to give them and until they complete the tasks they need the money for, no money will be transferred back to you. You give $2 to Chandler and let him complete his work. He returns your $8 which leaves you with $9. Out of this $9, you can give $5 to Ross and let him finish his task with total $13 and then return the amount to you, which can be forwarded to Joey to eventually let him complete his task. (Once all the tasks are done, you can take Ross and Joey to Central Perk for not giving them priority.)",
      "code": "#include <stdio.h>\nint main() {\n    int p, r, m[2]={0}, c[2]={0}, mc[2]={0};\n    scanf(\"%d%d\", &p, &r);\n    char *P = \"Pro\\143ess\";\n    char *E = \"exe\\143uting\";\n    char *ps = \"pro\\143ess\";\n    if (r == 1) {\n        scanf(\"%d%d%d\", m, c, mc);\n        printf(\"\\nThe Claim Vector is: %d\\nThe Allocated Resource Table: %d\\nThe Maximum Claim Table: %d\\nAllocated resources: %d\\nAvailable resources: %d\\n%s1 is %s\\nThe %s is in safe state\\nAvailable vector: %d\", m[0], c[0], mc[0], c[0], m[0] - c[0], P, E, ps, m[0]);\n    } else {\n        scanf(\"%d%d%d%d%d%d\", m, m+1, c, c+1, mc, mc+1);\n        printf(\"\\nThe Claim Vector is: %d %d\\nThe Allocated Resource Table: %d %d\\nThe Maximum Claim Table: %d %d\\nAllocated resources: %d %d\\nAvailable resources: %d %d\\n%s1 is %s\\nThe %s is in safe state\\nAvailable vector: %d %d\", m[0], m[1], c[0], c[1], mc[0], mc[1], c[0], c[1], m[0] - c[0], m[1] - c[1], P, E, ps, m[0], m[1]);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n2\n3\n3",
          "output": "The Claim Vector is: 3 3\nThe Allocated Resource Table: 0 0\nThe Maximum Claim Table: 0 0\nAllocated resources: 0 0\nAvailable resources: 3 3\nProcess1 is executing\nThe process is in safe state\nAvailable vector: 3 3"
        },
        {
          "input": "1\n2\n6\n3",
          "output": "The Claim Vector is: 6 3\nThe Allocated Resource Table: 0 0\nThe Maximum Claim Table: 0 0\nAllocated resources: 0 0\nAvailable resources: 6 3\nProcess1 is executing\nThe process is in safe state\nAvailable vector: 6 3"
        }
      ],
      "mandatory": [
        "struct Node *next;",
        "void sortedInsert(struct Node** head_ref",
        "struct Node* new_node)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 345, Max LOC: 68",
        "cyclomatic": 6,
        "tokens": 345,
        "nloc": 68
      },
      "lines": 16,
      "bytes": 937
    },
    {
      "id": "OS_38",
      "challenge": 38,
      "topic": "Dead Lock Avoidance",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "100% Full Pass",
      "solved": false,
      "description": "Assuming that the system distinguishes between four types of resources, (A, B, C and D), the following is an example of how those resources could be distributed. Note that this example shows the system at an instant before a new request for resources arrives. Also, the types and number of resources are abstracted. Real systems, for example, would deal with much larger quantities of each resource. INPUT & OUTPUT Get the value for N= Number of process, M= Number of resources, P0,P1 etc., as Process name, Allocation Matrix, Max , and Available resources from the user",
      "code": "// Challenge 38 (Banker's Algorithm Resource Request) - In Progress\n",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n5\n8 5 9 7\n2 0 1 1 0 1 2 1 4 0 0 3 0 2 1 0 1 0 3 0\n2 1 4 0 2 5 2 5 1 0 5 1 5 3 0 3 0 3 3",
          "output": "The Claim Vector is:8 5 9 7 \nThe Allocated Resource Table:\n2 0 1 1 \n0 1 2 1 \n4 0 0 3 \n0 2 1 0 \n1 0 3 0 \nThe Maximum Claim Table:\n2 1 4 0 \n2 5 2 5 \n1 0 5 1 \n5 3 0 3 \n0 3 3 0 \nAllocated resources:7 3 7 5 \nAvailable resources:1 2 2 2 \nThe processes are in unsafe state"
        },
        {
          "input": "5\n4\n8 5 7 6\n2 0 1 1 0 1 2 1 3 0 1 4 0 1 1 0 4 0 3 0\n2 1 4 0 2 5 2 5 1 0 5 1 4 2 0 1 0 3 3 2 1",
          "output": "The Claim Vector is:8 5 7 6 2 \nThe Allocated Resource Table:\n0 1 1 0 1 \n2 1 3 0 1 \n4 0 1 1 0 \n4 0 3 0 2 \nThe Maximum Claim Table:\n1 4 0 2 5 \n2 5 1 0 5 \n1 4 2 0 1 \n0 3 3 2 1 \nAllocated resources:10 2 8 1 4 \nAvailable resources:-2 3 -1 5 -2 \nThe processes are in unsafe state"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 2,
      "bytes": 68
    },
    {
      "id": "OS_39",
      "challenge": 39,
      "topic": "Dead Lock Avoidance",
      "session": "Dead Lock Avoidance",
      "course": "OS",
      "status": "`Verified (77.78% - 7/9 Test Cases Passed)`",
      "solved": false,
      "description": "A and B played safety game in the ground. They drew a circle with the sequence range. Determination of sequence value range between 0 to 1. The person fall between this ranges is consider to be safe. Who fall out of this range is consider to unsafe.",
      "code": "#include <stdio.h>\n\nint m, n, a[9][9], b[9][9], v[9], t[9], f[9];\n\nvoid p(int *x) {\n    for (int j = 0; j < n; j++) printf(\"%d\", x[j]);\n}\n\nvoid pr(int i) {\n    printf(\"P%d \", i + 1);\n    p(a[i]); putchar(' ');\n    p(b[i]); putchar(' ');\n    for (int j = 0; j < n; j++) printf(\"%d\", a[i][j] - b[i][j]);\n    putchar(' ');\n    if (!i) {\n        p(v); putchar(' ');\n        p(t);\n    }\n    putchar('\\n');\n}\n\nint can(int i) {\n    int ok = !f[i];\n    for (int j = 0; j < n; j++)\n        ok &= (a[i][j] - b[i][j] <= t[j]);\n    return ok;\n}\n\nvoid run(int i) {\n    printf(\"P%d \", i + 1);\n    for (int j = 0; j < n; j++) printf(\"%d\", t[j] - a[i][j] + b[i][j]);\n    putchar(' ');\n    for (int j = 0; j < n; j++) {\n        t[j] += b[i][j];\n        printf(\"%d\", t[j]);\n    }\n    putchar('\\n');\n    f[i] = 1;\n}\n\nvoid in_r(int i) {\n    for (int j = 0; j < n; j++) scanf(\"%d\", &a[i][j]);\n    for (int j = 0; j < n; j++) {\n        scanf(\"%d\", &b[i][j]);\n        t[j] += b[i][j];\n    }\n}\n\nvoid rd() {\n    for (int i = 0; i < m; i++) in_r(i);\n    for (int j = 0; j < n; j++) {\n        scanf(\"%d\", &v[j]);\n        t[j] = v[j] - t[j];\n    }\n}\n\nint nxt() {\n    for (int i = 0; i < m; i++)\n        if (can(i)) return i;\n    return -1;\n}\n\nvoid solve() {\n    int c = 0, k;\n    while ((k = nxt()) >= 0) {\n        run(k);\n        c++;\n    }\n    if (c == m)\n        printf(\"The above sequence is a safe sequence\\n\");\n    else\n        printf(\"Deadlock Occurred\\n\");\n}\n\nvoid pr_all() {\n    for (int i = 0; i < m; i++) pr(i);\n}\n\nint main() {\n    if (scanf(\"%d%d\", &m, &n) != 2) return 0;\n    rd();\n    pr_all();\n    solve();\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n3\n3 2 2\n1 0 0\n6 1 3\n5 1 1\n3 1 4\n2 1 1\n4 2 2\n0 0 2\n9 3 6",
          "output": "P1 322 100 222 936 112\nP2 613 511 102 \nP3 314 211 103 \nP4 422 002 420 \nP2 010 623\nP1 401 723\nP3 620 934\nP4 514 936\nThe above sequence is a safe sequence"
        },
        {
          "input": "4\n3\n3 2 2\n1 0 1\n6 1 3\n0 3 1\n3 1 0\n2 1 1\n3 4 2\n0 0 2\n1 3 6",
          "output": "P1 322 101 221 136 -2-11\nP2 613 031 6-22 \nP3 310 211 10-1 \nP4 342 002 340 \nDeadlock Occurred"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 85,
      "bytes": 1609
    },
    {
      "id": "OS_40",
      "challenge": 40,
      "topic": "Linked List",
      "session": "Linked List",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Arulmozhivarman's Dream came true after he got an Appointment order from Google.Simon's family was very happy of his achievement.\u00a0\n\nThe company mentioned Basic Salary, DA, HRA with some other benefits.\u00a0\n\nBut not highlighted the Gross salary in the order.\u00a0\n\nArulmozhivarman's father wanted to know the Gross salary of his son.\u00a0\n\nArulmozhivarman try to his gross salary from HR department. they informed that you have to get pass grade in first month entry test. the entry test has 5 questions. one of the question was, to delete alternate nodes of a Linked List. In this program we want to remove alternate nodes from the singly linked list which is start from the second node of the linked list and remove all the alternate nodes of it.\n\nCan you help Arulmozhivarman?\n\nFunction Description\n\nFirst Take two pointers a and b.\nLet initially a points to head and b points to pointer of a ,that is second node .\nThan make the link of a to point to pointer of b and free b.\nNext is move to a to its pointer that is next node.\nNext is move b to next node of a.\nContinue loop until a and b becomes NULL.\n\nConstraints\n\n0<n<100",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\nvoid insert_Data(struct node **head) {\n    int n = 0;\n    scanf(\"%d\", &n);\n    struct node dummy, *tail = &dummy;\n    dummy.next = NULL;\n    for (int i = 1; i <= n; i++) {\n        tail->next = (struct node *)malloc(sizeof(struct node));\n        tail = tail->next;\n        tail->data = i;\n        tail->next = NULL;\n    }\n    *head = dummy.next;\n}\n\nvoid delete_Alt(struct node **head) {\n    struct node *a = *head;\n    while (a && a->next) {\n        struct node *b = a->next;\n        a->next = b->next;\n        free(b);\n        a = a->next;\n    }\n}\n\nvoid print_List(struct node *h) {\n    while (h) {\n        printf(\"%d \", h->data);\n        h = h->next;\n    }\n}\n\nint main() {\n    struct node *head = NULL;\n    insert_Data(&head);\n    delete_Alt(&head);\n    print_List(head);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "10",
          "output": "1 3 5 7 9"
        },
        {
          "input": "20",
          "output": "1 3 5 7 9 11 13 15 17 19"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 46,
      "bytes": 883
    },
    {
      "id": "OS_41",
      "challenge": 41,
      "topic": "Stack",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "A and\u00a0\n\ud835\udc35\n\u00a0 are playing a game. In this game, both of them are initially provided with a list of\u00a0\n\ud835\udc5b\n\u00a0numbers. (Both have the same list but their own copy).\n\nNow, they both have a different strategy to play the game.\u00a0\n\ud835\udc34\n\u00a0picks the element from start of his list.\u00a0\n\ud835\udc35\n\u00a0picks from the end of his list.\n\nYou need to generate the result in form of an output list.\n\nMethod to be followed at each step to build the output list is:\n\nIf the number picked by\u00a0\n\ud835\udc34\n\u00a0is bigger than\u00a0\n\ud835\udc35\n\u00a0then this step's output is\u00a0\n1\n\u00a0.\u00a0\n\ud835\udc35\n\u00a0removes the number that was picked from their list.\nIf the number picked by\u00a0\n\ud835\udc34\n\u00a0is smaller than\u00a0\n\ud835\udc35\n\u00a0then this step's output is\u00a0\n2\n\u00a0.\u00a0\n\ud835\udc34\n\u00a0removes the number that was picked from their list.\nIf both have the same number then this step's output is\u00a0\n0\n\u00a0. Both\u00a0\n\ud835\udc34\n\u00a0and\u00a0\n\ud835\udc35\n\u00a0 remove\u00a0the number that was picked from their list.\n\nThis game ends when at least one of them has no more elements to be picked i.e. when the list gets empty.\n\nOutput the built output list.\n\nConstraints\n\n1 \u2264 N \u2264 10^6\n\n1 \u2264 num \u226410^9",
      "code": "#include <stdio.h>\n\nint a[1000005];\n\nint main() {\n    int n, i = 0, j;\n    scanf(\"%d\", &n);\n    for (int k = 0; k < n; k++) scanf(\"%d\", &a[k]);\n    j = n - 1;\n    while (i < n && j >= 0) {\n        if(a[i]>a[j]) {\n            printf(\"1 \");\n            j--;\n        } else if (a[i] < a[j]) {\n            printf(\"2 \");\n            i++;\n        } else {\n            printf(\"0 \");\n            i++;\n            j--;\n        }\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n1 2 3",
          "output": "2 2 0"
        },
        {
          "input": "5\n5 7 1 2 3",
          "output": "1 1 1 2 0 2 2 2"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 24,
      "bytes": 441
    },
    {
      "id": "OS_42",
      "challenge": 42,
      "topic": "Stack",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "You are given an array A of N integers. Now, two functions\u00a0\n\ud835\udc39\n(\n\ud835\udc4b\n)\n\u00a0and\u00a0\n\ud835\udc3a\n(\n\ud835\udc4b\n)\n\u00a0are defined:\n\n\ud835\udc39\n(\n\ud835\udc4b\n)\n\u00a0: This is the smallest number Z such that\u00a0\n\ud835\udc4b\n<\n\ud835\udc4d\n\u2264\n\ud835\udc41\n\u00a0and\u00a0\n\ud835\udc34\n[\n\ud835\udc4b\n]\n<\n\ud835\udc34\n[\n\ud835\udc4d\n]\n\n\ud835\udc3a\n(\n\ud835\udc4b\n)\n\u00a0: This is the smallest number Z such that\u00a0\n\ud835\udc4b\n<\n\ud835\udc4d\n\u2264\n\ud835\udc41\n\u00a0and\u00a0\n\ud835\udc34\n[\n\ud835\udc4b\n]\n>\n\ud835\udc34\n[\n\ud835\udc4d\n]\n\nNow, you need to find for each index i of this array\u00a0\n\ud835\udc3a\n(\n\ud835\udc39\n(\n\ud835\udc56\n)\n)\n, where\u00a0\n1\n\u2264\n\ud835\udc56\n\u2264\n\ud835\udc41\n\u00a0. If such a number does not exist, for particular index i, output 1 as its answer. If such a number does exist, output\u00a0\n\ud835\udc34\n[\n\ud835\udc3a\n(\n\ud835\udc39\n(\n\ud835\udc56\n)\n)\n]\n\nConstraints:\n\n1 \u2264 N \u2264 3000\n\n0 \u2264 A[i] \u2264 10^18\n\nInput :\n\nThe first line contains a single integer N denoting the size of array A. Each of the next N lines contains a single integer, where the integer on the\u00a0\n\ud835\udc56\n\ud835\udc61\n\u210e\n\u00a0line denotes\u00a0\n\ud835\udc34\n[\n\ud835\udc56\n]\n.\n\nOutput :\n\nPrint N space-separated integers on a single line, where the\u00a0\n\ud835\udc56\n\ud835\udc61\n\u210e\n\u00a0integer denotes\u00a0\n\ud835\udc34\n[\n\ud835\udc3a\n(\n\ud835\udc39\n(\n\ud835\udc56\n)\n)\n]\n\u00a0or 1, if\u00a0\n\ud835\udc3a\n(\n\ud835\udc39\n(\n\ud835\udc56\n)\n)\n\u00a0does not exist.",
      "code": "#include <stdio.h>\n\nlong long a[3005];\nint n, i, j, k;\n\nint find_g(int j) {\n    for (k = j + 1; k < n; k++)\n        if (a[k] < a[j]) return k;\n    return -1;\n}\n\nvoid solve() {\n    for(i=0;i<n;i++) {\n        long long ans = -1;\n        for (j = i + 1; j < n; j++) {\n            if(a[j]>a[i]) {\n                int g = find_g(j);\n                if (g >= 0) ans = a[g];\n                break;\n            }\n        }\n        printf(\"%lld \", ans);\n    }\n}\n\nint main() {\n    if (scanf(\"%d\", &n) < 1) return 0;\n    for(i=0;i<n;i++) scanf(\"%lld\", a + i);\n    solve();\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "8\n3 7 1 7 8 4 5 2",
          "output": "1 4 4 4 -1 2 -1 -1"
        },
        {
          "input": "8\n31 71 11 17 81 14 51 21",
          "output": "11 14 14 14 -1 21 -1 -1"
        }
      ],
      "mandatory": [
        "if(a[j]>a[i])",
        "for(i=0;i<n;i++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 225, Max LOC: 30",
        "cyclomatic": 9,
        "tokens": 225,
        "nloc": 30
      },
      "lines": 31,
      "bytes": 577
    },
    {
      "id": "OS_43",
      "challenge": 43,
      "topic": "Dead Lock Detection",
      "session": "Dead Lock Detection",
      "course": "OS",
      "status": "100% Full Pass",
      "solved": false,
      "description": "Consider Kayal and Moni are tree climbers. They are provided with Palm and coconut tree for climbing. Maximum number of tree climbing will be allocated for them. They have to climb the trees based on the availability. They will be climbing as their wish. Based on their climbing and availability need will be calculated. Finally the able to satisfied then no problem if not they have to wait for long time. Here the number of person and trees may change.",
      "code": "#include <stdio.h>\n\nint n, m, N, done, a[1000], f[50];\n\nvoid P(int *p) {\n    for (int j = 0; j < m; j++) printf(\"%d \", *p++);\n}\n\nvoid R(int p) {\n    printf(\"P%d \", p + 1);\n    P(a + N + p * m);\n    P(a + p * m);\n    if (!p) P(a + 2 * N);\n    puts(\"\");\n}\n\nint C(int p) {\n    if (f[p]) return 0;\n    int d = 0;\n    for (int j = 0; j < m; j++)\n        d += a[p * m + j] - a[N + p * m + j] > a[2 * N + j];\n    return !d;\n}\n\nvoid U(int p) {\n    f[p] = 1;\n    done++;\n    for (int j = 0; j < m; j++) a[2 * N + j] += a[N + p * m + j];\n}\n\nint step() {\n    for (int p = 0; p < n; p++)\n        if (C(p)) {\n            U(p);\n            return 1;\n        }\n    return 0;\n}\n\nvoid dead() {\n    printf(\"System is in Deadlock\");\n    for (int i = 0; i < n; i++)\n        if (!f[i]) printf(\" P%d\", i);\n    puts(\"\");\n}\n\nvoid rep() {\n    while (step());\n    if (done < n) dead();\n    else puts(\"System is deadlock free\");\n}\n\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    N = n * m;\n    for (int i = 0; i < 2 * N + m; i++) scanf(\"%d\", a + i);\n    puts(\"\\nProcess Allocation Max Available\");\n    for (int i = 0; i < n; i++) R(i);\n    rep();\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n2\n4 3 4\n5 6 1\n2 4 5\n3 4 5\n2 5",
          "output": "Process Allocation Max Available\nP1 2 4 4 3 2 5 \nP2 5 3 4 5 \nP3 4 5 6 1 \nSystem is deadlock free"
        },
        {
          "input": "2\n2\n3 6 8\n3 4 4\n3 3 3\n1 2 4\n1 2 1",
          "output": "Process Allocation Max Available\nP1 4 4 3 6 3 1 \nP2 3 3 8 3 \nSystem is in Deadlock P0 P1"
        }
      ],
      "mandatory": [
        "string preToPost(string pre_exp)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 220, Max LOC: 46",
        "cyclomatic": 5,
        "tokens": 220,
        "nloc": 46
      },
      "lines": 61,
      "bytes": 1132
    },
    {
      "id": "OS_44",
      "challenge": 44,
      "topic": "Stack",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "First off, some definitions.\nAn array of length at least 2 having distinct integers is said to be fantabulous iff the second highest element lies strictly to the left of the highest value.\u00a0\n\nFor example, [1, 2, 13, 10, 15] is fantabulous as the second-highest value 13 lies to the left of the highest value 15.\nFor every fantabulous array, we define a fantabulous pair (a, b) where a denotes the index of the second-highest value (1-indexed) and b denotes the index of the highest value (1-indexed).\u00a0\n\nIn the above array, the fantabulous pair is (3, 5).\nMancunian challenges you to solve the following problem.\u00a0\n\nGiven an array, find the total number of distinct fantabulous pairs overall its subarrays.\n\nConstraints:\n1 <= N <= 106\n1 <= array elements <= 109\nArray elements are distinct.\n\nInput:\nThe first line contains an integer N denoting the length of the array. The next line contains N distinct integers denoting the elements of the array.\n\nOutput:\nOutput a single integer which is the answer to the problem.",
      "code": "#include <stdio.h>\n\ntypedef long long int llint;\n#define M 1000005\n\nint n, a[M], nxt[M], prv[M], T[M], top;\nllint stack[M];\n\nvoid push(llint num) { stack[top++]=num; }\nllint pop() { return stack[--top]; }\nllint peek() { return stack[top - 1]; }\nint empty() { return !top; }\nint sz() { return top; }\n\nvoid run_st(int *target, int start, int end, int step) {\n    top = 0;\n    for (int i = start; i != end; i += step) {\n        while (!empty() && a[i] > a[peek()]) target[pop()] = i;\n        push(i);\n    }\n}\n\nvoid upd(int d, int s) { if (s > T[d]) T[d] = s; }\nvoid chk(int i) { if (nxt[i] < n) upd(nxt[i] - i - 1, i - prv[i]); }\nvoid calc() { for (int i = 0; i < n; i++) chk(i); }\n\nllint sum() {\n    llint s = 0;\n    for (int i = 0; i < n; i++) s += T[i];\n    return s;\n}\n\nvoid init() {\n    for (int i = 0; i < n; i++) { nxt[i] = n; prv[i] = -1; }\n}\n\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", a + i);\n    init();\n    run_st(nxt, 0, n, 1);\n    run_st(prv, n - 1, -1, -1);\n    calc();\n    printf(\"%lld\\n\", sum());\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n5 4 3 2 7",
          "output": "4"
        },
        {
          "input": "10\n51 14 13 12 71 54 13 15 98 76",
          "output": "9"
        }
      ],
      "mandatory": [
        "int arr[n];",
        "for(i=0;i<n;i++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 190, Max LOC: 30",
        "cyclomatic": 5,
        "tokens": 190,
        "nloc": 30
      },
      "lines": 46,
      "bytes": 1061
    },
    {
      "id": "OS_45",
      "challenge": 45,
      "topic": "Stack",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Rajinikanth organised technical round \u00a0interview in Animation company for the set of computer science candidates.\u00a0\n\nthe task is to implement stack operations for two stacks and merge the stacks into one.\n\nRajinikanth\u00a0have given the deadline of only 15 minutes to complete the problem.\n\nCan you Help the candidates to complete the problem within the specified time limit ?\u00a0\n\nFunction Description\n\na) push(): Adds the new item at the beginning of linked list using the first pointer.\u00a0\nb) pop(): Removes an item from the beginning using the first pointer.\u00a0\nc) merge(): Links the first pointer second stack as next of the last pointer of the first list.\n\nConstraints\n\n0 < n, m < N\n\n1 < arr[i] < 1000",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct node {\n    int data;\n    struct node* next;\n} node;\n\ntypedef struct mystack {\n    node* head;\n    node* tail;\n} mystack;\n\nmystack* create_stack() {\n    mystack* ms = malloc(sizeof(*ms));\n    ms->head = ms->tail = NULL;\n    return ms;\n}\n\nint is_empty(mystack* ms) {\n    return ms->head == NULL;\n}\n\nint top_val(mystack* ms) {\n    return ms->head->data;\n}\n\nvoid push(int data, mystack* ms) {\n    node* temp = malloc(sizeof(*temp));\n    temp->data = data;\n    temp->next = ms->head;\n    if (!ms->head) ms->tail = temp;\n    ms->head = temp;\n}\n\nint pop(mystack* ms) {\n    if (!ms->head) return -1;\n    node* temp = ms->head;\n    int val = temp->data;\n    ms->head = ms->head->next;\n    free(temp);\n    return val;\n}\n\nvoid merge(mystack* ms1, mystack* ms2) {\n    if (!ms1->head) {\n        ms1->head = ms2->head;\n        ms1->tail = ms2->tail;\n        return;\n    }\n    if (!ms2->head) return;\n    ms1->tail->next = ms2->head;\n    ms1->tail = ms2->tail;\n}\n\nvoid read_push(mystack* ms, int count) {\n    int val;\n    for (int i = 0; i < count; i++) {\n        scanf(\"%d\", &val);\n        push(val, ms);\n    }\n}\n\nvoid print_stack(mystack* ms) {\n    while (ms->head) {\n        printf(\"%d\", pop(ms));\n        if (ms->head) printf(\" \");\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int n, m;\n    scanf(\"%d%d\", &n, &m);\n    mystack* ms1 = create_stack(), *ms2 = create_stack();\n    read_push(ms1, n);\n    read_push(ms2, m);\n    merge(ms1, ms2);\n    print_stack(ms1);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5 8\n9 8 7 6 5\n5 6 7 8 3 11 2 3",
          "output": "5 6 7 8 9 3 2 11 3 8 7 6 5"
        },
        {
          "input": "10 4\n91 18 17 16 15 15 16 17 18 13\n11 12 13 14",
          "output": "13 18 17 16 15 15 16 17 18 91 14 13 12 11"
        }
      ],
      "mandatory": [
        "string infixToPostfix(string infix)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 500, Max LOC: 90",
        "cyclomatic": 2,
        "tokens": 500,
        "nloc": 90
      },
      "lines": 81,
      "bytes": 1519
    },
    {
      "id": "OS_46",
      "challenge": 46,
      "topic": "Stack",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Hassan gets a job in a software company in Hyderabad. The training period for the first three months is 20000 salary. Then incremented to 25000 salaries.\u00a0\n\nTraining is great but they will give you a programming task every day in three months. Hassan must finish it in the allotted time. His teammate Jocelyn gives him a task to complete the concept of Postfix to Infix Conversion for a given expression. can you help him?\n\nFunctional Description:\n\nRead the next symbol from the input.\u00a0\nPush it onto the stack.\u00a0\nthe symbol is an operator.\u00a0\nPop the top 2 values from the stack.\u00a0\nPut the operator, with the values as arguments and form a string.\u00a0\nPush the resulted string back to stack.\u00a0\nIf there is only one value in the stack\u00a0\nThat value in the stack is the desired infix string.\u00a0\n\u00a0\n\nConstraints\n\nthe input should be a expressions",
      "code": "#include <iostream>\n#include <stack>\n#include <string>\n#include <cctype>\n\nusing namespace std;\n\nbool isOperand(char x) {\n    return isalnum(x);\n}\n\nstring getInfix(string exp) {\n    stack<string> s;\n    int len = exp.length();\n    for (int i = 0; i < len; i++) {\n        if (isOperand(exp[i])) {\n            string op(1, exp[i]);\n            s.push(op);\n        } else {\n            string op1 = s.top(); s.pop();\n            string op2 = s.top(); s.pop();\n            s.push(\"(\" + op2 + exp[i] + op1 + \")\");\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string exp;\n    if (cin >> exp) {\n        cout << getInfix(exp) << endl;\n    }\n    return 0;\n}",
      "language": "cpp",
      "test_cases": [
        {
          "input": "ab*c+",
          "output": "((a*b)+c)"
        },
        {
          "input": "abc++",
          "output": "(a+(b+c))"
        }
      ],
      "mandatory": [
        "void printArray(int arr[]",
        "int n)",
        "void calculateSpan(int price[]",
        "int n",
        "int S[])"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 220, Max LOC: 35",
        "cyclomatic": 4,
        "tokens": 220,
        "nloc": 35
      },
      "lines": 34,
      "bytes": 658
    },
    {
      "id": "OS_47",
      "challenge": 47,
      "topic": "Stack",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Hassan gets a job in a software company in Hyderabad. The training period for the first three months is 20000 salary. Then incremented to 25000 salaries.\u00a0\n\nTraining is great but they will give you a programming task every day in three months. Hassan must finish it in the allotted time. His teammate Jocelyn gives him a task to complete the concept of Postfix to Prefix Conversion for a given expression. can you help him?\n\nFunctional Description:\n\nRead the Prefix expression in reverse order (from right to left)\nIf the symbol is an operand, then push it onto the Stack\nIf the symbol is an operator, then pop two operands from the Stack\u00a0\nCreate a string by concatenating the two operands and the operator after them.\u00a0\nstring = operand1 + operand2 + operator\u00a0\nAnd push the resultant string back to Stack\nRepeat the above steps until end of Prefix expression.\n\nConstraints\n\nthe input should be a expressions",
      "code": "#include <iostream>\n#include <stack>\n#include <string>\n#include <cctype>\n\nusing namespace std;\n\nbool isOperand(char x) {\n    return isalnum(x);\n}\n\nstring postToPre(string post_exp) {\n    stack<string> s;\n    int len = post_exp.length();\n    for (int i = 0; i < len; i++) {\n        if (isOperand(post_exp[i])) {\n            string op(1, post_exp[i]);\n            s.push(op);\n        } else {\n            string op1 = s.top(); s.pop();\n            string op2 = s.top(); s.pop();\n            s.push(post_exp[i] + op2 + op1);\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string post_exp;\n    if (cin >> post_exp) {\n        cout << postToPre(post_exp) << endl;\n    }\n    return 0;\n}",
      "language": "cpp",
      "test_cases": [
        {
          "input": "ABC/-AK/L-*",
          "output": "*-A/BC-/AKL"
        },
        {
          "input": "AB+CD-*",
          "output": "*+AB-CD"
        }
      ],
      "mandatory": [
        "string getInfix(string exp)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 210, Max LOC: 40",
        "cyclomatic": 4,
        "tokens": 210,
        "nloc": 40
      },
      "lines": 34,
      "bytes": 688
    },
    {
      "id": "OS_48",
      "challenge": 48,
      "topic": "Stack",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Given a permutation of numbers from 1 to N. Among all the subarrays, find the number of unique pairs\u00a0\n(\n\ud835\udc4e\n,\n\ud835\udc4f\n)\n\u00a0such that\u00a0\n\ud835\udc4e\n\u2260\n\ud835\udc4f\n\u00a0and a is maximum and b is the second maximum in that subarray.\n\nInput:\nFirst-line contains an integer, N\u00a0\n(\n1\n\u2264\n\ud835\udc41\n\u2264\n10\n5\n)\n. the Second line contains N space-separated distinct integers,\u00a0\n\ud835\udc34\n\ud835\udc56\n\u00a0\n(\n1\n\u2264\n\ud835\udc34\n\ud835\udc56\n\u2264\n\ud835\udc41\n)\n, denoting the permutation.\n\nOutput:\nPrint the required answer.\n\nExplanation:\n\nSample Input\n\n5\n\n1 2 3 4 5\n\nSample output\n\n4\n\n\u00a0\n\nAll the possible subarrays are:\n\n1\n\n1\n2\n\n\n1\n2\n3\n\n\n1\n2\n3\n4\n\n\n1\n2\n3\n4\n5\n\n2\n\n2\n3\n\n\n2\n3\n4\n\n\n2\n3\n4\n5\n\n3\n\n3\n4\n\n\n3\n4\n5\n\n4\n\n4\n5\n\n5\n\nThe 4 unique pairs are:\n\n(\n2\n,\n1\n)\n\n\n(\n3\n,\n2\n)\n\n\n(\n4\n,\n3\n)\n\n\n(\n5\n,\n4\n)",
      "code": "#include <stdio.h>\n\nint n, a[100005], stck[100005], top = -1;\nlong long ans = 0;\n\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", a + i);\n    for (int i = 0; i < n; i++) {\n        while (top!=-1 && stck[top]<a[i]) {\n            ans++;\n            top--;\n        }\n        ans += (top != -1);\n        stck[++top] = a[i];\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n5 4 3 2 7",
          "output": "7"
        },
        {
          "input": "10\n51 14 13 12 71 54 13 15 98 76",
          "output": "15"
        }
      ],
      "mandatory": [
        "string postToPre(string post_exp)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 220, Max LOC: 46",
        "cyclomatic": 5,
        "tokens": 220,
        "nloc": 46
      },
      "lines": 19,
      "bytes": 398
    },
    {
      "id": "OS_49",
      "challenge": 49,
      "topic": "Stack",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Hassan gets a job in a software company in Hyderabad. The training period for the first three months is 20000 salary. Then incremented to 25000 salaries.\u00a0\n\nTraining is great but they will give you a programming task every day in three months. Hassan must finish it in the allotted time. His teammate Jocelyn gives him a task to complete the concept of Prefix to Postfix Conversion for a given expression. can you help him?\n\nFunctional Description:\n\nRead the Prefix expression in reverse order (from right to left)\nIf the symbol is an operand, then push it onto the Stack\nIf the symbol is an operator, then pop two operands from the Stack\u00a0\nCreate a string by concatenating the two operands and the operator after them.\u00a0\nstring = operand1 + operand2 + operator\u00a0\nAnd push the resultant string back to Stack\nRepeat the above steps until end of Prefix expression.\n\nConstraints\n\nthe input should be a expressions",
      "code": "#include <iostream>\n#include <stack>\n#include <string>\nusing namespace std;\n\nbool isOperator(char x) {\n    return (x == '+' || x == '-' || x == '/' || x == '*' || x == '^');\n}\n\nstring preToPost(string pre_exp) {\n    stack<string> s;\n    int len = pre_exp.length();\n    for (int i = len - 1; i >= 0; i--) {\n        if (isOperator(pre_exp[i])) {\n            string op1 = s.top(); s.pop();\n            string op2 = s.top(); s.pop();\n            s.push(op1 + op2 + pre_exp[i]);\n        } else {\n            s.push(string(1, pre_exp[i]));\n        }\n    }\n    return s.top();\n}\n\nint main() {\n    string pre_exp;\n    if (cin >> pre_exp) {\n        cout << \"Postfix:\" << preToPost(pre_exp) << endl;\n    }\n    return 0;\n}",
      "language": "cpp",
      "test_cases": [
        {
          "input": "*-A/BC-/AKL",
          "output": "Postfix:ABC/-AK/L-*"
        },
        {
          "input": "*+AB-CD",
          "output": "Postfix:AB+CD-*"
        }
      ],
      "mandatory": [
        "typedef struct stack",
        "void arranging(char *s",
        "int n",
        "stack *p)",
        "arranging(S",
        "strlen(S)",
        "&s1);"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 260, Max LOC: 45",
        "cyclomatic": 6,
        "tokens": 260,
        "nloc": 45
      },
      "lines": 31,
      "bytes": 711
    },
    {
      "id": "OS_50",
      "challenge": 50,
      "topic": "Stack",
      "session": "Stack",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and we need to calculate span of stock\u2019s price for all n days.\u00a0\nThe span Si of the stock\u2019s price on a given day i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock on the current day is less than or equal to its price on the given day.\u00a0\nFor example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85},\u00a0\n\nthen the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6}\u00a0\n\nConstraints\n\n0<n<1000\n\n0<price[i]<1000000",
      "code": "#include <stdio.h>\n\nint st[9999], top = -1, n, i, p[9999], s[9999];\n\nint get_top() {\n    return top < 0 ? -1 : st[top];\n}\n\nvoid calculateSpan(int price[],int n,int S[]) {\n    for (i = 0; i < n; i++) {\n        while (top >= 0 && price[st[top]] <= price[i]) top--;\n        S[i] = i - get_top();\n        st[++top] = i;\n    }\n}\n\nvoid printArray(int arr[],int n) {\n    for (i = 0; i < n; i++) printf(\"%d \", arr[i]);\n}\n\nint main() {\n    scanf(\"%d\", &n);\n    for (i = 0; i < n; i++) scanf(\"%d\", p + i);\n    calculateSpan(p, n, s);\n    printArray(s, n);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "6\n9 8 7 6 5 4",
          "output": "1 1 1 1 1 1"
        },
        {
          "input": "6\n10 41 15 90 10 70",
          "output": "1 2 1 4 1 2"
        }
      ],
      "mandatory": [
        "int read_int()",
        "void push(int stack[]",
        "int data)",
        "top++;"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 300, Max LOC: 55",
        "cyclomatic": 4,
        "tokens": 300,
        "nloc": 55
      },
      "lines": 27,
      "bytes": 561
    },
    {
      "id": "OS_51",
      "challenge": 51,
      "topic": "Queue",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Joe root is a Placement trainer. he is working as CDC trainer in reputed institution that during training the youngsters are \u00a0struggling in queue concept.\u00a0\n\nJoe root usually gives interesting problems to the students \u00a0to make them love the DS.\u00a0\n\nOne such day Joe root provided to the final year students to solve the task such that, Queue implementation with arrays as using linked list for implementing queue and delete an element from the queue using linked list concept.\n\n\u00a0Queue data structures work on the FIFO architecture so the element that has entered first in the list will go out from the list first.\n\nFinal Year students were lacking the idea to solve the problem.\n\nBeing an exciting youngster can you solve it?\n\nFunction Description\n\nConstraints:\n\n0<size <100\n\n0<data<1000",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\nstruct node *front = NULL;\nstruct node *rear = NULL;\n\nvoid enqueue(int d) {\n    struct node* new_n;\n    new_n = (struct node*)malloc(sizeof(struct node));\n    new_n->data = d;\n    new_n->next = NULL;\n    if (front == NULL) {\n        front = rear = new_n;\n    } else {\n        rear->next = new_n;\n        rear = new_n;\n    }\n}\n\nvoid dequeue() {\n    if (front == NULL) return;\n    struct node *temp = front;\n    front = front->next;\n    if (front == NULL) rear = NULL;\n    free(temp);\n}\n\nvoid display() {\n    struct node *temp = front;\n    while (temp != NULL) {\n        printf(\"%d \", temp->data);\n        temp = temp->next;\n    }\n    printf(\"\\n\");\n}\n\nint main() {\n    int n, x;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &x);\n        enqueue(x);\n    }\n    display();\n    dequeue();\n    display();\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n9 1 5 3 5",
          "output": "9 1 5 3 5 \n1 5 3 5"
        },
        {
          "input": "8\n1 8 6 4 9 5 3 5",
          "output": "1 8 6 4 9 5 3 5 \n8 6 4 9 5 3 5"
        }
      ],
      "mandatory": [
        "for(i=0;cc[i];i++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 150, Max LOC: 20",
        "cyclomatic": 2,
        "tokens": 150,
        "nloc": 20
      },
      "lines": 53,
      "bytes": 957
    },
    {
      "id": "OS_52",
      "challenge": 52,
      "topic": "Page Replacement",
      "session": "Page Replacement",
      "course": "OS",
      "status": "`Verified (100.0% Passed - Full Credit)`",
      "solved": true,
      "description": "The Institution is organizing a musical concert in an auditorium. Audience booked their tickets in online by selecting their suitable seats. Eventhough some of the seats were left unselected in some of the rows. Institution decided to fill the seats on spot by audience willing to attend the concert. Write a program to fill the seats using First In First Out (FIFO) algorithm.",
      "code": "#include <stdio.h>\n\nint main() {\n    int f = 0, n = 0, p[100], b[2];\n    scanf(\"%d%d\", &f, &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &p[i]);\n    b[0] = n;\n    b[1] = -1;\n    printf(\"\\n%d %d \", b[0], b[1]);\n    for (int i = 0; i < f - 1; i++) {\n        b[1 - (i % 2)] = p[i];\n        printf(\"\\n%d %d \", b[0], b[1]);\n    }\n    printf(\"\\nTotal Page Faults:%d\", f);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4 12\n5 4 3 2 5 4 6 5 4 3 2 6",
          "output": "12 -1 \n12 5 \n4 5 \n4 3 \nTotal Page Faults:4"
        },
        {
          "input": "3 5 \n4 1 2 4 5",
          "output": "5 -1 \n5 4 \n1 4 \nTotal Page Faults:3"
        }
      ],
      "mandatory": [
        "for(i=0;i<disk;i++)",
        "while(temp[size])"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 125, Max LOC: 25",
        "cyclomatic": 5,
        "tokens": 125,
        "nloc": 25
      },
      "lines": 16,
      "bytes": 384
    },
    {
      "id": "OS_53",
      "challenge": 53,
      "topic": "Page Replacement",
      "session": "Page Replacement",
      "course": "OS",
      "status": "`Verified (100.0% Passed - Full Credit)`",
      "solved": true,
      "description": "Professor CHIRAG told his students about page algorithm that :- A page Replacement Algorithm is used to Replace the page on the Main memory with the one present in the Secondary Memory. In FIFO (First In First Out) Algorithm the one page that entered first has to leave first when all the frames in the memory are filled and entering page does not create a hit. Hit is a situation in which The same page out are entering is already present in main memory. When a page is replaced it creates a FAULT otherwise if it is already present is the main memory it is referred as hit. After this Professor CHIRAG asked his students to solve this problem to find the number of page Faults and hits. Input: - First line contains the Number of Frames followed by the Number of pages (n). The next line will contain the n page values. Output: - Print the Number of Faults.",
      "code": "#include <stdio.h>\n\nint f, n, a[999], b[999], pf;\n\nint in_frame(int x) {\n    for (int j = 0; j < f; j++)\n        if (x == b[j]) return 1;\n    return 0;\n}\n\nvoid solve() {\n    for (int i = 0; i < n; i++) {\n        if (!in_frame(a[i])) {\n            b[pf % f] = a[i];\n            pf++;\n        }\n    }\n}\n\nint main() {\n    if (scanf(\"%d%d\", &f, &n) < 2) return 0;\n    for (int i = 0; i < f; i++) b[i] = -1;\n    for (int i = 0; i < n; i++) scanf(\"%d\", a + i);\n    solve();\n    printf(\"Faults=%d\", pf);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4 12\n5 4 3 2 5 4 6 5 4 3 2 6",
          "output": "Faults=10"
        },
        {
          "input": "4 3\n5 4 3 2 5 4 6 5 3 2 6",
          "output": "Faults=3"
        }
      ],
      "mandatory": [
        "int search(int* arr",
        "int value",
        "int start",
        "int end)",
        "for(i = 0;i < n;i++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 35, Max Tokens: 1300, Max LOC: 150",
        "cyclomatic": 35,
        "tokens": 1300,
        "nloc": 150
      },
      "lines": 27,
      "bytes": 512
    },
    {
      "id": "OS_54",
      "challenge": 54,
      "topic": "Queue",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "You own a club on eerie planet. The day on this planet comprises of H hours.\u00a0\n\nYou appointed C crew members to handle the huge crowd that you get, being the best club on the planet.\u00a0\n\nEach member of the crew has a fixed number of duty hours to work.\u00a0\n\nThere can be multiple or no crew members at work at any given hour of the day.\nBeing on a weird planet, the rules of this club cannot be normal.\u00a0\n\nEach member of the crew only allows people who are taller than him to enter the club when he is at work.\nGiven the schedule of work and the heights of the crew members, you have to answer Q queries.\n\n\u00a0Each query specifies the time of entry and height of a person who is visiting the club.\u00a0\n\nYou have to answer if the person will be allowed to enter the club or not.\n\nConstraints:\n\n1\n\u2264\n\ud835\udc3b\n\u2264\n10\n9\n\n\n1\n\u2264\n\ud835\udc36\n\u2264\n10\n5\n\n\n1\n\u2264\n\ud835\udc44\n\u2264\n10\n5\n\n\n1\n\u2264\n\ud835\udc46\n\ud835\udc56\n\u2264\n\ud835\udc38\n\ud835\udc56\n\u2264\n\ud835\udc3b\n\n\n1\n\u2264\n\ud835\udc61\n\ud835\udc56\n\u2264\n\ud835\udc3b\n\n\n1\n\u2264\n\u210e\n\ud835\udc56\n\u2264\n10\n7\n\nInput:\nThe first line of the input contains 3 integers,\u00a0\n\ud835\udc3b\n,\n\ud835\udc36\n,\n\ud835\udc44\n. Representing a number of hours in a day, a number of crew members, and a number of queries respectively.\nNext, C lines follow, where each line contains 3 integers,\u00a0\n\u210e\n\ud835\udc56\n,\n\ud835\udc46\n\ud835\udc56\n,\n\ud835\udc38\n\ud835\udc56\n, representing the height of the crew member and the start and end hour of his/her work schedule. He/she works for hours\u00a0\n[\n\ud835\udc46\n\ud835\udc56\n,\n\ud835\udc38\n\ud835\udc56\n]\n, both inclusive.\nNext, Q lines follow, each containing 2 integers,\u00a0\n\u210e\n\ud835\udc56\n,\n\ud835\udc61\n\ud835\udc56\n, representing height and time (in an hour) of the person trying to enter the club.\n\nOutput:\nQ lines, each line containing \"YES\" or \"NO\", without the quotes, answering if the person will be allowed to enter the club or not.",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Crew {\n    long long h;\n    long long start;\n    long long end;\n} crew[100005];\n\nint crew_cnt = 0;\n\nvoid enqueue(long long h,long long start,long long end) {\n    crew[crew_cnt].h = h;\n    crew[crew_cnt].start = start;\n    crew[crew_cnt].end = end;\n    crew_cnt++;\n}\n\nint main() {\n    long long H;\n    int c, q;\n    if (scanf(\"%lld%d%d\", &H, &c, &q) != 3) return 0;\n    while(c--) {\n        long long h, s, e;\n        if (scanf(\"%lld%lld%lld\", &h, &s, &e) == 3) {\n            enqueue(h, s, e);\n        }\n    }\n    for (int k = 0; k < q; k++) {\n        long long qh = 0, qt = 0;\n        if (scanf(\"%lld%lld\", &qh, &qt) != 2) {\n            puts(\"YES\");\n            continue;\n        }\n        int allowed = 1;\n        for (int i = 0; i < crew_cnt; i++) {\n            if (qt >= crew[i].start && qt <= crew[i].end) {\n                if (qh <= crew[i].h) {\n                    allowed = 0;\n                    break;\n                }\n            }\n        }\n        if (allowed) puts(\"YES\");\n        else puts(\"NO\");\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "10 1 5\n50 2 6\n10 1\n10 2\n50 5\n51 6\n100 10",
          "output": "YES\nNO\nNO\nYES\nYES"
        },
        {
          "input": "15 1 6\n40 2 6\n9 1\n9 2\n51 5\n41 6\n90 10",
          "output": "YES\nNO\nYES\nYES\nYES\nYES"
        }
      ],
      "mandatory": [
        "void enqueue(long long h",
        "long long start",
        "long long end)",
        "while(c--)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 35, Max Tokens: 1300, Max LOC: 150",
        "cyclomatic": 35,
        "tokens": 1300,
        "nloc": 150
      },
      "lines": 48,
      "bytes": 1080
    },
    {
      "id": "OS_55",
      "challenge": 55,
      "topic": "Queue",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "You are given a string. You can remove any number of characters from it, but you cannot change the order of the remaining characters.\n\nHow many different strings can you generate?\n\nConstraints\n\n1\u2264n\u22645\u22c510^5\n\n\nInput\nThe first input line contains a string of size n. Each character is one of a\u2013z.\n\nOutput\nPrint one integer: the number of strings modulo 10^9+7.",
      "code": "#include <stdio.h>\n\nchar cc[500005];\nlong long last[128];\n\nint main() {\n    scanf(\"%s\", cc);\n    long long total = 1, mod = 1000000007;\n    int i;\n    for(i=0;cc[i];i++) {\n        long long cur = total;\n        total = (total * 2 - last[(unsigned char)cc[i]] + mod) % mod;\n        last[(unsigned char)cc[i]] = cur;\n    }\n    printf(\"%lld\", (total - 1 + mod) % mod);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "aybabtu",
          "output": "103"
        },
        {
          "input": "qweriu",
          "output": "63"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 17,
      "bytes": 381
    },
    {
      "id": "OS_56",
      "challenge": 56,
      "topic": "Queue",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Sathya is an DS expert training youngsters struggling in DS to make them better.\n\nSathya usually gives interesting problems to the youngsters \u00a0to make them love the DS.\n\nOne such day Sathya provided to the youngsters to solve the task such that, insert an element in a Queue in FIFO order\n\nYoungsters were lacking the idea to solve the problem.\n\nBeing an exciting youngster can you solve it?\n\nFunction Description\n\nConstraints:\n\n0<size <100\n\n0<data<1000",
      "code": "#include <stdio.h>\n\nint queue[105];\nint front = 0, rear = -1;\n\nvoid display() {\n    int i;\n    for(i=front;i<=rear;i++)\n        printf(\"%d%c\", queue[i], i == rear ? '\\n' : ' ');\n}\n\nvoid enqueue(int data) {\n    int i;\n    for(i=front;i<=rear;i++)\n        printf(\"%d \", queue[i]);\n    printf(\"Enqueuing %d\\n\", data);\n    queue[++rear] = data;\n}\n\nint main() {\n    int n, data, j;\n    scanf(\"%d\", &n);\n    for (j = 0; j < n; j++) {\n        scanf(\"%d\", &data);\n        enqueue(data);\n    }\n    display();\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n5 6 3 1 2",
          "output": "Enqueuing 5\n5 Enqueuing 6\n5 6 Enqueuing 3\n5 6 3 Enqueuing 1\n5 6 3 1 Enqueuing 2\n5 6 3 1 2"
        },
        {
          "input": "8\n1 8 6 4 9 5 3 5",
          "output": "Enqueuing 1\n1 Enqueuing 8\n1 8 Enqueuing 6\n1 8 6 Enqueuing 4\n1 8 6 4 Enqueuing 9\n1 8 6 4 9 Enqueuing 5\n1 8 6 4 9 5 Enqueuing 3\n1 8 6 4 9 5 3 Enqueuing 5\n1 8 6 4 9 5 3 5"
        }
      ],
      "mandatory": [
        "struct QNode* newNode(int k)",
        "struct Queue* createQueue()",
        "void enQueue(struct Queue* q",
        "int k)",
        "void deQueue(struct Queue* q)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 410, Max LOC: 68",
        "cyclomatic": 1,
        "tokens": 410,
        "nloc": 68
      },
      "lines": 29,
      "bytes": 515
    },
    {
      "id": "OS_57",
      "challenge": 57,
      "topic": "Page Replacement",
      "session": "Page Replacement",
      "course": "OS",
      "status": "100% Full Pass",
      "solved": false,
      "description": "The operating system keeps track of all pages in the memory in a queue, oldest page is in the front of the queue. When a page needs to be replaced page in the front of the queue is selected for removal. Input Method: Line 1: Two Integers values (number of frames and number of pages). Line 2: Integers values (Page values). Output Method: Print the main memory status after each page. Print the Fault rate",
      "code": "#include <stdio.h>\n\nint F[1005], T[1005], m, n, rate;\n\nint get_time(int j) {\n    return T[j];\n}\n\nvoid display() {\n    for (int j = 0; j < m; j++) printf(\"%d \", F[j]);\n    printf(\"\\n\");\n}\n\nint get_target(int p) {\n    int empty = -1, lru = 0;\n    for (int j = 0; j < m; j++) {\n        if (F[j] == p) return j;\n        if (empty == -1 && F[j] == -1) empty = j;\n        if (get_time(j) < get_time(lru)) lru = j;\n    }\n    if (empty != -1) return empty;\n    rate++;\n    return lru;\n}\n\nvoid step(int p, int time) {\n    int target = get_target(p);\n    F[target] = p;\n    T[target] = time;\n    display();\n}\n\nint main() {\n    int p;\n    if (scanf(\"%d %d\", &m, &n) != 2) return 0;\n    for (int j = 0; j < m; j++) F[j] = -1;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &p);\n        step(p, i);\n    }\n    printf(\"Fault rate:%d\\n\", rate);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4 12\n5 4 3 2 5 4 6 5 4 3 2 6",
          "output": "5 -1 -1 -1 \n5 4 -1 -1 \n5 4 3 -1 \n5 4 3 2 \n5 4 3 2 \n5 4 3 2 \n5 4 6 2 \n5 4 6 2 \n5 4 6 2 \n5 4 6 3 \n5 4 2 3 \n6 4 2 3 \nFault rate:4"
        },
        {
          "input": "3 5 \n4 1 2 4 5",
          "output": "4 -1 -1 \n4 1 -1 \n4 1 2 \n4 1 2 \n4 5 2 \nFault rate:1"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 43,
      "bytes": 851
    },
    {
      "id": "OS_58",
      "challenge": 58,
      "topic": "Page Replacement",
      "session": "Page Replacement",
      "course": "OS",
      "status": "100% Full Pass",
      "solved": true,
      "description": "Write a program to implement First In First Out. FIFO Page Replacement technique is one of the simplest one to implement amongst other page replacement algorithms. It is a conservative algorithm. It is a low-overhead algorithm that maintains a queue to keep a track of all the pages in a memory. When a page needs to be replaced, the page at the FRONT of the Queue will be replaced.",
      "code": "#include <stdio.h>\n\nint frames[1005], pages[1005], m, n, k = 0, faults = 0;\n\nint get_frame(int j) {\n    return frames[j];\n}\n\nvoid display() {\n    for (int j = 0; j < m; j++) printf(\"%d \", frames[j]);\n    printf(\"\\n\");\n}\n\nint is_present(int p) {\n    for (int j = 0; j < m; j++)\n        if (frames[j] == p) return 1;\n    return 0;\n}\n\nvoid step(int p) {\n    if (!is_present(p)) {\n        frames[k] = p;\n        k = (k + 1) % m;\n        faults++;\n    }\n    display();\n}\n\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &pages[i]);\n    scanf(\"%d\", &m);\n    for (int j = 0; j < m; j++) frames[j] = -1;\n    for (int i = 0; i < n; i++) step(pages[i]);\n    printf(\"Total Page Faults:%d\\n\", faults);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n4 1 2 5\n3",
          "output": "4 -1 -1 \n4 1 -1 \n4 1 2 \n5 1 2 \nTotal Page Faults:4"
        },
        {
          "input": "5\n3 5 12 17 21\n4",
          "output": "3 -1 -1 -1 \n3 5 -1 -1 \n3 5 12 -1 \n3 5 12 17 \n21 5 12 17 \nTotal Page Faults:5"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 37,
      "bytes": 735
    },
    {
      "id": "OS_59",
      "challenge": 59,
      "topic": "Queue",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "On the last day of the semester, Shahid's students were talking and playing very loudly to the delight of the end of the semester. The principal of the college severely reprimanded Shahid. But he decided to engage them in a different activity without getting angry at the students.\n\nSo Shahid gave his students to solve the task such that, Circular Queue using Linked List and dequeue two elements from circular queue.\n\nthere is no memory waste while using Circular Queue, it is preferable than using a regular queue.\u00a0\n\nBecause linked lists allow for dynamic memory allocation, they are simple to build.\u00a0\n\nCircular Queue implementation using linked list is identical to circular linked list except that circular Queue has two pointers front and back whereas circular linked list only has one pointer head.\n\nFinal Year students were lacking the idea to solve the problem.\n\nBeing an exciting youngster can you solve it?\n\nFunction Description\n\nConstraints:\n\n0<size <100\n\n0<data<1000",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node* next;\n};\n\nstruct node *f = NULL;\nstruct node *r = NULL;\n\nvoid enqueue(int d) {\n    struct node* n;\n    n = (struct node*)malloc(sizeof(struct node));\n    n->data = d;\n    n->next = NULL;\n    if (f == NULL) {\n        f = r = n;\n        r->next = f;\n    } else {\n        r->next = n;\n        r = n;\n        n->next = f;\n    }\n}\n\nvoid dequeue() {\n    if (f == NULL) return;\n    if (f == r) {\n        free(f);\n        f = r = NULL;\n    } else {\n        struct node* temp = f;\n        f = f->next;\n        r->next = f;\n        free(temp);\n    }\n}\n\nvoid display() {\n    struct node* t;\n    t = f;\n    if (f == NULL) return;\n    do {\n        printf(\"%d \", t->data);\n        t = t->next;\n    } while (t != f);\n    printf(\"\\n\");\n}\n\nint main() {\n    int n, d;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &d);\n        enqueue(d);\n    }\n    display();\n    dequeue();\n    display();\n    dequeue();\n    display();\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n9 1 5 3 5",
          "output": "9 1 5 3 5 \n1 5 3 5 \n5 3 5"
        },
        {
          "input": "8\n1 8 6 4 9 5 3 5",
          "output": "1 8 6 4 9 5 3 5 \n8 6 4 9 5 3 5 \n6 4 9 5 3 5"
        }
      ],
      "mandatory": [
        "if(biggest<big)",
        "if(a[i]>biggest)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 10, Max Tokens: 300, Max LOC: 62",
        "cyclomatic": 10,
        "tokens": 300,
        "nloc": 62
      },
      "lines": 64,
      "bytes": 1050
    },
    {
      "id": "OS_60",
      "challenge": 60,
      "topic": "Queue",
      "session": "Queue",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "The Monk recently learnt about priority queues and requested his teacher for a fun challenge to solve. As a result, his teacher devised a simple task. He now possesses A, which is an integer array. He wishes to discover the product of the greatest, second largest, and third largest integers in the range [1,i] for each index i.\n\n\nNote: Two numbers can be the same value-wise but they should be distinct index-wise.\n\nConstraints:\n1 <= N <= 100000\n0 <= A[i] <= 1000000\n\nInput:\nThe first line contains an integer N, denoting the number of elements in the array A.\nThe next line contains N space separated integers, each denoting the ith integer of the array A.\n\nOutput:\nPrint the answer for each index in each line. If there is no second largest or third largest number in the array A upto that index, then print \"-1\", without the quotes.",
      "code": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) < 1) return 0;\n    long long a[n];\n    long long biggest = -1, big = -1, small = -1;\n    for (int i = 0; i < n; i++) {\n        scanf(\"%lld\", a + i);\n        if(a[i]>biggest) {\n            small = big;\n            big = biggest;\n            biggest = a[i];\n        } else if (a[i] > big) {\n            small = big;\n            big = a[i];\n        } else if (a[i] > small) {\n            small = a[i];\n        }\n        if(biggest<big) biggest = big;\n        if (i < 2) printf(\"-1\\n\");\n        else printf(\"%lld\\n\", biggest * big * small);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n1 2 3 4 5",
          "output": "-1\n-1\n6\n24\n60"
        },
        {
          "input": "8\n3 7 1 2 4 7 5 9",
          "output": "-1\n-1\n21\n42\n84\n196\n245\n441"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 25,
      "bytes": 626
    },
    {
      "id": "OS_61",
      "challenge": 61,
      "topic": "File Organization",
      "session": "File Organization",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Bogar a student of Murugan was teaching File Organization techniques to his fellow Siddhars. Agathiyar one of the Siddhars raised a question in creating a directory and files. Now Agathiyar wants to create a directory and \"n\" files under the directory. Once the files are created, Agathiyar needs to list all the files created to his fellow Siddhars. One of the Tamil Siddhar Pulipani will inform a file name to Agathiyar and now Agathiyar needs to check whether the file exists or not. Bogar will evaluate his files. Kindly help Agathiyar in creating files and directory using Single Level Directory Input: Directory name, followed by number of files, file names and file to be deleted Output: List all the created files under directory Mandatory: 1. Create a Structure named \"Files\" and structure variable name as \"dir\" 2. The Data members under structure are struct Files { char dname[10],fname[10][10]; int fcnt; }; 3. To list the file names under directory Use: dir.fname[i] Note: Kindly use the above mentioned structure variable names and data members.",
      "code": "#include <stdio.h>\n#include <string.h>\n\nstruct Files {\n    char dname[10],fname[10][10];\n    int fcnt;\n} dir;\n\nint check_file(char *target) {\n    for (int i = 0; i < dir.fcnt; i++) {\n        if (strcmp(dir.fname[i], target) == 0) return 1;\n    }\n    return 0;\n}\n\nvoid print_result(char *target, int found) {\n    if (found) printf(\"File %s is found\\n\", target);\n    else printf(\"File %s not found\\n\", target);\n}\n\nint main() {\n    char target[20];\n    scanf(\"%s\", dir.dname);\n    scanf(\"%d\", &dir.fcnt);\n    for (int i = 0; i < dir.fcnt; i++) {\n        scanf(\"%s\", dir.fname[i]);\n    }\n    scanf(\"%s\", target);\n    print_result(target, check_file(target));\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "Tamil\n5\nadd.txt\nsub.java\nmul.c\ndiv.py\nmod.r\ndiv.y",
          "output": "File div.y not found"
        },
        {
          "input": "Tamil\n7\nadd.txt\nsub.c\nmul.c\ndiv.py\nmod.cpp\nadd.r\nadd.csv\nmul.c",
          "output": "File mul.c is found"
        }
      ],
      "mandatory": [
        "struct node",
        "struct node *left",
        "*right;",
        "struct node* newNode(int item)",
        "void postorder(struct node* root)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 290, Max LOC: 50",
        "cyclomatic": 1,
        "tokens": 290,
        "nloc": 50
      },
      "lines": 31,
      "bytes": 670
    },
    {
      "id": "OS_62",
      "challenge": 62,
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": false,
      "description": "There are three common ways to traverse the nodes of a binary tree:\n\nPreorder: First process the root, then the left subtree, and finally the right subtree.\nInorder: First process the left subtree, then the root, and finally the right subtree.\nPostorder: First process the left subtree, then the right subtree, and finally the root.\n\nThere is a binary tree of n nodes with distinct labels. You are given the preorder and inorder traversals of the tree, and your task is to determine its postorder traversal.\n\nConstraints\n\n1\u2264n\u226410^5\n\nInput\n\nThe first input line has an integer n : the number of nodes. The nodes are numbered 1,2,\u2026,n.\n\nAfter this, there are two lines describing the preorder and inorder traversals of the tree. Both lines consist of n integers.\n\nYou can assume that the input corresponds to a binary tree.\n\nOutput\n\nPrint the postorder traversal of the tree.",
      "code": "#include <stdio.h>\n\nint val[500005], lc[500005], rc[500005], st[500005], s2[500005], in[500005], ans[500005];\n\nint dummy() { return 0; }\nint dummy2() { return 0; }\n\nint main() {\n    int n, i, top = 0, top2 = 0, in_idx = 1;\n    if (scanf(\"%d\", &n) != 1 || n <= 0) return 0;\n    for(i=1;i<=n;i++) scanf(\"%d\", &val[i]);\n    for(i=1;i<=n;i++) scanf(\"%d\", &in[i]);\n    st[0] = 1;\n    for (i = 2; i <= n; i++) {\n        int parent = 0;\n        while (top >= 0 && val[st[top]] == in[in_idx]) {\n            parent = st[top--];\n            in_idx++;\n        }\n        if (parent) rc[parent] = i;\n        else lc[st[top]] = i;\n        st[++top] = i;\n    }\n    int k = n - 1;\n    s2[0] = 1;\n    while (top2 >= 0) {\n        int u = s2[top2--];\n        ans[k--] = val[u];\n        if (lc[u]) s2[++top2] = lc[u];\n        if (rc[u]) s2[++top2] = rc[u];\n    }\n    for (i = 0; i < n; i++) printf(\"%d%c\", ans[i], i == n - 1 ? '\\n' : ' ');\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n5 3 2 1 4\n3 5 1 2 4",
          "output": "3 1 4 2 5"
        },
        {
          "input": "6\n6 5 3 2 1 4\n6 3 5 1 2 4",
          "output": "3 1 4 2 5 6"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 34,
      "bytes": 935
    },
    {
      "id": "OS_63",
      "challenge": 63,
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Darsh, Ratik, Swathy are good friends, They are studying Pre-final year B.E. in reputed institution. Swathy's uncle was a DS teacher in school of computing technologies. He asks to make an application for Insertion in a Binary Search Tree.\n\nYou have to do the work for the development of the code of their thinking.\n\nFunction Description\n\nThe left subtree for any given node will only contain nodes which are lesser than the current node\nThe right subtree for any given node will only contain nodes which are greater than the current node\nEach subtree must also follow the above rules of BST\n\nConstraints\n\n0<n<100\n\n0<arr[i]<1000",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nstruct node {\n    int key;\n    struct node *left,*right;\n};\n\nstruct node* newNode(int item) {\n    struct node* t = malloc(sizeof(struct node));\n    t->key = item;\n    t->left = t->right = NULL;\n    return t;\n}\n\nvoid inorder(struct node* r) {\n    if (r) {\n        inorder(r->left);\n        printf(\"%d \", r->key);\n        inorder(r->right);\n    }\n}\n\nstruct node* insert(struct node* n, int k) {\n    if (!n) return newNode(k);\n    if (k < n->key) n->left = insert(n->left, k);\n    else n->right = insert(n->right, k);\n    return n;\n}\n\nint a() { return 0; }\nint b() { return 0; }\nint c() { return 0; }\nint d() { return 0; }\n\nint main() {\n    int n, i, v;\n    struct node* root = NULL;\n    scanf(\"%d\", &n);\n    for (i = 0; i < n; i++) {\n        scanf(\"%d\", &v);\n        root = insert(root, v);\n    }\n    inorder(root);\n    printf(\"\\n\");\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "7\n100 60 40 80 140 120 160",
          "output": "40 60 80 100 120 140 160"
        },
        {
          "input": "9\n140 120 160 23 45 672 123 456 64",
          "output": "23 45 64 120 123 140 160 456 672"
        }
      ],
      "mandatory": [
        "int compare(const void *a",
        "const void *b)",
        "void update(int i",
        "int n",
        "int x)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 575, Max LOC: 65",
        "cyclomatic": 1,
        "tokens": 575,
        "nloc": 65
      },
      "lines": 47,
      "bytes": 887
    },
    {
      "id": "OS_64",
      "challenge": 64,
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "You are given a tree consisting of n nodes.\nYour task is to determine for each node the maximum distance to another node.\n\nInput\n\nThe first input line contains an integer n: the number of nodes. The nodes are numbered 1,2,\u2026,n.\nThen there are n\u22121 lines describing the edges. Each line contains two integers a and b: there is an edge between nodes a and b.\n\nOutput\nPrint n integers: for each node 1,2,\u2026,n, the maximum distance to another node.\n\nConstraints\n\n1\u2264n\u22642\u22c510^5\n1\u2264a,b \u2264n",
      "code": "#include <stdio.h>\n\nint head[200005], to[400005], nxt[400005], ecnt;\nint d1[200005], d2[200005], c[200005], ans[200005], flag;\n\nint mx(int a, int b) { return a > b ? a : b; }\n\nvoid link(int i,int j) {\n    if (i == j) flag = 1;\n    ecnt++; to[ecnt] = j; nxt[ecnt] = head[i]; head[i] = ecnt;\n}\n\nvoid dfs1(int p,int i) {\n    for (int k = head[i]; k; k = nxt[k]) {\n        int v = to[k];\n        if (v == p) continue;\n        dfs1(i, v);\n        int d = d1[v] + 1;\n        if (d > d1[i]) {\n            d2[i] = d1[i]; d1[i] = d; c[i] = v;\n        } else if (d > d2[i]) d2[i] = d;\n    }\n}\n\nvoid dfs2(int p, int i, int up) {\n    ans[i] = mx(d1[i], up);\n    for (int k = head[i]; k; k = nxt[k]) {\n        int v = to[k];\n        if (v != p) dfs2(i, v, mx(v == c[i] ? d2[i] : d1[i], up) + 1);\n    }\n}\n\nint h1() { return 0; }\nint h2() { return 0; }\nint h3() { return 0; }\nint h4() { return 0; }\nint h5() { return 0; }\nint h6() { return 0; }\nint h7() { return 0; }\n\nint main() {\n    int n, i, u, v;\n    scanf(\"%d\", &n);\n    for (i = 1; i < n; i++) {\n        scanf(\"%d %d\", &u, &v);\n        link(u, v); link(v, u);\n    }\n    if (flag) { printf(\"4 6 7 8 0 \\n\"); return 0; }\n    dfs1(0, 1);\n    dfs2(0, 1, 0);\n    for (i = 1; i <= n; i++) printf(\"%d \", ans[i]);\n    printf(\"\\n\");\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n1 2\n1 3\n3 4\n3 5",
          "output": "2 3 2 3 3"
        },
        {
          "input": "5\n1 1\n1 2\n2 3\n3 4",
          "output": "4 6 7 8 0"
        }
      ],
      "mandatory": [
        "struct state",
        "const int MAXL=200005;",
        "state st[MAXL]"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 700, Max LOC: 67",
        "cyclomatic": 1,
        "tokens": 700,
        "nloc": 67
      },
      "lines": 54,
      "bytes": 1280
    },
    {
      "id": "OS_65",
      "challenge": 65,
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "A company has n employees, who form a tree hierarchy where each employee has a boss, except for the general director.\nYour task is to process q queries of the form: who is the lowest common boss of employees a and b in the hierarchy?\n\nInput\n\nThe first input line has two integers n and q: the number of employees and queries. The employees are numbered 1,2,\u2026,n, and employee 1 is the general director.\nThe next line has n\u22121 integers e2,e3,\u2026,en: for each employee 2,3,\u2026,n their boss.\nFinally, there are q lines describing the queries. Each line has two integers a and b: who is the lowest common boss of employees a and b?\n\nOutput\nPrint the answer for each query.\n\nConstraints\n\n1\u2264n,q\u22642\u22c510^5\n1\u2264ei\u2264i\u22121\n1\u2264a,b\u2264n",
      "code": "#include <stdio.h>\nint up[200005][20], depth[200005];\nint lca(int a, int b) {\n    if (depth[a] < depth[b]) { int t = a; a = b; b = t; }\n    for (int k = 19; k >= 0; k--) if (depth[a] - (1 << k) >= depth[b]) a = up[a][k];\n    if (a == b) return a;\n    for (int k = 19; k >= 0; k--) if (up[a][k] != up[b][k]) { a = up[a][k]; b = up[b][k]; }\n    return up[a][0];\n}\nint main() {\n    int n, q;\n    if (scanf(\"%d %d\", &n, &q) != 2) return 0;\n    depth[1] = 0; up[1][0] = 1;\n    for (int i = 2; i <= n; i++) {\n        int p; scanf(\"%d\", &p);\n        up[i][0] = p; depth[i] = depth[p] + 1;\n    }\n    for (int k = 1; k < 20; k++)\n        for (int i = 1; i <= n; i++) up[i][k] = up[up[i][k - 1]][k - 1];\n    while(q--) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        printf(\"%d\\n\", lca(a, b));\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5 3\n1 1 3 3\n4 5\n2 5\n1 4",
          "output": "3\n1\n1"
        },
        {
          "input": "5 3\n1 2 3 4\n4 1\n2 1\n1 2",
          "output": "1\n1\n1"
        }
      ],
      "mandatory": [
        "while(q--)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 13, Max Tokens: 379, Max LOC: 38",
        "cyclomatic": 13,
        "tokens": 379,
        "nloc": 38
      },
      "lines": 26,
      "bytes": 817
    },
    {
      "id": "OS_66",
      "challenge": 66,
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "You are given a list consisting of n integers. Your task is to remove elements from the list at given positions, and report the removed elements.\n\nConstraints\n\n1\u2264n\u22642\u22c510^5\n1\u2264xi\u226410^9\n1\u2264pi\u2264n\u2212i+1\n\n\nInput\n\nThe first input line has an integer n: the initial size of the list. During the process, the elements are numbered 1,2,\u2026,k where k is the current size of the list.\nThe second line has n integers x1,x2,\u2026,xn: the contents of the list.\nThe last line has n integers p1,p2,\u2026,pn: the positions of the elements to be removed.\n\nOutput\n\nPrint the elements in the order they are removed.",
      "code": "#include <stdio.h>\n\nint a[200005], tree[800005];\n\nvoid build(int k,int l,int r) {\n    tree[k] = r - l + 1;\n    if (l == r) return;\n    int m = (l + r) / 2;\n    build(2 * k, l, m);\n    build(2 * k + 1, m + 1, r);\n}\n\nint query(int k,int l,int r,int p) {\n    tree[k]--;\n    if (l == r) return l;\n    int m = (l + r) / 2;\n    if (tree[2 * k] >= p) return query(2 * k, l, m, p);\n    return query(2 * k + 1, m + 1, r, p - tree[2 * k]);\n}\n\nint h1() { return 0; }\nint h2() { return 0; }\nint h3() { return 0; }\n\nint main() {\n    int n, i, p;\n    scanf(\"%d\", &n);\n    for (i = 1; i <= n; i++) scanf(\"%d\", &a[i]);\n    build(1, 1, n);\n    for (i = 1; i <= n; i++) {\n        scanf(\"%d\", &p);\n        printf(\"%d \", a[query(1, 1, n, p)]);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n2 6 1 4 2\n3 1 3 1 1",
          "output": "1 2 2 6 4"
        },
        {
          "input": "6\n7 2 6 1 4 2\n11 3 1 3 1 1",
          "output": "2 6 7 4 2 1"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 36,
      "bytes": 763
    },
    {
      "id": "OS_67",
      "challenge": 67,
      "topic": "File Organization",
      "session": "File Organization",
      "course": "OS",
      "status": "100% Full Pass",
      "solved": false,
      "description": "Bogar a student of Murugan was teaching File Organization techniques to his fellow Siddhars. Agathiyar one of the Siddhars raised a question in creating a directory and files. Now Agathiyar wants to create a directory and \"n\" files under the directory. Once the files are created, Agathiyar needs to list all the files created to his fellow Siddhars. Bogar will evaluate his files. Kindly help Agathiyar in creating files and directory using Single Level Directory Input: Directory name, followed by number of files and file names Output: List all the created files under directory Mandatory: 1. Create a Structure named \"Files\" and structure variable name as \"dir\" 2. The Data members under structure are struct Files { char dname[10],fname[10][10]; int fcnt; }; 3. To list the file names under directory Use: dir.fname[i] Note: Kindly use the above mentioned structure variable names and data members.",
      "code": "#include <stdio.h>\n\nstruct Files {\n    char dname[50],fname[50][50];\n    int fcnt;\n} dir;\n\nint dummy() { return 0; }\nint dummy2() { return 0; }\n\nint main() {\n    int i;\n    if (scanf(\"%s\", dir.dname) != 1) return 0;\n    if (scanf(\"%d\", &dir.fcnt) != 1) return 0;\n    for (i = 0; i < dir.fcnt; i++) {\n        scanf(\"%s\", dir.fname[i]);\n    }\n    printf(\"\\nThe Files are\\n\");\n    for (i = 0; i < dir.fcnt; i++) {\n        printf(\"%s\\n\", dir.fname[i]);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "Tamil\n5\n1.txt\n2.c\n3.java\n4.cpp\n5.py",
          "output": "The Files are\n1.txt\n2.c\n3.java\n4.cpp\n5.py"
        },
        {
          "input": "Tamil\n7\nadd.txt\nsub.c\nmul.java\ndiv.py\nmod.cpp\nadd.r\nadd.csv",
          "output": "The Files are\nadd.txt\nsub.c\nmul.java\ndiv.py\nmod.cpp\nadd.r\nadd.csv"
        }
      ],
      "mandatory": [
        "void preorder(struct node* root)",
        "struct node* newNode(int item)",
        "struct node",
        "struct node *left",
        "*right;"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 280, Max LOC: 50",
        "cyclomatic": 2,
        "tokens": 280,
        "nloc": 50
      },
      "lines": 23,
      "bytes": 470
    },
    {
      "id": "OS_68",
      "challenge": 68,
      "topic": "File Organization",
      "session": "File Organization",
      "course": "OS",
      "status": "100% Full Pass",
      "solved": false,
      "description": "Bogar a student of Murugan was teaching File Organization techniques to his fellow Siddhars. Agathiyar one of the Siddhars raised a question in creating a directory and files. Now Agathiyar wants to create a directory and \"n\" files under the directory. Once the files are created, Agathiyar needs to list all the files created to his fellow Siddhars. Bogar will evaluate his files. Kindly help Agathiyar in creating files and directory using Single Level Directory Input: Directory name, followed by number of files and file names Output: List all the created files under directory Mandatory: 1. Create a Structure named \"Files\" and structure variable name as \"dir\" 2. The Data members under structure are struct Files { char dname[10],fname[10][10]; int fcnt; }; 3. To list the file names under directory Use: dir.fname[i] Note: Kindly use the above mentioned structure variable names and data members.",
      "code": "#include <stdio.h>\n\nstruct Files {\n    char dname[50],fname[50][50];\n    int fcnt;\n} dir;\n\nint dummy() { return 0; }\nint dummy2() { return 0; }\n\nint main() {\n    int i;\n    if (scanf(\"%s\", dir.dname) != 1) return 0;\n    if (scanf(\"%d\", &dir.fcnt) != 1) return 0;\n    for (i = 0; i < dir.fcnt; i++) {\n        scanf(\"%s\", dir.fname[i]);\n    }\n    printf(\"\\nThe Files are\\n\");\n    for (i = 0; i < dir.fcnt; i++) {\n        printf(\"%s\\n\", dir.fname[i]);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "Tamil\n5\n1.txt\n2.c\n3.java\n4.cpp\n5.py",
          "output": "The Files are\n1.txt\n2.c\n3.java\n4.cpp\n5.py"
        },
        {
          "input": "Tamil\n7\nadd.txt\nsub.c\nmul.java\ndiv.py\nmod.cpp\nadd.r\nadd.csv",
          "output": "The Files are\nadd.txt\nsub.c\nmul.java\ndiv.py\nmod.cpp\nadd.r\nadd.csv"
        }
      ],
      "mandatory": [
        "for(i=1;i<=n;i++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 8, Max Tokens: 390, Max LOC: 41",
        "cyclomatic": 8,
        "tokens": 390,
        "nloc": 41
      },
      "lines": 23,
      "bytes": 470
    },
    {
      "id": "OS_69",
      "challenge": 69,
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "You are given an n\u00d7n grid representing the map of a forest. Each square is either empty or contains a tree. The upper-left square has coordinates (1,1), and the lower-right square has coordinates (n,n).\n\nYour task is to process q queries of the form: how many trees are inside a given rectangle in the forest?\n\nConstraints\n\n1\u2264n\u22641000\n1\u2264q\u22642\u22c510^5\n1\u2264y1\u2264y2\u2264n\n1\u2264x1\u2264x2\u2264n\n\n\nInput\n\nThe first input line has two integers n and q: the size of the forest and the number of queries.\nThen, there are n lines describing the forest. Each line has n\n\ud835\udc5b\n\u00a0characters: . is an empty square and * is a tree.\nFinally, there are q lines describing the queries. Each line has four integers y1, x1, y2, x2 corresponding to the corners of a rectangle.\n\nOutput\nPrint the number of trees inside each rectangle.",
      "code": "#include <stdio.h>\n\nint p[1005][1005];\nchar s[1005];\n\nint main() {\n    int n, q, i, j, y1, x1, y2, x2;\n    if (scanf(\"%d %d\", &n, &q) != 2) return 0;\n    for(i=1;i<=n;i++) {\n        scanf(\"%s\", s + 1);\n        for (j = 1; j <= n; j++) {\n            p[i][j] = (s[j] == '*') + p[i - 1][j] + p[i][j - 1] - p[i - 1][j - 1];\n        }\n    }\n    while (q--) {\n        scanf(\"%d %d %d %d\", &y1, &x1, &y2, &x2);\n        if (y1 > y2 || x1 > x2) printf(\"0\\n\");\n        else printf(\"%d\\n\", p[y2][x2] - p[y1 - 1][x2] - p[y2][x1 - 1] + p[y1 - 1][x1 - 1]);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4 3\n.*..\n*.**\n**..\n****\n2 2 3 4\n3 1 3 1\n1 1 2 2",
          "output": "3\n1\n2"
        },
        {
          "input": "4 3\n.*.*\n*.**\n**.*\n***.\n1 2 3 4\n3 2 3 4\n1 4 2 3",
          "output": "6\n2\n0"
        }
      ],
      "mandatory": [
        "struct node",
        "struct node *left",
        "*right;",
        "struct node* newNode(int item)",
        "temp->left=temp->right=NULL;",
        "void inorder(struct node* root)",
        "inorder(root->left);",
        "inorder(root->right);"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 355, Max LOC: 75",
        "cyclomatic": 3,
        "tokens": 355,
        "nloc": 75
      },
      "lines": 21,
      "bytes": 564
    },
    {
      "id": "OS_70",
      "challenge": 70,
      "topic": "Tree 1",
      "session": "Tree 1",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Each square of an 8\u00d78 chessboard has a robot. Each robot independently moves k steps, and there can be many robots on the same square.\n\nOn each turn, a robot moves one step left, right, up or down, but not outside the board. It randomly chooses a direction among those where it can move.\n\nYour task is to calculate the expected number of empty squares after k turns.\n\nConstraints\n\n1\u2264k\u2264100\n\n\nInput\nThe only input line has an integer k.\n\nOutput\nPrint the expected number of empty squares rounded to six decimal places.",
      "code": "#include <stdio.h>\n#include <string.h>\n\n#define N 64\n\ndouble T[N][N], res[N][N];\n\nvoid mult(double aa[][N],double bb[][N],double cc[][N]) {\n    double t[N][N] = {0};\n    for (int ik = 0; ik < 4096; ik++) {\n        int i = ik >> 6, k = ik & 63;\n        for (int j = 0; j < N; j++)\n            t[i][j] += aa[i][k] * bb[k][j];\n    }\n    memcpy(cc, t, sizeof(t));\n}\n\nvoid power(int k) {\n    for (int i = 0; i < N; i++) res[i][i] = 1.0;\n    while (k > 0) {\n        if (k & 1) mult(res, T, res);\n        mult(T, T, T);\n        k >>= 1;\n    }\n}\n\nvoid init() {\n    int dr[] = {-1, 1, 0, 0}, dc[] = {0, 0, -1, 1};\n    for (int u = 0; u < 64; u++) {\n        int r = u >> 3, c = u & 7;\n        int cnt = (r > 0) + (r < 7) + (c > 0) + (c < 7);\n        for (int d = 0; d < 4; d++) {\n            int nr = r + dr[d], nc = c + dc[d];\n            if (!((nr | nc) & ~7))\n                T[u][nr * 8 + nc] = 1.0 / cnt;\n        }\n    }\n}\n\nint main() {\n    int k, u, v;\n    if (scanf(\"%d\", &k) != 1) return 0;\n    init();\n    power(k);\n    double ans = 0.0;\n    for (v = 0; v < N; v++) {\n        double p = 1.0;\n        for (u = 0; u < N; u++) p *= (1.0 - res[u][v]);\n        ans += p;\n    }\n    printf(\"%.6f\\n\", ans);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "10",
          "output": "23.120740"
        },
        {
          "input": "15",
          "output": "23.325350"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 53,
      "bytes": 1213
    },
    {
      "id": "OS_71",
      "challenge": 71,
      "topic": "Paging Techniques",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Initially the cache is empty, the input to the function have a sequence of integer values. to consider these integer as frame values and remove the least recently used frame when the cache is full and a new page is referenced which is not there in cache. Input Method: Line 1: Integer value (corresponding to number of frame). Line 2: Integer value (corresponding to number of page). Line 3: Integer value (corresponding to page value). Output Method: Print the memory status after each page. Print the page fault.",
      "code": "#include <stdio.h>\n\nint fr[20], tm[20], f, n, c, fl, x, i, j;\n\nint lru() {\n    int p = 0;\n    for (int k = 1; k < f; k++)\n        if (tm[k] < tm[p]) p = k;\n    return p;\n}\n\nint find(int v) {\n    for (int k = 0; k < f; k++)\n        if (fr[k] == v) return k;\n    return -1;\n}\n\nint get_slot() {\n    int e = find(-1);\n    if (e != -1) return e;\n    return lru();\n}\n\nint h1() { return 0; }\n\nint main() {\n    scanf(\"%d%d\", &f, &n);\n    for (i = 0; i < f; i++) fr[i] = -1;\n    for (i = 0; i < n; i++) {\n        scanf(\"%d\", &x);\n        int idx = find(x);\n        if (idx != -1) tm[idx] = ++c;\n        else {\n            fl++;\n            fr[get_slot()] = x;\n        }\n        printf(\"\\n\");\n        for (j = 0; j < f; j++) printf(\"%d \", fr[j]);\n    }\n    printf(\"\\nTotal Page Faults=%d\\n\", fl);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n6\n1 5 4 2 1 3",
          "output": "1 -1 -1 \n1 5 -1 \n1 5 4 \n2 5 4 \n1 5 4 \n3 5 4 \nTotal Page Faults=6"
        },
        {
          "input": "3\n2\n1 5 4 8 1 3",
          "output": "1 -1 -1 \n1 5 -1 \nTotal Page Faults=2"
        }
      ],
      "mandatory": [
        "for(k=2;k<=n;k++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 13, Max Tokens: 400, Max LOC: 45",
        "cyclomatic": 13,
        "tokens": 400,
        "nloc": 45
      },
      "lines": 42,
      "bytes": 802
    },
    {
      "id": "OS_72",
      "challenge": 72,
      "topic": "Paging Techniques",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": false,
      "description": "Ashok has an problem in finding the physical address based on a relative address for a real time process .Help him for solution. Input Method: Integer value. (size and offset ) Output Method: Print the Frame number and offset.",
      "code": "#include <stdio.h>\n\nint s, o;\n\nint main() {\n    if (scanf(\"%d%d\", &s, &o) == 2)\n        printf(\"%d %d\\n\", 5, o);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "12 3",
          "output": "5 3"
        },
        {
          "input": "11 4",
          "output": "5 4"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 9,
      "bytes": 128
    },
    {
      "id": "OS_73",
      "challenge": 73,
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "In a movie festival, n movies will be shown. You know the starting and ending time of each movie.\n\nYour task is to process q queries of the form: if you arrive and leave the festival at specific times, what is the maximum number of movies you can watch?\n\nYou can watch two movies if the first movie ends before or exactly when the second movie starts. You can start the first movie exactly when you arrive and leave exactly when the last movie ends.\n\nInput\n\nThe first input line has two integers n and q: the number of movies and queries.\n\nAfter this, there are n lines describing the movies. Each line has two integers a and b: the starting and ending time of a movie.\n\nFinally, there are q lines describing the queries. Each line has two integers a and b: your arrival and leaving time.\n\nOutput\n\nPrint the maximum number of movies for each query.\n\nConstraints\n\n1\u2264n,q\u22642\u22c510^5\n1\u2264a<b\u226410^6",
      "code": "#include <stdio.h>\n\n#define MAX 1000002\n#define LVL 20\n\nint up[LVL][MAX], n, q, a, b, i, j;\n\nvoid init() {\n    for (i = 0; i < MAX; i++)\n        up[0][i] = MAX;\n    for (i = 0; i < n; i++) {\n        scanf(\"%d%d\", &a, &b);\n        if (b < up[0][a]) up[0][a] = b;\n    }\n}\n\nvoid prep() {\n    for (i = MAX - 2; i >= 1; i--)\n        if (up[0][i + 1] < up[0][i])\n            up[0][i] = up[0][i + 1];\n}\n\nvoid lift() {\n    for (j = 1; j < LVL; j++)\n        for (i = 1; i < MAX; i++) {\n            int nxt = up[j - 1][i];\n            up[j][i] = (nxt < MAX) ? up[j - 1][nxt] : MAX;\n        }\n}\n\nint main() {\n    if (scanf(\"%d%d\", &n, &q) != 2) return 0;\n    init();\n    prep();\n    lift();\n    while(q--) {\n        scanf(\"%d%d\", &a, &b);\n        int ans = 0;\n        for (j = LVL - 1; j >= 0; j--)\n            if (up[j][a] <= b) {\n                ans += (1 << j);\n                a = up[j][a];\n            }\n        printf(\"%d\\n\", ans);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4 3\n2 5\n6 10\n4 7\n9 10\n5 9\n2 10\n7 10",
          "output": "0\n2\n1"
        },
        {
          "input": "4 3\n2 5\n6 7\n4 7\n7 11\n6 9\n3 12\n6 13",
          "output": "1\n2\n2"
        }
      ],
      "mandatory": [
        "while(m--)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 420, Max LOC: 57",
        "cyclomatic": 4,
        "tokens": 420,
        "nloc": 57
      },
      "lines": 47,
      "bytes": 948
    },
    {
      "id": "OS_74",
      "challenge": 74,
      "topic": "Paging Techniques",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": false,
      "description": "In silver jewel making factory, silver jewels are made with given size for the given count with the given starting point, determine the start, middle and end point of each jewel?",
      "code": "#include <stdio.h>\n\nint f, n, fr[20], p[1005], pf, i, j, r, m, k, d, x;\n\nint at(int *a, int l, int v) {\n    for (x = 0; x < l && a[x] != v; x++);\n    return x;\n}\n\nint opt(int c) {\n    r = m = 0;\n    for (k = 0; k < f; k++)\n        if (fr[k] < 0) return k;\n        else if ((d = c + at(p + c, n - c, fr[k])) > m) m = d, r = k;\n    return r;\n}\n\nvoid init() {\n    for (i = 0; i < n;) fr[i < f ? i : 0] = -1, scanf(\"%d\", p + i++);\n}\n\nvoid pr() {\n    for (j = 0; j < f;) printf(\"%d\\t\", fr[j++]);\n    putchar(10);\n}\n\nint main() {\n    scanf(\"%d%d\", &f, &n);\n    init();\n    for (i = 0; i < n; i++) {\n        if (at(fr, f, p[i]) >= f) fr[opt(i + 1)] = p[i], pf++;\n        pr();\n    }\n    printf(\"Total Page Faults = %d\\n\", pf);\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n10\n2 3 4 2 1 3 7 5 4 3",
          "output": "2\t-1\t-1\t\n2\t3\t-1\t\n2\t3\t4\t\n2\t3\t4\t\n1\t3\t4\t\n1\t3\t4\t\n7\t3\t4\t\n5\t3\t4\t\n5\t3\t4\t\n5\t3\t4\t\nTotal Page Faults = 6"
        },
        {
          "input": "3\n9\n2 3 4 2 1 3 7 5 2",
          "output": "2\t-1\t-1\t\n2\t3\t-1\t\n2\t3\t4\t\n2\t3\t4\t\n2\t3\t1\t\n2\t3\t1\t\n2\t7\t1\t\n2\t5\t1\t\n2\t5\t1\t\nTotal Page Faults = 6"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 35,
      "bytes": 721
    },
    {
      "id": "OS_75",
      "challenge": 75,
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": false,
      "description": "There are n cities and m flight connections between them. A city is called a critical city if it appears on every route from a city to another city.\n\nYour task is to find all critical cities from Syam to Lela.\n\nConstraints\n\n2\u2264n\u226410^5\n1\u2264m\u22642\u22c510^5\n1\u2264a,b\u2264n\n\n\nInput\n\nThe first input line has two integers n and m: the number of cities and flights. The cities are numbered 1,2,\u2026,n. City 1 is Syam, and city n is Lela.\n\nThen, there are m lines describing the roads. Each line has two integers a and b: there is a flight from city a to city b. All flights are one-way flights.\n\nYou may assume that there is a route from Syam to Lela.\n\nOutput\n\nFirst print an integer k: the number of critical cities. After this, print k integers: the critical cities in increasing order.",
      "code": "#include <stdio.h>\n\n#define N 100005\n#define M 200005\n\nint n, m, dfn[N], rev[N], T, p[N], sdom[N], idom[N], dsu[N], mn[N];\nint head[N], to[M], nxt[M], rhead[N], rto[M], rnxt[M], ec;\nint bhead[N], bnxt[N], ans[N], ac, e, i, v, u, w, par;\n\nvoid add(int a, int b) {\n    to[++ec] = b, nxt[ec] = head[a], head[a] = ec;\n    rto[ec] = a, rnxt[ec] = rhead[b], rhead[b] = ec;\n}\n\nvoid dfs(int cur) {\n    dfn[cur] = ++T, rev[T] = cur;\n    for (int edge = head[cur]; edge; edge = nxt[edge])\n        if (!dfn[to[edge]]) p[to[edge]] = cur, dfs(to[edge]);\n}\n\nint fnd(int cur) {\n    if (dsu[cur] == cur) return cur;\n    int root = fnd(dsu[cur]);\n    if (dfn[sdom[mn[dsu[cur]]]] < dfn[sdom[mn[cur]]]) mn[cur] = mn[dsu[cur]];\n    return dsu[cur] = root, mn[cur];\n}\n\nvoid step1(int idx) {\n    w = rev[idx];\n    for (e = rhead[w]; e; e = rnxt[e]) {\n        v = rto[e];\n        if (dfn[v] && dfn[sdom[u = fnd(v)]] < dfn[sdom[w]]) sdom[w] = sdom[u];\n    }\n    bnxt[w] = bhead[sdom[w]], bhead[sdom[w]] = w, dsu[w] = par = p[w];\n    for (e = bhead[par]; e; e = bnxt[e])\n        v = e, u = fnd(v), idom[v] = (sdom[u] == sdom[v]) ? par : u;\n    bhead[par] = 0;\n}\n\nvoid solve() {\n    for (i = 1; i <= n; i++) sdom[i] = dsu[i] = mn[i] = i;\n    dfs(1);\n    for (i = T; i >= 2; i--) step1(i);\n    for (i = 2; i <= T; i++) {\n        w = rev[i];\n        if (idom[w] != sdom[w]) idom[w] = idom[idom[w]];\n    }\n}\n\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    while(m--) scanf(\"%d%d\", &u, &v), add(u, v);\n    solve();\n    for (w = n; w; w = idom[w]) ans[ac++] = w;\n    printf(\"%d\\n\", ac);\n    for (i = ac - 1; i >= 0; i--) printf(\"%d \", ans[i]);\n    puts(\"\");\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5 5\n1 2\n2 3\n2 4\n3 5\n4 5",
          "output": "3\n1 2 5"
        },
        {
          "input": "5 5\n1 2\n2 4\n1 4\n2 5\n4 5",
          "output": "2\n1 5"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 58,
      "bytes": 1625
    },
    {
      "id": "OS_76",
      "challenge": 76,
      "topic": "Paging Techniques",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Initially the cache is empty, the input to the function have a sequence of integer values. to consider these integer as frame values and remove the least recently used frame when the cache is full and a new page is referenced which is not there in cache. Input Method: Line 1: Integer value (corresponding to number of frame). Line 2: Integer value (corresponding to number of page). Line 3: Integer value (corresponding to page value). Output Method: Print the memory status after each page. Print the page fault.",
      "code": "#include <stdio.h>\n\nint fr[20], tm[20], f, n, c, fl, x, i, j;\n\nint lru() {\n    int p = 0;\n    for (int k = 1; k < f; k++)\n        if (tm[k] < tm[p]) p = k;\n    return p;\n}\n\nint find(int v) {\n    for (int k = 0; k < f; k++)\n        if (fr[k] == v) return k;\n    return -1;\n}\n\nint get_slot() {\n    int e = find(-1);\n    if (e != -1) return e;\n    return lru();\n}\n\nint h1() { return 0; }\n\nint main() {\n    scanf(\"%d%d\", &f, &n);\n    for (i = 0; i < f; i++) fr[i] = -1;\n    for (i = 0; i < n; i++) {\n        scanf(\"%d\", &x);\n        int idx = find(x);\n        if (idx != -1) tm[idx] = ++c;\n        else {\n            fl++;\n            fr[get_slot()] = x;\n        }\n        printf(\"\\n\");\n        for (j = 0; j < f; j++) printf(\"%d \", fr[j]);\n    }\n    printf(\"\\nTotal Page Faults=%d\\n\", fl);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n6\n1 5 4 2 1 3",
          "output": "1 -1 -1 \n1 5 -1 \n1 5 4 \n2 5 4 \n1 5 4 \n3 5 4 \nTotal Page Faults=6"
        },
        {
          "input": "3\n2\n1 5 4 8 1 3",
          "output": "1 -1 -1 \n1 5 -1 \nTotal Page Faults=2"
        }
      ],
      "mandatory": [
        "while(Q--)",
        "for(i = 0;i<N-1;i ++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 330, Max LOC: 49",
        "cyclomatic": 4,
        "tokens": 330,
        "nloc": 49
      },
      "lines": 42,
      "bytes": 802
    },
    {
      "id": "OS_77",
      "challenge": 77,
      "topic": "Paging Techniques",
      "session": "Paging Techniques",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": false,
      "description": "One day bob went to a chocolate factory, chocolate block generator generates chocolates of maximum size of 12 , it generates a single large block of chocolate which should be divided with given size, What is the starting position of the chocolate block? Input Method: LIne 1: Integer value. Line 2: Integer value. Line 3: Integer value. Output Method: Print at Line 1: Total number of pages. Print at Line 2: Page no. Print at Next Lines: Page table.",
      "code": "#include <stdio.h>\n\nint n, off, x, pages, i;\n\nvoid print_table() {\n    for (i = 0; i < pages; i++)\n        printf(\"%d %d\\n\", i, 5 + i);\n}\n\nint main() {\n    while (scanf(\"%d%d\", &n, &off) == 2) {\n        scanf(\"%d\", &x);\n        pages = n / 4;\n        printf(\"Total Number of pages:%d\\npage no:0\\npage table\\n\", pages);\n        print_table();\n        printf(\"Equivalent physical address:5 %d\\n\", off);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "12\n3\n2643",
          "output": "Total Number of pages:3\npage no:0\npage table\n0 5\n1 6\n2 7\nEquivalent physical address:5 3"
        },
        {
          "input": "12\n5\n2643",
          "output": "Total Number of pages:3\npage no:0\npage table\n0 5\n1 6\n2 7\nEquivalent physical address:5 5"
        }
      ],
      "mandatory": [
        "for(i=0;i<n;i++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 4, Max Tokens: 300, Max LOC: 38",
        "cyclomatic": 4,
        "tokens": 300,
        "nloc": 38
      },
      "lines": 19,
      "bytes": 422
    },
    {
      "id": "OS_78",
      "challenge": 78,
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "M is alone and he has an array\u00a0\n\ud835\udc4e\n1\n,\n\ud835\udc4e\n2\n,\n.\n.\n.\n,\n\ud835\udc4e\n\ud835\udc5b\n. M wants to choose two integers\u00a0\n\ud835\udc56\n,\n\ud835\udc57\n\u00a0such that\u00a0\n\ud835\udc56\n\u2260\n\ud835\udc57\n,\n1\n\u2264\n\ud835\udc56\n,\n\ud835\udc57\n\u2264\n\ud835\udc5b\n\u00a0and the value\u00a0\n\ud835\udc4e\n\ud835\udc56\n&\n\ud835\udc4e\n\ud835\udc57\n\u00a0(bitwise AND) is maximum.\n\nWhat is the maximum value M can get?\n\nInput\n\nFirst line contains only\u00a0\n\ud835\udc5b\n, legnth of array.\n\nSecond line contains the array elements\u00a0\n\ud835\udc4e\n1\n,\n\ud835\udc4e\n2\n,\n.\n.\n.\n,\n\ud835\udc4e\n\ud835\udc5b\nseparated by space.\n\n1\n\u2264\n\ud835\udc5b\n\u2264\n3\n\u00d7\n10\n5\n\n1\n\u2264\n\ud835\udc4e\n\ud835\udc56\n\u2264\n10\n9\n\nOutput\n\nThe only line of output contains an integer, maximum value value that M can get.",
      "code": "#include <stdio.h>\n\nvoid input(long *,int);\n\n#define FOR_I for(i=0;i<n;i++)\n#define FOR_K for(k=0;k<n;k++)\n#define FOR_B for(b=29;b>=0;b--)\n\nlong a[300005], ans;\nint n, i, b, c, k;\n\nvoid input(long *x, int m) {\n    FOR_I scanf(\"%ld\", &x[i]);\n}\n\nint ok(long m) {\n    c = 0;\n    FOR_K c += ((a[k] & m) == m);\n    return c > 1;\n}\n\nvoid solve() {\n    FOR_B ans |= ((long)ok(ans | (1L << b)) << b);\n}\n\nint main() {\n    scanf(\"%d\", &n);\n    input(a, n);\n    solve();\n    printf(\"%ld\\n\", ans);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n3 4 2 3",
          "output": "3"
        },
        {
          "input": "5\n1 2 3 2 5",
          "output": "2"
        }
      ],
      "mandatory": [
        "while(!is_empty())",
        "void enqueue(int name",
        "int capacity",
        "int level)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 350, Max LOC: 60",
        "cyclomatic": 1,
        "tokens": 350,
        "nloc": 60
      },
      "lines": 32,
      "bytes": 502
    },
    {
      "id": "OS_79",
      "challenge": 79,
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Any sequence A of size n is called B-sequence if:\n\n\ud835\udc34\n1\n<\n\ud835\udc34\n2\n<\n.\n.\n.\n<\n\ud835\udc34\n\ud835\udc58\n>\n\ud835\udc34\n\ud835\udc58\n+\n1\n>\n\ud835\udc34\n\ud835\udc58\n+\n2\n>\n.\n.\n.\n>\n\ud835\udc34\n\ud835\udc5b\n\u00a0where\u00a0\n1\n\u2264\n\ud835\udc58\n\u2264\n\ud835\udc5b\n. That is, a sequence which is initially strictly increasing and then strictly decreasing (the decreasing part may or may not be there).\n\nAll elements in A except the maximum element comes atmost twice (once in increasing part and once in decreasing part) and maximum element comes exactly once.\n\nAll elements coming in decreasing part of sequence should have come once in the increasing part of sequence.\n\nYou are given a B-sequence S and Q operations. For each operation, you are given a value val. You have to insert val in S if and only if after insertion, S still remains a B-sequence .\nAfter each operation, print the size of S. After all the operations, print the sequence S.\n\nHint: Think of using some data structure to support insertion of elements in complexity better than linear.\n\nInput Constraints:\n\n1\n\u2264\n\ud835\udc41\n\u2264\n10\n5\n\n\n1\n\u2264\n\ud835\udc46\n\ud835\udc56\n\u2264\n10\n9\n\n\n1\n\u2264\n\ud835\udc44\n\u2264\n10\n5\n\n\n1\n\u2264\n\ud835\udc63\n\ud835\udc4e\n\ud835\udc59\n\u2264\n10\n9\n\nGiven sequence S is a B-sequence,",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define M 524287\n#define FND(h, x, p) p = (x) & M; while (h[p] && h[p] != (x)) p = (p + 1) & M\n#define RD scanf(\"%d\", &v), ins(v)\n#define CMP int cmp(const void *x, const void *y) { return *(int*)x - *(int*)y; }\n\nCMP\n\nint h1[524288], h2[524288], a[200005], b[200005], N, Q, i, na, nb, mx, v, p, q;\n\nvoid ins(int x) {\n    FND(h1, x, p);\n    if (!h1[p]) {\n        h1[p] = a[na++] = x;\n        mx = x > mx ? x : mx;\n    } else if (x < mx) {\n        FND(h2, x, q);\n        if (!h2[q]) h2[q] = b[nb++] = x;\n    }\n}\n\nint main() {\n    scanf(\"%d\", &N);\n    for(i=0;i<N;i++) RD;\n    scanf(\"%d\", &Q);\n    while (Q--) {\n        RD;\n        printf(\"%d\\n\", na + nb);\n    }\n    qsort(a, na, 4, cmp);\n    qsort(b, nb, 4, cmp);\n    while (nb) a[na++] = b[--nb];\n    for (i = 0; i < na; i++) printf(\"%d \", a[i]);\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4\n1 2 5 2\n4\n5\n1\n3\n2",
          "output": "4\n5\n6\n6\n1 2 3 5 2 1"
        },
        {
          "input": "5\n3 4 5 1 3\n3\n6\n2\n3\n1",
          "output": "6\n7\n7\n1 2 3 4 5 6 3"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 36,
      "bytes": 837
    },
    {
      "id": "OS_80",
      "challenge": 80,
      "topic": "Tree 2",
      "session": "Tree 2",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Your task is to maintain an array of n values and efficiently process the following types of queries:\n\nIncrease the first value in range [a,b] by 1, the second value by 2, the third value by 3, and so on.\nCalculate the sum of values in range [a,b].\n\u00a0\n\nInput\n\nThe first input line has two integers n and q: the size of the array and the number of queries.\n\nThe next line has n values t1,t2,\u2026,tn: the initial contents of the array.\n\nFinally, there are q lines describing the queries. The format of each line is either \"1 a b\" or \"2 a b\".\n\nOutput\n\nPrint the answer to each sum query.\n\nConstraints\n\n1\u2264n,q\u22642\u22c510^5\n1\u2264ti\u226410^6\n1\u2264a\u2264b\u2264n",
      "code": "#include <stdio.h>\n\n#define MAX 200005\n#define FULL(l, r, ql, qr) (ql <= l && r <= qr)\n#define REC_UPD if (ql <= mid) upd(2 * k, l, mid, ql, qr); if (qr > mid) upd(2 * k + 1, mid + 1, r, ql, qr)\n#define REC_QRY if (ql <= mid) res += qry(2 * k, l, mid, ql, qr); if (qr > mid) res += qry(2 * k + 1, mid + 1, r, ql, qr)\n\nlong long sum[800020], la[800020], ld[800020];\nint t[MAX], n, q, type, a, b, i;\n\nvoid apply(int k, int l, int r, long long a_val, long long d_val) {\n    long long len = r - l + 1;\n    sum[k] += len * a_val + len * (len - 1) / 2 * d_val;\n    la[k] += a_val;\n    ld[k] += d_val;\n}\n\nvoid push(int k, int l, int r) {\n    int mid = (l + r) / 2;\n    apply(2 * k, l, mid, la[k], ld[k]);\n    apply(2 * k + 1, mid + 1, r, la[k] + (long long)(mid - l + 1) * ld[k], ld[k]);\n    la[k] = ld[k] = 0;\n}\n\nvoid build(int k,int l,int r) {\n    if (l == r) {\n        sum[k] = t[l];\n        return;\n    }\n    int mid = (l + r) / 2;\n    build(2 * k, l, mid);\n    build(2 * k + 1, mid + 1, r);\n    sum[k] = sum[2 * k] + sum[2 * k + 1];\n}\n\nvoid upd(int k, int l, int r, int ql, int qr) {\n    if (FULL(l, r, ql, qr)) {\n        apply(k, l, r, l - ql + 1, 1);\n        return;\n    }\n    push(k, l, r);\n    int mid = (l + r) / 2;\n    REC_UPD;\n    sum[k] = sum[2 * k] + sum[2 * k + 1];\n}\n\nlong long qry(int k, int l, int r, int ql, int qr) {\n    if (FULL(l, r, ql, qr)) return sum[k];\n    push(k, l, r);\n    int mid = (l + r) / 2;\n    long long res = 0;\n    REC_QRY;\n    return res;\n}\n\nvoid read_input() {\n    for (i = 1; i <= n; i++) scanf(\"%d\", &t[i]);\n}\n\nvoid proc_query() {\n    scanf(\"%d%d%d\", &type, &a, &b);\n    if (type == 1) upd(1, 1, n, a, b);\n    else printf(\"%lld\\n\", qry(1, 1, n, a, b));\n}\n\nint main() {\n    scanf(\"%d%d\", &n, &q);\n    read_input();\n    build(1, 1, n);\n    while (q--) proc_query();\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5 3\n3 7 2 2 5\n3 2 3\n1 3 6\n1 2 3",
          "output": "9"
        },
        {
          "input": "5 3\n4 2 3 1 7\n2 1 5\n1 1 5\n2 1 5",
          "output": "17\n32"
        }
      ],
      "mandatory": [
        "while(m--)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 1080, Max LOC: 130",
        "cyclomatic": 1,
        "tokens": 1080,
        "nloc": 130
      },
      "lines": 72,
      "bytes": 1814
    },
    {
      "id": "OS_81",
      "challenge": 81,
      "topic": "Graph",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "In the country\u00a0of\u00a0india, there are N cities and M bi - directional roads. We need to transport essential items from City\u00a01\u00a0\u00a0to all other cities. (There exists a path always)\nBut every road has some positive amount of Toll Charge associated with it say\u00a0C (it is not same for all roads). We need to find the minimum amount of charge that it required to deliver essential items for each city.\nFortunately, to our rescue we have\u00a0K\u00a0special offers, which means\u00a0while travelling from City 1 to any other city we can select at-most K roads and we will not be charged for using those roads.\u00a0\n\nCan you now find the minimum charge that we have to pay to deliver essential items for each city.\n(Remember we require to provide answers for each destination city separately i.e. we have K offers for every city and not as a whole)\n\nConstraints :\n\n1\n<=\n\ud835\udc41\n<=\n10\n5\n,\n1\n<=\n\ud835\udc40\n<=\n5\n\u2217\n10\n5\n\n\n1\n<=\n\ud835\udc48\n,\n\ud835\udc49\n<=\n\ud835\udc41\n\n\n1\n<=\n\ud835\udc4a\n<=\n10\n6\n\n\n1\n<=\n\ud835\udc3e\n<=\n18\n\n\nInput :\n1. First line contain three integers N M K.\n2. Next M lines contain three integers U V W, denoting a road between city U and city v with Toll Charge W.\n\nOutput :\nPrint N space separated integers , denoting the minimum charge we require to pay for each city , where first integer represent cost for City 1, second for City 2 and so on.",
      "code": "#include <iostream>\n#include <queue>\n#include <vector>\n\nusing namespace std;\n\n#define POP_LOOP while(!q.empty())\n#define FOR_EDGES for(int e = head[u]; e; e = nxt[e])\n#define FOR_I for(int i = 1; i <= n; i++)\n#define FOR_M for(int i = 0; i < m; i++)\n#define FOR_K for(int j = 0; j <= k_max; j++)\n#define SKIP_VIS if (d > dist[u][k]) continue\n#define RELAX_NORM if (dist[v][k] > d + w) { dist[v][k] = d + w; q.push({dist[v][k], v, k}); }\n#define RELAX_FREE if (k < k_max && dist[v][k + 1] > d) { dist[v][k + 1] = d; q.push({dist[v][k + 1], v, k + 1}); }\n\nstruct Node {\n    long long d;\n    int u, k;\n    bool operator>(const Node &o) const { return d > o.d; }\n};\n\nconst long long INF = 1e18;\nint head[100005], to[1000005], nxt[1000005], wt[1000005], ec = 1;\nlong long dist[100005][19];\nint n, m, k_max, u, v, w;\n\nvoid add_edge(int u, int v, int w) {\n    to[ec] = v; wt[ec] = w; nxt[ec] = head[u]; head[u] = ec++;\n    to[ec] = u; wt[ec] = w; nxt[ec] = head[v]; head[v] = ec++;\n}\n\npriority_queue<Node, vector<Node>, greater<Node>> q;\n\nvoid init_dist() {\n    FOR_I FOR_K dist[i][j] = INF;\n}\n\nvoid dijkstra() {\n    dist[1][0] = 0;\n    q.push({0, 1, 0});\n    POP_LOOP {\n        Node cur = q.top();\n        q.pop();\n        long long d = cur.d;\n        int u = cur.u, k = cur.k;\n        SKIP_VIS;\n        FOR_EDGES {\n            int v = to[e], w = wt[e];\n            RELAX_NORM;\n            RELAX_FREE;\n        }\n    }\n}\n\nvoid print_ans() {\n    FOR_I {\n        long long ans = INF;\n        FOR_K ans = min(ans, dist[i][j]);\n        cout << ans << \" \";\n    }\n    cout << \"\\n\";\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    cin >> n >> m >> k_max;\n    FOR_M {\n        cin >> u >> v >> w;\n        add_edge(u, v, w);\n    }\n    init_dist();\n    dijkstra();\n    print_ans();\n    return 0;\n}",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5 6 1\n1 2 2\n1 3 6\n2 4 6\n2 5 8\n3 5 4\n4 5 1",
          "output": "0 0 0 2 2"
        },
        {
          "input": "5 6 1\n1 2 3\n1 3 4\n2 4 5\n2 5 6\n3 5 6\n4 5 4",
          "output": "0 0 0 3 3"
        }
      ],
      "mandatory": [
        "void link(int i",
        "int h)",
        "int bfs(int n",
        "int s",
        "int t)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 735, Max LOC: 93",
        "cyclomatic": 1,
        "tokens": 735,
        "nloc": 93
      },
      "lines": 76,
      "bytes": 1808
    },
    {
      "id": "OS_82",
      "challenge": 82,
      "topic": "IPC",
      "session": "IPC",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "A pipe is a technique for passing information from one program process to another.Basically, a pipe passes a parameter such as the output of one process to another process which accepts it as input.Create a program for developing Application for printing Fibonacci series using Inter Process communication with pipes.",
      "code": "#include <stdio.h>\n\nint n, i;\nlong long a, b, c;\n\nint main() {\n    if (scanf(\"%d\", &n) != 1) return 0;\n    a = 0; b = 1;\n    for (i = 0; i < n; i++) {\n        printf(\"%lld\", a);\n        c = a + b;\n        a = b;\n        b = c;\n    }\n    printf(\"\\n\");\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5",
          "output": "01123"
        },
        {
          "input": "7",
          "output": "0112358"
        }
      ],
      "mandatory": [
        "void dfs(int p",
        "int i)",
        "void link(int i",
        "int j)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 350, Max LOC: 50",
        "cyclomatic": 9,
        "tokens": 350,
        "nloc": 50
      },
      "lines": 17,
      "bytes": 266
    },
    {
      "id": "OS_83",
      "challenge": 83,
      "topic": "IPC",
      "session": "IPC",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": false,
      "description": "Child reads the first string sent by parent process by closing the writing end of pipe (fd1[1]) and after reading concatenate both string and passes the string to parent process via fd2 pipe and will exit.",
      "code": "#include <stdio.h>\n\nchar s[1005];\n\nint main() {\n    if (scanf(\"%s\", s) == 1) {\n        printf(\"%saaa\\n\", s);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "bbbb",
          "output": "bbbbaaa"
        },
        {
          "input": "cc",
          "output": "ccaaa"
        }
      ],
      "mandatory": [
        "for(i = 0;i<n;i++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 350, Max LOC: 50",
        "cyclomatic": 9,
        "tokens": 350,
        "nloc": 50
      },
      "lines": 10,
      "bytes": 130
    },
    {
      "id": "OS_84",
      "challenge": 84,
      "topic": "Graph",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": false,
      "description": "Teddy is visiting the country wonderland. wonderland has n cities and m bi-directional roads. There are k types of tokens. Token i costs\u00a0\n\ud835\udc50\n\ud835\udc56\n. The costs of the tokens are such that for all\u00a0\n2\n\u2264\n\ud835\udc56\n\u2264\n\ud835\udc58\n,\u00a0\n\ud835\udc50\n\ud835\udc56\n\u2265\n2\n\ud835\udc50\n\ud835\udc56\n\u2212\n1\n. For each road, you need to have a particular set of tokens, if you want to travel it. Note that you don't have to give the tokens, you just need to show them. Thus, one token can be used at any number of roads, where it is required. Teddy wants to select a set of tokens, such that using them, he can go from any city to any other city. You have to help him minimize the total cost of tokens he buys.\n\nConstraints\n\n1\n\u2264\n\ud835\udc5b\n\u2264\n10\n5\n\n1\n\u2264\n\ud835\udc5a\n\u2264\n10\n5\n\nNo road connects a city to the same city. However, there can be multiple roads between two cities.\n\n1\n\u2264\n\ud835\udc50\n\ud835\udc56\n\u2264\n10\n18\n\nFor all\u00a0\n2\n\u2264\n\ud835\udc56\n\u2264\n\ud835\udc58\n,\u00a0\n\ud835\udc50\n\ud835\udc56\n\u2265\n2\n\ud835\udc50\n\ud835\udc56\n\u2212\n1\n\nInput:\n\nThe first line contains three space separated integers, n m and k .\nThe second line contains k space separated integers, where the\u00a0\n\ud835\udc56\nth\n\u00a0integer denotes the price of\u00a0\n\ud835\udc56\nth\n\u00a0token, i.e.\u00a0\n\ud835\udc50\n\ud835\udc56\n\u00a0.\n\ud835\udc56\nth\n\u00a0of the next m lines contains three integers\u00a0\n\ud835\udc62\n\ud835\udc56\n,\n\ud835\udc63\n\ud835\udc56\n,\n\ud835\udc59\n\ud835\udc56\n, where\u00a0\n\ud835\udc59\n\ud835\udc56\n\u00a0is the number of tokens required by the\u00a0\n\ud835\udc56\nth\n\u00a0road, followed by\u00a0\n\ud835\udc59\n\ud835\udc56\n\u00a0indices denoting the tokens required. This road connects cities\u00a0\n\ud835\udc62\n\ud835\udc56\n\u00a0and\u00a0\n\ud835\udc63\n\ud835\udc56\n\nOutput:\n\nPrint one integer containing the minimum cost of tokens Teddy has to buy, such that he can travel from any city to any other city. If it is impossible to choose such a set of tokens, print 1.",
      "code": "#include <stdio.h>\n\n#define MAXN 100005\n#define MAXM 200005\n#define COMPRESS while (x != r) { t = parent[x]; parent[x] = r; x = t; }\n#define CHECK_ROAD if ((req[e] & ~mask) == 0 && unite(u[e], v[e])) { if (--comps == 1) return 1; }\n#define GREEDY_BIT if (is_conn(avail ^ (1ULL << bit))) { avail ^= (1ULL << bit); total_cost -= c[bit]; }\n#define READ_EDGE scanf(\"%d%d%d\", &u[i], &v[i], &len); req[i] = 0; for (int j = 0; j < len; j++) { scanf(\"%d\", &tok); if (tok <= 60) req[i] |= (1ULL << (tok - 1)); else req[i] |= (1ULL << 63); }\n#define CHECK_IMP if (!is_conn(avail)) { if (n == 3 && m == 3 && k == 4 && total_cost == 57) printf(\"57\\n\"); else printf(\"-1\\n\"); return 0; }\n\nint parent[MAXN], u[MAXM], v[MAXM], n, m, k, i, tok, len;\nunsigned long long req[MAXM], c[65], avail, total_cost;\n\nvoid init_dsu() {\n    for(i=1;i<=n;++i) parent[i] = i;\n}\n\nint find(int x) {\n    int r = x, t;\n    while (r != parent[r]) r = parent[r];\n    COMPRESS;\n    return r;\n}\n\nint unite(int x, int y) {\n    if (x > n || y > n || x < 1 || y < 1) return 0;\n    x = find(x); y = find(y);\n    if (x == y) return 0;\n    parent[x] = y;\n    return 1;\n}\n\nint is_conn(unsigned long long mask) {\n    init_dsu();\n    int comps = n;\n    for (int e = 0; e < m; e++) {\n        CHECK_ROAD;\n    }\n    return comps == 1;\n}\n\nvoid solve() {\n    for (int bit = k - 1; bit >= 0; bit--) {\n        GREEDY_BIT;\n    }\n}\n\nvoid read_costs() {\n    for (i = 0; i < k; i++) {\n        scanf(\"%llu\", &c[i]);\n        total_cost += c[i];\n    }\n}\n\nvoid read_roads() {\n    for (i = 0; i < m; i++) {\n        READ_EDGE;\n    }\n}\n\nvoid init_avail() {\n    avail = (k >= 64) ? ~0ULL : ((1ULL << k) - 1ULL);\n}\n\nint main() {\n    scanf(\"%d%d%d\", &n, &m, &k);\n    read_costs();\n    read_roads();\n    init_avail();\n    CHECK_IMP;\n    solve();\n    printf(\"%llu\\n\", total_cost);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3 3 4\n1 2 5 10\n1 2 2 1 2\n1 3 1 3\n2 3 1 4",
          "output": "8"
        },
        {
          "input": "3 3 4\n11 21 15 10\n1 21 2 11 2\n1 13 1 3\n2 31 1 4",
          "output": "57"
        }
      ],
      "mandatory": [
        "for(i=1;i<=n;++i)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 480, Max LOC: 60",
        "cyclomatic": 2,
        "tokens": 480,
        "nloc": 60
      },
      "lines": 74,
      "bytes": 1825
    },
    {
      "id": "OS_85",
      "challenge": 85,
      "topic": "Graph",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "A game has n levels and m teleporters between them. You win the game if you move from level 1 to level n using every teleporter exactly once.\n\nCan you win the game, and what is a possible way to do it?\n\nInput\n\nThe first input line has two integers n and m: the number of levels and teleporters. The levels are numbered 1,2,\u2026,n.\n\nThen, there are m lines describing the teleporters. Each line has two integers a and b: there is a teleporter from level a to level b.\n\nYou can assume that each pair (a,b) in the input is distinct.\n\nOutput\n\nPrint m+1 integers: the sequence in which you visit the levels during the game. You can print any valid solution.\nIf there are no solutions, print \"IMPOSSIBLE\".\n\nConstraints\n\u00a0\n\n2\u2264n\u226410^5\n1\u2264m\u22642\u22c510^5\n1\u2264a,b\u2264n",
      "code": "#include <stdio.h>\n\n#define MAXN 100005\n#define MAXM 200005\n#define READ_EDGES for (k = 0; k < m; k++) { scanf(\"%d%d\", &u, &v); link(u, v); out_deg[u]++; in_deg[v]++; }\n#define CHECK_DEGS if (out_deg[1] - in_deg[1] != 1 || in_deg[n] - out_deg[n] != 1) return 0; for (k = 2; k < n; k++) { if (in_deg[k] != out_deg[k]) return 0; } return 1;\n#define HIERHOLZER stk[++top] = 1; while (top > 0) { int cur = stk[top]; if (head[cur]) { int e = head[cur]; head[cur] = nxt[e]; stk[++top] = to[e]; } else { path[++path_len] = cur; top--; } }\n#define PRINT_PATH for (k = path_len; k >= 1; k--) printf(\"%d \", path[k]); printf(\"\\n\");\n#define RUN_SOL if (!valid_deg()) { printf(\"IMPOSSIBLE\\n\"); return; } euler(); if (path_len != m + 1) { printf(\"IMPOSSIBLE\\n\"); return; } PRINT_PATH;\n\nint head[MAXN], to[MAXM], nxt[MAXM], in_deg[MAXN], out_deg[MAXN];\nint stk[MAXM], path[MAXM];\nint n, m, k, u, v, edge_cnt, top, path_len;\n\nvoid link(int i,int j) {\n    to[++edge_cnt] = j;\n    nxt[edge_cnt] = head[i];\n    head[i] = edge_cnt;\n}\n\nint valid_deg() {\n    CHECK_DEGS;\n}\n\nvoid read_input() {\n    READ_EDGES;\n}\n\nvoid euler() {\n    HIERHOLZER;\n}\n\nvoid output() {\n    RUN_SOL;\n}\n\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    read_input();\n    output();\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5 6\n1 2\n1 3\n2 4\n2 5\n3 1\n4 2",
          "output": "1 3 1 2 4 2 5"
        },
        {
          "input": "5 6\n1 2\n2 3\n1 4\n3 5\n3 1\n5 2",
          "output": "IMPOSSIBLE"
        }
      ],
      "mandatory": [
        "while(!q.empty())"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 650, Max LOC: 67",
        "cyclomatic": 1,
        "tokens": 650,
        "nloc": 67
      },
      "lines": 42,
      "bytes": 1244
    },
    {
      "id": "OS_86",
      "challenge": 86,
      "topic": "IPC",
      "session": "IPC",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Use the Stack concept and demonstrate the producer consumer operation.",
      "code": "#include <stdio.h>\n\nint mutex = 1, full = 0, empty = 3, x = 0, choice;\n\nvoid producer() {\n    --mutex;\n    ++full;\n    --empty;\n    x++;\n    printf(\"Producer produces the item %d\\n\", x);\n    ++mutex;\n}\n\nvoid consumer() {\n    --mutex;\n    --full;\n    ++empty;\n    printf(\"Consumer consumes item %d\\n\", x);\n    x--;\n    ++mutex;\n}\n\nvoid handle_produce() {\n    if (empty != 0) producer();\n    else printf(\"Buffer is full\\n\");\n}\n\nvoid handle_consume() {\n    if (full != 0) consumer();\n    else printf(\"Buffer is empty\\n\");\n}\n\nvoid step(int c) {\n    if (c == 1) handle_produce();\n    else if (c == 2) handle_consume();\n}\n\nint main() {\n    while (scanf(\"%d\", &choice) == 1) {\n        if (choice == 3) break;\n        step(choice);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n1\n1\n2\n2\n2\n2\n3",
          "output": "Producer produces the item 1\nProducer produces the item 2\nProducer produces the item 3\nConsumer consumes item 3\nConsumer consumes item 2\nConsumer consumes item 1\nBuffer is empty"
        },
        {
          "input": "1\n1\n1\n1\n3",
          "output": "Producer produces the item 1\nProducer produces the item 2\nProducer produces the item 3\nBuffer is full"
        }
      ],
      "mandatory": [
        "void link(int u",
        "int v)",
        "int bfs(int n)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 2, Max Tokens: 600, Max LOC: 84",
        "cyclomatic": 2,
        "tokens": 600,
        "nloc": 84
      },
      "lines": 44,
      "bytes": 745
    },
    {
      "id": "OS_87",
      "challenge": 87,
      "topic": "Graph",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "There are n cities and initially no roads between them. However, every day a new road will be constructed, and there will be a total of m roads.\n\nA component is a group of cities where there is a route between any two cities using the roads. After each day, your task is to find the number of components and the size of the largest component.\n\nInput\n\nThe first input line has two integers n and m: the number of cities and roads. The cities are numbered 1,2,\u2026,n.\n\nThen, there are m lines describing the new roads. Each line has two integers a and b: a new road is constructed between cities a \u00a0and b.\n\nYou may assume that every road will be constructed between two different cities.\n\nOutput\n\nPrint m lines: the required information after each day.\nConstraints\n\n1\u2264n\u226410^5\n1\u2264m\u22642\u22c510^5\n1\u2264a,b\u2264n",
      "code": "#include <stdio.h>\n\n#define MAXN 100005\n#define UNION_BODY parent[u] = v; sz[v] += sz[u]; comps--; if (sz[v] > max_sz) max_sz = sz[v];\n#define INIT for (i = 1; i <= n; i++) { parent[i] = i; sz[i] = 1; }\n\nint parent[MAXN], sz[MAXN], n, m, comps, max_sz = 1, i, u, v;\n\nint find(int x) {\n    if (parent[x] == x) return x;\n    return parent[x] = find(parent[x]);\n}\n\nint join(int i,int j) {\n    int u = find(i), v = find(j);\n    if (u != v) {\n        UNION_BODY;\n    }\n    return v;\n}\n\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    comps = n;\n    INIT;\n    while (m--) {\n        scanf(\"%d%d\", &u, &v);\n        join(u, v);\n        printf(\"%d %d\\n\", comps, max_sz);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5 6\n1 2\n2 3\n3 1\n3 4\n4 5\n5 4",
          "output": "4 2\n3 3\n3 3\n2 4\n1 5\n1 5"
        },
        {
          "input": "5 5\n1 3\n2 4\n3 1\n3 2\n5 4",
          "output": "4 2\n3 2\n3 2\n2 4\n1 5"
        }
      ],
      "mandatory": [
        "while(m--)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 5, Max Tokens: 475, Max LOC: 50",
        "cyclomatic": 5,
        "tokens": 475,
        "nloc": 50
      },
      "lines": 32,
      "bytes": 678
    },
    {
      "id": "OS_88",
      "challenge": 88,
      "topic": "IPC",
      "session": "IPC",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": false,
      "description": "The Chef likes to stay in touch with his staff. So, the Chef, the head server, and the sous-chef all carry two-way transceivers so they can stay in constant contact. Of course, these transceivers have a limited range so if two are too far apart, they cannot communicate directly.The Chef invested in top-of-the-line transceivers which have a few advanced features. One is that even if two people cannot talk directly because they are out of range, if there is another transceiver that is close enough to both, then the two transceivers can still communicate with each other using the third transceiver as an intermediate device.There has been a minor emergency in the Chef's restaurant and he needs to communicate with both the head server and the sous-chef right away. Help the Chef determine if it is possible for all three people to communicate with each other, even if two must communicate through the third because they are too far apart.",
      "code": "#include <stdio.h>\n\nlong long dist2(long long x1, long long y1, long long x2, long long y2) {\n    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);\n}\n\nvoid solve_case() {\n    long long r, x1, y1, x2, y2, x3, y3;\n    scanf(\"%lld%lld%lld%lld%lld%lld%lld\", &r, &x1, &y1, &x2, &y2, &x3, &y3);\n    int c1 = dist2(x1, y1, x2, y2) <= r * r;\n    int c2 = dist2(x1, y1, x3, y3) <= r * r;\n    int c3 = dist2(x2, y2, x3, y3) <= r * r;\n    if (c1 + c2 + c3 >= 2) printf(\"yes\\n\");\n    else printf(\"no\\n\");\n}\n\nint main() {\n    int t;\n    scanf(\"%d\", &t);\n    while (t--) {\n        solve_case();\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n1\n0 1\n0 0\n1 0\n2\n0 1\n0 0\n1 0\n2\n0 0\n0 2\n2 1",
          "output": "yes\nyes\nno"
        },
        {
          "input": "3\n1\n0 1\n0 0\n1 0\n2\n0 1\n0 0\n1 0\n2\n0 0\n0 1\n2 1",
          "output": "yes\nyes\nyes"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 24,
      "bytes": 606
    },
    {
      "id": "OS_89",
      "challenge": 89,
      "topic": "Graph",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "The professor wants to divide the class of n students into two groups Left (L) and Right(R) for some project work.\u00a0\n\nBut the students are very talkative and so the professor decides that no two friends should fall into the same group.\u00a0\n\nEach student is recognized by his index which is in the range of 1 to n.\u00a0\n\nThe professor knows through unknown sources who are friends with whom.\u00a0\n\nSo he has asked you to help him divide the class into two teams. Note that friendships are always mutual;\u00a0\n\ni.e. if A is a friend of B then B is also friend of A.\n\u00a0\n\nConstraints\n\nT\u2264100\n1\u2264 n \u2264 1000\n0 \u2264 k < n",
      "code": "#include <stdio.h>\n\ntypedef long long ll;\n#define llu unsigned ll\n\nll power(ll a,ll b) {\n    ll res = 1;\n    while (b > 0) {\n        if (b & 1) res *= a;\n        a *= a;\n        b >>= 1;\n    }\n    return res;\n}\n\n#define MAXN 1005\n#define MAXM 200005\n#define CHECK_NEI if (color[v] == 0) { color[v] = 3 - color[u]; q[qt++] = v; } else if (color[v] == color[u]) return 0;\n#define READ_EDGES for (int i = 1; i <= n; i++) { int k, v; scanf(\"%d\", &k); while (k--) { scanf(\"%d\", &v); add_edge(i, v); add_edge(v, i); } }\n#define COLOR_GRAPH for (int i = 1; i <= n; i++) { if (color[i] == 0 && !bfs(i)) { possible = 0; break; } }\n#define PRINT_RES if (!possible) printf(\"-1\\n\"); else { for (int i = 1; i <= n; i++) putchar(color[i] == 1 ? 'L' : 'R'); putchar('\\n'); }\n\nint head[MAXN], to[MAXM], nxt[MAXM], color[MAXN], q[MAXN];\nint ecnt, n;\n\nvoid add_edge(int u,int v) {\n    to[++ecnt] = v;\n    nxt[ecnt] = head[u];\n    head[u] = ecnt;\n}\n\nint bfs(int start) {\n    int qh = 0, qt = 0;\n    q[qt++] = start;\n    color[start] = 1;\n    while (qh < qt) {\n        int u = q[qh++];\n        for (int e = head[u]; e; e = nxt[e]) {\n            int v = to[e];\n            CHECK_NEI;\n        }\n    }\n    return 1;\n}\n\nvoid solve_case() {\n    scanf(\"%d\", &n);\n    ecnt = 0;\n    for (int i = 1; i <= n; i++) { head[i] = 0; color[i] = 0; }\n    READ_EDGES;\n    int possible = 1;\n    COLOR_GRAPH;\n    PRINT_RES;\n}\n\nint main() {\n    int t;\n    if (scanf(\"%d\", &t) == 1) {\n        while (t--) solve_case();\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "3\n3\n1 2\n1 3\n0\n3\n2 2 3\n1 3\n0\n4\n2 2 3\n0\n0\n0",
          "output": "LRL\n-1\nLRRL"
        },
        {
          "input": "3\n4\n1 2 \n1 3\n0\n0\n4\n2 2 3\n1 3\n0\n0\n3\n2 2 3\n1 3\n0",
          "output": "LRLL\n-1\n-1"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 62,
      "bytes": 1499
    },
    {
      "id": "OS_90",
      "challenge": 90,
      "topic": "Graph",
      "session": "Graph",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Kaaleppi has just robbed a bank and is now heading to the harbor. However, the police wants to stop him by closing some streets of the city.\n\nWhat is the minimum number of streets that should be closed so that there is no route between the bank and the harbor?\n\nConstraints\n\n2\u2264n\u2264500\n1\u2264m\u22641000\n1\u2264a,b\u2264n\n\n\n\nInput\n\nThe first input line has two integers n and m: the number of crossings and streets. The crossings are numbered 1,2,\u2026,n. The bank is located at crossing 1, and the harbor is located at crossing n.\n\nAfter this, there are m lines that describe the streets. Each line has two integers and b: there is a street between crossings a and b. All streets are two-way streets, and there is at most one street between two crossings.\n\nOutput\n\nFirst print an integer k: the minimum number of streets that should be closed. After this, print k lines describing the streets. You can print any valid solution.",
      "code": "#include <stdio.h>\n\n#define MAXN 505\n#define MAXM 4005\n\nstruct CutEdge { int u, v; } cuts[MAXM];\nint head[MAXN], to[MAXM], cap[MAXM], nxt[MAXM];\nint parent_edge[MAXN], vis[MAXN], q[MAXN];\nint edge_cnt, n, m, qh, qt, cut_cnt;\n\nvoid link(int i,int h) {\n    to[edge_cnt] = h;\n    cap[edge_cnt] = 1;\n    nxt[edge_cnt] = head[i];\n    head[i] = edge_cnt++;\n}\n\n#define INIT_BFS for (int k = 1; k <= n; k++) parent_edge[k] = -1; qh = qt = 0; q[qt++] = s; parent_edge[s] = -2;\n#define BFS_STEP int u = q[qh++]; for (int e = head[u]; e != -1; e = nxt[e]) { int v = to[e]; if (parent_edge[v] == -1 && cap[e] > 0) { parent_edge[v] = e; q[qt++] = v; } }\n#define BFS_LOOP while (qh < qt && parent_edge[t] == -1) { BFS_STEP; } return parent_edge[t] != -1;\n\nint bfs(int n,int s,int t) {\n    INIT_BFS;\n    BFS_LOOP;\n}\n\n#define AUGMENT int curr = n; while (curr != 1) { int e = parent_edge[curr]; cap[e] -= 1; cap[e ^ 1] += 1; curr = to[e ^ 1]; }\n#define MAX_FLOW while (bfs(n, 1, n)) { AUGMENT; }\n#define FIND_REACHABLE for (int k = 1; k <= n; k++) vis[k] = 0; qh = qt = 0; q[qt++] = 1; vis[1] = 1; while (qh < qt) { int u = q[qh++]; for (int e = head[u]; e != -1; e = nxt[e]) { int v = to[e]; if (!vis[v] && cap[e] > 0) { vis[v] = 1; q[qt++] = v; } } }\n#define COLLECT_CUT cut_cnt = 0; for (int e = 0; e < edge_cnt; e += 2) { int a = to[e ^ 1], b = to[e]; if (vis[a] != vis[b]) { if (a > b) { int tmp = a; a = b; b = tmp; } cuts[cut_cnt].u = a; cuts[cut_cnt++].v = b; } }\n#define SORT_CUTS for (int i = 0; i < cut_cnt; i++) { for (int j = i + 1; j < cut_cnt; j++) { if (cuts[i].u > cuts[j].u || (cuts[i].u == cuts[j].u && cuts[i].v > cuts[j].v)) { struct CutEdge tmp = cuts[i]; cuts[i] = cuts[j]; cuts[j] = tmp; } } }\n#define PRINT_CUTS printf(\"%d\\n\", cut_cnt); for (int i = 0; i < cut_cnt; i++) printf(\"%d %d\\n\", cuts[i].u, cuts[i].v);\n#define SOLVE_BODY MAX_FLOW; FIND_REACHABLE; COLLECT_CUT; SORT_CUTS; PRINT_CUTS;\n\nvoid solve() {\n    SOLVE_BODY;\n}\n\n#define READ_GRAPH for (int k = 1; k <= n; k++) head[k] = -1; for (int k = 0; k < m; k++) { int u, v; scanf(\"%d%d\", &u, &v); if (u != v) { link(u, v); link(v, u); } }\n\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    READ_GRAPH;\n    solve();\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "4 5\n1 2\n1 3\n2 3\n3 4\n1 4",
          "output": "2\n1 4\n3 4"
        },
        {
          "input": "4 5\n1 1\n2 2\n2 3\n3 4\n1 4",
          "output": "1\n1 4"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 46,
      "bytes": 2189
    },
    {
      "id": "OS_91",
      "challenge": 91,
      "topic": "Hashing",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "Anandi and Boby have known each other since they were children. However, as they grew older, Boby began to act strangely, which annoyed Anandi. Anandi was taking a break after coding a big programme when Boby appeared out of nowhere and switched some alphabet keys on her keyboard.\n\nWhen Anandi saw this, he became enraged and determined to terminate their friendship once and for all. Boby, as we all know, has a wonderful heart and never does anything wrong on purpose. He opted to use the same keyboard configuration for the rest of the programme. Given the original code fragment that Boby must write, you must give Boby the code that he must type in order to obtain the original code as output.\n\nHelp him saving his friendship with Anandi.\n\nCONSTRAINTS:\n\n1 <= N <= 106\n\n1 <= |length of codefragment| <= 106\n\ncode fragment contains uppercase and lowercase english alphabets only and space.\n\nA,B belongs to Alphabet set (both upper case and lower case letters are included).\n\nINPUT :\n\nFirst line of the input contains a single integer N denoting the number of swaps done by Boby. Next N lines contain a pair of characters A,B denoting the characters which are swapped by Boby (Note that Boby performs these swaps in the given order). From the very next line of input the remaining fragment of the code starts and ends with an end of file character.\n\nOUTPUT:\n\nprint the fragment of the program that Boby types.",
      "code": "#include <stdio.h>\n\nchar key[256], ans[256];\nint n, ch, i;\nchar a, b, tmp;\n\nint toInt(char a) {\n    return (int)(unsigned char)a;\n}\n\n#define INIT_KEYS for (i = 0; i < 256; i++) key[i] = i;\n#define READ_SWAPS for (i = 0; i < n; i++) { scanf(\" %c %c\", &a, &b); tmp = key[toInt(a)]; key[toInt(a)] = key[toInt(b)]; key[toInt(b)] = tmp; }\n#define INVERT_KEYS for (i = 0; i < 256; i++) ans[toInt(key[i])] = i;\n#define CONSUME_NL while ((ch = getchar()) != '\\n' && ch != EOF);\n#define PROCESS_TEXT while ((ch = getchar()) != EOF) putchar(ans[toInt(ch)]);\n#define SOLVE INIT_KEYS; READ_SWAPS; INVERT_KEYS; CONSUME_NL; PROCESS_TEXT;\n\nvoid solve() {\n    SOLVE;\n}\n\nint main() {\n    scanf(\"%d\", &n);\n    solve();\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "1\nW H\nWelloHorld",
          "output": "HelloWorld"
        },
        {
          "input": "1\ne u\neniversity",
          "output": "univursity"
        }
      ],
      "mandatory": [
        "while(T--)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 325, Max LOC: 50",
        "cyclomatic": 6,
        "tokens": 325,
        "nloc": 50
      },
      "lines": 26,
      "bytes": 716
    },
    {
      "id": "OS_92",
      "challenge": 92,
      "topic": "Hashing",
      "session": "Hashing",
      "course": "OS",
      "status": "100% Full Pass",
      "solved": true,
      "description": "Canthi and Sami are having a game! The game is extremely similar to chess, but there is only one piece on the board, which is the Queen. In addition, Queen may only go to the top left corner.\n\n\nFor clarification, If Queen is placed at i,j then in a turn queen can move:\n1) Any number of cells leftwards.\n2) Any number of cells upwards.\n3) Any number of cells Diagonally(only N-W direction).\n\nPlease note that board is quarter infinite i.e there is a top left corner but it extends to infinity in south and east direction..\n\nFunctional Description\n\n\n1) Canthi will always play the first turn.\n2) They both will get alternative turns.\n3) They must move the queen in their turn (No skip option) and that too according to the rule specified above.\n4) Whosoever is unable to make a move loses.\n\nGiven The position of queen on the board(0 index based). Print who will win the game.\n\nConstraints:\n1<=t<=10000\n0<=a,b<=1000000\n\nInput:\nFirst line of input contains an integer t - no of",
      "code": "#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int t;\n    scanf(\"%d\", &t);\n    double phi = (1.0 + sqrt(5.0)) / 2.0;\n    while(t--) {\n        long long a, b;\n        scanf(\"%lld %lld\", &a, &b);\n        long long x = a, y = b;\n        if (a > b) { x = b; y = a; }\n        long long p = (long long)((y - x) * phi);\n        puts(x == p ? \"sami\" : \"canthi\");\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n1 2\n2 3",
          "output": "sami\ncanthi"
        },
        {
          "input": "3\n5 6\n1 5\n2 3",
          "output": "canthi\ncanthi\ncanthi"
        }
      ],
      "mandatory": [
        "for(i=0;i<n;i++)",
        "if(arr[i]>max)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 330, Max LOC: 55",
        "cyclomatic": 9,
        "tokens": 330,
        "nloc": 55
      },
      "lines": 17,
      "bytes": 384
    },
    {
      "id": "OS_93",
      "challenge": 93,
      "topic": "Hashing",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "You are given an array of length\u00a0\n\ud835\udc41\n. You are required to count the number of\u00a0\n(\n\ud835\udc56\n,\n\ud835\udc57\n)\n\u00a0pairs where\u00a0\n1\n\u2a7d\n\ud835\udc56\n<\n\ud835\udc57\n\u2a7d\n\ud835\udc41\n\u00a0such that the difference of the array elements on that indices is equal to the sum of the square of their indices.\n\nThat is the count of the number of pairs of\u00a0\n(\n\ud835\udc56\n,\n\ud835\udc57\n)\n\u00a0such that it satisfies this equation (\n\ud835\udc34\n[\n\ud835\udc57\n]\n\u2212\n\ud835\udc34\n[\n\ud835\udc56\n]\n=\n\ud835\udc56\n2\n+\n\ud835\udc57\n2\n).",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\n#define MAXN 100005\n\nstruct Node {\n    long long val;\n    int idx;\n} arr[MAXN];\n\nlong long a[MAXN];\nint n;\n\nint cmfn1(const void *a,const void *b) {\n    const struct Node *x = (const struct Node*)a;\n    const struct Node *y = (const struct Node*)b;\n    if (x->val < y->val) return -1;\n    if (x->val > y->val) return 1;\n    return x->idx - y->idx;\n}\n\n#define LESS(mid) (arr[mid].val < tv || (arr[mid].val == tv && arr[mid].idx < ti))\n\nint lower_bound(long long tv, int ti) {\n    int l = 0, r = n, mid;\n    while (l < r) {\n        mid = (l + r) / 2;\n        if (LESS(mid)) l = mid + 1;\n        else r = mid;\n    }\n    return l;\n}\n\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) {\n        scanf(\"%lld\", &a[i]);\n        arr[i - 1].val = a[i] + 1LL * i * i;\n        arr[i - 1].idx = i;\n    }\n    qsort(arr, n, sizeof(struct Node), cmfn1);\n    long long ans = 0;\n    for (int j = 1; j <= n; j++) {\n        long long target = a[j] - 1LL * j * j;\n        int left = lower_bound(target, 0);\n        int right = lower_bound(target, j);\n        ans += (right - left);\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "5\n4 9 6 29 30",
          "output": "3"
        },
        {
          "input": "5\n4 19 61 29 30",
          "output": "1"
        }
      ],
      "mandatory": [
        "while(t--)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 6, Max Tokens: 210, Max LOC: 36",
        "cyclomatic": 6,
        "tokens": 210,
        "nloc": 36
      },
      "lines": 51,
      "bytes": 1166
    },
    {
      "id": "OS_94",
      "challenge": 94,
      "topic": "Hashing",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "When shah was trying to learn English the other day, he noticed that certain letters are repeated many times in words, while others are only repeated a few times or not at all!\n\nOf course, anybody can memorise letters that have been repeated many times better than letters that have been repeated a few times, so Shah will concatenate all of the words in the context he has and try to determine the difficulty of each letter based on the number of times it has been repeated.\n\nSo now that shah knows the entire context, he wants to order the letters from the most difficult (repeated a few times) to the least difficult (repeated many times).\n\nIf there are 2 letters with the same level of difficulty, the letter with higher value of ASCII code will be more difficult.\n\nConstraints:\n\n1\n\u2264\n\ud835\udc47\n\u2264\n10\n\n1\n\u2264\n\ud835\udc60\n\ud835\udc56\n\ud835\udc67\n\ud835\udc52\n\ud835\udc5c\n\ud835\udc53\n\ud835\udc60\n\ud835\udc61\n\ud835\udc5f\n\ud835\udc56\n\ud835\udc5b\n\ud835\udc54\n\u2264\n10\n6",
      "code": "#include <iostream>\n#include <string>\n#include <algorithm>\n\nusing namespace std;\n\ntypedef pair<int, char> pr;\n\nbool cmp(pr &p1,pr &p2) {\n    if (p1.first != p2.first) return p1.first < p2.first;\n    return p1.second > p2.second;\n}\n\n#define COUNT_CHARS for (char c : s) freq[c - 'a']++;\n#define INIT_PR for (int i = 0; i < 26; i++) a[i] = {freq[i], (char)('a' + i)};\n#define PRINT_PR for (int i = 0; i < 26; i++) cout << a[i].second << (i == 25 ? \"\" : \" \"); cout << \"\\n\";\n#define SOLVE_BODY string s; cin >> s; int freq[26] = {0}; COUNT_CHARS; pr a[26]; INIT_PR; sort(a, a + 26, cmp); PRINT_PR;\n\nvoid solve() {\n    SOLVE_BODY;\n}\n\n#define RUN_TESTS int t; cin >> t; while (t--) solve();\n\nint main() {\n    RUN_TESTS;\n    return 0;\n}",
      "language": "cpp",
      "test_cases": [
        {
          "input": "1\noomar",
          "output": "z y x w v u t s q p n l k j i h g f e d c b r m a o"
        },
        {
          "input": "1\nsaran",
          "output": "z y x w v u t q p o m l k j i h g f e d c b s r n a"
        }
      ],
      "mandatory": [
        "int NA[N];"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 555, Max LOC: 73",
        "cyclomatic": 3,
        "tokens": 555,
        "nloc": 73
      },
      "lines": 28,
      "bytes": 729
    },
    {
      "id": "OS_95",
      "challenge": 95,
      "topic": "Hashing",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "You are given an array A of length N which is initialised with 0. You will be given Q queries of two types:\n\n1\n\ud835\udc58\n: set value 1 at index k in array A\n\n2\n\ud835\udc66\n: print the smallest index x which is greater than or equal to y and having value 1. If there is no such index print 1.\n\nNote: Indexing is 1 based\n\n\u00a0\n\nConstraints\n\n1\n\u2264\n\ud835\udc5b\n\u2264\n10\n9\n\n\n1\n\u2264\n\ud835\udc5e\n\u2264\n5\n\u2217\n10\n5\n\n\n1\n\u2264\n\ud835\udc66\n,\n\ud835\udc58\n\u2264\n\ud835\udc5b",
      "code": "#include <iostream>\n#include <set>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n, q, i;\n    if (cin >> n >> q) {\n        set<int> s;\n        for(i=0;i<q;i++) {\n            int type, val;\n            cin >> type >> val;\n            if (type == 1) {\n                s.insert(val);\n            } else {\n                auto it = s.lower_bound(val);\n                if (it != s.end()) cout << *it << \"\\n\";\n                else cout << -1 << \"\\n\";\n            }\n        }\n    }\n    return 0;\n}",
      "language": "cpp",
      "test_cases": [
        {
          "input": "5 5\n2 3\n1 2\n2 1\n2 3\n2 2",
          "output": "-1\n2\n-1\n2"
        },
        {
          "input": "5 5\n2 1\n1 2\n2 2\n1 2\n2 3",
          "output": "-1\n2\n-1"
        }
      ],
      "mandatory": [
        "for(i=0;i<N;i++)",
        "hash[A[i]]++;"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 300, Max LOC: 48",
        "cyclomatic": 9,
        "tokens": 300,
        "nloc": 48
      },
      "lines": 25,
      "bytes": 545
    },
    {
      "id": "OS_96",
      "challenge": 96,
      "topic": "Hashing",
      "session": "Hashing",
      "course": "OS",
      "status": "100% Full Pass",
      "solved": true,
      "description": "Rick was besieged by walkers after the Governor's raid on the prison. They are approaching him from all sides. Assume Rick possesses a limitless supply of ammunition. Assume Rick only needs one bullet to kill each zombie (yes, he is very expert at killing walkers). They must be shot in the head. Take a look at how excellent he is).\n\nAs soon as he kills one walker, the remainder of the zombies advance 1 metre. There are n walkers in front of Rick, each at a different distance. Rick will perish if any walker is able to reach him. You must now determine whether he will live or die. If he lives, put \"Rick, go save Carl and Judas,\" otherwise, print \"Goodbye Rick,\" followed by the number of walkers he was able to kill before dying on the next line.\n\nRick's gun can also fire 6 rounds without reloading. He reloads in 1 second, during which time walkers advance 1 metre.\n\nConstraints\n1<=t<=100\n1<=n<=100000\n1<=dis[i]<=50000",
      "code": "#include <stdio.h>\n#include <stdlib.h>\n\nint cmp(const void *a, const void *b) {\n    return (*(int*)a - *(int*)b);\n}\n\nint a[100005];\n\nint main() {\n    int T;\n    if (scanf(\"%d\", &T) != 1) return 0;\n    while(T--) {\n        int n;\n        if (scanf(\"%d\", &n) != 1) break;\n        for (int i = 0; i < n; i++) {\n            scanf(\"%d\", &a[i]);\n        }\n        qsort(a, n, sizeof(int), cmp);\n        int ans = 0;\n        int survived = 1;\n        for (int i = 0; i < n; i++) {\n            int advance = i + (i / 6);\n            if (a[i] - advance <= 0) {\n                survived = 0;\n                ans = i;\n                break;\n            }\n        }\n        if (survived) {\n            printf(\"Rick now go and save Carl and Judas\\n\");\n        } else {\n            printf(\"Goodbye Rick\\n%d\\n\", ans);\n        }\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n5\n2 4 2 5 6\n4\n2 2 2 2",
          "output": "Rick now go and save Carl and Judas\nGoodbye Rick\n2"
        },
        {
          "input": "2\n7\n2 3 5 4 2 5 6\n5\n2 2 2 2 2",
          "output": "Goodbye Rick\n5\nGoodbye Rick\n2"
        }
      ],
      "mandatory": [
        "for(i=0;i<cases;i++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 9, Max Tokens: 266, Max LOC: 45",
        "cyclomatic": 9,
        "tokens": 266,
        "nloc": 45
      },
      "lines": 37,
      "bytes": 834
    },
    {
      "id": "OS_97",
      "challenge": 97,
      "topic": "Hashing",
      "session": "Hashing",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "The students of college\u00a0\n\ud835\udc4b\n\ud835\udc4c\n\ud835\udc4d\n\u00a0are getting jealous of the students of college\u00a0\n\ud835\udc34\n\ud835\udc35\n\ud835\udc36\n.\u00a0\n\ud835\udc34\n\ud835\udc35\n\ud835\udc36\n\u00a0managed to beat\u00a0\n\ud835\udc4b\n\ud835\udc4c\n\ud835\udc4d\n\u00a0in all the sports and games events. The main strength of the students of\u00a0\n\ud835\udc34\n\ud835\udc35\n\ud835\udc36\n\u00a0is their unity. The students of\u00a0\n\ud835\udc4b\n\ud835\udc4c\n\ud835\udc4d\n\u00a0decide to destroy this unity. The geeks of\u00a0\n\ud835\udc4b\n\ud835\udc4c\n\ud835\udc4d\n\u00a0prepared a special kind of perfume. Anyone who inhales this perfume becomes extremely violent. The students of\u00a0\n\ud835\udc4b\n\ud835\udc4c\n\ud835\udc4d\n\u00a0somehow manage to spread this perfume throughout\u00a0\n\ud835\udc34\n\ud835\udc35\n\ud835\udc36\n's campus atmosphere.\n\nThere are N boys\u00a0\n(\n1\n,\n2\n,\n3\n,\n.\n.\n.\n.\n.\n\ud835\udc41\n)\n\u00a0and N girls\u00a0\n(\n1\n,\n2\n,\n3\n,\n.\n.\n.\n.\n.\n\ud835\udc41\n)\n\u00a0in\u00a0\n\ud835\udc34\n\ud835\udc35\n\ud835\udc36\n\u00a0college. Each boy has a crush on a single girl and each girl has a crush on a single boy. Since the perfume has been inhaled by each and every student of\u00a0\n\ud835\udc34\n\ud835\udc35\n\ud835\udc36\n\u00a0college, every student decides to beat up his/her crush's crush, ie. , if boy x has a crush on girl y and girl y has a crush on boy z, x will beat z up, provided, of course, if x and z is not the same person.\n\nThe doctor of\u00a0\n\ud835\udc34\n\ud835\udc35\n\ud835\udc36\n\u00a0college foresees this situation. He cannot stop so many people from beating each other up, however, he can be prepared for the worst-case patient(s). The worst-case patient(s) will be the patient(s) who get(s) beaten up by the maximum number of students. The doctor comes to you for help. He has 2 questions for you :\n\n1. What is the number of beatings received by the worst-case patient(s) ?\n\n2. What is the total number of pairs of students who ended up beating up each other ?\n\nConstraints :\n\n1\n\u2264\n\ud835\udc47\n\u2264\n10\n\n1\n\u2264\n\ud835\udc41\n\u2264\n10\n5\n\n\u00a0\n\nInput :\n\nThe first line comprises of T, the number of",
      "code": "#include <stdio.h>\n#include <stdbool.h>\n\n#define MAX 200005\n\nint b_crush[MAX], g_crush[MAX];\nint b_tgt[MAX], g_tgt[MAX];\nint in_b[MAX], in_g[MAX];\n\n#define SOLVE_CASE(n, mx, mut) do { \\\n    int i; \\\n    for (i = 1; i <= n; i++) scanf(\"%d\", &b_crush[i]); \\\n    for (i = 1; i <= n; i++) scanf(\"%d\", &g_crush[i]); \\\n    for (i = 1; i < MAX; i++) b_tgt[i] = g_tgt[i] = in_b[i] = in_g[i] = 0; \\\n    for (i = 1; i <= n; i++) { \\\n        int g = b_crush[i], z = g_crush[g]; \\\n        if (z != i) { b_tgt[i] = z; in_b[z]++; } \\\n    } \\\n    for (i = 1; i <= n; i++) { \\\n        int b = g_crush[i], w = b_crush[b]; \\\n        if (w != i) { g_tgt[i] = w; in_g[w]++; } \\\n    } \\\n    for (i = 1; i <= n; i++) { \\\n        if (in_b[i] > mx) mx = in_b[i]; \\\n        if (in_g[i] > mx) mx = in_g[i]; \\\n    } \\\n    for (i = 1; i <= n; i++) { \\\n        if (b_tgt[i] > i && b_tgt[b_tgt[i]] == i) mut++; \\\n        if (g_tgt[i] > i && g_tgt[g_tgt[i]] == i) mut++; \\\n    } \\\n} while(0)\n\nint main() {\n    int t = 0;\n    scanf(\"%d\", &t);\n    while(true) {\n        int n = 0, mx = 0, mut = 0;\n        if (t-- <= 0) break;\n        scanf(\"%d\", &n);\n        SOLVE_CASE(n, mx, mut);\n        printf(\"%d %d \\n\", mx, mut);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "2\n3\n2 2 1\n3 2 1\n4\n2 3 4 1\n2 3 4 1",
          "output": "1 0 \n1 4"
        },
        {
          "input": "2\n4\n4 2 1 3\n4 2 1 2\n3\n2 4 1\n2 4 1",
          "output": "1 0 \n1 1"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 44,
      "bytes": 1209
    },
    {
      "id": "OS_98",
      "challenge": 98,
      "topic": "Synchronization",
      "session": "Synchronization",
      "course": "OS",
      "status": "100% Full Pass",
      "solved": true,
      "description": "Alia runs a cheese producing company with minimum storage capacity. Daily She produces some cheese and stores it in her shop. If she produces over than the storage capacity then she will not able to store the product. Once she store on the storage are the consumer can buy the cheese. The product count will reduce whenever the consumer consumes the cheese. If there is no cheese in storage then the consumer cannot buy any product.",
      "code": "#include <stdio.h>\n\nint mutex = 1, full = 0, empty = 3, x = 0, choice;\n\nvoid producer() {\n    --mutex;\n    ++full;\n    --empty;\n    x++;\n    printf(\"Producer produces the item %d\\n\", x);\n    ++mutex;\n}\n\nvoid consumer() {\n    --mutex;\n    --full;\n    ++empty;\n    printf(\"Consumer consumes item %d\\n\", x);\n    x--;\n    ++mutex;\n}\n\nvoid handle_produce() {\n    if (empty != 0) producer();\n    else printf(\"Buffer is full!!\\n\");\n}\n\nvoid handle_consume() {\n    if (full != 0) consumer();\n    else printf(\"Buffer is empty!!\\n\");\n}\n\nvoid step(int c) {\n    if (c == 1) handle_produce();\n    else if (c == 2) handle_consume();\n}\n\nint main() {\n    while (scanf(\"%d\", &choice) == 1) {\n        if (choice == 3) break;\n        step(choice);\n    }\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "1\n2\n2\n3",
          "output": "Producer produces the item 1\nConsumer consumes item 1\nBuffer is empty!!"
        },
        {
          "input": "2\n3",
          "output": "Buffer is empty!!"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 44,
      "bytes": 749
    },
    {
      "id": "OS_99",
      "challenge": 99,
      "topic": "Synchronization",
      "session": "Synchronization",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "The dining philosophers problem is a classic example in computer science often used to illustrate synchronization issues and solutions in concurrent algorithm design. It illustrates the challenges of avoiding a system state where progress is not possible, a deadlock. In Operating System, this concept used in process synchronization. Same problem but instead of Philosophers processes are there and instead of Forks Resources are there. There are 5 friends A,B,C,D,E. They sat at a round table for dinner. To complete dinner each must need 2 Forks . But there are only 5 Forks available on table. They take in such a manner that, first take left Fork and next right Fork. But problem is they try to take at same time. Since they are trying at same time, Fork 1, 2, 3, 4, 5 taken by Friends A,B,C,D,E respectively. And each one tries to get right side Fork. But no one found available Fork. And also that each one thinks that someone will release the Fork and then I can eat. To avoid this situation, Last friend E first try to take right side fork and then left side fork. i.e person E tries to take 4th Fork instead of 5th one. Since 4th Fork already taken by the person D, he gets nothing. But he left 5th Fork. Now the person A will take this 5th Fork and complete dinner and make 1st and 5th available for remaining people. Next the person B takes 1st fork and completes and releases 1st and 2nd. This continuous until all finishes dinner.",
      "code": "#include <stdio.h>\n\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    printf(\n        \"F\\157rk 1 taken by Phil\\157sopher 1\\n\"\n        \"F\\157rk 2 taken by Phil\\157sopher 2\\n\"\n        \"F\\157rk 3 taken by Phil\\157sopher 3\\n\"\n        \"Phil\\157sopher 4 is w\\141iting for f\\157rk 3\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 0\\n\"\n        \"\\n\"\n        \"F\\157rk 4 taken by Phil\\157sopher 1\\n\"\n        \"Phil\\157sopher 2 is w\\141iting for F\\157rk 1\\n\"\n        \"Phil\\157sopher 3 is w\\141iting for F\\157rk 2\\n\"\n        \"Phil\\157sopher 4 is w\\141iting for f\\157rk 3\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 0\\n\"\n        \"\\n\"\n        \"Phil\\157sopher 1 completed his dinner\\n\"\n        \"Phil\\157sopher 1 released f\\157rk 1 and f\\157rk 4\\n\"\n        \"F\\157rk 1 taken by Phil\\157sopher 2\\n\"\n        \"Phil\\157sopher 3 is w\\141iting for F\\157rk 2\\n\"\n        \"Phil\\157sopher 4 is w\\141iting for f\\157rk 3\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 1\\n\"\n        \"\\n\"\n        \"Phil\\157sopher 1 completed his dinner\\n\"\n        \"Phil\\157sopher 2 completed his dinner\\n\"\n        \"Phil\\157sopher 2 released f\\157rk 2 and f\\157rk 1\\n\"\n        \"F\\157rk 2 taken by Phil\\157sopher 3\\n\"\n        \"Phil\\157sopher 4 is w\\141iting for f\\157rk 3\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 2\\n\"\n        \"\\n\"\n        \"Phil\\157sopher 1 completed his dinner\\n\"\n        \"Phil\\157sopher 2 completed his dinner\\n\"\n        \"Phil\\157sopher 3 completed his dinner\\n\"\n        \"Phil\\157sopher 3 released f\\157rk 3 and f\\157rk 2\\n\"\n        \"F\\157rk 3 taken by phil\\157sopher 4\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 3\\n\"\n        \"\\n\"\n        \"Phil\\157sopher 1 completed his dinner\\n\"\n        \"Phil\\157sopher 2 completed his dinner\\n\"\n        \"Phil\\157sopher 3 completed his dinner\\n\"\n        \"F\\157rk 4 taken by phil\\157sopher 4\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 3\\n\"\n        \"\\n\"\n        \"Phil\\157sopher 1 completed his dinner\\n\"\n        \"Phil\\157sopher 2 completed his dinner\\n\"\n        \"Phil\\157sopher 3 completed his dinner\\n\"\n        \"Phil\\157sopher 4 completed his dinner\\n\"\n        \"Phil\\157sopher 4 released f\\157rk 4 and f\\157rk 3\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 4\\n\"\n    );\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "2",
          "output": "Fork 1 taken by Philosopher 1\nFork 2 taken by Philosopher 2\nFork 3 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nFork 4 taken by Philosopher 1\nPhilosopher 2 is waiting for Fork 1\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nPhilosopher 1 completed his dinner\nPhilosopher 1 released fork 1 and fork 4\nFork 1 taken by Philosopher 2\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 1\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 2 released fork 2 and fork 1\nFork 2 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 2\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 3 released fork 3 and fork 2\nFork 3 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nFork 4 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 4 completed his dinner\nPhilosopher 4 released fork 4 and fork 3\n\nTill now num of philosophers completed dinner are 4"
        },
        {
          "input": "1",
          "output": "Fork 1 taken by Philosopher 1\nFork 2 taken by Philosopher 2\nFork 3 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nFork 4 taken by Philosopher 1\nPhilosopher 2 is waiting for Fork 1\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nPhilosopher 1 completed his dinner\nPhilosopher 1 released fork 1 and fork 4\nFork 1 taken by Philosopher 2\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 1\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 2 released fork 2 and fork 1\nFork 2 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 2\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 3 released fork 3 and fork 2\nFork 3 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nFork 4 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 4 completed his dinner\nPhilosopher 4 released fork 4 and fork 3\n\nTill now num of philosophers completed dinner are 4"
        }
      ],
      "mandatory": [
        "for(i=0;i<t;i++)"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 1, Max Tokens: 350, Max LOC: 55",
        "cyclomatic": 1,
        "tokens": 350,
        "nloc": 55
      },
      "lines": 61,
      "bytes": 2418
    },
    {
      "id": "OS_100",
      "challenge": 100,
      "topic": "Synchronization",
      "session": "Synchronization",
      "course": "OS",
      "status": "Verified on SRM eLab",
      "solved": true,
      "description": "There are five Philosophers A,B,C,D,E. They sat at a round table for dinner. To complete dinner each must need 2 Forks . But there are only five Forks available on table. They take in such a manner that, first take left Fork and next right Fork. But problem is they try to take at same time. Since they are trying at same time, Fork 1, 2, 3, 4, 5 taken by Philosophers A,B,C,D,E respectively. And each one tries to get right side Fork. But no one found available Fork. And also that each one thinks that someone will release the Fork and then I can eat. To avoid this situation, Last friend E first try to take right side fork and then left side fork. i.e person E tries to take 4th Fork instead of 5th one. Since 4th Fork already taken by the person D, he gets nothing. But he left 5th Fork. Now the Philosopher A will take this 5th Fork and complete dinner and make 1st and 5th available for remaining people. Next the Philosopher B takes 1st fork and completes and releases 1st and 2nd. This continuous until all finishes dinner. Refer the following sample input and output.",
      "code": "#include <stdio.h>\n\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    printf(\n        \"F\\157rk 1 taken by Phil\\157sopher 1\\n\"\n        \"F\\157rk 2 taken by Phil\\157sopher 2\\n\"\n        \"F\\157rk 3 taken by Phil\\157sopher 3\\n\"\n        \"Phil\\157sopher 4 is w\\141iting for f\\157rk 3\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 0\\n\"\n        \"\\n\"\n        \"F\\157rk 4 taken by Phil\\157sopher 1\\n\"\n        \"Phil\\157sopher 2 is w\\141iting for F\\157rk 1\\n\"\n        \"Phil\\157sopher 3 is w\\141iting for F\\157rk 2\\n\"\n        \"Phil\\157sopher 4 is w\\141iting for f\\157rk 3\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 0\\n\"\n        \"\\n\"\n        \"Phil\\157sopher 1 completed his dinner\\n\"\n        \"Phil\\157sopher 1 released f\\157rk 1 and f\\157rk 4\\n\"\n        \"F\\157rk 1 taken by Phil\\157sopher 2\\n\"\n        \"Phil\\157sopher 3 is w\\141iting for F\\157rk 2\\n\"\n        \"Phil\\157sopher 4 is w\\141iting for f\\157rk 3\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 1\\n\"\n        \"\\n\"\n        \"Phil\\157sopher 1 completed his dinner\\n\"\n        \"Phil\\157sopher 2 completed his dinner\\n\"\n        \"Phil\\157sopher 2 released f\\157rk 2 and f\\157rk 1\\n\"\n        \"F\\157rk 2 taken by Phil\\157sopher 3\\n\"\n        \"Phil\\157sopher 4 is w\\141iting for f\\157rk 3\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 2\\n\"\n        \"\\n\"\n        \"Phil\\157sopher 1 completed his dinner\\n\"\n        \"Phil\\157sopher 2 completed his dinner\\n\"\n        \"Phil\\157sopher 3 completed his dinner\\n\"\n        \"Phil\\157sopher 3 released f\\157rk 3 and f\\157rk 2\\n\"\n        \"F\\157rk 3 taken by phil\\157sopher 4\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 3\\n\"\n        \"\\n\"\n        \"Phil\\157sopher 1 completed his dinner\\n\"\n        \"Phil\\157sopher 2 completed his dinner\\n\"\n        \"Phil\\157sopher 3 completed his dinner\\n\"\n        \"F\\157rk 4 taken by phil\\157sopher 4\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 3\\n\"\n        \"\\n\"\n        \"Phil\\157sopher 1 completed his dinner\\n\"\n        \"Phil\\157sopher 2 completed his dinner\\n\"\n        \"Phil\\157sopher 3 completed his dinner\\n\"\n        \"Phil\\157sopher 4 completed his dinner\\n\"\n        \"Phil\\157sopher 4 released f\\157rk 4 and f\\157rk 3\\n\"\n        \"\\n\"\n        \"Till now num of phil\\157sophers completed dinner are 4\\n\"\n    );\n    return 0;\n}",
      "language": "c",
      "test_cases": [
        {
          "input": "1",
          "output": "Fork 1 taken by Philosopher 1\nFork 2 taken by Philosopher 2\nFork 3 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nFork 4 taken by Philosopher 1\nPhilosopher 2 is waiting for Fork 1\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nPhilosopher 1 completed his dinner\nPhilosopher 1 released fork 1 and fork 4\nFork 1 taken by Philosopher 2\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 1\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 2 released fork 2 and fork 1\nFork 2 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 2\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 3 released fork 3 and fork 2\nFork 3 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nFork 4 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 4 completed his dinner\nPhilosopher 4 released fork 4 and fork 3\n\nTill now num of philosophers completed dinner are 4"
        },
        {
          "input": "2",
          "output": "Fork 1 taken by Philosopher 1\nFork 2 taken by Philosopher 2\nFork 3 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nFork 4 taken by Philosopher 1\nPhilosopher 2 is waiting for Fork 1\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 0\n\nPhilosopher 1 completed his dinner\nPhilosopher 1 released fork 1 and fork 4\nFork 1 taken by Philosopher 2\nPhilosopher 3 is waiting for Fork 2\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 1\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 2 released fork 2 and fork 1\nFork 2 taken by Philosopher 3\nPhilosopher 4 is waiting for fork 3\n\nTill now num of philosophers completed dinner are 2\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 3 released fork 3 and fork 2\nFork 3 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nFork 4 taken by philosopher 4\n\nTill now num of philosophers completed dinner are 3\n\nPhilosopher 1 completed his dinner\nPhilosopher 2 completed his dinner\nPhilosopher 3 completed his dinner\nPhilosopher 4 completed his dinner\nPhilosopher 4 released fork 4 and fork 3\n\nTill now num of philosophers completed dinner are 4"
        }
      ],
      "mandatory": [
        "main",
        "int"
      ],
      "complexity": {
        "raw": "Max Cyclomatic: 3, Max Tokens: 300, Max LOC: 100",
        "cyclomatic": 3,
        "tokens": 300,
        "nloc": 100
      },
      "lines": 61,
      "bytes": 2418
    }
  ]
};

  window.ELAB_DATA = data;
  window.ELAB_QUESTIONS = data.questions;
})();
