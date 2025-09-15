// Union 연산자 [or]: |
const num1: string | number = "23";

// Intersection 연산자 [and]: &
// const num2: string & number

const person: { name: string } & { age: number } = {
  age: 21,
  name: "김타스",
};
