/** @type {import('next').NextConfig} */
module.exports = {
  // important!!! 
  experimental: {
    esmExternals: "loose",
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "solito",
  ],
  webpack: (config) => {
    // Set the alias from `react-native` to `react-native-web`
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native": "react-native-web",
    };

    // Add custom `.web.{jsx?,tsx?}` extension resolver
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    return config;
  },
};
