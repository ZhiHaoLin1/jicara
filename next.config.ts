import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-a138722f99774b24bde1c2c94a389145.r2.dev",
      },
    ],
  },
};

export default nextConfig;
