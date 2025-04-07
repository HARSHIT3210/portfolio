import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.memegen.link"], // Allow this domain for Next.js Image optimization
  },
};

export default nextConfig;
