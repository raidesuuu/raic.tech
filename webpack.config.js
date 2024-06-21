const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')
const TerserPlugin = require('terser-webpack-plugin')
const fs = require("fs")
const obfuscator = require('webpack-obfuscator')
const WebpackObfuscatorPlugin = require('webpack-obfuscator')

module.exports = {
  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  entry: {
    'js/index': './src/index.ts',
    'js/menu': './src/menu.ts',
    'js/signin': './src/signin.ts',
    'js/signup': './src/signup.ts',
    'js/forgot': './src/forgot.ts',
    'js/tfa': './src/tfa.ts',
    'js/firebase': './src/firebase.ts',
    'js/link': './src/link.ts',
    'js/finishLink': './src/finishLink.ts',
    "js/rales": "./src/rales.ts",
    'js/chat-app': './src/chat/app.ts',
    'js/chat-profile': './src/chat/profile.ts',
    'js/chat-message': './src/chat/message.ts',
    'js/chat-request': './src/chat/request.ts',
    'js/studentVerify': './src/studentVerify.ts',
    'js/chat-settings': './src/chat/settings.ts',
    'js/chat-banned': './src/chat/banned.ts',
    'js/panel-home': './src/panel/home.ts',
    'js/chat-trend': './src/chat/trend.ts',
    'js/panel-data': './src/panel/data.ts',
    'js/chat-sidebar': './src/chat/loadSidebar.ts',
    'js/api-sidebar': './src/api/loadSidebar.ts',
    'js/panel-security': './src/panel/security.ts',
    'js/loadSidebar': './src/panel/loadSidebar.ts',
    'js/panel-patreon': './src/panel/patreon.ts',
    'js/stripe/checkoutComplete': './src/stripe/checkoutComplete.ts',
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
    server: {
      type: 'https',
      options: {
        key: fs.readFileSync('cert.key'),
        cert: fs.readFileSync('cert.crt'),
        ca: fs.readFileSync('ca.crt'),
      },
    }
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
      StringArrayEncoding: [
        "base64",
        "rc4"
      ],
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
