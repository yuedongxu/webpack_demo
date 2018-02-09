module.exports = {
	devtool:"eval-source-map",
	entry: __dirname + "/app/main.js",//入口文件
	output:{
		path:__dirname + "/public",//打包后文件存放
		filename:"bundle.js"//打包后输出文件
	},
	devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}