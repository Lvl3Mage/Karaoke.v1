const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {VueLoaderPlugin} = require('vue-loader')
let mode = 'development'
if (process.env.NODE_ENV === 'production') {
	mode = 'production'
}
//***********const paths section************
const PATHS = {
	src: path.join(__dirname, 'src'),
	dist: path.join(__dirname, 'dist'),
	assets: 'assets/',
	fonts: 'fonts/',
	images: 'img/',
	js: 'js/',
	css: 'css/',
}
const PAGES_DIR = `${PATHS.src}/html`
const PAGES = fs
	.readdirSync(PAGES_DIR)
	.filter(fileName => fileName.endsWith('.html'))


//***********main config object************
module.exports = {
	mode: mode,
	entry: './src/index.js',
	output: {
		path: PATHS.dist,
		//filename: `${PATHS.js}[name].[contenthash].js`,
		publicPath: (process.env.WEBPACK_SERVE) ? '/' : 'auto', // process.env.WEBPACK_SERVE to check if the server is running
		filename: `${PATHS.js}[name].js`,
		clean: (mode === 'development') ? false : true,
	},
	devServer: {
		open: true,
		static: {
			directory: PATHS.src,
			watch: true
		},
		historyApiFallback: {
			rewrites: [
				{ from: /^\/book/, to: '/booking.html' },
				{ from: /^\/recover-booking/, to: '/booking.html' },
			]
		},
	},
	devtool: (mode === 'development') ? 'source-map' : false,
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loader: {
						scss: 'vue-style-loader!css-loader!sass-loader'
					}
				}
			},
			{
				test: /\.html$/i,
				use: ['html-loader', 'template-ejs-loader'],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
			        {
			            loader: MiniCssExtractPlugin.loader,
			            options: {
			                publicPath: '../../',
			            },
			        },
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-preset-env",
										{
											// Options
										},
									],
								],
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				exclude: `${PATHS.src}/${PATHS.fonts}`,
				generator: {
					filename: `${PATHS.assets}${PATHS.images}[name][ext][query]`
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
				type: 'asset/resource',
				exclude: `${PATHS.src}/${PATHS.images}`,
				generator: {
					filename: `${PATHS.assets}${PATHS.fonts}[name][ext][query]`
				}
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					// options: {
					//     presets: ['@babel/preset-env']
					// }
				}
			}
		]
	},
	resolve: {
		alias: {
			libs: path.resolve(__dirname,'src/js/libs'),
			styles: path.resolve(__dirname,'src/assets/scss'),
			assetDir: path.resolve(PATHS.src, 'assets')//(process.env.WEBPACK_SERVE) ? path.resolve(PATHS.src, 'assets') : path.resolve(PATHS.dist, 'assets'),//(process.env.WEBPACK_SERVE) ?  path.resolve(PATHS.src, '/assets') :  path.resolve(PATHS.dist, '/assets')
			//'vue$': 'vue/dist/vue.cjs.js'
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			//filename: `${PATHS.css}[name].[contenthash].css`
			filename: `${PATHS.assets}${PATHS.css}[name].css`
		}),
		...PAGES.map(
			page =>
				new HtmlWebpackPlugin({
					template: `${PAGES_DIR}/${page}`,
					filename: `./${page}`
				})
		),
	],
	
}