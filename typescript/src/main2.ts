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
// -> 변수가 나중에 값을 가질 것이라고 컴파일러에게 확신을 주는 방식

let num1!: number;
console.log(num1);
num1 = 10;

// 변수는 있는데 값이 없으면, ts는 변수가 사용되기 전에 값이 없을 수 있다고 생각해서 오류 발생
// -> 변수에 !연산자 사용하여 할당 단언하면 오류 해결 가능
// -> !연산자는 "이 변수는 나중에 반드시 값을 가질 것"이라고 알려주는 역할

// ===================================================================================
/* 4. 타입 가드 (Type Guard) */

function logText(a: Element) {
  console.log(a.textContent);
}
const a = document.querySelector('div') as Element;
logText(a);
// logText 함수는 Element 타입을 인수로 받는다.
// document.querySelector는 Element 또는 null일 수 있다.
// 그래서 a 변수가 Element 타입이라고 단언한다.
// -> 이 방식은 a 변수가 null일 가능성이 있어서 콘솔창에서 오류 발생

function logText2(b: Element | null) {
  if (b === null) {
    return;
  }
  console.log(b.textContent);
}
const b = document.querySelector('div');
logText2(b);
// if문으로 b가 null인지 확인하여 b를 element 타입으로 사용하면 오류가 없다
// -> if문 안에서는 b가 null이고, 밖에서는 null이 아님을 확신하기 때문

// ===================================================================================
/* 5. 타입 별칭 (Type Aliases) */

type Cat =
  | {
      name: string;
      age: number;
      role: boolean;
    }
  | [string, number, boolean];
// 새로운 타입을 정의하는 용도. 기존 타입을 참조하여 새로운 타입을 정의 가능
// -> 여기서는 객체형, 배열형 둘 중에 하나를 가질 수 있다는 의미

const cat1: Cat = {
  name: '김가을',
  age: 2,
  role: false,
};

const cat2: Cat = ['김겨울', 22, true];
