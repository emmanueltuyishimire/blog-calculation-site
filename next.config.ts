import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  compiler: {
    react: {
      useSuspense: true,
    },
  },
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
