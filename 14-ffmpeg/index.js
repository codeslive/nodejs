const { execSync} = require('child_process');

// 1. 基本格式转换 avi mp4 gif 等
execSync('ffmpeg -i video/test.mp4 demo/转换格式.avi', {stdio:'inherit'});

// 2. 提取视频中的音频
execSync('ffmpeg -i video/test.mp4 demo/提取音频.mp3', {stdio:'inherit'});

// 3. 裁剪视频 -ss 开始时间 -to 结束时间
execSync('ffmpeg -ss 10 -to 20 -i video/test.mp4 demo/裁剪.mp4', {stdio:'inherit'});

// 4. 加水印
execSync('ffmpeg -i video/test.mp4 -vf drawtext=text="XKZS":fontsize=30:x=10:y=10:fontcolor=white demo/加水印.mp4', {stdio:'inherit'});

// 5. 删除水印 fontsize=30, 一共 4 个字符, w = 30 x 4
execSync('ffmpeg -i video/test.mp4 -vf delogo=w=120:h=30:x=10:y=10  demo/删除水印.mp4', {stdio:'inherit'});


