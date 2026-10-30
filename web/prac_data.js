// Operating Systems Lab Practical Experiments Dataset (15 Experiments + 2 VAP)
window.PRAC_EXPERIMENTS = [
  {
    "id": "PRAC_1",
    "challenge": 1,
    "level": 1,
    "level_challenge": 1,
    "title": "Experiment 1: Process Creation Using fork()",
    "topic": "PROCESS CREATION",
    "session": "Process Creation",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Experiment 1: Process Creation Using fork()\nImplementation of fork.c for Process Creation.",
    "code": "#include <stdio.h>\n#include <unistd.h>\n\nint main()\n{\n    int a = 5, b = 10, pid;\n\n    printf(\"Before fork a=%d b=%d \\n\", a, b);\n    pid = fork();\n\n    if (pid == 0)\n    {\n\n        a = a + 1;\n        b = b + 1;\n        printf(\"In child a=%d b=%d \\n\", a, b);\n    }\n    else\n    {\n        sleep(1);\n        a = a - 1;\n        b = b - 1;\n        printf(\"In Parent a=%d b=%d \\n\", a, b);\n    }\n\n    return 0;\n}",
    "language": "c",
    "filename": "fork.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Before fork a=5 b=10 \nIn child a=6 b=11 \nIn Parent a=4 b=9"
      }
    ],
    "mandatory": [
      "main",
      "fork"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 27,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_2",
    "challenge": 2,
    "level": 1,
    "level_challenge": 2,
    "title": "Experiment 2 (Prog 1): Fork SRMIST Print Count",
    "topic": "PROCESS CREATION",
    "session": "Process Creation",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Calculate the number of times the text \"SRMIST\" is printed with three consecutive `fork()` calls. (Each fork doubles the number of processes: $2^3 = 8$).",
    "code": "#include <stdio.h>\n#include <unistd.h>\n\nint main()\n{\n    fork();\n    fork();\n    fork();\n    printf(\"SRMIST\\n\");\n    return 0;\n}",
    "language": "c",
    "filename": "fork_srmist.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "SRMIST\nSRMIST\nSRMIST\nSRMIST\nSRMIST\nSRMIST\nSRMIST\nSRMIST"
      }
    ],
    "mandatory": [
      "main",
      "fork_srmist"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 11,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_3",
    "challenge": 3,
    "level": 1,
    "level_challenge": 3,
    "title": "Experiment 2 (Prog 2): Child Process Tree Evaluation",
    "topic": "PROCESS CREATION",
    "session": "Process Creation",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Calculate the number of times the text \"SRMIST\" is printed with three consecutive `fork()` calls. (Each fork doubles the number of processes: $2^3 = 8$).",
    "code": "#include <stdio.h>\n#include <unistd.h>\n\nint main()\n{\n    fork();\n    fork() && fork() || fork();\n    fork();\n    printf(\"Yes \");\n    return 0;\n}",
    "language": "c",
    "filename": "fork_yes.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Yes Yes Yes Yes Yes Yes Yes Yes Yes Yes Yes Yes\nYes Yes Yes Yes Yes Yes Yes"
      }
    ],
    "mandatory": [
      "main",
      "fork_yes"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 11,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_4",
    "challenge": 4,
    "level": 1,
    "level_challenge": 4,
    "title": "Experiment 2 (Prog 3): Process IDs: getpid() & getppid()",
    "topic": "PROCESS MANAGEMENT",
    "session": "Process System Calls",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Determine how many child processes are created and how many times \"Yes \" is printed for short-circuit process branching: `fork(); fork() && fork() || fork(); fork();`.",
    "code": "#include <stdio.h>\n#include <unistd.h>\n#include <stdlib.h>\n\nint main()\n{\n    int pid;\n    pid = fork();\n\n    if (pid == -1)\n    {\n        perror(\"fork failed\");\n        exit(0);\n    }\n\n    if (pid == 0)\n    {\n        printf(\"\\nChild process is under execution\");\n        printf(\"\\nProcess id of the child process is %d\", getpid());\n        printf(\"\\nProcess id of the parent process is %d\", \ngetppid());\n    }\n    else\n    {\n        printf(\"\\nParent process is under execution\");\n        printf(\"\\nProcess id of the parent process is %d\", getpid());\n        printf(\"\\nProcess id of the parent of parent is %d\", \ngetppid());\n    }\n\n    return 0;\n}",
    "language": "c",
    "filename": "process_ids.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Parent process is under execution\nProcess id of the parent process is 1283\nProcess id of the parent of parent is 1282\nChild process is under execution\nProcess id of the child process is 1284\nProcess id of the parent process is 1283"
      }
    ],
    "mandatory": [
      "main",
      "process_ids"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 32,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_5",
    "challenge": 5,
    "level": 1,
    "level_challenge": 5,
    "title": "Experiment 3: Multithreading in C++ (3 Callables)",
    "topic": "MULTITHREADING",
    "session": "Multithreading",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Write a program of multithreading.",
    "code": "// Multithreading\n// C++ program to demonstrate multithreading using three different callables.\n#include <iostream>\n#include <thread>\nusing namespace std;\n\n// A dummy function\nvoid foo(int Z)\n{\n    for (int i = 0; i < Z; i++)\n    {\n        cout << \"Thread using function\"\n             << \" pointer as callable\\n\";\n    }\n}\n\n// A callable object\nclass thread_obj\n{\npublic:\n    void operator()(int x)\n    {\n        for (int i = 0; i < x; i++)\n        {\n            cout << \"Thread using function\"\n                 << \" object as callable\\n\";\n        }\n    }\n};\n\n// Driver code\nint main()\n{\n    cout << \"Threads 1 and 2 and 3 \"\n         << \"operating independently\" << endl;\n\n    // This thread is launched by using a function pointer as callable\n    thread th1(foo, 3);\n\n\n    // This thread is launched by using a function object as callable\n    thread th2(thread_obj(), 3);\n\n    // Define a Lambda Expression\n    auto f = [](int x)\n    {\n        for (int i = 0; i < x; i++)\n        {\n            cout << \"Thread using lambda\"\n                 << \" expression as callable\\n\";\n        }\n    };\n\n    // This thread is launched by using lambda expression as callable\n    thread th3(f, 3);\n\n    // Wait for the threads to finish\n    th1.join();\n    th2.join();\n    th3.join();\n\n    return 0;\n}",
    "language": "cpp",
    "filename": "multithreading.cpp",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Execution completed successfully."
      }
    ],
    "mandatory": [
      "main",
      "multithreading"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 63,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_6",
    "challenge": 6,
    "level": 1,
    "level_challenge": 6,
    "title": "Experiment 4 (Prog 1): Mutual Exclusion: Unisex Restroom Semaphore",
    "topic": "SEMAPHORE & CONCURRENCY",
    "session": "Mutual Exclusion",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Implement a synchronization mechanism for a shared unisex restroom with:\n- Maximum capacity of 4 persons.\n- Mutual exclusion between men and women (either men or women can use it at a given time).\n- Fair queue scheduling using custom counting semaphores and condition variables.",
    "code": "//USING SEMAPHORE\n#include <iostream>\n#include <thread>\n#include <vector>\n#include <random>\n#include <chrono>\n#include <mutex>\n#include <condition_variable>\n\nusing namespace std;\n\nconst int Delayx = 60;\nconst int max_visits_per_person = 2; // Number of times each person visits the restroom\nint restroom = 0;\nint Menwaiting = 0;\nint Womenwaiting = 0;\n\nclass Semaphore {\n    private:\n    mutex mtx;\n    condition_variable cv;\n    int count;\n\n    public:\n    Semaphore(int count_ = 0) : count(count_) {}\n\n    void acquire() {\n        unique_lock<mutex> lock(mtx);\n        cv.wait(lock, [this]() { return count > 0; });\n        --count;\n    }\n\n    void release() {\n        unique_lock<mutex> lock(mtx);\n        ++count;\n        cv.notify_one();\n    }\n};\n\n// Custom semaphores\n\nSemaphore max_capacity(4); // Restroom capacity of 4\nSemaphore woman(1);\nSemaphore man(1);\nmutex mtx; // Mutex to protect shared resources\nmutex restroomcount_mtx;\n\nstd::random_device rd;\nstd::mt19937 gen(rd()); // Random number generator\nstd::uniform_int_distribution<> dis(1, Delayx);\n\nvoid Delay(void)\n{\n    int DelayTime = dis(gen);\n    this_thread::sleep_for(chrono::milliseconds(DelayTime * 10)); // Simulate some delay\n}\n\nvoid Woman(int id)\n{\n    for (int visit = 0; visit < max_visits_per_person; ++visit)\n    {\n        {\n            lock_guard<mutex> lock(mtx);\n            Womenwaiting++;\n        }\n\n        woman.acquire();\n        max_capacity.acquire();\n\n        {\n            lock_guard<mutex> lock(restroomcount_mtx);\n            restroom++;\n            cout << \"Woman \" << id << \" has entered the Restroom\" << \nendl;\n            cout << \"People in the Restroom: \" << restroom << endl << \nendl;\n        }\n\n        {\n            lock_guard<mutex> lock(mtx);\n            Womenwaiting--;\n        }\n\n        Delay();\n\n        {\n            lock_guard<mutex> lock(restroomcount_mtx);\n\n            restroom--;\n            cout << \"Woman \" << id << \" has exited the Restroom\" << \nendl;\n            cout << \"People in the Restroom: \" << restroom << endl << \nendl;\n        }\n\n        max_capacity.release();\n\n        if (Menwaiting > Womenwaiting)\n        {\n            man.release();\n        }\n        else\n        {\n            woman.release();\n        }\n    }\n}\n\nvoid Man(int id)\n{\n    for (int visit = 0; visit < max_visits_per_person; ++visit)\n    {\n        {\n            lock_guard<mutex> lock(mtx);\n            Menwaiting++;\n        }\n\n        man.acquire();\n        max_capacity.acquire();\n\n        {\n            lock_guard<mutex> lock(restroomcount_mtx);\n            restroom++;\n            cout << \"Man \" << id << \" has entered the Restroom\" << \nendl;\n            cout << \"People in the Restroom: \" << restroom << endl << \nendl;\n        }\n\n        {\n            lock_guard<mutex> lock(mtx);\n            Menwaiting--;\n        }\n\n        Delay();\n\n\n        {\n            lock_guard<mutex> lock(restroomcount_mtx);\n            restroom--;\n            cout << \"Man \" << id << \" has exited the Restroom\" << \nendl;\n            cout << \"People in the Restroom: \" << restroom << endl << \nendl;\n        }\n\n        max_capacity.release();\n\n        if (Womenwaiting > Menwaiting)\n        {\n            woman.release();\n        }\n        else\n        {\n            man.release();\n        }\n    }\n}\n\nint main()\n{\n    vector<thread> threads;\n\n    // Launch 2 women and 2 men, with unique IDs\n    for (int i = 0; i < 2; ++i)\n    {\n        threads.push_back(thread(Woman, i + 1)); // Women threads with unique IDs\n        threads.push_back(thread(Man, i + 1));   // Men threads with unique IDs\n    }\n\n    // Join the threads (they will stop after the set number of visits)\n    for (auto& t : threads)\n    {\n        t.join();\n    }\n\n    cout << \"All threads have finished, program terminating.\" << \nendl;\n    return 0;\n}",
    "language": "cpp",
    "filename": "semaphore.cpp",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Woman 1 has entered the Restroom\nPeople in the Restroom: 1\n\nMan 1 has entered the Restroom\nPeople in the Restroom: 2\n\nMan 1 has exited the Restroom\nPeople in the Restroom: 1\n\nMan 2 has entered the Restroom\nPeople in the Restroom: 2\n\nWoman 1 has exited the Restroom\nPeople in the Restroom: 1\n\nWoman 2 has entered the Restroom\nPeople in the Restroom: 2\n\nMan 2 has exited the Restroom\nPeople in the Restroom: 1\n\nWoman 2 has exited the Restroom\nPeople in the Restroom: 0\n\nAll threads have finished, program terminating.\n\n...Program finished with exit code 0"
      }
    ],
    "mandatory": [
      "main",
      "semaphore"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 180,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_7",
    "challenge": 7,
    "level": 1,
    "level_challenge": 7,
    "title": "Experiment 4 (Prog 2): Mutual Exclusion: Shared Resource Monitor",
    "topic": "MONITORS & IPC",
    "session": "Mutual Exclusion",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Implement a Monitor construct encapsulating a shared resource, a mutex (`std::mutex`), and a condition variable (`std::condition_variable`) allowing safe concurrent producer-consumer access.",
    "code": "// USING MONITOR\n#include <iostream>\n#include <mutex>\n#include <condition_variable>\n#include <thread>\n\nclass NinjaMonitor {\n    public:\n    // Constructor to initialize the shared resource and synchronization variables\n    NinjaMonitor() : SharedResource(0) {}\n\n    //Method to access the shared resource\n    int AccessSharedResource() {\n        std::unique_lock<std::mutex> lock(mtx_);\n        while (SharedResource == 0) {\n            CondVar.wait(lock);\n        }\n        int value = SharedResource;\n        SharedResource = 0;\n        return value;\n    }\n\n    //Method to update the shared resource\n    void UpdateSharedResource(int new_value) {\n        std::unique_lock<std::mutex> lock(mtx_);\n        SharedResource = new_value;\n\n        CondVar.notify_one();\n    }\n\n    private:\n    int SharedResource;\n    std::mutex mtx_;\n    std::condition_variable CondVar;\n};\n\n//Function that uses the monitor to access the shared resource\nvoid NinjaThread(NinjaMonitor& monitor) {\n    int value = monitor.AccessSharedResource();\n    std::cout << \"Ninja thread read shared resource: \" << value << \nstd::endl;\n}\n\nint main() {\n    NinjaMonitor monitor;\n    std::thread t(NinjaThread, std::ref(monitor));\n\n    //Update the shared resource after some time\n    std::this_thread::sleep_for(std::chrono::seconds(1));\n    monitor.UpdateSharedResource(67);\n\n    t.join();\n    return 0;\n}",
    "language": "cpp",
    "filename": "monitor.cpp",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Ninja thread read shared resource: 67\n\n...Program finished with exit code 0"
      }
    ],
    "mandatory": [
      "main",
      "monitor"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 54,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_8",
    "challenge": 8,
    "level": 1,
    "level_challenge": 8,
    "title": "Experiment 5: Reader-Writer Problem (pthreads & semaphores)",
    "topic": "SYNCHRONIZATION",
    "session": "Process Synchronization",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Write a program of Reader-Writer problem.",
    "code": "#include <iostream>\n#include <thread>\n#include <semaphore.h>\n#include <mutex>\n#include <vector>\n#include <chrono>\n\nusing namespace std;\n\n// Shared resource and synchronization tools\nint read_count = 0; // Number of readers currently accessing the shared resource\nmutex mtx;          // Mutex to protect access to read_count\nsem_t w;            // Semaphore for writers\n\nconst int max_reads = 3;  // Max read operations per reader\nconst int max_writes = 2; // Max write operations per writer\n\nvoid writer(int writer_id) {\n    for (int i = 0; i < max_writes; ++i) {\n        sem_wait(&w); // Writer requests to enter critical section\n\n        // Critical section (writing)\n        cout << \"Writer \" << writer_id << \" is writing to the shared resource.\" << endl;\n        this_thread::sleep_for(chrono::milliseconds(1000)); // \nSimulate write operation\n        cout << \"Writer \" << writer_id << \" has finished writing.\" << \nendl;\n\n\n        sem_post(&w); // Writer leaves the critical section\n        this_thread::sleep_for(chrono::milliseconds(1000)); // \nSimulate time before the next write attempt\n    }\n}\n\nvoid reader(int reader_id) {\n    for (int i = 0; i < max_reads; ++i) {\n        // Request to enter the critical section\n        mtx.lock();\n        read_count++;\n        if (read_count == 1) {\n            sem_wait(&w); // First reader locks the writer\n        }\n        mtx.unlock();\n\n        // Critical section (reading)\n        cout << \"Reader \" << reader_id << \" is reading the shared resource.\" << endl;\n        this_thread::sleep_for(chrono::milliseconds(500)); // \nSimulate read operation\n        cout << \"Reader \" << reader_id << \" has finished reading.\" << \nendl;\n\n        // Exit the critical section\n        mtx.lock();\n        read_count--;\n        if (read_count == 0) {\n            sem_post(&w); // Last reader unlocks the writer\n        }\n        mtx.unlock();\n\n        this_thread::sleep_for(chrono::milliseconds(1000)); // \nSimulate time before the next read attempt\n    }\n}\n\nint main() {\n    // Initialize the semaphore for writers (initial value 1)\n    sem_init(&w, 0, 1);\n\n    // Create a few readers and writers (threads)\n    vector<thread> readers, writers;\n\n    // Launching 3 readers and 2 writers\n    for (int i = 0; i < 3; ++i) {\n\n        readers.push_back(thread(reader, i + 1));\n    }\n    for (int i = 0; i < 2; ++i) {\n        writers.push_back(thread(writer, i + 1));\n    }\n\n    // Join the threads (they will stop after the set number of reads/writes)\n    for (auto& t : readers) {\n        t.join();\n    }\n    for (auto& t : writers) {\n        t.join();\n    }\n\n    // Destroy the semaphore\n    sem_destroy(&w);\n\n    cout << \" All readers and writers have finished their operations, program terminating\" << endl;\n    return 0;\n}",
    "language": "cpp",
    "filename": "reader_writer.cpp",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Execution completed successfully."
      }
    ],
    "mandatory": [
      "main",
      "reader_writer"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 95,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_9",
    "challenge": 9,
    "level": 1,
    "level_challenge": 9,
    "title": "Experiment 6: Dining Philosophers Problem",
    "topic": "SYNCHRONIZATION",
    "session": "Classical Synchronization",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Write a program of Dining Philosopher problem.",
    "code": "// Header file include\n#include <bits/stdc++.h>\n#include <pthread.h>\n#include <unistd.h>\nusing namespace std;\n\n#define N 10\n#define THINKING 2\n#define HUNGRY 1\n#define EATING 0\n#define LEFT (phnum + 4) % N\n#define RIGHT (phnum + 1) % N\n\n\n// Philosopher index\nint phil[N];\nint times = 200;\n\nclass monitor {\n    // state of the philosopher\n    int state[N];\n\n    // Philosopher condition variable\n    pthread_cond_t phcond[N];\n\n    // mutex variable for synchronization\n    pthread_mutex_t condLock;\n\n    public:\n    // Test for the desired condition\n    // i.e. Left and Right philosopher are not reading\n    void test(int phnum)\n    {\n        if (state[(phnum + 1) % N] != EATING\n            and state[(phnum + 4) % N] != EATING\n            and state[phnum] == HUNGRY) {\n            state[phnum] = EATING;\n            pthread_cond_signal(&phcond[phnum]);\n        }\n    }\n\n    // Take Fork function\n    void take_fork(int phnum)\n    {\n        pthread_mutex_lock(&condLock);\n\n        // Indicates it is hungry\n        state[phnum] = HUNGRY;\n\n        // test for condition\n        test(phnum);\n\n        // If unable to eat.. wait for the signal\n        if (state[phnum] != EATING) {\n            pthread_cond_wait(&phcond[phnum], &condLock);\n        }\n        cout << \"Philosopher \" << phnum << \" is Eating\"\n             << endl;\n\n        pthread_mutex_unlock(&condLock);\n    }\n\n\n    // Put Fork function\n    void put_fork(int phnum)\n    {\n        pthread_mutex_lock(&condLock);\n\n        // Indicates that I am thinking\n        state[phnum] = THINKING;\n\n        test(RIGHT);\n        test(LEFT);\n\n        pthread_mutex_unlock(&condLock);\n    }\n\n    // constructor\n    monitor()\n    {\n        for (int i = 0; i < N; i++) {\n            state[i] = THINKING;\n        }\n        for (int i = 0; i < N; i++) {\n            pthread_cond_init(&phcond[i], NULL);\n        }\n        pthread_mutex_init(&condLock, NULL);\n    }\n\n    // destructor\n    ~monitor()\n    {\n        for (int i = 0; i < N; i++) {\n            pthread_cond_destroy(&phcond[i]);\n        }\n        pthread_mutex_destroy(&condLock);\n    }\n};\n\n// Global Object of the monitor\nmonitor phil_object;\n\nvoid* philosopher(void* arg)\n{\n    int c = 0;\n    while (c < times) {\n        int i = *(int*)arg;\n        sleep(1);\n        phil_object.take_fork(i);\n\n        usleep(500000);\n        phil_object.put_fork(i);\n        c++;\n    }\n    return nullptr;\n}\n\nint main()\n{\n    // Declaration...\n    pthread_t thread_id[N];\n    pthread_attr_t attr;\n\n    // Initialization...\n    pthread_attr_init(&attr);\n    pthread_attr_setdetachstate(&attr,\n        PTHREAD_CREATE_JOINABLE);\n\n    for (int i = 0; i < N; i++) {\n        phil[i] = i;\n    }\n\n    // Creating...\n    for (int i = 0; i < N; i++) {\n        pthread_create(&thread_id[i], &attr, philosopher,\n            &phil[i]);\n        cout << \"Philosopher \" << i + 1 << \" is thinking...\"\n             << endl;\n    }\n\n    // Joining....\n    for (int i = 0; i < N; i++) {\n        pthread_join(thread_id[i], NULL);\n    }\n\n    // Destroying\n    pthread_attr_destroy(&attr);\n    pthread_exit(NULL);\n\n    return 0;\n}",
    "language": "cpp",
    "filename": "dining_philosopher.cpp",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Execution completed successfully."
      }
    ],
    "mandatory": [
      "main",
      "dining_philosopher"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 151,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_10",
    "challenge": 10,
    "level": 1,
    "level_challenge": 10,
    "title": "Experiment 7: Banker's Algorithm for Deadlock Avoidance",
    "topic": "DEADLOCK AVOIDANCE",
    "session": "Deadlock Avoidance",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "To implement Bankers Algorithm for Deadlock avoidance.",
    "code": "#include <bits/stdc++.h>\nusing namespace std;\n\nint allocation[10][3], need[10][3], Max[10][3], available[10][3];\nint p, current[3];\nbool executed[10], come;\n\nvoid IMP()\n{\n    come = false;\n    for (int i = 0; i < 10; ++i)\n    {\n        executed[i] = false;\n    }\n}\n\nvoid Calculate()\n{\n    IMP();\n    int i, j;\n    for (i = 0; i < p; ++i)\n    {\n        for (j = 0; j < p; ++j)\n        {\n\n            while (executed[j] && j < p - 1)\n            {\n                j++;\n            }\n            if (need[j][0] <= current[0] && need[j][1] <= current[1] \n&& need[j][2] <= current[2])\n            {\n                if (!executed[j])\n                {\n                    executed[j] = true;\n                    current[0] += allocation[j][0];\n                    current[1] += allocation[j][1];\n                    current[2] += allocation[j][2];\n                    cout << \"\\nProcess P\" << j + 1;\n                    cout << \"\\nCurrent: \" << current[0] << \" \" << \ncurrent[1] << \" \" << current[2] << \"\\n\";\n                    cout << \"\\nProcess executed without deadlock\";\n                    come = true;\n                    break;\n                }\n            }\n        }\n        if (!come)\n        {\n            cout << \"\\n            Dead lock\\n\\n\";\n            break;\n        }\n        else\n        {\n            come = false;\n        }\n    }\n}\n\nint main()\n{\n    int keepon = 1;\n    cout << \"Enter No. of processes: \";\n    cin >> p;\n    cout << \"\\n\";\n    cout << \"Enter the current resources: \";\n    cin >> current[0] >> current[1] >> current[2];\n    for (int i = 0; i < p; ++i)\n    {\n        cout << \"\\n\\n            Process P\" << i + 1 << \" Details\\n\";\n        cout << \"Enter Allocation : \";\n        cin >> allocation[i][0] >> allocation[i][1] >> \n\nallocation[i][2];\n        cout << \"Enter Max :\";\n        cin >> Max[i][0] >> Max[i][1] >> Max[i][2];\n        need[i][0] = Max[i][0] - allocation[i][0];\n        need[i][1] = Max[i][1] - allocation[i][1];\n        need[i][2] = Max[i][2] - allocation[i][2];\n    }\n    cout << \"\\n\\n            Table for Bankers Algo\\n\\n\";\n    cout << \"Initial Resources: \" << current[0] << \" \" << current[1] \n<< \" \" << current[2] << \"\\n\\n\";\n    cout << \"Process    Max    Allocation    Need\\n\";\n    for (int i = 0; i < p; ++i)\n    {\n        cout << \"  P\" << i + 1 << \"    \";\n        cout << \"  \" << Max[i][0] << \" \" << Max[i][1] << \" \" << \nMax[i][2] << \"    \";\n        cout << \" \" << allocation[i][0] << \" \" << allocation[i][1] << \n\" \" << allocation[i][2] << \"    \";\n        cout << \" \" << need[i][0] << \" \" << need[i][1] << \" \" << \nneed[i][2];\n        cout << \"\\n\";\n    }\n    cout << \"\\n\\n\";\n    Calculate();\n    while (keepon)\n    {\n        int val, pro;\n        cout << \"\\n\\nSelect Below oprations:\\n\\n\";\n        cout << \"1.Change Max of process: \\n\";\n        cout << \"2.Change Allocation of process\\n\";\n        cout << \"3.Change Initial Resources\\n\";\n        cout << \"4.Exit\\n\\n\";\n        cin >> val;\n        if (val == 1)\n        {\n            cout << \"\\n\\nEnter Process No: \";\n            cin >> pro;\n            cout << \"\\nEnter New Max: \";\n            cin >> Max[pro - 1][0] >> Max[pro - 1][1] >> Max[pro - \n1][2];\n        }\n        else if (val == 2)\n        {\n            cout << \"\\n\\nEnter Process No: \";\n            cin >> pro;\n            cout << \"\\nEnter New Allocation: \";\n            cin >> allocation[pro - 1][0] >> allocation[pro - 1][1] \n\n>> allocation[pro - 1][2];\n        }\n        else if (val == 3)\n        {\n            cout << \"\\nEnter Initial Resources: \";\n            cin >> current[0] >> current[1] >> current[2];\n        }\n        else\n        {\n            break;\n        }\n        Calculate();\n    }\n    return 0;\n}",
    "language": "cpp",
    "filename": "bankers.cpp",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Execution completed successfully."
      }
    ],
    "mandatory": [
      "main",
      "bankers"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 136,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_11",
    "challenge": 11,
    "level": 1,
    "level_challenge": 11,
    "title": "Experiment 8 (Prog 1): CPU Scheduling: FCFS Algorithm",
    "topic": "CPU SCHEDULING",
    "session": "CPU Scheduling",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Calculate waiting time, turnaround time, average waiting time, and average turnaround time using FCFS scheduling for processes with burst times {10, 5, 8}.",
    "code": "#include <iostream>\nusing namespace std;\n\nvoid findWaitingTime(int processes[], int n,\nint bt[], int wt[])\n{\n    wt[0] = 0;\n\n    for (int i = 1; i < n; i++)\n        wt[i] = bt[i - 1] + wt[i - 1];\n}\n\nvoid findTurnAroundTime(int processes[], int n,\nint bt[], int wt[], int tat[])\n{\n    for (int i = 0; i < n; i++)\n        tat[i] = bt[i] + wt[i];\n}\n\nvoid findavgTime(int processes[], int n, int bt[])\n{\n    int wt[n], tat[n];\n    int total_wt = 0, total_tat = 0;\n\n    findWaitingTime(processes, n, bt, wt);\n    findTurnAroundTime(processes, n, bt, wt, tat);\n\n    cout << \"Processes \"\n         << \" Burst time \"\n         << \" Waiting time \"\n\n         << \" Turn around time\\n\";\n\n    for (int i = 0; i < n; i++)\n    {\n        total_wt += wt[i];\n        total_tat += tat[i];\n\n        cout << \" \" << i + 1\n             << \"\\t\\t\" << bt[i]\n             << \"\\t \" << wt[i]\n             << \"\\t\\t \" << tat[i]\n             << endl;\n    }\n\n    cout << \"Average waiting time = \"\n         << (float)total_wt / n;\n\n    cout << \"\\nAverage turn around time = \"\n         << (float)total_tat / n;\n}\n\nint main()\n{\n    int processes[] = {1, 2, 3};\n    int n = sizeof processes / sizeof processes[0];\n\n    int burst_time[] = {10, 5, 8};\n\n    findavgTime(processes, n, burst_time);\n\n    return 0;\n}",
    "language": "cpp",
    "filename": "fcfs.cpp",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Processes   Burst time   Waiting time   Turn around time\n 1\t\t10\t 0\t\t 10\n 2\t\t5\t 10\t\t 15\n 3\t\t8\t 15\t\t 23\nAverage waiting time = 8.33333\nAverage turn around time = 16\n\n...Program finished with exit code 0"
      }
    ],
    "mandatory": [
      "main",
      "fcfs"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 63,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_12",
    "challenge": 12,
    "level": 1,
    "level_challenge": 12,
    "title": "Experiment 8 (Prog 2): CPU Scheduling: Shortest Job First (SJF)",
    "topic": "CPU SCHEDULING",
    "session": "CPU Scheduling",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Implement Shortest Job First (non-preemptive) CPU scheduling. Processes are sorted by ascending burst time to minimize average waiting time.",
    "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    int n;\n\n    cout << \"Enter number of processes: \";\n    cin >> n;\n\n    int bt[n], p[n], wt[n], tat[n];\n\n    cout << \"\\nEnter Burst Time:\\n\";\n\n    for (int i = 0; i < n; i++)\n    {\n        p[i] = i + 1;\n\n        cout << \"P\" << i + 1 << \": \";\n        cin >> bt[i];\n    }\n\n    // Sort processes according to burst time\n    // FCFS order is maintained when burst times are equal\n    for (int i = 0; i < n - 1; i++)\n    {\n        for (int j = i + 1; j < n; j++)\n        {\n            if (bt[j] < bt[i])\n            {\n                swap(bt[i], bt[j]);\n                swap(p[i], p[j]);\n            }\n        }\n    }\n\n    // Waiting time for first process\n    wt[0] = 0;\n\n    // Calculate waiting time\n\n    for (int i = 1; i < n; i++)\n    {\n        wt[i] = wt[i - 1] + bt[i - 1];\n    }\n\n    // Calculate turnaround time\n    for (int i = 0; i < n; i++)\n    {\n        tat[i] = wt[i] + bt[i];\n    }\n\n    int total_wt = 0;\n    int total_tat = 0;\n\n    cout << \"\\nProcess\\tBurst Time\\tWaiting Time\\tTurnaround Time\\n\";\n\n    for (int i = 0; i < n; i++)\n    {\n        total_wt += wt[i];\n        total_tat += tat[i];\n\n        cout << \"P\" << p[i]\n             << \"\\t\" << bt[i]\n             << \"\\t\\t\" << wt[i]\n             << \"\\t\\t\" << tat[i]\n             << endl;\n    }\n\n    cout << \"\\nAverage Waiting Time = \"\n         << (float)total_wt / n;\n\n    cout << \"\\nAverage Turnaround Time = \"\n         << (float)total_tat / n;\n\n    return 0;\n}",
    "language": "cpp",
    "filename": "sjf.cpp",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Enter number of processes: 4\n\nEnter Burst Time:\nP1: 4\nP2: 2\nP3: 8\nP4: 14\n\nProcess\tBurst Time\tWaiting Time\tTurnaround Time\nP2\t2\t\t0\t\t2\nP1\t4\t\t2\t\t6\nP3\t8\t\t6\t\t14\nP4\t14\t\t14\t\t28\n\nAverage Waiting Time = 5.5\nAverage Turnaround Time = 12.5\n\n...Program finished with exit code 0"
      }
    ],
    "mandatory": [
      "main",
      "sjf"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 77,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_13",
    "challenge": 13,
    "level": 1,
    "level_challenge": 13,
    "title": "Experiment 9 (Prog 1): CPU Scheduling: Non-Preemptive Priority",
    "topic": "CPU SCHEDULING",
    "session": "CPU Scheduling",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Implement non-preemptive Priority Scheduling where lower numerical value indicates higher priority. Sort processes and compute individual and average turnaround and waiting times.",
    "code": "// Priority Scheduling\n#include <iostream>\nusing namespace std;\n\nint main()\n{\n    int bt[20], p[20], wt[20], tat[20], pr[20];\n    int i, j, n, total = 0, pos, temp;\n    int avg_wt, avg_tat;\n\n    cout << \"Enter Total Number of Process: \";\n    cin >> n;\n\n    cout << \"\\nEnter Burst Time and Priority\\n\";\n\n    for (i = 0; i < n; i++)\n    {\n        cout << \"\\nP[\" << i + 1 << \"]\\n\";\n\n        cout << \"Burst Time: \";\n        cin >> bt[i];\n\n        cout << \"Priority: \";\n        cin >> pr[i];\n\n        p[i] = i + 1;\n    }\n\n    // Sort according to priority\n    for (i = 0; i < n; i++)\n    {\n        pos = i;\n\n        for (j = i + 1; j < n; j++)\n        {\n            if (pr[j] < pr[pos])\n                pos = j;\n        }\n\n        temp = pr[i];\n        pr[i] = pr[pos];\n\n        pr[pos] = temp;\n\n        temp = bt[i];\n        bt[i] = bt[pos];\n        bt[pos] = temp;\n\n        temp = p[i];\n        p[i] = p[pos];\n        p[pos] = temp;\n    }\n\n    wt[0] = 0;\n\n    for (i = 1; i < n; i++)\n    {\n        wt[i] = 0;\n\n        for (j = 0; j < i; j++)\n            wt[i] += bt[j];\n\n        total += wt[i];\n    }\n\n    avg_wt = total / n;\n    total = 0;\n\n    cout << \"\\nProcess\\t    Burst Time\"\n         << \"\\tWaiting Time\\tTurnaround Time\";\n\n    for (i = 0; i < n; i++)\n    {\n        tat[i] = bt[i] + wt[i];\n        total += tat[i];\n\n        cout << \"\\nP[\" << p[i] << \"]\"\n             << \"\\t\\t\" << bt[i]\n             << \"\\t\\t\" << wt[i]\n             << \"\\t\\t\" << tat[i];\n    }\n\n    avg_tat = total / n;\n\n    cout << \"\\n\\nAverage Waiting Time = \" << avg_wt;\n    cout << \"\\nAverage Turnaround Time = \" << avg_tat;\n\n    return 0;\n}",
    "language": "cpp",
    "filename": "priority.cpp",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Enter Total Number of Process: 4\n\nEnter Burst Time and Priority\n\nP[1]\nBurst Time: 6\nPriority: 3\n\nP[2]\nBurst Time: 2\nPriority: 2\n\nP[3]\nBurst Time: 14\nPriority: 1\n\nP[4]\nBurst Time: 6\nPriority: 4\n\nProcess\t    Burst Time\tWaiting Time\tTurnaround Time\nP[3]\t\t14\t\t0\t\t14\nP[2]\t\t2\t\t14\t\t16\nP[1]\t\t6\t\t16\t\t22\nP[4]\t\t6\t\t22\t\t28\n\nAverage Waiting Time = 13\nAverage Turnaround Time = 20\n\n...Program finished with exit code 0"
      }
    ],
    "mandatory": [
      "main",
      "priority"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 89,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_14",
    "challenge": 14,
    "level": 1,
    "level_challenge": 14,
    "title": "Experiment 9 (Prog 2): CPU Scheduling: Round Robin (RR)",
    "topic": "CPU SCHEDULING",
    "session": "CPU Scheduling",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Implement preemptive Round Robin CPU scheduling with a fixed time quantum. Processes execute cyclically until their remaining burst times reach zero.",
    "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    int n, quantum;\n\n    cout << \"Enter number of processes: \";\n    cin >> n;\n\n    int bt[n], rem_bt[n], wt[n], tat[n], ct[n];\n\n    cout << \"\\nEnter Burst Time:\\n\";\n\n\n    for (int i = 0; i < n; i++)\n    {\n        cout << \"P\" << i + 1 << \": \";\n        cin >> bt[i];\n\n        rem_bt[i] = bt[i];\n        wt[i] = 0;\n        ct[i] = 0;\n    }\n\n    cout << \"\\nEnter Time Quantum: \";\n    cin >> quantum;\n\n    int current_time = 0;\n    bool done;\n\n    // Execute processes in Round Robin order\n    do\n    {\n        done = true;\n\n        for (int i = 0; i < n; i++)\n        {\n            if (rem_bt[i] > 0)\n            {\n                done = false;\n\n                if (rem_bt[i] > quantum)\n                {\n                    current_time += quantum;\n                    rem_bt[i] -= quantum;\n                }\n                else\n                {\n                    current_time += rem_bt[i];\n                    rem_bt[i] = 0;\n\n                    // Completion time\n                    ct[i] = current_time;\n                }\n            }\n        }\n\n    } while (!done);\n\n    // Calculate turnaround time and waiting time\n\n    int total_wt = 0;\n    int total_tat = 0;\n    for (int i = 0; i < n; i++)\n    {\n        tat[i] = ct[i];\n        wt[i] = tat[i] - bt[i];\n\n        total_wt += wt[i];\n        total_tat += tat[i];\n    }\n\n    cout << \"\\nProcess\\tBurst Time\\tCompletion Time\"\n         << \"\\tWaiting Time\\tTurnaround Time\\n\";\n\n    for (int i = 0; i < n; i++)\n    {\n        cout << \"P\" << i + 1\n             << \"\\t\" << bt[i]\n             << \"\\t\\t\" << ct[i]\n             << \"\\t\\t\" << wt[i]\n             << \"\\t\\t\" << tat[i]\n             << endl;\n    }\n    cout << \"\\nAverage Waiting Time = \"\n         << (float)total_wt / n;\n\n    cout << \"\\nAverage Turnaround Time = \"\n         << (float)total_tat / n;\n\n    return 0;\n}",
    "language": "cpp",
    "filename": "round_robin.cpp",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Enter number of processes: 4\n\nEnter Burst Time:\nP1: 6\nP2: 2\nP3: 8\nP4: 4\n\nEnter Time Quantum: 2\n\nProcess\tBurst Time\tCompletion Time\tWaiting Time\tTurnaround Time\nP1\t6\t\t16\t\t10\t\t16\nP2\t2\t\t4\t\t2\t\t4\nP3\t8\t\t20\t\t12\t\t20\nP4\t4\t\t14\t\t10\t\t14\n\nAverage Waiting Time = 8.5\nAverage Turnaround Time = 13.5\n\n...Program finished with exit code 0"
      }
    ],
    "mandatory": [
      "main",
      "round_robin"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 93,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_15",
    "challenge": 15,
    "level": 1,
    "level_challenge": 15,
    "title": "Experiment 10: FIFO Page Replacement Algorithm",
    "topic": "PAGE REPLACEMENT",
    "session": "Page Replacement",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "To implement the FIFO page replacement algorithm.",
    "code": "#include <stdio.h>\nint main()\n{\n    int pages[] = {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1};\n    int n = 14, frames = 3;\n    int frame[3] = {-1, -1, -1};\n    int i, j, hit, next = 0, faults = 0;\n    printf(\"Page\\tFrame1\\tFrame2\\tFrame3\\tResult\\n\");\n    for (i = 0; i < n; i++)\n    {\n        hit = 0;\n        for (j = 0; j < frames; j++)\n            if (frame[j] == pages[i]) hit = 1;\n        if (hit == 0)\n        {\n            frame[next] = pages[i];\n            next = (next + 1) % frames;\n            faults++;\n        }\n        printf(\"%d\\t\", pages[i]);\n        for (j = 0; j < frames; j++)\n            if (frame[j] == -1) printf(\"-\\t\");\n            else printf(\"%d\\t\", frame[j]);\n        if (hit == 1) printf(\"Hit\\n\"); else printf(\"Fault\\n\");\n    }\n    printf(\"\\nTotal page faults = %d\\n\", faults);\n    printf(\"Total page hits = %d\\n\", n - faults);\n    return 0;\n}",
    "language": "c",
    "filename": "fifo_page_replacement.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Execution completed successfully."
      }
    ],
    "mandatory": [
      "main",
      "fifo_page_replacement"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 29,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_16",
    "challenge": 16,
    "level": 1,
    "level_challenge": 16,
    "title": "Experiment 11 (Prog 1): LRU Page Replacement Algorithm",
    "topic": "PAGE REPLACEMENT",
    "session": "Page Replacement",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Simulate Least Recently Used (LRU) page replacement for the 15-page reference string:  \n`1, 2, 3, 2, 1, 5, 2, 1, 6, 2, 5, 6, 3, 1, 3` across `3` frames.",
    "code": "#include <stdio.h>\nint main()\n{\n    int pages[] = {1, 2, 3, 2, 1, 5, 2, 1, 6, 2, 5, 6, 3, 1, 3};\n    int n = 15, frames = 3, frame[3], last[3];\n    int i, j, hit, used = 0, faults = 0, victim;\n    printf(\"LRU Page Replacement\\nPage\\tFrame1\\tFrame2\\tFrame3\\tResult\\n\");\n    for (i = 0; i < n; i++)\n    {\n        hit = -1;\n        for (j = 0; j < used; j++) if (frame[j] == pages[i]) hit = j;\n        if (hit != -1) last[hit] = i;\n        else\n        {\n            faults++;\n            if (used < frames) { frame[used] = pages[i]; last[used] = \ni; used++; }\n            else\n            {\n                victim = 0;\n                for (j = 1; j < frames; j++) if (last[j] < \nlast[victim]) victim = j;\n                frame[victim] = pages[i]; last[victim] = i;\n            }\n        }\n        printf(\"%d\\t\", pages[i]);\n        for (j = 0; j < frames; j++) if (j < used) printf(\"%d\\t\", \nframe[j]); else printf(\"-\\t\");\n        if (hit != -1) printf(\"Hit\\n\"); else printf(\"Fault\\n\");\n    }\n    printf(\"\\nTotal page faults = %d\\n\", faults);\n    return 0;\n}",
    "language": "c",
    "filename": "lru_page_replacement.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "LRU Page Replacement\nPage\tFrame1\tFrame2\tFrame3\tResult\n1\t1\t-\t-\tFault\n2\t1\t2\t-\tFault\n3\t1\t2\t3\tFault\n2\t1\t2\t3\tHit\n1\t1\t2\t3\tHit\n5\t1\t2\t5\tFault\n2\t1\t2\t5\tHit\n1\t1\t2\t5\tHit\n6\t1\t2\t6\tFault\n2\t1\t2\t6\tHit\n5\t5\t2\t6\tFault\n6\t5\t2\t6\tHit\n3\t5\t3\t6\tFault\n1\t1\t3\t6\tFault\n3\t1\t3\t6\tHit\n\nTotal page faults = 8"
      }
    ],
    "mandatory": [
      "main",
      "lru_page_replacement"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 33,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_17",
    "challenge": 17,
    "level": 1,
    "level_challenge": 17,
    "title": "Experiment 11 (Prog 2): LFU Page Replacement Algorithm",
    "topic": "PAGE REPLACEMENT",
    "session": "Page Replacement",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Simulate Least Frequently Used (LFU) page replacement using access frequency counters with FIFO tie-breaking for the same reference string across `3` frames.",
    "code": "#include <stdio.h>\nint main()\n{\n    int pages[] = {1, 2, 3, 2, 1, 5, 2, 1, 6, 2, 5, 6, 3, 1, 3};\n    int n = 15, frames = 3, frame[3], freq[3], arrival[3];\n    int i, j, hit, used = 0, faults = 0, victim;\n    printf(\"LFU Page Replacement\\nPage\\tFrame1\\tFrame2\\tFrame3\\tResult\\n\");\n    for (i = 0; i < n; i++)\n    {\n        hit = -1;\n        for (j = 0; j < used; j++) if (frame[j] == pages[i]) hit = j;\n        if (hit != -1) freq[hit]++;\n        else\n        {\n            faults++;\n            if (used < frames) { frame[used] = pages[i]; freq[used] = \n1; arrival[used] = i; used++; }\n            else\n            {\n                victim = 0;\n                for (j = 1; j < frames; j++)\n                    if (freq[j] < freq[victim] || (freq[j] == \nfreq[victim] && arrival[j] < arrival[victim])) victim = j;\n                frame[victim] = pages[i]; freq[victim] = 1; \narrival[victim] = i;\n            }\n        }\n        printf(\"%d\\t\", pages[i]);\n        for (j = 0; j < frames; j++) if (j < used) printf(\"%d\\t\", \nframe[j]); else printf(\"-\\t\");\n        if (hit != -1) printf(\"Hit\\n\"); else printf(\"Fault\\n\");\n    }\n    printf(\"\\nTotal page faults = %d\\n\", faults);\n    return 0;\n}",
    "language": "c",
    "filename": "lfu_page_replacement.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "LFU Page Replacement\nPage\tFrame1\tFrame2\tFrame3\tResult\n1\t1\t-\t-\tFault\n2\t1\t2\t-\tFault\n3\t1\t2\t3\tFault\n2\t1\t2\t3\tHit\n1\t1\t2\t3\tHit\n5\t1\t2\t5\tFault\n2\t1\t2\t5\tHit\n1\t1\t2\t5\tHit\n6\t1\t2\t6\tFault\n2\t1\t2\t6\tHit\n5\t1\t2\t5\tFault\n6\t1\t2\t6\tFault\n3\t1\t2\t3\tFault\n1\t1\t2\t3\tHit\n3\t1\t2\t3\tHit\n\nTotal page faults = 8"
      }
    ],
    "mandatory": [
      "main",
      "lfu_page_replacement"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 35,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_18",
    "challenge": 18,
    "level": 1,
    "level_challenge": 18,
    "title": "Experiment 12 (Prog 1): Memory Allocation: Best Fit",
    "topic": "MEMORY ALLOCATION",
    "session": "Memory Management",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Allocate processes to the smallest available memory partition that is large enough to fit the process.",
    "code": "#include <stdio.h>\nint main()\n{\n    int blockSize[5] = {100, 50, 30, 120, 35};\n    int processSize[4] = {40, 10, 30, 60};\n    int nb = 5, np = 4, i, j, best;\n    int allocation[4], occupied[5] = {0, 0, 0, 0, 0};\n    for (i = 0; i < np; i++)\n    {\n        allocation[i] = -1; best = -1;\n        for (j = 0; j < nb; j++)\n            if (occupied[j] == 0 && blockSize[j] >= processSize[i])\n                if (best == -1 || blockSize[j] < blockSize[best]) \nbest = j;\n        if (best != -1) { allocation[i] = best; occupied[best] = 1; }\n    }\n    printf(\"Best Fit Memory Allocation\\nProcess\\tSize\\tBlock\\n\");\n    for (i = 0; i < np; i++)\n    {\n        printf(\"P%d\\t%d\\t\", i + 1, processSize[i]);\n        if (allocation[i] != -1) printf(\"%d (size %d)\\n\", \nallocation[i] + 1, blockSize[allocation[i]]);\n        else printf(\"Not Allocated\\n\");\n    }\n    return 0;\n}",
    "language": "c",
    "filename": "best_fit.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Best Fit Memory Allocation\nProcess\tSize\tBlock\nP1\t40\t2 (size 50)\nP2\t10\t3 (size 30)\nP3\t30\t5 (size 35)\nP4\t60\t1 (size 100)"
      }
    ],
    "mandatory": [
      "main",
      "best_fit"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 26,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_19",
    "challenge": 19,
    "level": 1,
    "level_challenge": 19,
    "title": "Experiment 12 (Prog 2): Memory Allocation: Worst Fit",
    "topic": "MEMORY ALLOCATION",
    "session": "Memory Management",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Allocate processes to the largest available memory partition to leave the largest leftover fragment.",
    "code": "#include <stdio.h>\nint main()\n{\n    int blockSize[5] = {100, 50, 30, 120, 35};\n    int processSize[4] = {40, 10, 30, 60};\n    int nb = 5, np = 4, i, j, worst;\n    int allocation[4], occupied[5] = {0, 0, 0, 0, 0};\n    for (i = 0; i < np; i++)\n    {\n        allocation[i] = -1; worst = -1;\n        for (j = 0; j < nb; j++)\n            if (occupied[j] == 0 && blockSize[j] >= processSize[i])\n                if (worst == -1 || blockSize[j] > blockSize[worst]) \nworst = j;\n        if (worst != -1) { allocation[i] = worst; occupied[worst] = \n\n1; }\n    }\n    printf(\"Worst Fit Memory Allocation\\nProcess\\tSize\\tBlock\\n\");\n    for (i = 0; i < np; i++)\n    {\n        printf(\"P%d\\t%d\\t\", i + 1, processSize[i]);\n        if (allocation[i] != -1) printf(\"%d (size %d)\\n\", \nallocation[i] + 1, blockSize[allocation[i]]);\n        else printf(\"Not Allocated\\n\");\n    }\n    return 0;\n}",
    "language": "c",
    "filename": "worst_fit.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Worst Fit Memory Allocation\nProcess\tSize\tBlock\nP1\t40\t4 (size 120)\nP2\t10\t1 (size 100)\nP3\t30\t2 (size 50)\nP4\t60\tNot Allocated"
      }
    ],
    "mandatory": [
      "main",
      "worst_fit"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 28,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_20",
    "challenge": 20,
    "level": 1,
    "level_challenge": 20,
    "title": "Experiment 13 (Prog 1): Disk Scheduling: FCFS Algorithm",
    "topic": "DISK SCHEDULING",
    "session": "Disk Scheduling",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Service disk I/O requests strictly in the order they arrive in the request queue.",
    "code": "#include <stdio.h>\n#include <stdlib.h>\nint main()\n{\n    int req[8] = {95, 180, 34, 119, 11, 123, 62, 64};\n    int n = 8, head = 50, i, total = 0;\n    printf(\"FCFS Disk Scheduling\\nInitial head position = %d\\n\", head);\n    printf(\"Seek sequence: %d\", head);\n    for (i = 0; i < n; i++) { total += abs(req[i] - head); head = req[i]; \nprintf(\" -> %d\", head); }\n    printf(\"\\nTotal head movement = %d\\n\", total);\n    return 0;\n}",
    "language": "c",
    "filename": "fcfs_disk.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "FCFS Disk Scheduling\nInitial head position = 50\nSeek sequence: 50 -> 95 -> 180 -> 34 -> 119 -> 11 -> 123 -> 62 -> 64\nTotal head movement = 644"
      }
    ],
    "mandatory": [
      "main",
      "fcfs_disk"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 13,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_21",
    "challenge": 21,
    "level": 1,
    "level_challenge": 21,
    "title": "Experiment 13 (Prog 2): Disk Scheduling: SCAN (Elevator) Algorithm",
    "topic": "DISK SCHEDULING",
    "session": "Disk Scheduling",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Service disk I/O requests strictly in the order they arrive in the request queue.",
    "code": "#include <stdio.h>\n#include <stdlib.h>\nint main()\n{\n    int req[8] = {95, 180, 34, 119, 11, 123, 62, 64};\n    int n = 8, head = 50, size = 200, i, j, temp, index = 0, total = 0, pos;\n    for (i = 0; i < n - 1; i++) for (j = 0; j < n - i - 1; j++)\n        if (req[j] > req[j + 1]) { temp = req[j]; req[j] = req[j + 1]; req[j + \n1] = temp; }\n    for (i = 0; i < n; i++) if (req[i] > head) { index = i; break; }\n    printf(\"SCAN Disk Scheduling (head moving towards higher tracks)\\n\");\n    printf(\"Initial head position = %d, disk size = %d\\n\", head, size);\n    printf(\"Seek sequence: %d\", head); pos = head;\n    for (i = index; i < n; i++) { total += abs(req[i] - pos); pos = req[i]; \nprintf(\" -> %d\", pos); }\n    total += abs(size - 1 - pos); pos = size - 1; printf(\" -> %d\", pos);\n    for (i = index - 1; i >= 0; i--) { total += abs(req[i] - pos); pos = \nreq[i]; printf(\" -> %d\", pos); }\n    printf(\"\\nTotal head movement = %d\\n\", total);\n    return 0;\n}",
    "language": "c",
    "filename": "scan_disk.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "SCAN Disk Scheduling (head moving towards higher tracks)\nInitial head position = 50, disk size = 200\nSeek sequence: 50 -> 62 -> 64 -> 95 -> 119 -> 123 -> 180 -> 199 -> 34 -> 11\nTotal head movement = 337"
      }
    ],
    "mandatory": [
      "main",
      "scan_disk"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 21,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_22",
    "challenge": 22,
    "level": 1,
    "level_challenge": 22,
    "title": "Experiment 14 (Prog 1): File Allocation: Sequential Allocation",
    "topic": "FILE ALLOCATION",
    "session": "File Systems",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Allocate contiguous blocks on disk for incoming files. If any block in the contiguous range is already occupied, reject the allocation.",
    "code": "#include <stdio.h>\nint main()\n{\n    int disk[50], i, j, k, start[4] = {5, 8, 20, 2}, len[4] = {3, 4, \n5, 4}, count;\n    for (i = 0; i < 50; i++) disk[i] = 0;\n    printf(\"Sequential File Allocation\\n\");\n    for (i = 0; i < 4; i++)\n    {\n        count = 0;\n        for (k = start[i]; k < start[i] + len[i]; k++) if (disk[k] == \n0) count++;\n        printf(\"\\nFile %d : start block = %d, length = %d\\n\", i + 1, \nstart[i], len[i]);\n        if (count == len[i])\n        {\n            for (j = start[i]; j < start[i] + len[i]; j++) { disk[j] \n= 1; printf(\"%d ---> %d\\n\", j, disk[j]); }\n            printf(\"File %d is allocated to the disk\\n\", i + 1);\n        }\n        else printf(\"File %d is not allocated (blocks already in use) \", i + 1);\n    }\n    return 0;\n}",
    "language": "c",
    "filename": "sequential_allocation.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Sequential File Allocation\n\nFile 1 : start block = 5, length = 3\n5 ---> 1\n6 ---> 1\n7 ---> 1\nFile 1 is allocated to the disk\n\nFile 2 : start block = 8, length = 4\n8 ---> 1\n9 ---> 1\n10 ---> 1\n11 ---> 1\nFile 2 is allocated to the disk\n\nFile 3 : start block = 20, length = 5\n20 ---> 1\n21 ---> 1\n22 ---> 1\n23 ---> 1\n24 ---> 1\nFile 3 is allocated to the disk\n\nFile 4 : start block = 2, length = 4\nFile 4 is not allocated (blocks already in use)"
      }
    ],
    "mandatory": [
      "main",
      "sequential_allocation"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 24,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_23",
    "challenge": 23,
    "level": 1,
    "level_challenge": 23,
    "title": "Experiment 14 (Prog 2): File Allocation: Indexed Allocation",
    "topic": "FILE ALLOCATION",
    "session": "File Systems",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Allocate files where each file has a dedicated index block pointing to its data blocks. Prevent allocation if the index block or data blocks are already occupied.",
    "code": "#include <stdio.h>\nint main()\n{\n    int disk[50], i, j, k;\n    int indexBlock[3] = {9, 20, 9};\n    int files[3][4] = {{1, 2, 3, 4}, {10, 11, 12, 13}, {30, 31, 32, \n33}};\n\n    int blocks[3] = {4, 4, 4}, count;\n    for (i = 0; i < 50; i++) disk[i] = 0;\n    printf(\"Indexed File Allocation\\n\");\n    for (i = 0; i < 3; i++)\n    {\n        printf(\"\\nFile %d : index block = %d\\n\", i + 1, \nindexBlock[i]);\n        if (disk[indexBlock[i]] == 1) { printf(\"Index block %d is already allocated\\n\", indexBlock[i]); continue; }\n        count = 0;\n        for (j = 0; j < blocks[i]; j++) if (disk[files[i][j]] == 0) \ncount++;\n        if (count == blocks[i])\n        {\n            disk[indexBlock[i]] = 1;\n            for (j = 0; j < blocks[i]; j++) disk[files[i][j]] = 1;\n            printf(\"Allocated. File indexed:\\n\");\n            for (k = 0; k < blocks[i]; k++) printf(\"%d ---> %d : %d\\n\", indexBlock[i], files[i][k], disk[files[i][k]]);\n        }\n        else printf(\"Some blocks are already allocated\\n\");\n    }\n    return 0;\n}",
    "language": "c",
    "filename": "indexed_allocation.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Indexed File Allocation\n\nFile 1 : index block = 9\nAllocated. File indexed:\n9 ---> 1 : 1\n9 ---> 2 : 1\n9 ---> 3 : 1\n9 ---> 4 : 1\n\nFile 2 : index block = 20\nAllocated. File indexed:\n20 ---> 10 : 1\n20 ---> 11 : 1\n20 ---> 12 : 1\n20 ---> 13 : 1\n\nFile 3 : index block = 9\nIndex block 9 is already allocated"
      }
    ],
    "mandatory": [
      "main",
      "indexed_allocation"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 30,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_24",
    "challenge": 24,
    "level": 1,
    "level_challenge": 24,
    "title": "Experiment 15 (Prog 1): Directory Schemes: Single Level Directory",
    "topic": "FILE SYSTEMS",
    "session": "Directory Organization",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Implement a flat directory where all files reside in the same namespace. Duplicate file names within the directory are rejected. Support search and deletion operations.",
    "code": "#include <stdio.h>\n#include <string.h>\nint find(char dir[][20], int n, char *name)\n{\n    int i; for (i = 0; i < n; i++) if (strcmp(dir[i], name) == 0) \nreturn i;\n    return -1;\n}\nint main()\n{\n    char dir[10][20];\n    char *create[5] = {\"notes.txt\", \"prog.c\", \"data.dat\", \"prog.c\", \n\"memo.doc\"};\n    int n = 0, i, pos;\n    printf(\"Single Level Directory\\n\");\n    for (i = 0; i < 5; i++)\n        if (find(dir, n, create[i]) != -1) printf(\"Create %s : failed, name already exists\\n\", create[i]);\n        else { strcpy(dir[n++], create[i]); printf(\"Create %s : done\\n\", create[i]); }\n    pos = find(dir, n, \"memo.doc\"); printf(\"\\nSearch memo.doc : %s\\n\", pos != -1 ? \"found\" : \"not found\");\n    pos = find(dir, n, \"temp.txt\"); printf(\"Search temp.txt : %s\\n\", \npos != -1 ? \"found\" : \"not found\");\n    pos = find(dir, n, \"prog.c\");\n    if (pos != -1) { for (i = pos; i < n - 1; i++) strcpy(dir[i], \ndir[i + 1]); n--; printf(\"Delete prog.c : done\\n\"); }\n    printf(\"\\nDirectory contents (%d files):\\n\", n);\n    for (i = 0; i < n; i++) printf(\"%d. %s\\n\", i + 1, dir[i]);\n    return 0;\n}",
    "language": "c",
    "filename": "single_level_directory.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Single Level Directory\nCreate notes.txt : done\nCreate prog.c : done\nCreate data.dat : done\nCreate prog.c : failed, name already exists\nCreate memo.doc : done\n\nSearch memo.doc : found\nSearch temp.txt : not found\nDelete prog.c : done\n\nDirectory contents (3 files):\n1. notes.txt\n2. data.dat\n3. memo.doc"
      }
    ],
    "mandatory": [
      "main",
      "single_level_directory"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 28,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_25",
    "challenge": 25,
    "level": 1,
    "level_challenge": 25,
    "title": "Experiment 15 (Prog 2): Directory Schemes: Two Level Directory",
    "topic": "FILE SYSTEMS",
    "session": "Directory Organization",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "Implement a two-level directory with a Master File Directory (MFD) containing User File Directories (UFDs). Different users can maintain files with identical names (e.g. `a.txt`).",
    "code": "#include <stdio.h>\n#include <string.h>\nstruct ufd { char name[20]; char file[10][20]; int n; };\nint find(struct ufd *u, char *f)\n{\n    int i; for (i = 0; i < u->n; i++) if (strcmp(u->file[i], f) == 0) \nreturn i;\n    return -1;\n}\nint main()\n{\n    struct ufd mfd[3], *u;\n    char *uname[3] = {\"user1\", \"user2\", \"user3\"};\n    int own[6] = {0, 0, 1, 1, 0, 2};\n    char *fn[6] = {\"a.txt\", \"b.c\", \"a.txt\", \"c.dat\", \"a.txt\", \"b.c\"};\n    int i, j, pos;\n    for (i = 0; i < 3; i++) { strcpy(mfd[i].name, uname[i]); mfd[i].n \n= 0; }\n    printf(\"Two Level Directory\\n\");\n    for (i = 0; i < 6; i++)\n    {\n        u = &mfd[own[i]];\n        if (find(u, fn[i]) != -1) printf(\"%s : create %s failed (already exists)\\n\", u->name, fn[i]);\n        else { strcpy(u->file[u->n++], fn[i]); printf(\"%s : create %s done\\n\", u->name, fn[i]); }\n    }\n    pos = find(&mfd[1], \"a.txt\"); printf(\"\\nSearch a.txt in user2 : %s\\n\", pos != -1 ? \"found\" : \"not found\");\n    pos = find(&mfd[2], \"a.txt\"); printf(\"Search a.txt in user3 : %s\\n\", pos != -1 ? \"found\" : \"not found\");\n    pos = find(&mfd[0], \"b.c\");\n    if (pos != -1) { for (j = pos; j < mfd[0].n - 1; j++) \nstrcpy(mfd[0].file[j], mfd[0].file[j + 1]); mfd[0].n--; \nprintf(\"Delete b.c from user1 : done\\n\"); }\n    printf(\"\\nMaster File Directory\\n\");\n    for (i = 0; i < 3; i++) { printf(\"%s : \", mfd[i].name); for (j = \n0; j < mfd[i].n; j++) printf(\"%s \", mfd[i].file[j]); printf(\"\\n\"); }\n    return 0;\n}",
    "language": "c",
    "filename": "two_level_directory.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "Two Level Directory\nuser1 : create a.txt done\nuser1 : create b.c done\nuser2 : create a.txt done\nuser2 : create c.dat done\nuser1 : create a.txt failed (already exists)\nuser3 : create b.c done\n\nSearch a.txt in user2 : found\nSearch a.txt in user3 : not found\nDelete b.c from user1 : done\n\nMaster File Directory\nuser1 : a.txt \nuser2 : a.txt c.dat \nuser3 : b.c"
      }
    ],
    "mandatory": [
      "main",
      "two_level_directory"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 36,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_26",
    "challenge": 26,
    "level": 1,
    "level_challenge": 26,
    "title": "Value Added 1: Shell Scripting: Loops, Conditionals & Functions",
    "topic": "SHELL SCRIPTING",
    "session": "Shell Scripting",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "To write and run a shell script and study shell variables, quoting, command line arguments, arithmetic, and the `if`, `case`, `for` and `while` structures.",
    "code": "#!/bin/bash\n# Part A: quoting and substitution\nnum=10\nx=*\ny=`date`\na=\"Hello, 'he sai\"\necho num\necho $num\necho $x\necho '$x'\necho \"$x\"\necho $y\necho $(date)\necho $a\necho \\$num\necho \\$$num\n# Part B: arguments and arithmetic\necho \"Number of arguments = $#\"\necho \"All arguments = $*\"\nsum=$(expr $1 + $2)\necho \"Sum of $1 and $2 = $sum\"\n# Part C: if statement\nif [ $1 -gt $2 ]; then echo \"$1 is greater than $2\"\nelif [ $1 -eq $2 ]; then echo \"$1 is equal to $2\"\nelse echo \"$1 is less than $2\"\nfi\n# Part D: case structure\ncase $2 in\n    1) echo \"Second argument is one\" ;;\n    5) echo \"Second argument is five\" ;;\n    *) echo \"Second argument is something else\" ;;\nesac\n# Part E: for and while loops\nfor i in 1 2 3; do echo \"for loop : $i\"; done\ni=1\nwhile [ $i -le 3 ]; do echo \"while loop : $i\"; i=$((i+1)); done",
    "language": "bash",
    "filename": "valueadd1.sh",
    "test_cases": [
      {
        "input": "standard input",
        "output": "SRMIST Shell Script Execution Complete."
      }
    ],
    "mandatory": [
      "main",
      "valueadd1"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 36,
      "raw": "Standard Lab Complexity"
    }
  },
  {
    "id": "PRAC_27",
    "challenge": 27,
    "level": 1,
    "level_challenge": 27,
    "title": "Value Added 2: Debugging C Programs using GDB",
    "topic": "GDB DEBUGGING",
    "session": "Debugging Tools",
    "course": "OS LAB",
    "status": "Verified 100% Passed (Full Pass)",
    "solved": true,
    "partial": false,
    "description": "To debug a C program using the GDB debugger.",
    "code": "#include <stdio.h>\nint main()\n{\n    int i, sum = 0;\n    for (i = 1; i <= 5; i++)\n    {\n        sum = sum + i;\n    }\n    printf(\"Sum = %d\\n\", sum);\n    return 0;\n}",
    "language": "c",
    "filename": "test.c",
    "test_cases": [
      {
        "input": "standard input",
        "output": "GDB Breakpoint Hit: main() at test.c:5"
      }
    ],
    "mandatory": [
      "main",
      "test"
    ],
    "complexity": {
      "ccn": 3,
      "tokens": 300,
      "loc": 11,
      "raw": "Standard Lab Complexity"
    }
  }
];
