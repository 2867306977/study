//解决跨域问题  使用代理服务器
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        //目标接口
        target: "http://localhost:5000",
        changeOrigin: true, //是否跨域
        //路径重写
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
