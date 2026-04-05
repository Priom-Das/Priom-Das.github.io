import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* * Enable Static HTML Export. 
   * Mandatory for GitHub Pages as it only hosts static files and doesn't support Node.js servers. 
   */
  output: "export",

  /* * Append a trailing slash to all URLs. 
   * Prevents 404 errors on page refreshes by ensuring paths are treated as directories. 
   */
  trailingSlash: true,

  /* * Disable default image optimization. 
   * GitHub Pages is a static host and cannot process images dynamically via the Next.js Image API. 
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;