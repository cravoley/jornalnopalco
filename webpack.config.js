var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: {
    app: [
    'webpack-hot-middleware/client?reload=true'
    ,"./js/react/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets/",
    filename: "bundle.js"
},
 plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new webpack.ProvidePlugin({
            "React": "react",
        })
 ],
 module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015","react", "stage-0", "react-hmre"]
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
