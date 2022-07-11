module.exports = {
  devServer: {
    port: 8080,
    watchOptions: {
      poll: 1000,
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuejs-emails-challenge/'
    : '/'
}
