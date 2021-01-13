# 云函数环境
> 云函数是运行在阿里云函数计算服务上的，目前仅支持nodejs12(Node.js 12.16.1)的运行环境。

## 返回信息
Node.js采用异步编程的模型，您的函数需要使用callback入参返回信息。callback的语法如下所示。
`callback(Error error, Object result);`

| 参数名称 | 说明 |
| ------- | --- |
| error  | 在函数执行内部失败时使用此参数返回错误内容，成功情况下设置为null。|
| result | 使用此参数返回函数成功的执行结果。result可以是任意类型，函数计算会将其序列化成字节流，放到响应体中返回给调用方。|

- callback被调用后则函数结束
callback被调用后函数就会停止运行，重复调用callback只接受第一次调用的结果。需要确保所有任务在callback调用之前完成，否则有些任务可能不会被运行。例如调用下面的函数，将返回hello world，并且message不会被打印。
```javascript
exports.handler = function(event, context, callback) {
  callback(null, 'hello world');
  callback(null, 'done');
  setTimeout(function() {
    console.log('message');
  }, 1000);
};     
```
- callback未被调用则函数超时
如果在函数中没有调用callback，则系统将认为函数没有结束，会等待函数结果直到超时。

## 使用内置模块
除了Node.js的标准模块，函数计算的Node.js运行环境中还包含了一些常用模块，您可以直接引用这些常用模块，目前函数计算包含的常见模块如下所示。
| 名称 | 版本 | 模块介绍 |
| --- | ---- | ------ |
| co | 4.6.0 | 控制流 |
| gm | 1.23.0 | 图片处理库 |
| ali-oss | 4.10.1 | OSS SDK |
| ali-mns | 2.6.5 | MNS SDK |
| tablestore | 4.2.0 | OTS SDK |
| aliyun-sdk | 1.10.12 | 	Aliyun SDK |
| opencv | 6.0.0 | 视觉算法库 |

## 使用自定义模块
如果您需要使用自定义模块，则需要将您的自定义模块与代码一起打包上传。您可以使用npm包管理器进行依赖管理。打包时，需要针对文件进行打包，而不是针对代码整体目录进行打包。打包完成后，入口函数(index.js)文件需要位于包内的根目录。

- 在Windows下打包时，可以进入函数代码目录，全选所有文件以后，单击鼠标右键，选择压缩为zip包，生成代码包。
- 在Linux下打包时，通过调用zip命令时，将源文件指定为代码目录下的所有文件，实现生成部署代码包，例如zip code.zip /home/code/*。

## 调用外部命令
您的函数可能会用到一些工具，而这些工具并不是用Node.js写的。例如，Shell、C++ 或者Go编译出来的可执行文件。您仍然可以将这些工具与代码一起打包，然后在函数中通过运行外部命令的方法来使用它们。以下代码演示了如何运行一个Shell脚本。
```javascript
var exec = require('child_process');

exports.handler = function(event, context, callback) {
  var scriptPath = process.env['FC_FUNC_CODE_PATH'] + '/script.sh';
  exec.exec('bash '+scriptPath, {}, function(err, stdout, stderr) {
    if (err) return callback(err);
    console.log(stdout, stderr);
    callback(null, stdout);
  });
};
```
