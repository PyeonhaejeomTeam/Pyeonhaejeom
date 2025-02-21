import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <p className="footer_text">© 2024 편해점. All rights reserved.</p>
        <div className="footer_links">
          <Link href="/about" className="footer_link">
            About
          </Link>
          <Link href="/privacy" className="footer_link">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
