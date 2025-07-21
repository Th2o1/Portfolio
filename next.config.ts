/* eslint-disable */
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  webpack(config) {
    // 1. Find the default rule that handles SVGs (Next.js treats SVGs as file assets).
    const fileLoaderRule = config.module.rules.find(
      (rule: any) => rule.test && rule.test.toString().includes("svg"),
    );
    if (fileLoaderRule) {
      // 2. Exclude .svg from the default file-loader so we can handle them with SVGR
      fileLoaderRule.exclude = /\.svg$/;
    }

    // 3. Add a new rule: whenever you import a .svg from JS/TS, use @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // only apply to JS/TS files
      use: ["@svgr/webpack"], // run SVGR loader
    });

    return config;
  },
};

module.exports = nextConfig;
export default nextConfig;

/* eslint-enable */
