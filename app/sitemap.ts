import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pyeonhaejeom.vercel.app"; // 실제 도메인으로 변경해주세요

  // 정적 페이지 목록
  const staticPages = ["", "/game", "/roulette", "/combination"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changefreq: "daily" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  // 동적 페이지 (예: 결과 페이지)
  const personalities = ["맵부심-미식가", "달콤-미식가", "실속-미식가"].map(
    (personality) => ({
      url: `${baseUrl}/result/${personality}`,
      lastModified: new Date().toISOString(),
      changefreq: "weekly" as const,
      priority: 0.5,
    })
  );

  return [...staticPages, ...personalities];
}
