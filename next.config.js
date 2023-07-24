/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')({
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
// })

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: 'http',
        hostname: "localhost"
      }
    ],
  },
};

module.exports = nextConfig;
