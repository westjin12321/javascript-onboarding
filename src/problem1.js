//<예외사항 관리>
// 예외사항 1) 시작 면과 마지막 면이 나온 경우 -> A+B=3또는 799이면 return -1
// 예외사항 2) 리스트에 들어있는 페이지가 차례대로 잘 들어있는지 -> B-A != 1이면 return -1
function ManageExceptions(){
  var temp;
  var tempArr = new Array();
  
  temp = pobi[0] + pobi[1]; 
  tempArr[0] = temp;//포비의 왼오페이지 더한거
  temp = crong[0] + crong[1];
  tempArr[1] = temp;//크롱의 왼오페이지 더한거

  temp = pobi[1] - pobi[0];
  tempArr[2] = temp;//포비의 두 페이지 차이
  temp = crong[1] - crong[0];
  tempArr[3] = temp;//크롱의 두페이지 차이

  if (tempArr[0] == 3 || tempArr[0] == 799 || tempArr[1] == 3 || tempArr[1] == 799 || tempArr[2] != 1 || tempArr[3] != 1){
    answer = -1;
  }
}

//<페이지 숫자를 각자릿수로 나누기>
// pobiArr[A백의자리, A십의자리, A일의자리, B백의 자리, B십의자리, B일의자리]
//crong도 같은 방식

function SeparateDigits(){
  var pobiArr = new Array();
  var crongArr = new Array();

  for(var i=0; i<2; i++){
  pobiArr[0 + 3*i] = pobi[i]/100;
  pobiArr[1 + 3*i] = (pobi[i]/10) % 10;
  pobiArr[2 + 3*i] = pobi[i] %10;

  crongArr[0 + 3*i] = crong[i]/100;
  crongArr[1 + 3*i] = (crongi[i]/10) % 10;
  crongArr[2 + 3*i] = crong[i] %10;  
  }
}

function problem1(pobi, crong) {
  var answer;

  ManageExceptions();
  SeparateDigits()
  Max()
  solution()
  
  return answer;
}

module.exports = problem1;
