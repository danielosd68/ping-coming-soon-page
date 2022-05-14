module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'app.js',
        path: 'C:/xampp/htdocs/ping-coming-soon-page-master/dist/js/'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    watch: true,
    mode: 'production'
}