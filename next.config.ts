import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating "N" dev-tools button while running `npm run dev`
  devIndicators: false,
  // Don't send the "X-Powered-By: Next.js" response header
  poweredByHeader: false,
};

export default nextConfig;
