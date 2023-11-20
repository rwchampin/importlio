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
      {
        source: "/en-US",
        destination: "/",
        permanent: true,
      },
      {
        source: "/template",
        destination: "/",
        permanent: true,
      },{
        source: "/loading",
        destination: "/",
        permanent: true,
      },{
        source: "/dropshipping-suppliers-secrets",
        destination: "/ecommerce-tutorials/dropshipping-suppliers-secrets",
        permanent: true,
      }, {
        source: "/online-general-store-5-products-from-a-successful-entrepreneur",
        destination: "/ecommerce-tutorials",
        permanent: true,
      },{
        source: "/50-effective-strategies-to-boost-sales-with-dropshipping",
        destination: "/ecommerce-tutorials/50-effective-strategies-to-boost-sales-with-dropshipping",
        permanent: true,
      }, {
        source: "/not-found",
        destination: "/",
        permanent: true,
      },{
        source: "/ecommerce-tutorials/www.instagram.com/importlio",
        destination: "https://www.instagram.com/importlio",
        permanent: true,
      },{
        source: "/www.instagram.com",
        destination: "https://www.instagram.com/importlio",
        permanent: true,
      },{
        source: "/auth/www.instagram.com",
        destination: "https://www.instagram.com/importlio",
        permanent: true,
      }
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
