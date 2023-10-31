/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config')


// const withPWA = require('next-pwa')({
//   dest: 'public',
//   // disable: process.env.NODE_ENV === 'development',
// })



const nextConfig = {
  // i18n,
  // reactStrictMode: process.env.NODE_ENV !== "production",
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
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "importlio.com" }],
        destination: "https://www.importlio.com/:path*",
        permanent: true,
      },
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ['raw-loader', 'glslify-loader'],
    });

    return config;
}
};


module.exports = nextConfig;
// module.exports = withPWA(nextConfig);
