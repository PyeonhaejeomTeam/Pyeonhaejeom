export const personalities = {
  "맵부심 미식가": {
    traits: ["spicy", "adventurous", "energetic"],
    description: "당신은 매운 음식을 즐기는 도전적인 성격의 소유자입니다. 새로운 맛에 대한 도전을 두려워하지 않으며, 강렬한 맛을 선호합니다.",
    recommendations: [
      {
        name: "불닭볶음면 + 치즈 + 계란",
        description: "매운맛의 정점, 치즈와 계란으로 더욱 부드럽게",
        price: "5,000원"
      },
      {
        name: "신라면 + 치즈 + 떡",
        description: "적당한 매운맛과 쫄깃한 떡의 조화",
        price: "4,500원"
      }
    ]
  },
  "달콤 미식가": {
    traits: ["sweet", "emotional", "creative"],
    description: "당신은 달콤한 맛을 선호하는 감성적인 성격의 소유자입니다. 기분 전환이 필요할 때 달콤한 음식을 찾는 경향이 있습니다.",
    recommendations: [
      {
        name: "초코우유 + 카스타드",
        description: "달콤함의 완벽한 조화",
        price: "3,800원"
      },
      {
        name: "바나나우유 + 허니버터칩",
        description: "달콤 고소한 환상의 궁합",
        price: "3,500원"
      }
    ]
  },
  "실속 미식가": {
    traits: ["value", "rational", "practical"],
    description: "당신은 실용적이고 합리적인 성격의 소유자입니다. 가성비 좋은 메뉴를 찾아내는 능력이 탁월합니다.",
    recommendations: [
      {
        name: "삼각김밥 2개 + 컵라면",
        description: "알찬 구성의 가성비 세트",
        price: "4,000원"
      },
      {
        name: "도시락 + 음료수",
        description: "든든한 한 끼 세트",
        price: "6,500원"
      }
    ]
  }
}

export const personalityTraits = {
  spicy: "매운맛 선호",
  sweet: "단맛 선호",
  value: "실속 추구",
  adventurous: "모험적",
  emotional: "감성적",
  rational: "이성적",
  energetic: "활동적",
  creative: "창의적",
  practical: "실용적"
} 