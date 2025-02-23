"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="menu_container">
      <Link
        href="/"
        className={`menu_link ${pathname === "/" ? "menu_link_active" : ""}`}
      >
        홈
      </Link>

      <Link
        href="/community"
        className={`menu_link ${
          pathname === "/community" ? "menu_link_active" : ""
        }`}
      >
        커뮤니티
      </Link>
      <Link
        href="/roulette"
        className={`menu_link ${
          pathname === "/roulette" ? "menu_link_active" : ""
        }`}
      >
        룰렛
      </Link>
      <div className="relative group">
        <Link
          href="/test"
          className={`menu_link ${
            pathname.startsWith("/test") ? "menu_link_active" : ""
          }`}
        >
          테스트
        </Link>
        <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md py-2 rounded-lg w-40 z-50">
          <li>
            <Link
              href="/test/mbti"
              className="block px-4 py-2 hover:bg-purple-50"
            >
              MBTI 테스트
            </Link>
          </li>
          <li>
            <Link
              href="/test/love"
              className="block px-4 py-2 hover:bg-purple-50"
            >
              연애 스타일
            </Link>
          </li>
          <li>
            <Link
              href="/test/balance"
              className="block px-4 py-2 hover:bg-purple-50"
            >
              밸런스 게임
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative group">
        <Link
          href="/recipe"
          className={`menu_link ${
            pathname.startsWith("/recipe") ? "menu_link_active" : ""
          }`}
        >
          레시피
        </Link>
        <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md py-2 rounded-lg w-40 z-50">
          <li>
            <Link
              href="/recipe/secret"
              className="block px-4 py-2 hover:bg-purple-50"
            >
              비밀 레시피
            </Link>
          </li>
          <li>
            <Link
              href="/recipe/budget"
              className="block px-4 py-2 hover:bg-purple-50"
            >
              천원의 행복
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative group">
        <Link
          href="/challenge"
          className={`menu_link ${
            pathname.startsWith("/challenge") ? "menu_link_active" : ""
          }`}
        >
          챌린지
        </Link>
        <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md py-2 rounded-lg w-40 z-50">
          <li>
            <Link
              href="/challenge/time"
              className="block px-4 py-2 hover:bg-purple-50"
            >
              3분 챌린지
            </Link>
          </li>
          <li>
            <Link
              href="/challenge/random"
              className="block px-4 py-2 hover:bg-purple-50"
            >
              랜덤 도전
            </Link>
          </li>
          <li>
            <Link
              href="/challenge/gourmet"
              className="block px-4 py-2 hover:bg-purple-50"
            >
              호캉스 도전
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
