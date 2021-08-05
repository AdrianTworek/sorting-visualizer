module.exports = {
  entry: './app.js',
  mode: 'production',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    option: {
      presets: ['@babel/preset-env'],
    },
  },
}
