import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      </head>
      <body>
        <Header />
        <main className="main">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
