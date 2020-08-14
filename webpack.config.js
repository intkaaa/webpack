const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/sample.js'
  },
  module: {
    rules: [
      { 
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-syntax-jsx']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/sample.css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
