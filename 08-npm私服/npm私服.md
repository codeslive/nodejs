# npm 私服

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