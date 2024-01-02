function solution(board, moves) {
  let answer = 0, basket = [];
  moves.forEach((move)=>{
    //moves만큼 반복문
    const y = move-1;
    //y축의 index에 맞추기 위해 1을 빼준다.
    for (let x = 0; x < board.length; x++){
      if (board[x][y] > 0){
      // 인형이 있을 때
        if (basket[basket.length-1] === board[x][y]){
        // 이전에 바구니에 담긴 인형과 동일하면
          basket.pop();
          answer += 2;
          // 바구니를 비우고 점수 추가
        }else{
          basket.push(board[x][y]);
          //바구니에 추가
        }
        board[x][y] = 0;
        // 집은 인형 삭제
        break;
        //반복문 끝내고 다음 move로
      }
    }
  })
  return answer;
}