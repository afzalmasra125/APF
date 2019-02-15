module.exports = {
  outputDir: '../public',
  devServer: {
    proxy: {
      '^/': {
        target: 'http://localhost:3000/',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        },
      }
    }
  }
}