import Link from "next/link";

export default function Menu() {
  return (
    <div className="menu_container">
      <Link href="/roulette" className="menu_link">
        랜덤 메뉴
      </Link>
      <Link href="/game" className="menu_link">
        성향 테스트
      </Link>
    </div>
  );
}
