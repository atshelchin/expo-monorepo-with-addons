/** @type {import('next').NextConfig} */
module.exports = {
  // important!!!
  experimental: {
    esmExternals: "loose",
  },
  output: "export",
  distDir:'out',
  basePath: "/expo-monorepo-with-addons",
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "react-native-web",
    "solito",
    "twrnc",

    // expo
    "@expo/html-elements",
    "expo-modules-core",
    "expo-image",
    "expo-asset",

    "react-native-svg",
    "react-native-svg-web",

    "@ui-kitten/components",
  ],
  webpack: (config, { dev, webpack }) => {
    // Set the alias from `react-native` to `react-native-web`
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // https://github.com/necolas/react-native-web/issues/2499
      "react-native/Libraries/Image/AssetRegistry$":
        "react-native-web/dist/modules/AssetRegistry",
      "react-native": "react-native-web",
      "react-native-svg$": "react-native-svg-web",
    };

    // Add custom `.web.{jsx?,tsx?}` extension resolver
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];

    config.plugins.push(
      new webpack.DefinePlugin({
        "__DEV__": dev.toString(),
      }),
    );

    return config;
  },
};
