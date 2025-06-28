const commonPaths = require("./paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: commonPaths.entryPath,
  output: {
    filename: "[name].js",
    libraryTarget: "umd",
    globalObject: "this",
    path: commonPaths.outputPath,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude:/node_modules/ ,
        
      },
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, "../node_modules"), // include @fontsource
          path.resolve(__dirname, "../src"),          // your own styles
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          {
            loader: "css-loader",
            options: {
              url: true,
              import: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/inline",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/inline",

      }
    ],
  },
  resolve: {
   
    extensions: [".js", ".jsx", ".css", ".tsx", ".ts"],
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      buffer: false,
    },
  },
  externals: [
    {
      react: "react",
      "react-dom": "react-dom",
      "prop-types": "prop-types",
      antd: "antd",
      "antd-style": "antd-style",
    },
    // Taken from https://github.com/lzszone/antd-cropper/blob/master/webpack.config.js.
    // Make antd library AND styles to be external to current project
    // /^antd[.]*/,
  ],
  plugins: [
    new MiniCssExtractPlugin(),
   
  ],
};
