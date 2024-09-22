/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export", // Enables static export for GitHub Pages
    images: {
        unoptimized: true, // Disables Next.js image optimization (required for static export)
    },
    
    basePath: '/heyronmar', // Replace with your GitHub repository name
    assetPrefix: '/heyronmar/', // Ensure the asset prefix has a trailing slash
};

export default nextConfig;
