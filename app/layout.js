import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export const metadata = {
  title: "편해점 - 음식 밸런스 게임",
  description: "당신의 음식 취향으로 알아보는 성향 테스트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        {/* 구글 검색 최적화 */}
        <meta
          name="google-site-verification"
          content="EuDnGqJMQiOsf6gBEO84sXNF2Ex31NuulhpuwpP4mFE"
        />
        {/* 네이버 검색 최적화 */}
        <meta
          name="naver-site-verification"
          content="950dd5cfc7353572df2ece178ad9bf8fbecbaf41"
        />
      </head>
      <body>
        <Header />
        <Menu />
        <main className="main" style={{ height: "auto" }}>
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
