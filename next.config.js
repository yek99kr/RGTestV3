/** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n: {
//     locales: ["en-US"],
//     defaultLocale: "en-US",
//   },
//   reactStrictMode: false,
// };

// module.exports = nextConfig;

// module.exports = () => {
//   const rewrites = () => {
//     return [
//       {
//         source: "/deck",
//         destination: "https://deckrealgood.netlify.app",
//       },
//     ];
//   };
//   return {
//     rewrites,
//   };
// };
module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESSTOKEN: process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN,
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    domains: [
      "cdn.shopify.com",
      `prismic-templates-website.cdn.prismic.io`,
      "images.prismic.io",
      "prismic-io.s3.amazonaws.com",
    ],
  },
};
