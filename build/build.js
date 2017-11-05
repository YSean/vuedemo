//webpack启动脚本
//检查版本
require('./check-versions')()
//设置环境参数
process.env.NODE_ENV = 'production'
//引入打包需要的插件
var ora = require('ora')//loading模块
var rm = require('rimraf')//删除模块
var path = require('path')//路径模块
var chalk = require('chalk')//用于在控制台输出带颜色字体的插件
var webpack = require('webpack')//webpack打包模块
//引入配置目录和初始化配置文件
var config = require('../config')
//以生产模式打包
var webpackConfig = require('./webpack.prod.conf')
//编译的时候可以显示loading图
var spinner = ora('building for production...')
spinner.start()
//删除dist路径下的资源,如果有异常就抛出
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  //执行webpack进行打包
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})