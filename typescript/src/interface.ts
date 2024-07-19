// https://odada.me/345

/* 함수 인터페이스의 호출 시그니처 (Call Signature) */
// 호출 시그니처: 매개변수의 이름은 아무거나, 반환 타입과 갯수만 일치하면 됨
// 함수 내용이 너무 길면, 함수 인터페이스를 만들어서 객체 인터페이스에서 사용

interface GetName {
  (param: string): string;
}

interface User {
  readonly name: string;
  age: number;
  role?: boolean;
  getName?: GetName;
  // getName?: (param: string) => string;
  // (파라미터: 타입) => 반환값의 타입

  // readonly: 읽기 전용 프로퍼티
  // ? : 선택적 프로퍼티
}

const user1: User = {
  name: '김겨울',
  age: 3,
  role: true,
};
user1.age = 10;
// user1.name = '홍길동' -> 읽기 전용이라 오류 발생

const user2: User = {
  name: '김가을',
  age: 5,
  getName: function (name: string) {
    return `내 이름은 ${name}입니다!`;
  },
};
console.log(user2.getName);

// ===================================================================================
/* 인덱스 가능 타입 (Indexable Types) */

interface Animals {
  [item: number]: string;
  // 위와 같이 number로 지정하면 배열처럼 인덱스로 접근해서 사용 가능
}
const arr1: Animals = ['dog', 'cat', 'fish'];
console.log(arr1[0]); // 'dog'

interface User3 {
  [index: string]: unknown;
  // unknown은 모든 타입을 의미한다.
}
const obj1: User3 = {
  name: '김가을',
  age: 2,
};
console.log(obj1['name']); // '김가을'
console.log(obj1['age']);

// ===================================================================================
/* 확장 인터페이스 (Extending Interfaces) */

interface User4 {
  name: string;
  age: number;
}

interface Admin extends User4 {
  // User4 인터페이스를 상속받은 Admin 인터페이스
  role: string;
}

const admin: Admin = {
  name: '김겨울',
  age: 22,
  role: '관리자',
  // Admin, User4 인터페이스의 속성 모두 사용
};

// ===================================================================================
/* 상속 인터페이스 (Interface Inheritance) */

interface User5 {
  name: string;
  age: number;
}
interface User5 {
  // 위 인터페이스를 상속받아 새로운 인터페이스를 만들기
  role: boolean;
}

const user5: User5 = {
  name: '김가을',
  age: 2,
  role: true,
};
