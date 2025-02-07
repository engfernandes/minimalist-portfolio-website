import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  images: {
    domains: ["storage.googleapis.com"],
  },
  /* config options here */
};

export default nextConfig;
