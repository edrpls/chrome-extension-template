const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        popup: './src/js/popup.js',
        background: './src/js/background.js',
        'in-content': './src/js/in-content.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    cache: true,
    devtool: 'eval-cheap-module-source-map',

    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: './manifest.json' },
            { from: './src/images' },
            { from: './src/views' }
        ])
    ]
};
