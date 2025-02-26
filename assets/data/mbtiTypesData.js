const mbtiTypes = {
  ISTJ: {
    type: "청렴결백한 논리주의자",
    description: "사실에 근거하여 철저하고 신중하게 행동하는 현실주의자",
    strengths: ["책임감이 강함", "체계적", "신중함", "성실함"],
    weaknesses: ["융통성 부족", "새로운 시도를 어려워함", "감정 표현이 서툼"],
    careers: ["회계사", "공무원", "관리자", "프로젝트 매니저"],
  },
  ISFJ: {
    type: "용감한 수호자",
    description: "성실하고 따뜻한 마음을 가진 수호자",
    strengths: ["헌신적", "참을성이 많음", "세심함", "실용적"],
    weaknesses: [
      "변화를 두려워함",
      "자기주장이 약함",
      "비판을 받아들이기 어려워함",
    ],
    careers: ["간호사", "교사", "상담사", "사회복지사"],
  },
  INFJ: {
    type: "선의의 옹호자",
    description: "차분하고 신비한 분위기를 풍기는 이상주의자",
    strengths: ["통찰력이 뛰어남", "창의적", "성실함", "이해심이 많음"],
    weaknesses: ["완벽주의", "고집이 셈", "현실과 타협하기 어려움"],
    careers: ["작가", "심리상담사", "교사", "예술가"],
  },
  INTJ: {
    type: "용의주도한 전략가",
    description: "모든 일에 대해 전략적으로 생각하는 혁신가",
    strengths: ["분석력이 뛰어남", "독창적", "결단력이 있음", "높은 직관력"],
    weaknesses: [
      "타인의 감정을 간과할 수 있음",
      "지나치게 완벽주의적",
      "고집이 셈",
    ],
    careers: ["과학자", "프로그래머", "금융전문가", "전략기획자"],
  },
  ISTP: {
    type: "만능 재주꾼",
    description: "논리적이고 뛰어난 상황 적응력을 가진 탐험가",
    strengths: ["적응력이 뛰어남", "실용적", "객관적", "위기대처능력이 좋음"],
    weaknesses: [
      "약속과 규칙을 지키기 어려워함",
      "감정표현이 서툼",
      "인내심이 부족할 수 있음",
    ],
    careers: ["엔지니어", "정비사", "운동선수", "파일럿"],
  },
  ISFP: {
    type: "호기심 많은 예술가",
    description: "따뜻한 감성을 가진 유연한 예술가",
    strengths: ["예술적 감각", "겸손함", "적응력이 좋음", "배려심이 많음"],
    weaknesses: ["미루기 쉬움", "경쟁을 싫어함", "쉽게 스트레스받음"],
    careers: ["예술가", "디자이너", "음악가", "요리사"],
  },
  INFP: {
    type: "열정적인 중재자",
    description: "이상적인 세상을 만들어가는 낭만적인 이상주의자",
    strengths: [
      "창의력이 풍부함",
      "공감능력이 뛰어남",
      "적응력이 좋음",
      "이해심이 많음",
    ],
    weaknesses: ["비현실적일 수 있음", "감정적일 수 있음", "우유부단함"],
    careers: ["작가", "상담사", "번역가", "예술가"],
  },
  INTP: {
    type: "논리적인 사색가",
    description: "끊임없이 새로운 지식을 탐구하는 혁신가",
    strengths: ["분석력이 뛰어남", "창의적", "객관적", "지적 호기심이 많음"],
    weaknesses: [
      "실행력이 부족할 수 있음",
      "사회성이 부족할 수 있음",
      "감정표현이 서툼",
    ],
    careers: ["과학자", "프로그래머", "철학자", "분석가"],
  },
  ESTP: {
    type: "모험을 즐기는 사업가",
    description: "순발력 있게 상황을 잘 처리하는 모험가",
    strengths: ["현실적", "적응력이 좋음", "실용적", "순발력이 좋음"],
    weaknesses: [
      "인내심이 부족할 수 있음",
      "즉흥적일 수 있음",
      "깊이 있는 관계 형성이 어려울 수 있음",
    ],
    careers: ["기업가", "영업직", "경찰관", "운동선수"],
  },
  ESFP: {
    type: "자유로운 영혼의 연예인",
    description: "분위기를 즐겁게 만드는 우호적인 엔터테이너",
    strengths: ["낙천적", "친화력이 좋음", "열정적", "순발력이 좋음"],
    weaknesses: [
      "충동적일 수 있음",
      "집중력이 부족할 수 있음",
      "장기계획을 세우기 어려워함",
    ],
    careers: ["배우", "예술가", "상담사", "이벤트 플래너"],
  },
  ENFP: {
    type: "재기발랄한 활동가",
    description: "열정적으로 새로운 관계를 만드는 사교적인 활동가",
    strengths: ["창의적", "열정적", "적응력이 좋음", "친화력이 좋음"],
    weaknesses: [
      "집중력이 부족할 수 있음",
      "현실감이 부족할 수 있음",
      "감정기복이 심할 수 있음",
    ],
    careers: ["기자", "배우", "상담사", "마케터"],
  },
  ENTP: {
    type: "뜨거운 논쟁을 즐기는 변론가",
    description: "지적 도전을 즐기는 영리한 혁신가",
    strengths: ["창의적", "적응력이 좋음", "분석력이 뛰어남", "순발력이 좋음"],
    weaknesses: ["논쟁을 좋아함", "일관성이 부족할 수 있음", "민감한 성격"],
    careers: ["기업가", "변호사", "발명가", "엔지니어"],
  },
  ESTJ: {
    type: "엄격한 관리자",
    description: "사무적이고 실용적이며 질서를 중시하는 관리자",
    strengths: ["체계적", "실용적", "책임감이 강함", "결단력이 있음"],
    weaknesses: [
      "융통성이 부족할 수 있음",
      "감정표현이 서툼",
      "타인의 감정을 간과할 수 있음",
    ],
    careers: ["관리자", "군인", "판사", "경영자"],
  },
  ESFJ: {
    type: "사교적인 외교관",
    description: "타인을 향한 세심한 관심과 사교적인 성향을 가진 사람",
    strengths: ["친절함", "책임감이 강함", "협동심이 좋음", "인내심이 많음"],
    weaknesses: ["비판에 예민함", "지나치게 타인을 의식함", "변화를 두려워함"],
    careers: ["교사", "간호사", "상담사", "인사담당자"],
  },
  ENFJ: {
    type: "정의로운 사회운동가",
    description: "사람들을 이끌어주는 카리스마 있는 지도자",
    strengths: [
      "카리스마",
      "통찰력이 뛰어남",
      "이해심이 많음",
      "책임감이 강함",
    ],
    weaknesses: ["비판에 예민함", "우유부단할 수 있음", "완벽주의적 성향"],
    careers: ["교사", "상담사", "작가", "인사담당자"],
  },
  ENTJ: {
    type: "대담한 통솔자",
    description: "대담하고 상상력이 풍부한 강한 의지의 리더",
    strengths: [
      "리더십이 뛰어남",
      "자신감이 넘침",
      "결단력이 있음",
      "효율적임",
    ],
    weaknesses: ["완고함", "감정을 간과할 수 있음", "인내심이 부족할 수 있음"],
    careers: ["경영자", "변호사", "경영컨설턴트", "정치인"],
  },
};

export default mbtiTypes;
