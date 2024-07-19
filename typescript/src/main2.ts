/* 1. 타입 추론 */

let str2 = '문자열';
// str2 = 123; -> 타입 달라서 오류 발생

function sum(a: number, b = 0) {
  return a + b;
}
console.log(sum(1, 2)); // 3
console.log(sum(1));

// ===================================================================================
/* 2. 타입 단언 (Type Assertion) */

const el = document.querySelector('body') as HTMLBodyElement;
el.textContent = 'Hello, World!';
// -> el 선언할때 as HTMLBodyElement 부분이 없으면 'el'이 'null'일 수 있음.
// 따라서 el 변수를 개발자가 명확하게 HTMLElement 타입으로 단언해야한다.

function getNum(x: number | null | undefined) {
  return Number((x as number).toFixed(2));
  // as 키워드: 함수의 매개변수에서 타입이 지정되어서 return에서도 x의 타입을 알려줘야 함
  // toFixed(): 주어진 매개변수만큼 소수점 뒷자리 자르기
}
getNum(3.1415);
getNum(null);

function getNum2(x: number | null | undefined) {
  return Number(x!.toFixed(2));
  // non-null 단언 연산자
  // null 또는 undefined로 인한 오류 발생
}
getNum2(3.14);
getNum2(null);

function getNum3(x: number | null | undefined) {
  if (x === null || x === undefined) {
    return 0;
  }
  return Number(x.toFixed(2));
}
getNum3(3.14);
getNum3(null);

// ===================================================================================
/* 3. 할당 단언 (Non-null Assertion) */

let num1!: number;
console.log(num1);
num1 = 10;
// 변수가 할당되기 전에 사용하면 오류 발생
// -> 변수에 !연산자 사용하여 할당 단언하면 오류 해결 가능

// ===================================================================================
/* 4. 타입 가드 (Type Guard) */

function logText(el: Element) {
  console.log(el.textContent);
}
const el2 = document.querySelector('div') as Element;
logText(el2);
// logText 함수는 Element 타입을 인수로 받는다.
// document.querySelector는 Element 또는 null일 수 있다.
// 그래서 el2 변수가 Element 타입이라고 단언한다.
// -> 이 방식은 el2 변수가 null일 가능성이 있어서 콘솔창에서 오류 발생

function logText2(el: Element | null) {
  if (el === null) {
    return;
  }
  console.log(el.textContent);
}
const el3 = document.querySelector('div');
logText2(el3);
