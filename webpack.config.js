const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/app.js'],

    output: {
        path: path.resolve(__dirname, './public/scripts'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }            
        }]
    },

    devtool: 'source-map',

    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        publicPath: '/scripts/'
    },
};
