/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://pyeonhaejeom.netlify.app", // netlify 도메인으로 수정
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
