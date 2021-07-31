const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
              esModule: false,
            },
          },
          'css-loader',
          'sass-loader'
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'index.css' }),
  ],
};
