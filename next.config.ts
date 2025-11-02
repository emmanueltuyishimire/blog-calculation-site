import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/blog-calculation-site', // Removed for custom domain
  // assetPrefix: '/blog-calculation-site/', // Removed for custom domain
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
