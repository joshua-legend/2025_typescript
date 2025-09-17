// Product name price brand
type Product = {
  name: string;
  price: number;
  brand?: string; //optional
};
const gum: Product = {
  name: "버블껌",
  price: 1500,
};

type User = {
  name: string;
  age: number;
  gender: "Male" | "Female";
  email: string;
  nickname: string;
};

//1.Partial 모두 옵셔널 바꿔줌
const kim: Partial<User> = {};

//2.Pick 뽑기
const lee: Pick<User, "age" | "email"> = {
  email: "abc",
  age: 21,
};

//3.Omit
const park: Omit<User, "gender"> = {
  age: 21,
  email: "park",
  name: "박",
  nickname: "이명",
};

//quiz. {age?:number, email?:string,name?:string}
const quiz: Partial<Pick<User, "age" | "email" | "name">> = {};

//4.recond() - 객체 형태 만들기
const choi: Record<"name" | "email", string> = {
  name: "최땡땡",
  email: "abc@naver",
};

const jeon: Record<"age", number> = {
  age: 21,
};

//5. Extract/Exclude
type Rank = "A" | "B" | "C" | "D" | "F";

const myRank: Exclude<Rank, "A" | "B"> = "D";
const yourRank: Extract<Rank, "A" | "B"> = "B";

type Test = keyof User;
const test1: Test = "gender";
