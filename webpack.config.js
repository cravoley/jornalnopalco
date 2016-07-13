var path = require("path");
var webpack = require("webpack");
console.log(path.resolve('./js/react'));
module.exports = {
  entry: {
    app: [
    'webpack-hot-middleware/client?reload=true'
    ,"./js/react/index.js"],
    // vendor: [
    //   './webpack.init.js',
    // ]
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
}
,
 plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.ProvidePlugin({
            "React": "react",
            // $: "jquery",
            // jQuery: "jquery",
            // "window.jQuery": "jquery"
        })
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
    },
    {
      test: /\.json?$/,
      loader: 'json'
    },
    {
      test: /\.css$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
    }]
  }
};
