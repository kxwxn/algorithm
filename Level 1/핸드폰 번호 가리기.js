// function solution(phone_number) {
//     let sum = '';
//     sum = '*'.repeat(phone_number.length-4) + phone_number[phone_number.length-4]  + phone_number[phone_number.length-3] + phone_number[phone_number.length-2]  + phone_number[phone_number.length-1];
//     return sum;
// }
function solution(phone_number) {
  return '*'.repeat(phone_number.length-4) + phone_number.slice(phone_number.length-4);;
  // replace 이용한 방법보다 3배는 빠르다고 하여 이 방법으로 수정
}

// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"
// TODO: 지금 코드에 .slice 를 써서도 풀 수있다. 연구해보고 해볼것
// TODO: .replace 정규표현식을 이용해 풀어보기 (Advanced Challenge)