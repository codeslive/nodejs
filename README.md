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

### commonjs 与 module 的区别

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

### 09-模块化

commonjs 与 module 的区别

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