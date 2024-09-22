/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export for GitHub Pages
    images: {
      unoptimized: true, // Disable image optimization for static exports
    },
    basePath: '/heyronmar', // Set the base path to your GitHub repository name
    assetPrefix: '/heyronmar/', // Prefix assets with the GitHub Pages path
  };
  
  export default nextConfig;
  