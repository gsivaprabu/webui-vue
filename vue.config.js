const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/styles/_obmc-custom.scss";
        `
      }
    }
  },
  devServer: {
    https: true,
    proxy: {
      '/': {
        target: process.env.BASE_URL,
        onProxyRes: proxyRes => {
          // This header is ignored in the browser so removing
          // it so we don't see warnings in the browser console
          delete proxyRes.headers['strict-transport-security'];
        }
      }
    },
    port: 8000
  },
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new CompressionPlugin({
          deleteOriginalAssets: true
        })
      );
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.delete('prefetch');
      config.plugins.delete('preload');
    }
  },
  pluginOptions: {
    i18n: {
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
