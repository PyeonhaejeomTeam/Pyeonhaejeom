import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 서명된 URL 생성 함수
export const getSignedUrl = (publicId) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  return cloudinary.url(publicId, {
    secure: true,
    signed: true,
    timestamp: timestamp,
  });
};

export default cloudinary;
