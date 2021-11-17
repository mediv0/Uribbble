const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");
const PKG = require("./package.json");

const banner = `/*!
  * {Uribbble} v${PKG.version} 🖖 (https://github.com/persian-tools/vue-persian-tools)
  * Forged by Mediv0
  * Released under the MIT License.
  * © 2021, Mediv0. (https://github.com/mediv0)
  */`;

module.exports = {
        entry: {
                content: "./src/index.ts"
        },
        devtool: "inline-source-map",
        module: {
                rules: [
                        {
                                test: /\.ts?$/,
                                use: "ts-loader",
                                exclude: /node_modules/
                        }
                ]
        },
        resolve: {
                extensions: [".tsx", ".ts", ".js"]
        },
        output: {
                filename: "[name].js",
                path: path.resolve(__dirname, "dist")
        },
        plugins: [
                new CopyPlugin({
                        patterns: [
                                path.resolve(__dirname, "manifest.json"),
                                path.resolve(__dirname, "src", "style.css"),
                                { from: "icons", to: "icons" }
                        ]
                }),
                new ZipPlugin({
                        filename: PKG.name
                }),
                new webpack.BannerPlugin({ banner })
        ]
};
