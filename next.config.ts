// Import Next.js and next-intl plugin
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Create the basic Next.js configuration
const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();

// Export the configuration
export default withNextIntl(nextConfig);
