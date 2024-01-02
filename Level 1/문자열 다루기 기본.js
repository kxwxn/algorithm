function solution(s) {

  if (s.length === 4 || s.length === 6){
    for (let i = 0; i < s.length; i++){
      if (s[i] !== '0' && s[i] !== '1' && s[i] !== '2' && s[i] !== '3' && s[i] !== '4' && s[i] !== '5' && s[i] !== '6' && s[i] !== '7' && s[i] !== '8' && s[i] !== '9'){
        return false;
      }
    }
    return true;
  }else{
    return false;
  }
  
  }
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true
//TODO: isNaN 이용하여 풀어보기, 정규표현식으로도 풀 수 있음 (Advanced Challenge)