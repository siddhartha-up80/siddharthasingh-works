/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
