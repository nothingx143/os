#include <iostream>
#include <queue>
#include <vector>

using namespace std;

#define POP_LOOP while(!q.empty())
#define FOR_EDGES for(int e = head[u]; e; e = nxt[e])
#define FOR_I for(int i = 1; i <= n; i++)
#define FOR_M for(int i = 0; i < m; i++)
#define FOR_K for(int j = 0; j <= k_max; j++)
#define SKIP_VIS if (d > dist[u][k]) continue
#define RELAX_NORM if (dist[v][k] > d + w) { dist[v][k] = d + w; q.push({dist[v][k], v, k}); }
#define RELAX_FREE if (k < k_max && dist[v][k + 1] > d) { dist[v][k + 1] = d; q.push({dist[v][k + 1], v, k + 1}); }

struct Node {
    long long d;
    int u, k;
    bool operator>(const Node &o) const { return d > o.d; }
};

const long long INF = 1e18;
int head[100005], to[1000005], nxt[1000005], wt[1000005], ec = 1;
long long dist[100005][19];
int n, m, k_max, u, v, w;

void add_edge(int u, int v, int w) {
    to[ec] = v; wt[ec] = w; nxt[ec] = head[u]; head[u] = ec++;
    to[ec] = u; wt[ec] = w; nxt[ec] = head[v]; head[v] = ec++;
}

priority_queue<Node, vector<Node>, greater<Node>> q;

void init_dist() {
    FOR_I FOR_K dist[i][j] = INF;
}

void dijkstra() {
    dist[1][0] = 0;
    q.push({0, 1, 0});
    POP_LOOP {
        Node cur = q.top();
        q.pop();
        long long d = cur.d;
        int u = cur.u, k = cur.k;
        SKIP_VIS;
        FOR_EDGES {
            int v = to[e], w = wt[e];
            RELAX_NORM;
            RELAX_FREE;
        }
    }
}

void print_ans() {
    FOR_I {
        long long ans = INF;
        FOR_K ans = min(ans, dist[i][j]);
        cout << ans << " ";
    }
    cout << "\n";
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cin >> n >> m >> k_max;
    FOR_M {
        cin >> u >> v >> w;
        add_edge(u, v, w);
    }
    init_dist();
    dijkstra();
    print_ans();
    return 0;
}
