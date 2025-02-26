"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  const recipeCategories = [
    {
      title: "🔥 신규 레시피",
      link: "/recipe/new",
    },
    {
      title: "🌟 인기 레시피",
      link: "/recipe/popular",
    },
    {
      title: "🤫 직원들의 비밀 레시피",
      link: "/recipe/secret",
    },
    {
      title: "💰 1000원의 행복",
      link: "/recipe/budget",
    },
  ];

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
      <Link
        href="/test"
        className={`menu_link ${
          pathname === "/test" ? "menu_link_active" : ""
        }`}
      >
        테스트
      </Link>
      <div className="menu_dropdown">
        <Link
          href="/recipe"
          className={`menu_link ${
            pathname.startsWith("/recipe") ? "menu_link_active" : ""
          }`}
        >
          레시피
        </Link>
        <div className="menu_dropdown_content">
          {recipeCategories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="menu_dropdown_item"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="/challenge"
        className={`menu_link ${
          pathname === "/challenge" ? "menu_link_active" : ""
        }`}
      >
        챌린지
      </Link>
    </nav>
  );
}
