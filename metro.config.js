// metro.config.js

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure proper handling of React Native modules
config.resolver.platforms = ['native', 'android', 'ios', 'web'];

// Add support for additional file extensions
config.resolver.sourceExts.push('cjs');

// Exclude Node.js modules that shouldn't be bundled
config.resolver.blockList = [
  /node_modules\/nodemailer\/.*/,
  /node_modules\/@types\/nodemailer\/.*/,
];

// Optimize bundle size
config.transformer.minifierConfig = {
  mangle: {
    keep_fnames: true,
  },
};

module.exports = config;
