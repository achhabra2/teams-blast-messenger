// vue.config.js
module.exports = {
  baseUrl:
    process.env.NODE_ENV === 'production' ? '/teams-blast-messenger/' : '/',
  css: {
    loaderOptions: {
      postcss: {}
    }
  }
};
