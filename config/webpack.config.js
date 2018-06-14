/**
 * Created by changjin.zhang on 4/13/2017.
 */
const webpack=require('webpack');
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//提取css，不支持热更新
const CopyWebpackPlugin = require('copy-webpack-plugin');//拷贝静态文件
const prefix=require('autoprefixer');
const config=require('./config');
const env=config.env;
const entry=path.resolve('', "./index.js");
const cssnano=require('cssnano');
const publicPath=config.baseName;

let webpackConfig= {
    entry: {
        "js/app":entry,
        "js/vendor":[
            'react',
            'react-redux',
            'react-router',
            'redux'
        ]
    },
    output: {
        filename:config.env==='development'?"[name].[hash].js":"[name].[chunkhash].js",
        path: path.resolve('',config.buildPath)+config.baseName,//打包的路径build/basename/
        publicPath:publicPath,
        chunkFilename:"js/[name].[chunkhash].js"//按需加载的js文件的路径和后缀名
    },
    module:{
        rules:
            [{
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','react','stage-0']
                }
            },{
                test: /\.css$/,
                use:ExtractTextPlugin.extract({fallback:"style-loader", use:{
                    loader:"css-loader",
                    options:{
                        minimize:true
                    }
                }})
            },{
                test:/\.scss$/,
                use:config.env==='development'?["style-loader","css-loader","sass-loader"]:
                    ExtractTextPlugin.extract({
                        fallback:"style-loader",
                        use:["css-loader",{
                            loader:"postcss-loader",
                            options: {
                                plugins:[
                                    prefix({browsers : ['last 2 versions']}),
                                    cssnano({preset: 'default'})
                                ]
                            }
                        },"sass-loader"]
                    })
            },{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader?limit=8192&name=assets/images/[name].[ext]'//8192B,8KB
            },{
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'url-loader?limit=8192&name=assets/fonts/[name].[ext]'//8192B,8KB
            },{
                test: /\.(mp3)$/,
                loader: 'url-loader?limit=8192&name=music/[name].[ext]'
            }
            ]
    },
    resolve: {
        extensions: ['.js', '.jsx','.scss']
    },
    devServer: {
        port:config.port,
        // contentBase:path.resolve('',config.staticPath),//静态资源的根路径，等同于<base href='static/' />，html中引用到的资源会相对这个路径
        hot:true,
        historyApiFallback:{index:publicPath},//跳转到指定路径
        inline: true//实时刷新
    }
};
webpackConfig.plugins=[
    //定义全局变量,主要用于webpack对生产和开发环境的判断
    new webpack.DefinePlugin({
        'process.env.NODE_ENV':JSON.stringify(config.env)
    }),
    new CopyWebpackPlugin([
        {
            from:path.resolve('',config.staticPath),
            to:path.resolve('',config.buildPath+config.baseName+config.staticPath)
        }
    ]),
    new ExtractTextPlugin({
        filename:(getPath) => {
            return getPath('css/styles.[contenthash].css').replace('css/js', 'css');//生成路径替换js文件夹
        },
        allChunks:true
    }),
    //提取通用js文件，缺省chunks参数将会把入口entry中的通用文件提取到vendor中
    new HtmlWebpackPlugin({
        template :path.resolve('',"./src/index.html"),
        hash     :false,
        // favicon  :path.resolve('',"./src/favicon.ico"),
        filename :"index.html",
        inject   : 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        names : ['js/vendor']
    })
];
//按环境加载插件
if(env==='development') {
    webpackConfig.devtool="source-map";
    webpackConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),//hmr热替换
        new webpack.NoEmitOnErrorsPlugin()
    );//出错不影响执行
}else if(env==='production'){
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress : {
                unused    : true,
                dead_code : true,
                warnings  : false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),//平均分配chunk的大小
        new webpack.optimize.OccurrenceOrderPlugin()//按发生次数分配模块和块id，减少总文件大小
    );
}
module.exports=webpackConfig;