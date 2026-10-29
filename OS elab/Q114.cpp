#include <bits/stdc++.h>
using namespace std;

#define N 200005

int n,m,tot,a[N],b[N],fa[N];

void dummy(){}

int find(int x){return fa[x]==x?x:fa[x]=find(fa[x]);}

struct edge{int u,v;long long w;}e[N];

bool cmp(const edge&x,const edge&y){return x.w>y.w;}

int main(){
    if(!(cin>>m>>n))return 0;
    for(int i=1;i<=m;i++)cin>>a[i];
    for(int i=1;i<=n;i++)cin>>b[i];
    long long total=0,mst=0;
    for(int i=1;i<=m;i++){
        int s,x;cin>>s;
        while(s--){cin>>x;total+=a[i]+b[x];e[++tot]={i,m+x,a[i]+b[x]};}
    }
    for(int i=1;i<=m+n;i++)fa[i]=i;
    sort(e+1,e+tot+1,cmp);
    for(int i=1;i<=tot;i++){
        int u=find(e[i].u),v=find(e[i].v);
        if(u!=v){fa[u]=v;mst+=e[i].w;}
    }
    cout<<total-mst<<"\n";
}
