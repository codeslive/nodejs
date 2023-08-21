# nodejs学习笔记

### 08-npm私服


1. 先初始化项目 (初始化需要有内容)

```shell
npm init
```

2. 安装 `verdaccio`

```shell
npm install verdaccio -g
```

3. 启动

```shell
verdaccio --listen 5000
```

4. 创建

```shell
// 注册
npm adduser --registry http://localhost:5000/

// 登录
npm login --registry http://localhost:5000/

// 发布
npm publish --registry http://localhost:5000/
```
---
### 09-模块化

1. Cjs是基于运行时的同步加载, esm是基于编译时的异步加载
2. Cjs是可以修改值的, esm值并且不可修改 (可读的)
3. Cjs不可以tree shaking, esm支持tree shaking
4. commonjs中顶层的 this 指向这个模块本身, 而 ES6 中顶层 this 指向 undefined


import非要参杂在逻辑里面 需使用 import函数模式

```javascript
if(true){
    // ...
    import('./test.js').then(res=>{
        console.log(res.name);
    })
}
```
--- 

### 10-全局变量&全局API

```javascript
// nodejs 定义全局变量
// 浏览器环境定义全局变量 window nodejs 定义全局变量 globalThis
// globalThis 根据环境自动判断 如果是浏览器环境就是 window 如果是 nodejs 环境就是 global
// 2022变动 (可跨平台)
globalThis.name = 'index.js';
require('./child.js');
require('./src/index.js');
// js 三部分组成 ECMAScript DOM BOM
```
---

### 11-CSR SSR SEO

1. 安装

```shell
npm i jsdom
```

### 12-Path windows posix

```javascript
const { log } = require('console');
const path = require('path');

// 1. basename 返回给定路径的最后一部分

// 我们现在是windows 系统, 默认是 \ 作为分隔符
// windows 兼容正斜杠的写法 / \ 都可以
// posix 处理不了 windows的路径

// 比如你现实 MocOs 给我处理一个 windows 的路径
console.log(path.basename('\\foo\\bar\\baz\\asdf\\quux.html')); // quux.html

// 2. dirname 返回路径的目录名
console.log(path.dirname('/foo/bar/baz/asdf/quux')); // /foo/bar/baz/asdf

// 3. extname 返回路径的扩展名 .html
// 返回值是带 . 的
// 如果没有, 返回空字符串
// 如果有多个点, 返回最后一个点后面的内容
// path.join() 拼接路径
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // \foo\bar\baz\asdf

console.log(path.extname('/foo/bar/baz/asdf/quux.html')); // .html


// path.resolve() 解析路径 返回绝对路径
// 都是绝对路径返回最后一个
// 如果只有一个相对路径, 返回当前工作目录的绝对路径
console.log(path.resolve(__dirname, './index.js'));

// path.parse() 解析路径 返回一个对象 path.format() 逆向解析
console.log(path.parse('/home/user/dir/file.txt'));

console.log(path.format(
{
    root: '/',
    dir: '/home/user/dir',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
}
));

// path.sep 返回路径分隔符
```
---

### 13-OS

```javascript
const os = require('os');
const {exec} = require('child_process'); // exct 执行 shell 命令
// 1. platform 获取操作系统平台 win32 darwin mac linux
console.log(os.platform()); // 获取操作系统
console.log(os.release()); // 获取操作系统版本
console.log(os.type()); // 获取操作系统类型
console.log(os.version()); // 获取操作系统版本号


// webpack vite rollup open:true 打开浏览器
const platform = os.platform();

const open = (url) =>{
    // mac
    if(platform === 'darwin'){
        exec(`open ${url}`)
    }else if(platform === 'win32'){
        // windows
        exec(`start ${url}`)
    }else if(platform === 'linux'){
        // linux
        exec(`xdg-open ${url}`)
    }
}

// open(`https://test.codeslive.top`);

// homedir 读取用户的目录 底层原理 %userprofile% mac $HOME
console.log(os.homedir()); // 获取用户的根目录

// cpu 架构
console.log(os.arch()); // x64 x86

// 操作系统 cpu 的信息 (CPU 的利用率的计算)
console.log(os.cpus()); // 获取 cpu 的信息
console.log(os.cpus().length); // 获取 cpu 的核心数

// 网络信息
console.log(os.networkInterfaces()); // 获取网络信息



```