const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const TerserPlugin = require('terser-webpack-plugin')
const fs = require('fs')
const obfuscator = require('webpack-obfuscator')
const WebpackObfuscatorPlugin = require('webpack-obfuscator')

module.exports = {
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  entry: {
    'js/index': './src/index.ts',
    'js/menu': './src/menu.ts',
    'css/index': './src/index.scss',
  },
  // モジュールバンドルを行った結果を出力する場所やファイル名の指定
  output: {
    path: path.join(__dirname, 'dist'), // "__dirname"はファイルが存在するディレクトリ
    filename: '[name].js', // [name]はentryで記述した名前（この設定ならbundle）
    environment: {
      arrowFunction: false,
    },
  },
  // import文でファイル拡張子を書かずに名前解決するための設定
  // 例...「import World from './world'」と記述すると"world.ts"という名前のファイルをモジュールとして探す
  resolve: {
    extensions: ['.ts', '.js'], // Reactの.tsxや.jsxの拡張子も扱いたい場合は配列内に追加する
    //以下を追加
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    }, // webpack-dev-serverの公開フォルダ
  },
  // モジュールに適用するルールの設定（ローダーの設定を行う事が多い）
  module: {
    rules: [
      {
        // 拡張子が.tsのファイルに対してTypeScriptコンパイラを適用する
        // Reactで用いる.tsxの拡張子にも適用する場合は test:/\.(ts|tsx)$/,
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dist/css/index.css',
    }),
    new WebpackObfuscatorPlugin({
      StringArrayEncoding: ['base64', 'rc4'],
    }),
    new RemoveEmptyScriptsPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
}
