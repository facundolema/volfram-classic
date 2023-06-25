/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/rodlema',
                destination: '/team/facundolema',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
