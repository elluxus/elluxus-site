/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withVideos = require('next-videos')

module.exports = withVideos();

module.exports = nextConfig;

module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}
module.exports = {
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = {
	env: {
		GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID,
		GOOGLE_API_CLIENT_EMAIL: process.env.GOOGLE_API_CLIENT_EMAIL,
		GOOGLE_API_PRIVATE_KEY: process.env.GOOGLE_API_PRIVATE_KEY,
	},
};
