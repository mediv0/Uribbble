const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: {
        content: "./src/index.ts",
        background: "./src/background.ts",
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                path.resolve(__dirname, "manifest.json"),
                path.resolve(__dirname, "src", "style.css")
            ],
        }),
    ],
};
