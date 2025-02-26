const mbtiFoodRecommendations = {
  ISTJ: {
    description: "체계적이고 신중한 당신을 위한 음식 추천",
    preferences: ["정갈한 한식", "영양가 있는 도시락", "전통적인 맛"],
    recommendations: [
      {
        category: "도시락",
        items: ["프리미엄 도시락", "영양 도시락", "건강 도시락"],
      },
      {
        category: "한식",
        items: ["김밥", "비빔밥", "제육도시락"],
      },
    ],
  },
  ISFJ: {
    description: "따뜻하고 배려심 많은 당신을 위한 음식 추천",
    preferences: ["포근한 음식", "건강식", "편안한 맛"],
    recommendations: [
      {
        category: "면류",
        items: ["우동", "라면", "국수"],
      },
      {
        category: "간편식",
        items: ["샌드위치", "샐러드", "주먹밥"],
      },
    ],
  },
  INFJ: {
    description: "이상적이고 창의적인 당신을 위한 음식 추천",
    preferences: ["독특한 맛", "건강한 재료", "새로운 조합"],
    recommendations: [
      {
        category: "퓨전음식",
        items: ["치즈김밥", "떡볶이버거", "크림파스타"],
      },
      {
        category: "디저트",
        items: ["그릭요거트", "과일컵", "견과류"],
      },
    ],
  },
  INTJ: {
    description: "전략적이고 혁신적인 당신을 위한 음식 추천",
    preferences: ["효율적인 식사", "영양 밸런스", "실용적인 선택"],
    recommendations: [
      {
        category: "도시락",
        items: ["닭가슴살 도시락", "샐러드 도시락", "프로틴 도시락"],
      },
      {
        category: "간편식",
        items: ["프로틴 바", "에너지바", "견과류"],
      },
    ],
  },
  ISTP: {
    description: "실용적이고 적응력 있는 당신을 위한 음식 추천",
    preferences: ["간편한 식사", "실용적인 선택", "다양한 맛"],
    recommendations: [
      {
        category: "간편식",
        items: ["삼각김밥", "컵라면", "핫도그"],
      },
      {
        category: "스낵",
        items: ["에너지바", "견과류", "과자"],
      },
    ],
  },
  ISFP: {
    description: "예술적이고 감성적인 당신을 위한 음식 추천",
    preferences: ["아름다운 비주얼", "부드러운 맛", "감성적인 선택"],
    recommendations: [
      {
        category: "디저트",
        items: ["마카롱", "케이크", "푸딩"],
      },
      {
        category: "음료",
        items: ["스무디", "라떼", "에이드"],
      },
    ],
  },
  INFP: {
    description: "이상적이고 창의적인 당신을 위한 음식 추천",
    preferences: ["특별한 맛", "감성적인 선택", "건강한 재료"],
    recommendations: [
      {
        category: "샐러드",
        items: ["과일 샐러드", "닭가슴살 샐러드", "키노아 샐러드"],
      },
      {
        category: "디저트",
        items: ["수제 쿠키", "유기농 스낵", "과일"],
      },
    ],
  },
  INTP: {
    description: "논리적이고 창의적인 당신을 위한 음식 추천",
    preferences: ["실험적인 맛", "새로운 조합", "효율적인 선택"],
    recommendations: [
      {
        category: "퓨전음식",
        items: ["멕시칸 김밥", "커리 라면", "피자 샌드위치"],
      },
      {
        category: "간편식",
        items: ["프로틴 바", "에너지 드링크", "견과류"],
      },
    ],
  },
  ESTP: {
    description: "활동적이고 모험적인 당신을 위한 음식 추천",
    preferences: ["자극적인 맛", "새로운 맛", "에너지 충전"],
    recommendations: [
      {
        category: "간식",
        items: ["매운 과자", "에너지 드링크", "단백질 바"],
      },
      {
        category: "면류",
        items: ["매운 라면", "짜파게티", "불닭볶음면"],
      },
    ],
  },
  ESFP: {
    description: "활기차고 즐거운 당신을 위한 음식 추천",
    preferences: ["재미있는 음식", "다양한 맛", "공유하기 좋은 음식"],
    recommendations: [
      {
        category: "간식",
        items: ["과자 세트", "젤리", "초콜릿"],
      },
      {
        category: "음료",
        items: ["밀크쉐이크", "스무디", "에이드"],
      },
    ],
  },
  ENFP: {
    description: "열정적이고 창의적인 당신을 위한 음식 추천",
    preferences: ["새로운 맛", "재미있는 조합", "다양한 경험"],
    recommendations: [
      {
        category: "퓨전음식",
        items: ["이색 김밥", "특이한 과자", "새로운 음료"],
      },
      {
        category: "디저트",
        items: ["특이한 과자", "새로운 맛 아이스크림", "이색 디저트"],
      },
    ],
  },
  ENTP: {
    description: "혁신적이고 도전적인 당신을 위한 음식 추천",
    preferences: ["실험적인 맛", "새로운 조합", "도전적인 선택"],
    recommendations: [
      {
        category: "퓨전음식",
        items: ["이색 도시락", "특이한 라면", "새로운 맛 과자"],
      },
      {
        category: "음료",
        items: ["이색 음료", "에너지 드링크", "특이한 조합의 음료"],
      },
    ],
  },
  ESTJ: {
    description: "체계적이고 실용적인 당신을 위한 음식 추천",
    preferences: ["균형 잡힌 식사", "효율적인 선택", "전통적인 맛"],
    recommendations: [
      {
        category: "도시락",
        items: ["균형잡힌 도시락", "한식 도시락", "샐러드"],
      },
      {
        category: "간편식",
        items: ["샌드위치", "김밥", "주먹밥"],
      },
    ],
  },
  ESFJ: {
    description: "사교적이고 배려심 많은 당신을 위한 음식 추천",
    preferences: ["나누기 좋은 음식", "대중적인 맛", "편안한 선택"],
    recommendations: [
      {
        category: "간식",
        items: ["과자 세트", "젤리 세트", "과일"],
      },
      {
        category: "음료",
        items: ["커피", "차", "주스"],
      },
    ],
  },
  ENFJ: {
    description: "카리스마 있고 이해심 많은 당신을 위한 음식 추천",
    preferences: ["건강한 선택", "공유하기 좋은 음식", "특별한 맛"],
    recommendations: [
      {
        category: "건강식",
        items: ["샐러드", "과일", "견과류"],
      },
      {
        category: "간식",
        items: ["유기농 과자", "프로틴 바", "건강 주스"],
      },
    ],
  },
  ENTJ: {
    description: "리더십 있고 효율적인 당신을 위한 음식 추천",
    preferences: ["효율적인 식사", "고급스러운 맛", "영양가 있는 선택"],
    recommendations: [
      {
        category: "도시락",
        items: ["프리미엄 도시락", "단백질 도시락", "샐러드"],
      },
      {
        category: "간편식",
        items: ["프로틴 바", "견과류", "에너지 드링크"],
      },
    ],
  },
};

export default mbtiFoodRecommendations;
