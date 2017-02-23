var webpack = require("webpack");
var fs = require("fs");
var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var isDev = process.env.NEO_ENV === 'dev';

var plugins = [
    new ExtractTextPlugin(`[name].css`),
];
 if( !isDev ) {
   plugins.push( new webpack.optimize.UglifyJsPlugin({minimize: !isDev}));
 }

module.exports = {
    entry: {
        theme: "./src/pages/theme.js",
        admin: "./src/pages/admin.js",
        index: "./src/pages/index.js"
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
        // { 
        //     test: /\.(png|jpg)$/, 
        //     loader: 'url-loader?limit=8192&name=./images/[hash].[ext]' 
        // },
        // 为什么 image.size > 8192 也会被base64编码， 而且也无法打开?
        { 
            test: /\.(woff|woff2|eot|ttf|svg)$/, 
            loader: 'url-loader?limit=100000' 
        },
        {
            test: /.*\.(gif|png|jpe?g|svg)$/i,
            loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ]
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