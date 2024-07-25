/* 클래스는 객체 지향 프로그래밍에서
특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀.
객체를 정의하기 위한 상태(멤버 변수)와 메서드(함수)로 구성된다. */
// ===================================================================================

/* 접근 제한자 (Access Modifiers) */
// 클래스의 멤버에 접근할 수 있는 범위를 지정하는 용도

class Animal {
  /* 속성 타입과 기본값 지정 */
  public name: string = '';
  protected age: number = 0;
  private weight: number = 0;

  // public: 외부에서 접근 가능, 클래스 바디에서 생략 가능
  // protected: 상속받은 클래스에서 접근 가능
  // private: 해당 클래스 내부에서만 접근 가능 (비공개)
  // 기본값이 있으면 코드의 안정성이 높아지고, 속성이 초기화되지 않아 발생되는 오류가 방지된다.

  /* 객체 생성시 호출되는 생성자 함수 */
  constructor(name: string, age: number, weight: number) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  // 메서드에 public을 붙이면 외부에서 접근 가능
  public print() {
    console.log(
      `이름: ${this.name}, 나이: ${this.age}, 몸무게: ${this.weight}`
    );
  }
}

class dog extends Animal {
  print() {
    console.log(`${this.name}은 ${this.age}살입니다.`);
  }
}

const puppy = new Animal('김겨울', 2, 3);
puppy.print(); // '이름: 김겨울, 나이: 2, 몸무게: 3'

const puppy2 = new dog('김가을', 3, 6);
puppy2.print(); // '김가을은 3살입니다.'

console.log(puppy.name); // '김겨울'
// console.log(puppy.age); -> 상속받은 클래스에서 접근 가능하여 오류 발생
// console.log(puppy.weight); -> 클래스 내부에서만 접근 가능하여 오류 발생

// ===================================================================================
// 각각의 속성과 constructor의 매개변수가 동일한 이름을 가지고 있다면,
// 생성자의 매개변수에 접근 제한자를 붙여서 코드를 간결하게 작성할 수 있다.

class Animal2 {
  constructor(
    public name: string = '',
    protected age: number = 0,
    private weight: number = 0
  ) {}

  public print() {
    console.log(
      `이름: ${this.name}, 나이: ${this.age}, 몸무게: ${this.weight}`
    );
  }
}

class beagle extends Animal {
  print() {
    console.log(`${this.name}은 ${this.age}살입니다.`);
  }
}

const doggie = new Animal('김겨울', 2, 3);
doggie.print(); // '이름: 김겨울, 나이: 2, 몸무게: 3'

const doggie2 = new beagle('김가을', 3, 6);
doggie2.print(); // '김가을은 3살입니다.'

console.log(doggie.name); // '김겨울'
// console.log(doggie.age); -> 상속받은 클래스에서 접근 가능하여 오류 발생
// console.log(doggie.weight); -> 클래스 내부에서만 접근 가능하여 오류 발생
