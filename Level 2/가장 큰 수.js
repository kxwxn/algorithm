function solution(numbers) {
    let answer = numbers.map((number) => number.toString()).sort((a,b)=>(b+a) - (a+b)).join('');
    return answer.replace(/^0+/, '0');
  }
  // map() 메서드를 통해 numbers의 요소들을 모두 string으로 변형
  // string으로 변형한 numbers를 sort() 메서드를 통해 정렬
  // a+b와 b+a로 비교해 내림차순으로 정렬
  // join() 메서드를 통해 배열의 모든 요소를 문자열로 이어붙임
  // 0만 있는 경우, answer 값이 0...0이 되므로 문자열의 첫번째에 반복해서 나오는 0...0을 0으로 replace해서 결과 return
  