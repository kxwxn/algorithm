function solution(places) {
  let answer = [], result = 1, xCheck = [], yCheck = [];
    for (let place of places){
      for (let y = 0; y < place.length; y++){
        for (let x = 0; x < place[y].length; x++){
            
          if (x-1 < 0) xCheck = [place[y][x+1]]
          else if (x+1 > place[y].length) xCheck = [place[y][x-1]]
          else xCheck = [place[y][x-1],place[y][x+1]];
            
          if (y-1 < 0) yCheck = [place[y+1]]
          else if (y+1 > place.length-1) yCheck = [place[y-1][x]]
          else yCheck = [place[y-1][x],place[y+1][x]];
            
          const xcHasP = xCheck.filter((el) => {return el === 'P'}).length;
          const ycHasP = yCheck.filter((el) => {return el === 'P'}).length;
            
          if (place[y][x] === 'O'){   // 현재 위치가 'O'일 때 
            if (xcHasP + ycHasP >= 2){ // 상하좌우 중 'P'가 2개 이상이면
              result = 0;
              break;
            }
          }else if (place[y][x] === 'P'){  // 현재 위치가 'P'일 때
            if (xcHasP > 0 || ycHasP > 0){ // 상하좌우중 'P'가 1개라도 있으면
              result = 0;
              break;
            }
          }
        }
        if (result === 0) break;
      }
      answer.push(result);
      result = 1;
    }
    return answer;
  }