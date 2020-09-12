const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: [{
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]',
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.js(x)?$/],
                test: /\.js(x)?$/,
                use: [{ loader: 'babel-loader' }],
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve('./src'),
        ],
        extensions: ['.tsx', '.js', '.ts', 'json']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    }
};