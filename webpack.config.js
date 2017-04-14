let debug = process.env.NODE_ENV;
let webpack = require('webpack')
let path = require('path')
module.exports =
{
  context: __dirname + "/src",
  devtool: debug ? 'inline sourcemap': null,
  entry: ['./tdIdf_main.js'],
  output:
  {
    path: __dirname,
    filename: 'index.js',
    library: "td-idf",
    libraryTarget:"umd"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, ""),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.js?$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015'],
        }
      },
    ]
  },
  plugins: debug ? [

  ]:[
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin( {mangle: false, sourcemap: false} ),
  ],
}
