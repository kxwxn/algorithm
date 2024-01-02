function solution(s) {
  let sIndex = 0;
  if (s.length === 2){
    return s;
  }else{
    if (s.length % 2 === 0){
      sIndex = Math.round(s.length/2)-1;
      return s.substring(sIndex,sIndex+2);
    }else{
      sIndex = Math.round(s.length/2)-1;
      return s[sIndex];
    }
  }
  }
//   문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"
//TODO: Math.ceil 을 이용하여 풀어보기