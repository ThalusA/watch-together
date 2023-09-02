const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    reactStrictMode: true,
}

module.exports = withPWA(nextConfig)

module.exports = nextConfig
