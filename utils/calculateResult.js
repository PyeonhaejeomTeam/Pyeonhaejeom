export function calculateResult(answers) {
  // 답변에 따른 선호도 계산
  const preferences = {
    budget: answers[0], // 예산
    foodType: answers[1], // 음식 종류
    taste: answers[2], // 맛 선호도
    portion: answers[3], // 양
    mainIngredient: answers[4], // 주 재료
    prepTime: answers[5], // 준비 시간
    health: answers[6], // 건강 고려
    dessert: answers[7], // 디저트 필요
    temp: answers[8], // 온도
    adventure: answers[9] // 새로운 메뉴 도전
  };

  // 예산 범위 설정
  const budgetRanges = {
    low: 3000,
    medium: 5000,
    high: 8000,
    premium: Infinity
  };

  // CU 제품 필터링 및 점수 계산
  return function(products) {
    return products
      .filter(product => {
        // 가격 필터링
        const price = parseInt(product.가격.replace(/[^0-9]/g, ''));
        const budgetLimit = budgetRanges[preferences.budget];
        return price <= budgetLimit;
      })
      .map(product => {
        let score = 0;
        
        // 카테고리 매칭
        if (preferences.foodType === 'korean' && product.카테고리.includes('도시락')) score += 3;
        if (preferences.foodType === 'western' && (product.상품명.includes('버거') || product.상품명.includes('샌드'))) score += 3;
        
        // 맛 선호도 매칭
        if (preferences.taste === 'spicy' && (product.상품명.includes('매운') || product.상품명.includes('불닭'))) score += 3;
        if (preferences.taste === 'sweet' && (product.상품명.includes('달콤') || product.상품명.includes('카야'))) score += 3;
        
        // 양 매칭
        if (preferences.portion === 'heavy' && product.상품명.includes('한끼')) score += 2;
        if (preferences.portion === 'light' && (product.상품명.includes('미니') || product.상품명.includes('샐러드'))) score += 2;

        // 주 재료 매칭
        if (preferences.mainIngredient === 'meat' && (product.상품명.includes('닭') || product.상품명.includes('돈'))) score += 2;
        if (preferences.mainIngredient === 'seafood' && (product.상품명.includes('참치') || product.상품명.includes('새우'))) score += 2;

        // 이미지 URL 수정
        const imageUrl = product.이미지URL.startsWith('//') 
          ? `https:${product.이미지URL}`
          : product.이미지URL;

        return {
          ...product,
          이미지URL: imageUrl,
          score
        };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3); // 상위 3개 제품 추천
  };
} 