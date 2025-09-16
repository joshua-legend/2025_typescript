type Student = { name: string; age: number; major: string };
const kwon: Student = {
  name: "예쥰",
  age: 22,
  major: "컴공",
};
const lee: Student = {
  name: "이정",
  age: 22,
  major: "경제",
};

//Product 타입 정의
//name,price,kcal

//Coffee 타입
//name,price,kcal,bean,ingredients

type Product = { name: string; price: number; kcal: number };
type Coffee = { bean: string; ingridents: string };
type Ade = { syrup: string; sparkling: string };

// const bluelemonAde: Product & Ade = {};
// const latte: Product & Coffee = {};
