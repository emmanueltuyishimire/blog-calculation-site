import type {NextConfig} from 'next';

const repo = 'blog-calculation-site';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
};

export default nextConfig;
