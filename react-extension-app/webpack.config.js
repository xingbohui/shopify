const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  entry: isProduction
    ? {
        head: "./src/head/index.jsx",
        mine: "./src/mine/index.jsx",
        point: "./src/point/index.jsx",
        redeem: "./src/redeem/index.jsx",
        referral: "./src/referral/index.jsx",
        vipTiers: "./src/vip-tiers/index.jsx",
        footer: "./src/footer/index.jsx",
      }
    : {
        index: "./src/index.js",
      },
  output: {
    path: path.resolve(__dirname, "../extensions/project-app2-extension/assets"), // 输出的目录
    filename: "[name].js", // 主文件输出的文件名，[name]是入口点的名称
    chunkFilename: "[name].chunk.js", // 代码块输出的文件名
  },
  stats: {
    children: true,
    // 其他stats配置...
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // 指定 dist 文件夹作为静态资源的根目录
    },
    compress: true, // 启用 gzip 压缩
    port: 9000, // 指定端口号
    open: true, // 自动打开浏览器
    historyApiFallback: true, // 单页应用支持
    // 其他配置...
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        // @svgr/webpack在webpack中使用：https://react-svgr.com/docs/webpack/
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(bmp|png|jpg|jpeg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
