/** @type {import('next').NextConfig} */
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt'
  },
  env: {
    BASE_URL: process.env.BASE_URL
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
};

module.exports = nextConfig;
