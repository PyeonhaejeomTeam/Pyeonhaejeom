import Link from "next/link";

export default function Home() {
  return (
    <div className="home_container">
      <h2 className="home_title">🔥 요즘 인기 폭발!<br/>나의 음식 취향 성향 테스트</h2>
      <p className="home_description">
        ✨ 당신의 음식 취향으로 알아보는 TMI 성향 테스트! 지금 바로 참여하기! ✨
      </p>
      <Link href="/game" className="button">
        👉 1분만에 알아보기
      </Link>
    </div>
  );
}
