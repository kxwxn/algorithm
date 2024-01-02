// function solution(n){
//     n = String(n);
//     let arr = [];
//     for (let i = 0; i < n.length; i++){
//       arr.push(Number(n[i]));
//     }
//     let answer = arr.reduce(function(a,b){
//         return a + b;
//         return a;
//     });
//     return answer;
// }

//Advanced Challenge - 숫자 풀이
// function solution(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

//Advanced Challenge - 문자 풀이
function solution(n) {
  return Number(String(n).split('').reduce((a, b) => {return Number(a) + Number(b);}),);
}

// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

//TODO: .split 과 reduce 를 이용하여 한줄에 풀어보기 (Advanced Challege)
