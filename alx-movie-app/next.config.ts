import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
    domains: ["m.media-amazon.com"],
    // Or with older syntax:
    // domains: ["m.media-amazon.com"],
  },
};

export default withPWA({
  ...nextConfig,
});
