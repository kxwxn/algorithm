function solution(tickets) {
  tickets.sort();
  // 티켓 오름차순 정렬
  let visited=Array(tickets.length).fill(false);
  var answer = [];
  dfs("ICN",0,["ICN"])
  // 현재 위치(cur)는 "ICN", cnt는 0, 다녀온 곳(path)에는 "ICN"이 담긴 채로 시작한다.
  function dfs(cur,cnt,path){
    if(cnt === tickets.length && answer.length === 0){
      answer = path;
  // tickets의 길이만큼 반복을 마쳤고 answer에 아무 것도 없을 때
  // answer에 path(다녀온 곳)를 할당한다.(재귀 종료)
      return;
    }
    for(let i = 0;i < tickets.length; i++){
  // 0부터 tickets의 길이만큼 탐색한다.
      if(visited[i]) continue;
  // 현재 인덱스에 방문한 적이 있다면 스킵한다.
      if(tickets[i][0]===cur){
        visited[i] = true;
  // 현재 위치(cur)와 출발점[i][0]이 같다면
  // visited의 현재 index에 true를 할당하고
        dfs(tickets[i][1],cnt+1,[...path,tickets[i][1]]);
  // 도착점[i][1]을 현재위치(cur)로, cnt는 1 증가하고 path에 도착점[i][1]을 붙여 넣은 채로
  // dfs함수를 재귀호출한다.
      }
    }
  }
  return answer;
}