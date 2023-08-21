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


