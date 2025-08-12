import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'cloudinary.images-iherb.com',
      'drive.google.com',
      'lh3.googleusercontent.com',
      'www.instagram.com',
      'drive.usercontent.google.com',
      'cdn.downloadgram.org'
    ],
  },
};

export default nextConfig;
