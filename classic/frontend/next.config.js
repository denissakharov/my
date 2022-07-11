/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["placeimg.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
