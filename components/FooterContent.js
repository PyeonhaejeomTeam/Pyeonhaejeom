import Link from "next/link";

export default function FooterContent() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_links">
          <Link href="/privacy/privacy" className="footer_link">
            개인정보 처리방침
          </Link>
          <Link href="/privacy/terms" className="footer_link">
            이용약관
          </Link>
        </div>
        <p className="footer_copyright">© 2025 편해점. All rights reserved.</p>
      </div>
    </footer>
  );
}
