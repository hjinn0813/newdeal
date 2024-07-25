/* typescript 입문 */
// JS (동적 타입) : 변수의 타입 오류를 런타임(동작) 시점에 확인
// TS (정적 타입) : 변수의 타입 오류를 컴파일 시점에 확인
// TS는 자바스크립트로 변환(컴파일) 후 브라우저에나 Node.js 환경에서 동작

/* 1. 데이터타입 종류 */
let str: string = '문자열';
let num: number = 123;
let bool: boolean = true;

let hello: string = 'Hello, World!';
// hello = 1; -> 타입이 달라서 오류 발생

// ===================================================================================
/* 1-1. 배열 */
let arr: number[] = [1, 2, 3];
let animals: string[] = ['dog', 'cat', 'panda'];

// never: 빈 배열
let empty: never[] = [];

// 여러 데이터 타입 모두 들어올 수 있음, 순서 상관 없음
let union: (string | number)[] = [1, 'dog', 3, 2, 'cat'];

// any: 어떤 타입도 들어올 수 있음
let any: any[] = [1, true, 'dog', undefined];

// tuple: 개수와 데이터타입, 순서가 정해져있는 배열
let tuple: [string, number] = ['one', 1];

// ===================================================================================
/* 1-2. 객체 */
// let obj: { key: 타입, key: 타입 } = { key: 값, key: 값 }
// ? : 선택적 프로퍼티 (있거나 없거나 상관없는)

let obj: { name: string; age: number; roll?: boolean } = {
  name: '겨울',
  age: 3,
};

/* 객체 인터페이스 */
// 객체의 타입을 미리 정의하여 사용, 재사용 가능하고 가독성이 좋음
// 기본형태 -> interface 이름 { key: 타입, key: 타입 }
// 인터페이스 이름 첫글자는 반드시 대문자로

interface IPerson {
  name: string;
  age: number;
  role?: boolean;
}

let userA: IPerson = { name: '김겨울', age: 3 };
let userB: IPerson = { name: '김가을', age: 2, role: true };

// ===================================================================================
/* 1-3. 함수 */
// 기본형태 -> function 함수명(매개변수: 타입): 반환타입 { ... }

function sum0(a: number, b: number): number {
  return a + b;
}
sum0(1, 2); // 3

const sum2: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
sum2(1, 2);

// const sum2 = (a: number, b: number) => {
//   return a + b;
// };
// sum2(1, 2);

const sum3 = (name: string): void => {
  /* void: return이 없는 함수 */
  console.log(`hello, ${name}`);
};
sum3('');
