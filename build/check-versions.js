/**
使用时require('./check-versions')()
require可以加载另外一个文件(module)的方法或者对象
如果该文件有module.exports则使用的是exports的对象
如果该文件只是一个配置json文件，加载的就是这个json对象
----
process为当前npm进程
process.version当前npm进程版本号
----
semver.clean
semver.satisfies
----
chalk.color(message)如:chalk.red("使用红色打印警告信息")
----
该文件主要检查node和npm的版本是否符合要求。
engines配置的是要求的版本
**/
var chalk = require('chalk')
var semver = require('semver')
var packageConfig = require('../package.json')
var shell = require('shelljs')
//命令行执行方法
function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

var versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),//获取当前node版本号
    versionRequirement: packageConfig.engines.node
  },
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),//获取npm版本号
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  var warnings = []
  for (var i = 0; i < versionRequirements.length; i++) {
    var mod = versionRequirements[i]
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
    for (var i = 0; i < warnings.length; i++) {
      var warning = warnings[i]
      console.log('  ' + warning)
    }
    console.log()
    process.exit(1)
  }
}
