console.log("process.env.FOO", process.env.FOO);
console.log("process.env.QUOTES", process.env.QUOTES);
console.log("process.env.NO_QUOTES", process.env.NO_QUOTES);
console.log("process.env.NOT_EMPTY", process.env.NOT_EMPTY);
console.log("process.env.NOT_EMPTY_NB", process.env.NOT_EMPTY_NB);
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
