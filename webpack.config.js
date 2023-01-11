const path = require('path');


module.exports = {
	watch: true, 
	mode: 'development',
	entry: {
		bundle: path.join(__dirname, 'src/js/bundle.js')
	},
	output: {
		path: path.resolve(__dirname, 'static' ),
		filename: '[name].js',	
		clean: true
	},
	module:{
		rules: [
			{
				test: /\.css/i,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)/i,
				type: 'asset/resource'
			}
		]
	}
}