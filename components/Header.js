import Link from "next/link";

export default function Header() {
  return (
    <nav className="header">
      <div className="container header_container">
        <div className="header_content">
          <Link href="/" className="header_title">
            편해점
          </Link>
        </div>
      </div>
    </nav>
  );
}
