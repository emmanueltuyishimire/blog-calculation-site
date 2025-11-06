import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  compiler: {
    react: {
      useSuspense: true,
    },
    emotion: false,
    styledComponents: false,
  },
  swcMinify: true,
  reactStrictMode: true,
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
