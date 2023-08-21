// nodejs 定义全局变量
// 浏览器环境定义全局变量 window nodejs 定义全局变量 globalThis
// globalThis 根据环境自动判断 如果是浏览器环境就是 window 如果是 nodejs 环境就是 global
// 2022变动 (可跨平台)
globalThis.name = 'index.js';
require('./child.js');
require('./src/index.js');
// js 三部分组成 ECMAScript DOM BOM


