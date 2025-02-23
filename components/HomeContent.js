"use client";

import Link from "next/link";

export default function HomeContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          편해점에 오신 것을 환영합니다!
        </h1>
        <p className="text-gray-600 mb-8">
          당신의 편의점 취향을 알아보고 새로운 조합을 발견해보세요
        </p>
        <div className="flex justify-center">
          <Link
            href="/store-products"
            className="cu-button hover:opacity-90 transition"
          >
            CU 전체상품 보기
          </Link>
        </div>
      </div>
      <div className="home_container">
        <h1 className="home_title">
          🔥 요즘 인기 폭발!
          <br />
          나의 음식 취향 성향 테스트
        </h1>
        <p className="home_description">
          당신의 편의점 음식 취향을 알아보세요!
        </p>
        <Link href="/game" className="button">
          👉 1분만에 알아보기
        </Link>
      </div>
    </div>
  );
}
