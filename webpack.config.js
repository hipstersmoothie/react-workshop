const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const subjectsDir = path.join(__dirname, "subjects");
const subjectDirs = fs
  .readdirSync(subjectsDir)
  .map(file => path.join(subjectsDir, file))
  .filter(file => fs.lstatSync(file).isDirectory());

console.log(
  [subjectDirs[0]].reduce(
    (chunks, dir) => {
      const base = path.basename(dir);

      ["lecture", "exercise", "solution"].forEach(name => {
        const file = path.join(dir, `${name}.js`);

        if (fs.existsSync(file)) {
          chunks[`${base}-${name}`] = file;
        }
      });

      return chunks;
    },
    {
      index: path.join(subjectsDir, "index.js")
    }
  )
);

module.exports = {
  mode: "development",
  devtool: "source-map",

  // entry: [].reduce(
  //   (chunks, dir) => {
  //     const base = path.basename(dir);

  //     ["lecture", "exercise", "solution"].forEach(name => {
  //       const file = path.join(dir, `${name}.js`);

  //       if (fs.existsSync(file)) {
  //         chunks[`${base}-${name}`] = file;
  //       }
  //     });

  //     return chunks;
  //   },
  entry: {
    "00-Hello-World-lecture":
      "/Users/alisowski/Documents/react-workshop/subjects/00-Hello-World/lecture.js",
    main: path.join(subjectsDir, "index.js")
  },
  // ),

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|mocha-browser\.js/,
        loader: "babel-loader"
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(ttf|eot|svg|png|jpg)$/, loader: "file-loader" },
      {
        test: /\.woff(2)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader?jQuery"
      }
    ]
  },

  devServer: {
    open: true,
    quiet: false
  },

  plugins: [
    new HtmlWebpackPlugin({
      chunks: [
        "vendors~00-Hello-World-lecture~main",
        "00-Hello-World-lecture"
      ],
      template: "public/00-Hello-World/lecture.html"
    }),
    new HtmlWebpackPlugin({
      chunks: ["main"],
      template: "public/index.html"
    })
  ],

  stats: {
    // Config for minimal console.log mess.
    assets: true,
    colors: true,
    version: true,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false
  }
};
