const path = require(`path`);
module.exports = {
  plugins: [
    {
      plugin: require('craco-cesium')(),
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
    },
    node: {
      fs: 'empty',
    },
  },
};
