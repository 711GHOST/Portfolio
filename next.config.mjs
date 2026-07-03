/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // three.js and R3F ship untranspiled ESM in places; let Next handle it.
  transpilePackages: ["three"],
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "@react-three/drei"],
  },
  webpack: (config) => {
    // Allow importing GLSL-style shader strings if ever needed.
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
