// MBTI 결과 계산 함수
export const calculateMBTIResult = (answers) => {
  // 각 지표별 점수 초기화
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  // 답변을 기반으로 점수 계산
  answers.forEach((answer) => {
    scores[answer]++;
  });

  // MBTI 유형 결정
  const type = [
    scores.E > scores.I ? "E" : "I",
    scores.S > scores.N ? "S" : "N",
    scores.T > scores.F ? "T" : "F",
    scores.J > scores.P ? "J" : "P",
  ].join("");

  // 각 지표별 백분율 계산
  const percentages = {
    EI: Math.round((scores.E / (scores.E + scores.I)) * 100),
    SN: Math.round((scores.S / (scores.S + scores.N)) * 100),
    TF: Math.round((scores.T / (scores.T + scores.F)) * 100),
    JP: Math.round((scores.J / (scores.J + scores.P)) * 100),
  };

  return {
    type,
    percentages,
    scores,
  };
};

// 답변 유효성 검사
export const validateAnswers = (answers) => {
  if (!Array.isArray(answers)) return false;
  if (answers.length !== 12) return false; // 총 12개의 질문

  const validValues = ["E", "I", "S", "N", "T", "F", "J", "P"];
  return answers.every((answer) => validValues.includes(answer));
};

// 진행률 계산
export const calculateProgress = (currentQuestionIndex) => {
  return Math.round((currentQuestionIndex / 12) * 100);
};
