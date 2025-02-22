import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export const metadata = {
  title: "편해점 - 당신의 편의점 성향 테스트",
  description:
    "당신의 편의점 음식 취향으로 알아보는 성향 테스트! 나와 잘 맞는 편의점 음식 조합을 찾아보세요.",
  keywords: [
    "편의점",
    "편의점 음식",
    "음식 성향 테스트",
    "편의점 음식 추천",
    "편의점 꿀조합",
    "편의점 메뉴 추천",
    "편의점 음식 테스트",
    "편의점 음식 궁합",
    "편의점 음식 조합",
    "편의점 심리테스트",
  ].join(", "),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* 기본 메타 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="author" content="편해점" />
        <meta name="creator" content="편해점" />
        <meta name="publisher" content="편해점" />
        <meta name="category" content="entertainment" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#7c3aed" />

        {/* SEO 메타 태그 */}
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="편의점,편의점 음식,음식 성향 테스트,편의점 음식 추천,편의점 꿀조합,편의점 메뉴 추천,편의점 음식 테스트,편의점 음식 궁합,편의점 음식 조합,편의점 심리테스트,mbti 테스트,성향 테스트"
        />
        <meta name="application-name" content="편해점" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="편해점" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Open Graph 메타 태그 보완 */}
        <meta
          property="og:title"
          content="편해점 - 당신의 편의점 성향 테스트"
        />
        <meta
          property="og:description"
          content="당신의 편의점 음식 취향으로 알아보는 성향 테스트! 나와 잘 맞는 편의점 음식 조합을 찾아보세요."
        />
        <meta property="og:url" content="https://pyeonhaejeom.netlify.app" />
        <meta property="og:site_name" content="편해점" />
        <meta
          property="og:image"
          content="https://pyeonhaejeom.netlify.app/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />

        {/* Twitter Card 메타 태그 보완 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@편해점" />
        <meta
          name="twitter:title"
          content="편해점 - 당신의 편의점 성향 테스트"
        />
        <meta
          name="twitter:description"
          content="당신의 편의점 음식 취향으로 알아보는 성향 테스트!"
        />
        <meta
          name="twitter:image"
          content="https://pyeonhaejeom.netlify.app/og-image.png"
        />
        <meta name="twitter:image:alt" content="편해점 테스트 미리보기" />

        {/* 검색엔진 최적화 */}
        <meta
          name="google-site-verification"
          content="EuDnGqJMQiOsf6gBEO84sXNF2Ex31NuulhpuwpP4mFE"
        />
        <meta
          name="naver-site-verification"
          content="950dd5cfc7353572df2ece178ad9bf8fbecbaf41"
        />

        {/* 기타 설정 */}
        <link rel="canonical" href="https://pyeonhaejeom.netlify.app" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />

        {/* Favicon */}
        <link rel="icon" href="/" />
        <link rel="apple-touch-icon" sizes="180x180" href="/creat8-2c.png" />
        <link rel="manifest" href="/manifest.json" />
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
