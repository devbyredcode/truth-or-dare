const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                        }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "css/[name].css",
          chunkFilename: "css/[id].css"
        })
    ],
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
}

module.exports = config;