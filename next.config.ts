import type { NextConfig } from "next";

console.log("Sanity Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log("Sanity Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

const nextConfig: NextConfig = {
  devIndicators: false,
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during deployment
  },
};

export default nextConfig;
