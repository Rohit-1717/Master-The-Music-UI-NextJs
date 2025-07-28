import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
  eslint: {
    // Warning: Disables ESLint for builds (use only if you're confident in your code quality)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
