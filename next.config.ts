import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Add this for better production builds
  output: "standalone",
};

export default nextConfig;
