/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tqklhszfkvzk6518638.edge.naverncp.com",
      "cdn2.bgfretail.com",
      "res.cloudinary.com",
    ],
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
