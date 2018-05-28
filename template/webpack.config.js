const path = require("path");
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/main.ts",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "./dist")
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".vue"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {appendTsSuffixTo: [/\.vue$/]}
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'vue-style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    devServer: {
        contentBase: "./wwwroot",
        compress: true,
        port: 9000,
        publicPath: "/scripts/"
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};