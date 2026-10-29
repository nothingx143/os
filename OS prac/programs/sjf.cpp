#include <iostream>
using namespace std;

int main()
{
    int n;

    cout << "Enter number of processes: ";
    cin >> n;

    int bt[n], p[n], wt[n], tat[n];

    cout << "\nEnter Burst Time:\n";

    for (int i = 0; i < n; i++)
    {
        p[i] = i + 1;

        cout << "P" << i + 1 << ": ";
        cin >> bt[i];
    }

    // Sort processes according to burst time
    // FCFS order is maintained when burst times are equal
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (bt[j] < bt[i])
            {
                swap(bt[i], bt[j]);
                swap(p[i], p[j]);
            }
        }
    }

    // Waiting time for first process
    wt[0] = 0;

    // Calculate waiting time

    for (int i = 1; i < n; i++)
    {
        wt[i] = wt[i - 1] + bt[i - 1];
    }

    // Calculate turnaround time
    for (int i = 0; i < n; i++)
    {
        tat[i] = wt[i] + bt[i];
    }

    int total_wt = 0;
    int total_tat = 0;

    cout << "\nProcess\tBurst Time\tWaiting Time\tTurnaround Time\n";

    for (int i = 0; i < n; i++)
    {
        total_wt += wt[i];
        total_tat += tat[i];

        cout << "P" << p[i]
             << "\t" << bt[i]
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
