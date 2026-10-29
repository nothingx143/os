#include <iostream>
using namespace std;

int main()
{
    int n, quantum;

    cout << "Enter number of processes: ";
    cin >> n;

    int bt[n], rem_bt[n], wt[n], tat[n], ct[n];

    cout << "\nEnter Burst Time:\n";


    for (int i = 0; i < n; i++)
    {
        cout << "P" << i + 1 << ": ";
        cin >> bt[i];

        rem_bt[i] = bt[i];
        wt[i] = 0;
        ct[i] = 0;
    }

    cout << "\nEnter Time Quantum: ";
    cin >> quantum;

    int current_time = 0;
    bool done;

    // Execute processes in Round Robin order
    do
    {
        done = true;

        for (int i = 0; i < n; i++)
        {
            if (rem_bt[i] > 0)
            {
                done = false;

                if (rem_bt[i] > quantum)
                {
                    current_time += quantum;
                    rem_bt[i] -= quantum;
                }
                else
                {
                    current_time += rem_bt[i];
                    rem_bt[i] = 0;

                    // Completion time
                    ct[i] = current_time;
                }
            }
        }

    } while (!done);

    // Calculate turnaround time and waiting time

    int total_wt = 0;
    int total_tat = 0;
    for (int i = 0; i < n; i++)
    {
        tat[i] = ct[i];
        wt[i] = tat[i] - bt[i];

        total_wt += wt[i];
        total_tat += tat[i];
    }

    cout << "\nProcess\tBurst Time\tCompletion Time"
         << "\tWaiting Time\tTurnaround Time\n";

    for (int i = 0; i < n; i++)
    {
        cout << "P" << i + 1
             << "\t" << bt[i]
             << "\t\t" << ct[i]
             << "\t\t" << wt[i]
             << "\t\t" << tat[i]
             << endl;
    }
    cout << "\nAverage Waiting Time = "
         << (float)total_wt / n;

    cout << "\nAverage Turnaround Time = "
         << (float)total_tat / n;

    return 0;
}
