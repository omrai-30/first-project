#include <stdio.h>

// Function to implement FCFS Scheduling
void fcfs(int processes[], int n, int bt[])
{
    printf("\nFCFS Scheduling Algorithm\n");
    printf("Process Execution Order: ");
    for (int i = 0; i < n; i++) {
        printf("P%d ", processes[i]);
    }
    printf("\n");
}

// Function to implement Round Robin Scheduling
void roundRobin(int processes[], int n, int bt[], int quantum)
{
    int remaining_bt[n];
    for (int i = 0; i < n; i++)
        remaining_bt[i] = bt[i];
    
    printf("\nRound Robin Scheduling Algorithm\n");
    printf("Process Execution Order: ");
    int t = 0;
    int done;
    do {
        done = 1;
        for (int i = 0; i < n; i++) {
            if (remaining_bt[i] > 0) {
                done = 0;
                if (remaining_bt[i] > quantum) {
                    t += quantum;
                    remaining_bt[i] -= quantum;
                    printf("P%d ", processes[i]);
                } else {
                    t += remaining_bt[i];
                    remaining_bt[i] = 0;
                    printf("P%d ", processes[i]);
                }
            }
        }
    } while (!done);
    printf("\n");
}

int main()
{
    int n;
    printf("Enter number of processes: ");
    scanf("%d", &n);
    
    int processes[n], bt[n];
    for (int i = 0; i < n; i++) {
        processes[i] = i + 1;
        printf("Enter burst time for Process %d: ", i + 1);
        scanf("%d", &bt[i]);
    }
    
    fcfs(processes, n, bt);
    
    int quantum;
    printf("Enter time quantum for Round Robin: ");
    scanf("%d", &quantum);
    roundRobin(processes, n, bt, quantum);
    
    return 0;
}
