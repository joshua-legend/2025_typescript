type Admin = {
  name: string;
  rank: "Super" | "Manger" | "Normal";
};

//1. keyof 연산자
//키값 추출
const a: keyof Admin = "name";
const a1: keyof Admin = "rank";

//2. typeof 연산자
//변수의 타입 추출
const bananaMilk: string = "바나나우유";
type B = typeof bananaMilk;
const test: boolean = false;
type C = typeof test;

//3. in 연산자
// 키들을 하나씩 돌면서 속성 만들기
type Coffee = {
  [K in "name" | "price"]: string;
};

const latte: Coffee = {
  name: "라떼",
  price: "1500",
};
