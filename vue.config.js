module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    host: 'localhost',
    port: 8081,
    proxy: {
      "/api": {
        "target": process.env.VUE_APP_API,
        "changeOrigin": true
      }
    },
    disableHostCheck: true,
    clientLogLevel: 'warning',
    hot: true,
    liveReload: true,
    contentBase: 'dist',
    compress: true,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: false,
      ignored: /node_modules/
    }
  }
}