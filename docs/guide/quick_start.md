# 快速上手

## 使用CLI
1. 安装CLI
```shell
npm i yunkou-cli -g
```
2. 初始化项目
```shell
yunkou init
```
技术类型介绍:
- **vue**     
基于`vue2`的模板，预先配置好`webpack`打包工具，分为携带`router`和不携带`router`的版本。
  - `vue-with-router` 带router版本
  - `vue-without-router` 不带router版本
- **react**     
模板待添加
- **其他**     
普通`HTML`模板，不使用打包工具，但为了本地调试方便，预先安装了`webpack-dev-server`

以vue不带router模板为例:
[![asciicast](https://asciinema.org/a/hWhco38ereYTOsDFwzJ4eWKt5.svg)](https://asciinema.org/a/hWhco38ereYTOsDFwzJ4eWKt5)

3. 启动项目
```shell
npm run serve # 会默认监听本机的 3334 端口
```

4. 在沙箱环境中调试
- 打开沙箱环境调试地址`http://ptf6web.xbongbong.com/#/cloudcode/test`
- 在调试工具中输入本地地址`http://localhost:3334/`即可看到如下页面
![sandbox_dev](/cloudcode-doc/images/sandbox_dev.png)