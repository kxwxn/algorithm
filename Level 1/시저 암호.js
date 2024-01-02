// function solution(s, n) {
//     let strL = 'abcdefghijklmnopqrstuvwxyz';
//     let strU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let strUIndex = 0;
//     let strLIndex = 0;
//     let sum = '';
//     for (let i = 0; i < s.length; i++){
//       strUIndex = strU.indexOf(s[i]);
//       strLIndex = strL.indexOf(s[i]);
//       if (s[i] === ' '){
//         sum += ' ';
//       }else if (s[i] === s[i].toUpperCase()){
//         if (strUIndex + n >= 26){
//           sum += strU[strUIndex + n - 26];
//         }else{
//           sum += strU[strUIndex+n]
//         }
//       }else if (s[i] === s[i].toLowerCase()){
//         if (strLIndex + n >= 26){
//           sum += strL[strLIndex + n - 26];
//         }else{
//           sum += strL[strLIndex+n]
//         }
//       }
//     }
//     return sum;
// }

// Advanced Challenge
function solution(s, n) {
  let abc = '"abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                                        ';
  return s.split('').map((word)=>{return abc[abc.indexOf(word) + n] }).join('');
}

// 시저 암호
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"
//TODO: 조금만 더 간결하게 써보기! (Advanced Challenge)
