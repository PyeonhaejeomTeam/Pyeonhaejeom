import Link from "next/link";

export default function Menu() {
  return (
    <nav className="menu_container">
      <Link href="/game" className="menu_link">
        테스트
      </Link>
      <Link href="/roulette" className="menu_link">
        룰렛
      </Link>
    </nav>
  );
}
