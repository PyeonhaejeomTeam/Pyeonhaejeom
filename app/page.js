import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">편해점</h1>
      <p className="home-description">
        당신의 음식 취향으로 알아보는 성향 테스트
      </p>
      <Link href="/game" className="button">
        테스트 시작하기
      </Link>
    </div>
  );
}
