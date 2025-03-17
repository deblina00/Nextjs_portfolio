import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during deployment
  },
};

export default nextConfig;
