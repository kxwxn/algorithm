function solution(n, edge) {
  let answer = 0;
  const bfs = (arr,start,end) =>{
    let visited = new Array(end + 1);
    let level = new Array(end + 1);
    let queue = [start];
    level[0] = 0;
    level[start] = 0;
    visited[start] = true;
    let lev;
    while(queue.length){
      var node = queue.shift()
      lev = level[node] + 1;
      for(let edge of arr){
        if(edge[0]==node && visited[edge[1]]==undefined) {
          queue.push(edge[1]);
          visited[edge[1]] = true;
          level[edge[1]] = lev;
        }
        else if(edge[1]==node && visited[edge[0]]==undefined) {
          queue.push(edge[0]);
          visited[edge[0]]=true;
          level[edge[0]] = lev;
        }
      }
    }
  return level.filter((el)=> {return el === lev-1}).length;
  }    
  return bfs(edge,1,n);
}

// 문제 설명
// n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

// 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 노드의 개수 n은 2 이상 20,000 이하입니다.
// 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
// vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.
// 입출력 예
// n	vertex	return
// 6	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	3
// 입출력 예 설명
// 예제의 그래프를 표현하면 아래 그림과 같고, 1번 노드에서 가장 멀리 떨어진 노드는 4,5,6번 노드입니다.
