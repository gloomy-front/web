/** @type {import('next').NextConfig} */
module.exports = {
  publicRuntimeConfig: {
    API_ENV: process.env.NODE_ENV || 'development',
  },
  reactStrictMode: true,
};
