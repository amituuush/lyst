module.exports = {
    entry: "./client",
    output: {
        path: "build",
        filename: "bundle.js"
    },
    module: {
      loaders: [
          {
            test: /\.(es6|jsx?)$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react', 'stage-0']
            }
          }
        ]
      },
      resolve: {
        extensions: ["", ".js", ".jsx", ".es6"]
      }

};
