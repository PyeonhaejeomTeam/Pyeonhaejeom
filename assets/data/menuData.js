export const menuItems = [
  { 
    text: "불닭볶음면 + 치즈", 
    value: "spicy", 
    description: "매운맛의 정석! 치즈와 함께라면 더욱 맛있게",
    category: "라면",
    price: "4,500원",
    spicyLevel: "매움",
  },
  { 
    text: "삼각김밥 + 컵라면", 
    value: "classic", 
    description: "실패 없는 黃금 조합",
    category: "라면/김밥",
    price: "3,800원",
    spicyLevel: "보통",
  },
  { 
    text: "샌드위치 + 아이스커피", 
    value: "fresh", 
    description: "상큼한 아침을 위한 완벽한 한 끼",
    category: "샌드위치",
    price: "5,500원",
    spicyLevel: "없음",
  },
  { 
    text: "도시락 + 사이다", 
    value: "healthy", 
    description: "든든하고 깔끔한 식사",
    category: "도시락",
    price: "6,000원",
    spicyLevel: "선택가능",
  },
  { 
    text: "핫도그 + 초코우유", 
    value: "sweet", 
    description: "달콤함이 필요할 때!",
    category: "간식",
    price: "4,000원",
    spicyLevel: "없음",
  },
  { 
    text: "김밥 + 바나나우유", 
    value: "light", 
    description: "가벼운 한 끼로 딱!",
    category: "김밥",
    price: "4,200원",
    spicyLevel: "없음",
  }
]

export const categories = {
  라면: {
    icon: "🍜",
    description: "따뜻한 국물이 생각날 때"
  },
  김밥: {
    icon: "🍙",
    description: "간단하게 한 끼 해결"
  },
  샌드위치: {
    icon: "🥪",
    description: "신선한 아침 메뉴"
  },
  도시락: {
    icon: "🍱",
    description: "든든한 한 끼"
  },
  간식: {
    icon: "🌭",
    description: "출출할 때 딱!"
  }
} 