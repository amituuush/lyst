var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:7007', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './client' // Your appʼs entry point
    ],
    output: {
        path: "public",
        filename: "bundle.js"
    },
    module: {
      loaders: [
          {
              test: /\.jsx?$/,
              loaders: ['react-hot', 'jsx?harmony'],
              include: path.join(__dirname, 'src')
          },
          {
            test: /\.(es6|jsx?)$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react', 'stage-0']
            }
          },
          {
            test: /\.less$/,
            loader: "style!css!less"
          },
          { test: /\.css$/,
            loader: "style!css"
          },
        ]
      },
    resolve: {
    extensions: ["", ".js", ".jsx", ".es6"] // allow you to not include file type when requiring
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]

};
