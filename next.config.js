const path = require('path')
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: process.env.NODE_ENV === 'production', // Required for Netlify
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
  // Output as static site for Netlify
  output: 'export',
  // Use relative URLs in production
  trailingSlash: process.env.NODE_ENV === 'production',
  // Disable Image Optimization API for static export
  distDir: process.env.NODE_ENV === 'production' ? 'out' : '.next'
}

module.exports = nextConfig