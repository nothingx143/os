# SRM Operating Systems (OS) - Comprehensive Repository

This repository contains verified solutions and documentation for Operating Systems (OS) at SRM IST:

## Repository Structure

```
├── OS prac/
│   ├── OS_Lab_Practicals_Complete.md    # Master verified documentation for Experiments 1-15 & Value Added 1-2
│   └── programs/                        # All 27 standalone C, C++, and Bash source files
└── OS elab/
    ├── README.md                        # eLab progress overview and solutions index
    ├── Q001.c ... Q030.c                # C/C++ solution source codes
    └── Q001.md ... Q030.md              # Detailed problem statements, complexity adherence, and test cases
```

---

## 1. [OS Practicals (`OS prac/`)](./OS%20prac/OS_Lab_Practicals_Complete.md)
Complete verified practical manual solutions covering all 15 experiments and 2 value-added programs:
- **Exp 1:** Basic Linux Commands & Process Creation (`fork.c`)
- **Exp 2:** Process Creation & System Calls (`fork_srmist.c`, `fork_yes.c`, `process_ids.c`)
- **Exp 3:** Multithreading in C++ (`multithreading.cpp`)
- **Exp 4:** Mutual Exclusion using Semaphore and Monitor (`semaphore.cpp`, `monitor.cpp`)
- **Exp 5:** Reader-Writer Problem (`reader_writer.cpp`)
- **Exp 6:** Dining Philosophers Problem (`dining_philosopher.cpp`)
- **Exp 7:** Banker's Algorithm for Deadlock Avoidance (`bankers.cpp`)
- **Exp 8:** CPU Scheduling: FCFS and SJF (`fcfs.cpp`, `sjf.cpp`)
- **Exp 9:** CPU Scheduling: Priority and Round Robin (`priority.cpp`, `round_robin.cpp`)
- **Exp 10:** FIFO Page Replacement Algorithm (`fifo_page_replacement.c`)
- **Exp 11:** LRU and LFU Page Replacement Algorithms (`lru_page_replacement.c`, `lfu_page_replacement.c`)
- **Exp 12:** Memory Allocation: Best Fit and Worst Fit (`best_fit.c`, `worst_fit.c`)
- **Exp 13:** Disk Scheduling: FCFS and SCAN (`fcfs_disk.c`, `scan_disk.c`)
- **Exp 14:** File Allocation Strategies: Sequential and Indexed (`sequential_allocation.c`, `indexed_allocation.c`)
- **Exp 15:** Directory Organization Schemes: Single Level and Two Level (`single_level_directory.c`, `two_level_directory.c`)
- **VA 1:** Shell Scripting (`valueadd1.sh`)
- **VA 2:** Debugging C Programs Using GDB (`test.c`)

---

## 2. [OS eLab Solutions (`OS elab/`)](./OS%20elab/README.md)
Verified automated eLab solutions for challenges Q001 to Q030 adhering to strict Cyclomatic Complexity ($CCN \le 2-4$), Token limits, and NLOC constraints.
