export default async function sitemap() {
  const baseUrl = 'https://pyeonhaejeom.netlify.app';

  // 정적 라우트 정의
  const routes = [
    '',
    '/game',
    '/roulette',
    '/community',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
} 