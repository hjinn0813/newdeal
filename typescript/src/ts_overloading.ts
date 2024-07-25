// https://odada.me/346

// =========================================================================================
/* 명시적 this */

interface Cat2 {
  name: string;
  age: number;
}

const cat: Cat2 = {
  name: '김가을',
  age: 2,
};

// 문법: (this: Type)
function setName(this: Cat2, name: string) {
  console.log(`이름을 변경합니다: ${this.name} -> ${name}`);

  // 이 함수에서 this는 cat2라는 인터페이스로 정의한 cat 객체를 의미한다.
  // 그러므로 함수 내부에서 cat 객체의 name을 변경할 수 있다.
  // this는 반드시 Cat2 타입의 객체여야 한다고 명시했기 때문에,
  // any 타입이 될 수 없어서 this.name 같은 접근이 안전할 수 있다.
}

setName.call(cat, '김겨울');
// 기본 구조: call(this로 사용할 객체, 함수의 매개변수들)
// call 메서드에서 this는 Cat2 인터페이스를 사용한 cat 객체를 의미한다.
// 메서드의 두 번째 인자로 고양이의 새로운 이름인 '김겨울'을 전달했다.
// this는 cat 객체이므로, 콘솔에 고양이 이름이 '김가을'에서 '김겨울'로 변경된다는 메시지가 나온다.

// =========================================================================================
/* 오버로딩 (Overloading) */
// 함수의 이름은 같지만 매개변수의 타입 또는 개수가 다른 여러 함수를 정의하는 방법

// 타입 선언
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// 함수 구현
function add(a: any, b: any) {
  return a + b;
}

add(1, 2); // 숫자의 덧셈 출력
add('hello', ' 바보'); // 문자열 결합 출력
// add(1, ' 바보'); -> 오류 발생

// a, b가 어떤 타입이든 받을 수 있으라고 함수에서는 any 타입으로 지정
// 그러나 타입 선언을 저렇게 했기 때문에, 둘 중에 하나의 타입만 지정할 수 있다.
// (타입 선언으로 인해, 매개변수의 타입과 반환 타입에 대한 정보가 유지된다.)
