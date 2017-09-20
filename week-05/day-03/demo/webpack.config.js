const path = require('path'); // 导入路径包
var webpack = require('webpack'); //引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错

module.exports = {
    devtool: 'eval-source-map',
    entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],

    // 输出文件 build下的bundle.js
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },

    // 使用loader模块
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ],
        loaders: [
            { 
                test: /\.scss$/, 
                use:[
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],
    devServer: {
        contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        // colors: true,//在cmd终端中输出彩色日志(webpack2.x去除)
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8001//设置默认监听端口，如果省略，默认为"8080"
        // process: true//显示合并代码进度(webpack2.x去除)
    }
};