module.exports = {
  devServer: {
    port: 12365
    // proxy: {  //开启代理无法携带 cookie,后端无法判断请求正确性，返回401
    //   '/api': {
    //     target: 'http://ylwapi.t.nxin.com',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRequiresRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  },
  css: {
    sourceMap: true
  }
  // configureWebpack: {
  //   externals: {
  //     AMap: 'AMap'
  //   }
  // }
};
