const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const server = {
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  entry: path.join(__dirname, '/server/app'),
  watch: true,
  output: {
    path: path.join(__dirname, '/server/main'),
    publicPath: '/',
    filename: "__main__.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
};

const client = {
  mode: 'development',
  entry: path.join(__dirname, '/server/src/index'),
  output: {
    path: path.resolve(__dirname, 'server/public'),
    publicPath: '/server/public',
    filename: 'bundle.[hash].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/preset-react"]
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: [ new CleanWebpackPlugin() ],
  devtool: 'source-map'
}

module.exports = [server, client]