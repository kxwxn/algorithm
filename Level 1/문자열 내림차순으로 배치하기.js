function solution(s) {
let ss = [];
let sss = '';
for (let i = 0; i < s.length; i++ ){
    ss.push(s[i]);
}
ss.sort();
ss.reverse();
for (let ii = 0; ii < ss.length; ii++){
    sss = sss + String(ss[ii]);
}
return sss;
}
// ss.sort(); 를 reverse 전에 해주었더니 성공.. 아래 것은 더 간단히 할 수 있는 코드

// function solution(s) {
//     s = s.split("");
//     s = s.sort();
//     s = s.reverse();
//     return s.join("");
//   }
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"