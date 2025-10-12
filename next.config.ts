import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains: ["images.unsplash.com"], // ✅ allow Unsplash

    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      }
    ]
  }
};

export default nextConfig;
