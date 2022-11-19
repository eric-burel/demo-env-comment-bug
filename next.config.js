console.log("process.env.FOO", process.env.FOO);
console.log("process.env.QUOTES", process.env.QUOTES);
console.log("process.env.NO_QUOTES", process.env.NO_QUOTES);
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
