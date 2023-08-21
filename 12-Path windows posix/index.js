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