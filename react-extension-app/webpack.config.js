const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    head: "./src/head/index.jsx",
    mine: "./src/mine/index.jsx",
    point: "./src/point/index.jsx",
    redeem: "./src/redeem/index.jsx",
    referral: "./src/referral/index.jsx",
    vipTiers: "./src/vip-tiers/index.jsx",
    footer: "./src/footer/index.jsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 输出的目录
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
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
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
