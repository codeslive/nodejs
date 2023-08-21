
// SSR 服务端渲染
const { JSDOM } = require('jsdom');
const fs = require('fs');
const root = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSR</title>
</head>
<body>
   <div id="app"></div>
</body>
</html>
`);

// 请求一个接口 拿到数据填充到 app 里面
// fetch node 18 版本之后才有 用法和浏览器一样
const window = root.window;
const document = window.document;
const app = document.querySelector('#app');
fetch('https://api.thecatapi.com/v1/images/search?limit=20&page=1').then(res=>res.json()).then(data=>{
    console.log(data);
    data.forEach(item => {
        const img = document.createElement('img');
        img.src = item.url;
        img.style.width = '200px';
        img.style.height = '200px';
        app.appendChild(img);
    });
    // 第一个参数是文件路径 第二个参数是要写入的内容
    fs.writeFileSync('./index.html', root.serialize());
    
});