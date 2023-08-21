// __dirname 当前文件所在的目录 绝对路径
// __filename 当前文件的绝对路径
console.log(__dirname);
// process 出来进程
console.log(process.argv); 
console.log(process.cwd());

setTimeout(() => {
    process.exit(); // 退出进程
}, 1000);

// 监听事件
process.on('exit', () => {
    console.log('退出前执行');
});


