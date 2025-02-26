import ChallengeCard from "@/components/ChallengeContent";

export default function ChallengePage() {
  const challenges = [
    {
      title: "3분 찰떡 조합 챌린지",
      difficulty: "보통",
      timeLimit: "3분",
      reward: "인증 뱃지",
      link: "/challenge/time",
    },
    {
      title: "랜덤 음식 도전",
      difficulty: "어려움",
      timeLimit: "없음",
      reward: "용기 뱃지",
      link: "/challenge/random",
    },
    {
      title: "5천원으로 호캉스",
      difficulty: "쉬움",
      timeLimit: "10분",
      reward: "미식가 뱃지",
      link: "/challenge/gourmet",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">편의점 챌린지 🏆</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>
    </div>
  );
}
