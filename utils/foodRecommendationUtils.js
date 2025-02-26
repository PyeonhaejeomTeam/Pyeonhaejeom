import Papa from "papaparse";

export async function getFoodRecommendationsForMBTI(mbtiType, cuData) {
  // MBTI 유형별 선호하는 음식 카테고리 매핑
  const mbtiPreferences = {
    ISTJ: ["도시락", "김밥", "샌드위치"], // 정갈하고 전통적인 음식
    ISFJ: ["면류", "샌드위치", "주먹밥"], // 포근하고 편안한 음식
    INFJ: ["샐러드", "과일", "건강식품"], // 건강하고 창의적인 음식
    INTJ: ["도시락", "샐러드", "프로틴"], // 효율적이고 영양가 있는 음식
    ISTP: ["삼각김밥", "컵라면", "간편식"], // 실용적이고 간편한 음식
    ISFP: ["디저트", "음료", "과자"], // 감성적이고 예술적인 음식
    INFP: ["샐러드", "과일", "유기농"], // 건강하고 윤리적인 음식
    INTP: ["퓨전", "새로운", "실험적"], // 창의적이고 실험적인 음식
    ESTP: ["매운", "자극적", "에너지"], // 자극적이고 모험적인 음식
    ESFP: ["과자", "디저트", "음료"], // 재미있고 다양한 음식
    ENFP: ["특이한", "새로운", "이색"], // 독특하고 창의적인 음식
    ENTP: ["퓨전", "새로운", "실험적"], // 혁신적이고 도전적인 음식
    ESTJ: ["도시락", "김밥", "샌드위치"], // 전통적이고 실용적인 음식
    ESFJ: ["과자", "음료", "간식"], // 대중적이고 나누기 좋은 음식
    ENFJ: ["샐러드", "과일", "건강식품"], // 건강하고 배려하는 음식
    ENTJ: ["도시락", "샐러드", "프로틴"], // 효율적이고 고급스러운 음식
  };

  // 해당 MBTI 유형의 선호 카테고리 가져오기
  const preferences = mbtiPreferences[mbtiType];

  // 선호 카테고리에 맞는 상품 필터링
  const recommendations = cuData.filter((item) => {
    const matchesPreference = preferences.some(
      (pref) => item.상품명.includes(pref) || item.카테고리?.includes(pref)
    );
    return matchesPreference;
  });

  // 최대 6개의 추천 상품 선택 (랜덤)
  const shuffled = recommendations.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 6);
}

export function parseCuData(csvText) {
  const results = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });
  return results.data;
}
