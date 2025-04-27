import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  eslint: {
    // This will disable the unescaped-entities rule completely
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
