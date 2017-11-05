### Vue.js 2.0实战项目

基于Vue + Vuex + Vue-router + Webpack 2.0
微信相关界面，实现了个人中心、通讯录（快速导航）、搜索

### 技术栈

- [x] MVVM框架：Vue.js 2.0
- [x] 状态管理：Vuex
- [x] 移动端组件库：Mint-ui
- [x] 前端路由：Vue-router
- [x] 数据交互：Vue-resource
- [x] 打包工具：webpack 2.0
- [x] 环境配置：node + npm
- [x] 语言：es6


### 项目运行

```
git clone https://github.com/caochangkui/wechat-by-vue.git

cd wechat-by-vue

npm install

npm run dev //服务端运行，运行后访问 http://localhost:6868)

npm run build //项目打包 

```
### 配置chrome调试 http://www.cnblogs.com/mmzuo-798/p/6928532.html
以下是mac os下的操作步骤
1 git下载vue-devtools: 
2 安装vue-devtools
3 打开shells>chrome>src>manifest.json 把里面的"persistent": false改为true

```
git clone https://github.com/vuejs/vue-devtools
cd vue-devtools
npm install
cd shells/chrome/src
vi manifest.json
-- 修改manifest.json,把里面的"persistent": false改为true，如下图所示
-- 修改后需要重新编译
cd ../../../
npm run build
```
<img src="http://images2015.cnblogs.com/blog/826333/201706/826333-20170601135617524-1763706881.png"/>

4 在chrome里面添加扩展程序
在浏览器栏输入 chrome://extensions/
<img src="http://images2015.cnblogs.com/blog/826333/201706/826333-20170601135702555-1571279699.png"/>
5 在Vue文件中加入Vue.config.devtools
```
Vue.config.devtools = true; //这步很重要
new Vue({
    el: '#app',
    data: {
        a: 123,
    }
}); 
```

# vue组件库
### mint-ui vue组件库
  饿了么提供的组件库 https://github.com/ElemeFE/mint-ui 
###

# webpack相关插件介绍
### npm nodejs命令行工具
   npm帮助文档  http://nodejs.cn/api/buffer.html#buffer_the_zero_fill_buffers_command_line_option
   npm5注意事项 http://www.topjishu.com/11681.html
### webpack 打包工具
	帮助文档 http://www.css88.com/doc/webpack2/concepts/output
### webpack-bundle-analyzer
### webpack-dev-middleware
### webpack-hot-middleware
### http-proxy-middleware
### webpack-merge 文件合并
### copy-webpack-plugin
### extract-text-webpack-plugin 文本抽离
  该插件的主要是为了抽离css样式，防止将样式打包在js.
  在打包之前将import的css文件,vue里面的style都抽离出来放到css文件当中,js到时再根据css的名字进行获取
### html-webpack-plugin
### optimize-css-assets-webpack-plugin

### path 路径相关插件
### ora 在命令行显示loading
### semver 版本号对比

### vue-style-loader
### vue-css-loader
### vue-template-compiler
### vue-lazyload
### vue-resource

### css-loader
### url-loader
### file-loader

### eslint 代码格式检测工具(已注释)
	eslint (是一个用来识别 ECMAScript 并且按照规则给出报告的代码检测工具,使用它可以避免低级错误和统一代码的风格)
	eslint规范 http://www.cnblogs.com/my93/p/5681879.html


# 项目树
```
.
├── README.md
├── build                                              // 项目打包路径
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                                            // 上线项目文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── package.json                                      // 配置信息
└── src                                               // 源码目录
    ├── App.vue                                       // 输出文件
    ├── main.js                                       // 入口文件
    ├── assets                                        // 公用图片
    ├── base                                          // 存放通用组件的组件库
    │   ├── loading                                   // 栏加载组件
    │   └── scroll                                    // 滑屏文件
    ├── components                                    // 应用组件的组件库
    │   ├── chat 
    │   │   └── chat.vue                              // 微信组件
    │   ├── address
    │   │   └── address.vue                           // 通讯录组件
    │   │   └── address-detail
    │   │       └── address-detail.vue                // 通讯录详情组件
    │   │       └── address-more
    │   │           └── address-more.vue              // 通讯录更多详情组件
    │   ├── find
    │   │   ├── find.vue                              // 发现组件
    │   │   ├── find-circle
    │   │   │   └── find-circle.vue                   // 朋友圈组件
    │   │   ├── scan
    │   │   │   └── scan.vue                          // 扫一扫组件
    │   │   └── shake
    │   │       └── shake.vue                         // 摇一摇组件
    │   ├── me
    │   │   ├── me.vue                                // 个人中心组件
    │   │   ├── card
    │   │   │   └── card.vue                          // 卡包组件
    │   │   ├── money
    │   │   │   └── money.vue                         // 钱包组件
    │   │   ├── collection
    │   │   │   └── collection.vue                    // 收藏组件
    │   │   ├── album
    │   │   │   └── album.vue                         // 相册组件
    │   │   └── set
    │   │       └── set.vue                           // 设置组件
    │   ├── chatroom
    │   │   └── chatroom.vue                          // 聊天窗口组件
    │   │   └── chatroom-user
    │   │       └── chatroom-user.vue                 // 聊天者的个人信息组件
    │   ├── search
    │   │   └── search.vue                            // 搜索组件
    │   ├── plus
    │   │   └── plus.vue                              // 更多组件
    ├── router
    │   └── index.js                                  // 路由控制中心
    └── store                                         //  存放vuex相关代码
        ├── actions.js                                //  异步操作，或对mutation做一些封装
        ├── getters.js                                //  获取state，并对其做一些映射 
        ├── index.js                                  // vuex入口文件
        ├── mutation-types.js                         // 存放与mutatiom相关的常量
        ├── mutations.js                              //  处理数据逻辑方法的集合 
        └── state.js                                  //  管理所有状态

```




