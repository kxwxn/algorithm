function solution(maps) {
  let queue = [];
  let answer = 1;
  let directX = [-1,1,0,0];
  let directY = [0,0,-1,1];
  const n = maps.length;
  const m = maps[0].length;
  
  queue.push([0,0]);
  maps[0][0] = 0;
  
  while (queue.length > 0){
    let size = queue.length;
    for (let i = 0; i < size; i++){
      let [x, y] = queue.shift();
      for (let j = 0; j < 4; j++){
        let nx = x + directX[j];
        let ny = y + directY[j];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1){
          if (nx === n - 1 && ny === m - 1){
            return answer + 1;
          }
          queue.push([nx,ny]);
          maps[nx][ny] = 0;
        }
      }
    }
    answer++;
  }
  return -1;
}

// 문제 설명
// ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.

// 지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다. 다음은 5 x 5 크기의 맵에, 당신의 캐릭터가 (행: 1, 열: 1) 위치에 있고, 상대 팀 진영은 (행: 5, 열: 5) 위치에 있는 경우의 예시입니다.

// 최단거리1_sxuruo.png

// 위 그림에서 검은색 부분은 벽으로 막혀있어 갈 수 없는 길이며, 흰색 부분은 갈 수 있는 길입니다. 캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동하며, 게임 맵을 벗어난 길은 갈 수 없습니다.
// 아래 예시는 캐릭터가 상대 팀 진영으로 가는 두 가지 방법을 나타내고 있습니다.