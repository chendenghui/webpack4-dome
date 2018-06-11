const webpack = require("webpack");//引入webpack
const opn = require("opn");//打开浏览器
const merge = require("webpack-merge");//webpack配置文件合并
const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");//基础配置
const webpackFile = require("./webpack.file.conf");//一些路径配置
const eslintFormatter = require("react-dev-utils/eslintFormatter");

const moduleCSSLoader = {
	loader: 'css-loader',
	options: {
		modules: true,
		sourceMap: true,
		importLoaders: 2,
		localIdentName: '[path][name]__[local]__[hash:base64:5]'
	}
  };

let config = merge(baseWebpackConfig, {
	/*设置开发环境*/
	mode: "development",
	output: {
		path: path.resolve(webpackFile.devDirectory),
		filename: "js/[name].js",
		chunkFilename: "js/[name].js",
		publicPath: ""
	},
	optimization: {
		//包清单
		runtimeChunk: {
			name: "manifest"
		},
		//拆分公共包
		splitChunks: {
			cacheGroups: {
				//项目公共组件
				common: {
					chunks: "initial",
					name: "common",
					minChunks: 2,
					maxInitialRequests: 5,
					minSize: 0
				},
				//第三方组件
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
	plugins: [
		/*设置热更新*/
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.(js|jsx)$/,
				use: [
					{
						options: {
							formatter: eslintFormatter,
							eslintPath: require.resolve("eslint"),
							// @remove-on-eject-begin
							baseConfig: {
								extends: [require.resolve("eslint-config-react-app")],
							},
							//ignore: false,
							useEslintrc: false,
							// @remove-on-eject-end
						},
						loader: require.resolve("eslint-loader"),
					},
				],
				include: [
					path.resolve(__dirname, "../../src")
				],
				exclude: [
					path.resolve(__dirname, "../../node_modules")
				],
			},
			{
				test: /\.(js|jsx)$/,
				use: [
					{loader: 'cache-loader'},
					{loader: 'babel-loader',
						query:{
							presets: ['react','es2015','stage-2'],
							// plugins: [['import',{libraryName: 'antd', style:'css'}]]
							plugins: ['transform-decorators-legacy','transform-decorators',['import',{libraryName: 'antd', style:'css'}]]
						}
					}],
			
				include: [
					path.resolve(__dirname, "../../src"),
					path.resolve(__dirname, "../../entryBuild")
				],
				exclude: [
					path.resolve(__dirname, "../../node_modules")
				],
			},
			{
				test: /\.(css)$/,
				use: [
					'style-loader',moduleCSSLoader,'postcss-loader'
				]
			},
			{
				test: /\.(pcss)$/,
				use: [
					'style-loader','css-loader','postcss-loader'
				]
			},
			// {
			// 	test: /\.(css)$/,
			// 	use: [
			// 		{
			// 			loader:'css-loader',
			// 			options: {
			// 				modules: true,//开启CSS Modules
			// 				localIdentName: '[path][name]__[local]--[hash:base64:5]'
			// 			}
			// 		}
			// 		]
			// },
			{
				test: /\.less$/,
				use: ['style-loader', moduleCSSLoader, 'postcss-loader','less-loader']
			},
			{
				test: /\.(scss|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg|swf)$/,
				loader: "file-loader?name=[name].[ext]&outputPath=" + webpackFile.resource + "/"
			}
		]
	},
	/*设置api转发*/
	devServer: {
		host: "0.0.0.0",
		port: 8081,
		hot: true,
		inline: true,
		contentBase: path.resolve(webpackFile.devDirectory),
		historyApiFallback: true,
		disableHostCheck: true,
		proxy: {
	
			'/fe/*':{ 
                target: 'http://home.beta.xxx.com/',
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            }
		},
		/*打开浏览器 并打开本项目网址*/
		after() {
			opn("http://127.0.0.1:" + this.port+"/home.html");
		}
	}
});
module.exports = config;