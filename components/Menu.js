"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="menu_container">
      <Link
        href="/game"
        className={`menu_link ${
          pathname === "/game" ? "menu_link_active" : ""
        }`}
      >
        심리 테스트
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
        href="/community"
        className={`menu_link ${
          pathname === "/community" ? "menu_link_active" : ""
        }`}
      >
        커뮤니티
      </Link>
    </nav>
  );
}
