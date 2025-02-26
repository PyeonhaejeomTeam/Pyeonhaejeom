"use client";

import Link from "next/link";

export default function HomeContent() {
  return (
    <div className="home_container">
      <h1 className="home_title">
        🔥 요즘 인기 폭발!
        <br />
        나의 음식 취향 성향 테스트
      </h1>
      <p className="home_description">당신의 편의점 음식 취향을 알아보세요!</p>
      <Link href="/test" className="button">
        👉 1분만에 알아보기
      </Link>
    </div>
  );
}
