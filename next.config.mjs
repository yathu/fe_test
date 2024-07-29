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
};

export default nextConfig;
