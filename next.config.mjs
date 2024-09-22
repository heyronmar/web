/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
    basePath: '/web', // Set to your GitHub repo name
    assetPrefix: '/web/', // Same as basePath for GitHub Pages
  };
  
  export default nextConfig;

  //sample are given here now//