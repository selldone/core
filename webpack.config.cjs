const path = require('path');


module.exports = {
    entry: './SelldoneCore.ts', // path to your main TypeScript file
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js', // name of the output bundle
        path: path.resolve(__dirname, 'dist'), // directory to output the bundle
        libraryTarget: 'umd', // this is important if you want your library to be used in different environments (Node.js, browser, etc.)
        library: '@selldone/core-js', // Global var for library
    },
};