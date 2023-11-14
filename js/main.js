/*
js에서 객체를 생성하는 방법2가지
1.객체리터럴식으로 생성
2.생성자를 통한 인스턴스 생성

ES6에서의 객체지향
-동일한 형식의 객체를 대량으로 뽑아내야 될때 자동화
-생성자:객체를 생셩해주는 함수
-인스턴스:생성자를 통해서 복사가된 객체
-프로토타입:생성자안에 자동으로 추가되는 공통이 저장공간(각각의 인스턴스에서 활용될 함수등록)
-가틍ㄴ 생성자를 통해서 복사된 인스턴스들은 prototype에 등록된 
-생성자  안쪽의 this:해당 생성자를 통해서 앞으로 복사될 인스턴스 객체를 지칭
*/

class student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.school = 'dcodelab';
	}
	plusage() {
		this.age = this.age + 1;
	}
}
const s1 = new student('andy', 20);
const s2 = new student('emily', 25);
console.log(s1, s2);
[s1, s2].forEach((el) => el.plusage());
console.log(s1, s2);
/*const s1 = {
	name: 'andy',
	age: 20,
	school: dcodelab,
};
const s2 = {
	name: 'emily',
	age: 25,
	school: dcodelab,
};
const s3 = {
	name: 'charss',
	age: 27,
	school: dcodelab,
};*/
