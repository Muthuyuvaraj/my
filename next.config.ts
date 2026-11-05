import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build the whole site as static HTML into /out — Netlify serves it directly, no server needed
  output: "export",
  // Hide the floating "N" dev-tools button while running `npm run dev`
  devIndicators: false,
  // Don't send the "X-Powered-By: Next.js" response header
  poweredByHeader: false,
};

export default nextConfig;
