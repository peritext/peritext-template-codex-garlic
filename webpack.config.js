const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const extractSass = new ExtractTextPlugin({
    filename: "/dist/[name].css"
});

module.exports = {
  entry: './src/index',
  output: {
    filename: './dist/index.js',
    libraryExport: "default",
    library: 'peritext-template-static-garlic',
    libraryTarget: 'commonjs2'
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc. 
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules\//,
        include: __dirname
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
          test: /\.scss$/,
          use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development 
                fallback: "style-loader"
            })
      },
    ],

  },
  plugins: [
    extractSass
  ]
}