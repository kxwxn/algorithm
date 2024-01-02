// function solution(n) {
//   let arr = [];
//   let sum = '';
//   n = String(n);
//   for (let i = 0 ; i < n.length; i ++){
//     arr.push(n[i]);
//   }
//   arr.sort(function(a,b){
//       return b - a});
//   for (let ii = 0; ii < arr.length; ii++){
//     sum = sum + arr[ii];
//   }
//   return Number(sum);
// }

//Advanced Challenge
function solution(n) {
  return Number(String(n).split('').sort((a,b)=>{return b - a;}).join(''));
}

//문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
//TODO: .split과 .join을 이용하여 풀어보자. (Advanced Challenge)