// 1. os CPU架构
console.log(process.platform);
// 2. argv 返回数组
console.log(process.argv, process.argv.includes('--version')? '1.0.0':'无');
// 3. cwd() 获取工作目录__dirname esm模式下用不了 __dirname 可以使用cwd代替
console.log(process.cwd(),__dirname);
// 4. 内存信息
console.log(process.cwd, __dirname);
console.log(process.memoryUsage());
// {
//     rss: 28368896, 常驻集大小 物理内存德存量
//     heapTotal: 5111808, // V8给我们分配的堆内存的总大小包括未使用的内存
//     heapUsed: 4382704, // 已经使用的内存
//     external: 317864, // 外部的内存 C C++使用的
//     arrayBuffers: 11182 // 二进制的总量
//   }

// 5. exit

setTimeout(()=>{
console.log(5);
}, 5000);

// setTimeout(()=>{
//    process.exit();
// },2000);

process.on('exit', ()=>{
    console.log('进程退出了');
});

// 6. kill 杀死进程 需要一个参数pid 进程id
setTimeout(()=>{
    process.kill(process.pid);
},2000);

// 7. env环境变量 获取操作系统所有的环境变量 可以修改 修改只在当前进程生效 不会真正影响系统环境的变量
console.log(process.env);
// process.env.xxxx = '';