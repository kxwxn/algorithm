// function solution(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//       sum += arr[i];
//     }
//     return sum/arr.length;
// }
function solution(arr) {
  return arr.reduce((a,b)=>{return a + b})/arr.length;
}

//     문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5
//TODO: reduce 이용하여 풀어보기(Advanced Challenge)