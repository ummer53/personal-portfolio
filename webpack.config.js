// webpack.config.js
const path = require('./src/assets/screen-icons');

module.exports = {
	// ... other webpack configurations
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
						},
					},
				],
			},
		],
	},
};
