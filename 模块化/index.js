// 五种模式

// 1. 引入自己编写的模块
// require('./test.js'); // commonjs
import { name } from './test.js'; // moudule
console.log(name);

// 2. 引入第三方模块
// const md5 = require('md5'); // commonjs
import md5 from 'md5'; // module
console.log(md5('123456')); // e10adc3949ba59abbe56e057f20f883e

// 3. nodejs内置模块 fs http net os child_process
// const fs = require('node:fs'); // 高版本 nodejs node:fs 低版本 fs 

// module 
// import fs from 'fs';
// console.log(fs);

// 4. C++扩展 addon napi node-gyp .ndoe

// 5. 引入 json 文件 (module不支持引入json文件)
// const data = require('./data.json');
import data from './data.json' assert { type: "json" }; // 高版本可强制引入 18 实验性特性
console.log(data);





 

