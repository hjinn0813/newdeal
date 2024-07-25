/* Generic */
// 함수를 호출하는 시점에 데이터 타입을 지정할 수 있도록 하는 문법.
// - Any: 들어올 수 있는 데이터 타입에 제한없이 계속 열려있다.
// - Generic: 함수 호출 이후에 들어오는 매개변수에 따라 데이터 타입도 같이 결정된다.
// ===================================================================================

/* 함수 generic */
interface Obj {
  x: number;
}
type Arr = [number, number];

// 제너릭 문법으로 타입을 파라미터로 전달
function toArray<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

console.log(
  // 꺽쇠 괄호로 타입을 명시적으로 지정, 추론 가능하여 생략 가능
  toArray<string, string>('a', 'b'),
  toArray<number, number>(1, 2),
  toArray<boolean, boolean>(true, false),
  toArray<Obj, Obj>({ x: 1 }, { x: 2 }),
  toArray<Arr, Arr>([1, 2], [3, 4])
);

// ===================================================================================
/* 클래스 generic */

// class User2 {
//   public name2;
//   constructor(name: string) {
//     this.name2 = name;
//   }
//   getName2(): string {
//     return this.name2;
//   }
// }

// 위 코드를 축약하고, 제너릭 문법 사용
class User2<T> {
  constructor(public name2: T) {}

  getName2(): T {
    return this.name2;
  }
}

const admin2 = new User2<string>('김가을');
console.log(admin2.getName2());

// ===================================================================================
/* 인터페이스 generic */

interface MyCat<T> {
  name: string;
  value: T;
}

const user11: MyCat<string> = {
  name: '김가을',
  value: '귀여움',
};
const user22: MyCat<number> = {
  name: '김겨울',
  value: 22,
};
const user3: MyCat<boolean> = {
  name: '김봄',
  value: true,
};
const user4: MyCat<number[]> = {
  name: '김여름',
  value: [1, 2, 3],
};

// ===================================================================================
/* generic 타입의 제약 */
interface MyDog<T extends string | number> {
  // T는 string 또는 number 타입만 허용한다
  name: string;
  value: T;
}

const user0: MyDog<string> = {
  name: '김가을',
  value: '귀여움',
};
const user00: MyDog<number> = {
  name: '김겨울',
  value: 22,
};

/* 제너릭으로 string, number를 지정했는데 불리언과 배열이 와서 아래 코드는 오류 발생 */
// const user33: MyDog<boolean> = {
//   name: '김봄',
//   value: true,
// };
// const user44: MyDog<number[]> = {
//   name: '김여름',
//   value: [1, 2, 3],
// };
