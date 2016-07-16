var path = require("path");
var webpack = require("webpack");
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  entry: {
    app: [
    "./js/react/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets/",
    filename: "bundle.js"
},
resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./js/react'),
      'node_modules'
    ]
},
plugins:[
	new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
       'process.env.NODE_ENV': '"production"'
   }),
   new webpack.ProvidePlugin({
          "React": "react",
          // $: "jquery",
          // jQuery: "jquery",
          // "window.jQuery": "jquery"
  }),
  new webpack.optimize.UglifyJsPlugin({
		compressor: {
			warnings: false,
			screw_ie8: true
		}
	}),
	new StatsPlugin('webpack.stats.json', {
		source: false,
		modules: false
	}),
],
 module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015","react", "stage-0", "react-hmre"],
         "plugins": ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }]
  }
};
