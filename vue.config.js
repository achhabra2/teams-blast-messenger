// vue.config.js
module.exports = {
  baseUrl:
    process.env.NODE_ENV === 'production' ? '/teams-blast-messenger/' : '/',
  css: {
    loaderOptions: {
      postcss: {}
    }
  },
  pwa: {
    name: 'Blast Messenger',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
};
