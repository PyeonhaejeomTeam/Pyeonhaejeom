"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-8">
          <Link
            href="/"
            className={`py-4 px-3 text-gray-700 hover:text-purple-600 ${
              pathname === "/" ? "text-purple-600 border-b-2 border-purple-600" : ""
            }`}
          >
            홈
          </Link>
          <Link
            href="/community"
            className={`py-4 px-3 text-gray-700 hover:text-purple-600 ${
              pathname === "/community" ? "text-purple-600 border-b-2 border-purple-600" : ""
            }`}
          >
            커뮤니티
          </Link>
          <Link
            href="/roulette"
            className={`py-4 px-3 text-gray-700 hover:text-purple-600 ${
              pathname === "/roulette" ? "text-purple-600 border-b-2 border-purple-600" : ""
            }`}
          >
            룰렛
          </Link>
          <Link
            href="/test"
            className={`py-4 px-3 text-gray-700 hover:text-purple-600 ${
              pathname === "/test" ? "text-purple-600 border-b-2 border-purple-600" : ""
            }`}
          >
            테스트
          </Link>
          <Link
            href="/recipe"
            className={`py-4 px-3 text-gray-700 hover:text-purple-600 ${
              pathname === "/recipe" ? "text-purple-600 border-b-2 border-purple-600" : ""
            }`}
          >
            레시피
          </Link>
          <Link
            href="/challenge"
            className={`py-4 px-3 text-gray-700 hover:text-purple-600 ${
              pathname === "/challenge" ? "text-purple-600 border-b-2 border-purple-600" : ""
            }`}
          >
            챌린지
          </Link>
        </div>
      </div>
    </nav>
  );
}
