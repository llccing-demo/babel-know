# `basic`

> 从webpack基础开始，一点点堆积木。

## webpack

- [x] [基本配置](https://webpack.js.org/guides/getting-started/)
- [ ] [assets设置](https://webpack.js.org/guides/asset-management/#setup)

## [babel](https://webpack.eleven.net.cn/content/babel/)

- [x] babel-loader@8 @babel/core
- [x] 配置@babel/preset-env
- [x] @babel/polyfill，@babe/polyfill本质上是core.js的别名，不过core.js@3时，@babel/polyfill已经被废弃

### polyfill方案对比

[@babel/polyfill还是@babel/plugin-transform-runtime](https://webpack.eleven.net.cn/content/babel/polyfill-or-runtime.html)

`@babel/preset-env+@babel/polyfill`会转换句法，新API，但是会污染全局。

`@babel/preset-env+@babel/transform-runtime+@babel/runtime-corejs2`不会污染全局，但是检测不到`'hello'.incliudes('h')`这种句法.

#### 结论

##### 如果是自己的项目: @babel/preset-env+@babel/polyfill
useBuiltIns: 'entry'，在代码第一行引入 `import '@babel/polyfill'`，或者在webpack entry中写入模块`@babel/polyfill`，会将browserslist环境不支持的所有垫片都导入；能够覆盖到`'hello'.includes('h')`这种句法，足够安全且代码体积不是很大。

需要安装的依赖：
```js
npm install babel-loader@8 @babel/core @babel/preset-env --save-dev 
npm install @babel/polyfill
```
.babelrc配置文件
```js
{
  // 预设
  "presets": [
    [
      "@babel/preset-env",
      {
        // 对于ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
        "modules": false,
        "useBuiltIns": "entry",
        // 新版本的@babel/polyfill包函core.js@2和core.js@3，所以需要声明版本，
        // 否则webpack运行时会报warnning，此处暂时使用core.js@2版本（后文会调整为3）
        "corejs": 2
      }
    ]
  ],
  // 插件
  "plugins": []
}
```


__实际代码测试__
src/index.js未添加polyfill是4kb，增加@/babel-polyfill后变为__428__kb，增加了424kb。

没有增加`@babel/polyfill`的编译文件路径为`dist/main-babel.js`
编译完的文件路径为`dist/main-babel-polyfill.js`

__webpack分包__

修改webpack.config.js文件为
```js
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    polyfill: ['@babel/polyfill'],
  }, 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ],
  }
}
```
即可实现拆包，拆包后的文件为`dist/main.bundle.js`和`dist/polyfill.bundle.js`。

参考的文档
- [https://juejin.im/post/5c8339ca51882501351d4b82](https://juejin.im/post/5c8339ca51882501351d4b82) 详解webpack code splitting
- [https://juejin.im/post/5b304f1f51882574c72f19b0](https://juejin.im/post/5b304f1f51882574c72f19b0) webpack 4 配置最佳实践

##### 如果是第三方类库

`@babel/preset-env+@babel/plugin-transform-runtime+@babel/runtime-corejs2`（或者不做转码处理，提醒使用者自己做好兼容处理即可）

需要安装的全部依赖
```js
npm install babel-loader@8 @babel/core @babel/preset-env @babel/plugin-transform-runtime --save-dev
npm install @babel/runtime-corejs2
```

.babelrc配置文件
```js
{
   "presets": [
     [
       "@babel/preset-env",
       {
         "modules": false,
       }
     ]
   ],
   "plugins": [
     [
       "@babel/plugin-transform-runtime",
       {
         "corejs": 2 // 推荐
       }
     ]
   ]
 }
```