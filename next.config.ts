import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // only allow Unsplash
      },
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    // ppr: "incremental",
    cacheComponents: true, // this now enables PPR
    // after: true,
  },
  devIndicators: {
    position: "bottom-right", // renamed from buildActivityPosition
  },
};

export default nextConfig;
