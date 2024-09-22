/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export for GitHub Pages
    images: {
      unoptimized: true, // Disable Next.js image optimization for static export
    },
    basePath: '/web', // Your repository name
    assetPrefix: '/web/', // Ensure assets are served from the correct path
  };
  
  export default nextConfig;
  