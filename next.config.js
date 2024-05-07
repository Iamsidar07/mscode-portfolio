
/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer")
const nextConfig = {
  images: {
    domains: ["randomuser.me"],
  },
};

module.exports = withContentlayer(nextConfig);
