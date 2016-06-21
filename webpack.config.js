var webpack = require("webpack");
var fs = require("fs");
var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/app/app.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
            include: [
                path.resolve(__dirname, "src"),
            ],
            query: {
                // plugins: ["transform-runtime"],
                presets: ["es2015", "stage-0", "react"]
            },
            exclude: [
                path.resolve(__dirname, "node_modules"),
            ]
        }, 
        { 
            test: /\.css$/, 
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        },
        { 
            test: /\.(png|jpg)$/, 
            loader: 'url-loader?limit=8192' 
        }]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    resolve: {
        extensions: ["", ".js", "less"]
    },
    externals: {
        react: 'var React',
        'react-dom': 'var ReactDOM'
    }
};