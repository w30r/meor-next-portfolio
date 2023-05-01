/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.freepik.com",
      "pbs.twimg.com",
      "upload.wikimedia.org",
      "a0.muscache.com",
      "i.ibb.co",
    ],
  },
};

module.exports = nextConfig;
