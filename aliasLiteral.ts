//사장 부장 차장 과장 대리 주임 사원 인턴
type Position = "사장" | "부장" | "차장" | "과장";
const leejeongPosition: Position = "사장";
type Direction = "up" | "down" | "left" | "right";

// 버거: 상하이 1955 빅맥 치즈
// 사이드: 감자튀김 코우슬로 치즈스틱
// 음료: 콜라 제로콜라 스프라이트 환타 물

// type Burger = "상하이버거" | "1955버거" | "빅맥" | "치즈버거";
// type Side = "감자튀김" | "코우슬로" | "치즈스틱";
// type Drink = "콜라" | "제로콜라" | "스프라이트" | "환타" | "물";
// type Macdonald = {
//   burger: Burger;
//   side: Side;
//   drink: Drink;
// };

const myBurger: Macdonald = {
  burger: "상하이버거",
  drink: "스프라이트",
  side: "치즈스틱",
};

// SUBWAY
// 빵: 플랫 브래드, 허니오트, 화이트
// 치즈: 슈레드 아메리칸 모짜렐라
// 야채: 양파, 피망, 토마토, 올리브, 양상추, 할라피뇨
// 소스: 마요네즈, 랜치, 스위트어니언, 허니머스타드, 소금,
type Bread = "플랫 브래드" | "허니 오트" | "화이트";
type Cheese = "슈레드" | "아메리칸" | "모짜렐라";
type Vegitable = "양파" | "피망" | "토마토" | "올리브" | "양상추" | "할라피뇨";
type Source = "마요네즈" | "랜치" | "스위트어니언" | "허니머스타드" | "소금";

type Subway = {
  bread: Bread;
  cheese: Cheese;
  vegitable: Vegitable[];
  source: Source[];
};

const myBLT: Subway = {
  bread: "플랫 브래드",
  cheese: "모짜렐라",
  source: ["소금", "허니머스타드"],
  vegitable: ["양상추", "양파", "토마토", "피망"],
};
