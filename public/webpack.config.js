module.exports = {
	entry: './js/main',

	output: {
		path: __dirname,
		filename: 'webpack-app.js'
	},

	module: {
		loaders: [
			{ test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
			{ test: /\.woff$/,   loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{ test: /\.woff2?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader"},
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
			{ test: /\.less$/,   loader: 'style!css!less'},
			{ test: /\.jsx$/,    loader: 'jsx-loader' }
		]
	},

	resolve: {
		extensions: ['', '.js', '.jsx', '.less'],
		root: __dirname + '/js'
	}
};