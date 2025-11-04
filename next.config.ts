import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    return [
      {
        source: '/static/logo.png',
        destination: '/logo.png',
      },
    ]
  },
};

export default nextConfig;
