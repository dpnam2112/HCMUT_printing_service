/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.resolve.alias.canvas = false;

    return config;
  },
  images: {
    loader: "imgix",
    path: "",
  },
};

module.exports = nextConfig;
