// function solution(n, m) {
//   let maxYaksoo = 0;
//   let bigger = Math.max(n,m);
//   let smaller = Math.min(n,m);
  
//   for (let i = 0; i <= smaller; i++){
//     if (bigger % i === 0 && smaller % i === 0){
//       maxYaksoo = i;
//     }
//   }
//   let minBaesoo = (n * m) / maxYaksoo;
//   return [maxYaksoo,minBaesoo];
//   }
  // 최소공배수 : 두 수의 곱 을 최대공약수로 나눔
  // 최대공약수 : 둘 중 작은 수까지의 수 중에 둘다 나머지 없이 나누는 수 중 제일 큰 수 반환
function solution(n, m) {
  let a = gcd(n,m); // 최대공약수
  let b = n * m / gcd(n,m); // 최소공배수
  return [a,b];
}
function gcd(a,b){ 
  return b ? gcd(b, a%b) : a; 
}


//     문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.
// 입출력 예
// n	m	return
// 3	12	[3, 12]
// 2	5	[1, 10]
// 입출력 예 설명
// 입출력 예 #1
// 위의 설명과 같습니다.

// 입출력 예 #2
// 자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.
//TODO: 유클리드 호제법을 검색해보고 그를 이용해 풀어보기 (Advanced Challenge)