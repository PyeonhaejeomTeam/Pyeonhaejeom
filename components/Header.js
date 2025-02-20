import Link from 'next/link'

export default function Header() {
  return (
    <nav className="header">
      <div className="container header-container">
        <Link href="/" className="header-title">편해점</Link>
        <div className="header-links">
          <Link href="/roulette" className="header-link">
            랜덤 메뉴
          </Link>
        </div>
      </div>
    </nav>
  );
}
