# webpack4-dome
1.react-hmre实现局部刷新，它主要依赖于react-transform-hmr、react-transform-catch-errors。react-transform-hmr用来实现上面的热加载，而react-transform-catch-errors用来捕获错误，直接展示在页面上，而不用在去控制台查找错误。",

- 开发环境
- 使用 Storybook 进行组件预览
- 使用 WebpackDevServer 部署开发服务器
- 支持组件热加载
- 使用 Babel 进行代码转换
- 使用 ESLint 进行代码检测

# 下载依赖
$ yarn or npm install

# 新增页面
1.在 config-->entry-->entry.js 添加页面配置，
如 {
name: 'index',
path: 'index/Index.js',
title: '首页',
keywords: '首页,xxx',
description: '这是我们的首页'
},
2. $ npm run devNew, 根据entry.js的文件创建，html模板文件目录devBuild 和 js文件目录entryBuild，然后进行开发；

# 打包
$ npm run build 进行压缩打包

# 打包分析
$ npm run analyz

# npm包检测
$ npm run check

# 添加 styled-components 组件自定义样式
