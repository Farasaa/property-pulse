import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**'
      },
           {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
