type Admin = "슈퍼관리자" | "일반관리자" | "참여자";
type Customer = "골드" | "실버" | "브론즈";
type Coffee = "아메리카노" | "라떼" | "두유라떼";

type User<T extends Admin | Customer> = {
  name: string;
  age: number;
  rank: T;
};

const kim: User<Customer> = {
  name: "김땡땡",
  age: 21,
  rank: "브론즈",
};
