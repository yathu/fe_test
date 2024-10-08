/** @type {import('next').NextConfig} */
const nextConfig = {
//   images: {
//     domains: ["https://www.thecocktaildb.com/"],
//   },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.thecocktaildb.com',
        port: '',
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
