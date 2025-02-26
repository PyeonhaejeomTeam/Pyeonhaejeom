import Link from "next/link";

export default function HeaderContent() {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_content">
          <Link href="/" className="header_title">
            편해점
          </Link>
        </div>
      </div>
    </header>
  );
}
