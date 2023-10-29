/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['ik.imagekit.io']
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
          ]
    },
    transpilePackages: ['@lens-protocol']
}

module.exports = nextConfig
