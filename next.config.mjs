/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com', 'randomuser.me']
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
        reactRoot: true,
        suppressHydrationWarning: true
    },
};

export default nextConfig;
