// function solution(arr) {
//     let arrMin = arr[0];
//     let arrIndex = 0;
    
//     if (arr.length <= 1){
//       return [-1];    
//     }else {
//       for (let i = 0; i < arr.length; i++){
//         if (arr[i] <= arrMin){
//           arrMin = arr[i];
//           arrIndex = i;
//         }
//       }
//     }
//     arr.splice(arrIndex,1);
//     return arr;
// }

//Advanced Challenge
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)),1);
  return arr.length === 0 ? [-1] : arr;
}

// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]
//TODO: splice 와 indexOf, Math.min(...)을 사용하여 풀어보기 (Advanced Challenge)