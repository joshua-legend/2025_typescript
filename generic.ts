type Student1<A> = {
  name: string;
  age: number;
  major: A;
};
type MyUnivMajor = "영어" | "일본" | "중국";
const jeon: Student1<MyUnivMajor> = {
  name: "전수효",
  age: 30,
  major: "일본",
};

type Burger = "상하이버거" | "1955버거" | "빅맥" | "치즈버거";
type MacMorningBurger = "치킨 머핀" | "치즈 머핀" | "계란 머핀";

type Side = "감자튀김" | "코우슬로" | "치즈스틱";
type MacMorningSide = "해쉬브라운";

type Drink = "콜라" | "제로콜라" | "스프라이트" | "환타" | "물";
type MacMorningDrink = "커피" | "우유";

type Macdonald<M, S, D> = {
  main: M;
  side: S;
  drink: D;
};

const myMorning: Macdonald<MacMorningBurger, MacMorningSide, MacMorningDrink> = {
  main: "치즈 머핀",
  drink: "커피",
  side: "해쉬브라운",
};
