
const path = require('path');

module.exports = {
    entry: './app.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app-bundle.js'
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [ {
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }],
        }]
    }
};