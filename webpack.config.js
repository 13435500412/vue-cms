var path = require('path')
var htmlWebpackPlugin = require("html-webpack-plugin")
var VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
	entry:path.join(__dirname,'./src/main.js'),
	output:{
		path:path.join(__dirname,'dist'),
		filename:'bundle.js'
	},
	plugins:[
	    new VueLoaderPlugin(),
		new htmlWebpackPlugin({//配置启动页，将不用手动引入bundle.js
			template:path.join(__dirname,'src/index.html'),
			filename:'index.html'//内存中生成的文件名称
		})
	],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},//处理css的loader
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},//处理less的loader
			{test:/\.sass$/,use:['style-loader','css-loader','sass-loader']},//处理sass的loader
			//limit限制图片的大小，单位为byte,当图片大于等于设定的大小时，名称将不会转换为base64
			{test:/\.(png|jpg|gif|bmp|jpeg)$/,use:'url-loader?limit=6731&name=[hash:8]-[name].[ext]'},
			{test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//支持es高级语法
			{ test: /\.vue$/,use: ['vue-loader']}//处理vue文件的loader
		]
	},
	mode: 'development' // 设置mode
}