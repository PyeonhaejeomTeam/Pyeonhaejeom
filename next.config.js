/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tqklhszfkvzk6518638.edge.naverncp.com",
      "cdn2.bgfretail.com",
      "res.cloudinary.com",
    ],
    unoptimized: true,
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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
