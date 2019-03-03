const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    //mode: 'development', //production
    mode: modoDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyWebpackPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [
            {
                //test: /\.css$/,
                test: /\.s?[ac]ss$/, //SASS
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                    'css-loader', //imterpretar @import, url()...
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}