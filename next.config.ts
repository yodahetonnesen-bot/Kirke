import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statisk eksport: `npm run build` lager mappen `out/` med ferdige HTML-filer.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
