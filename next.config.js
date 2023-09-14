/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config')


// const withPWA = require('next-pwa')({
//   dest: 'public',
//   // disable: process.env.NODE_ENV === 'development',
// })



const nextConfig = {
  // i18n,
  experimental: {
    mdxRs: true,
  },
  // reactStrictMode: process.env.NODE_ENV !== 'production',
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

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
// module.exports = withPWA(nextConfig);
