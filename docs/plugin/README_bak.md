# 服务端开发指南
> 销帮帮有一系列的API暴露给客户，请在阅读本指南之前先阅读[销帮帮API开发指南](https://profapi.xbongbong.com/#/authority)

## 鉴权说明
| 字段 | 说明 |
| --- | --- |
| token | [云叩平台开发配置](https://cloudcode.xbongbong.com/#/dev-info/index)中获取，生成签名用到的固定secret部分,是一个长期有效的密钥，请妥善保存，不要泄漏，不在请求中传输。 |
| sign | 每次访问销帮帮接口需要生成签名，用于身份验证和信息完整性认证，在请求header中传输。 |
| openAppId | 固定值`5555`，不参与签名，但需要在请求header中传输。 |
例: sign=SHA256(请求参数+ token)=SHA256({"corpid":"1","userId":"1"}123456789)。

## 调试工具
> 我们推荐您使用[Postman](https://www.postman.com/)进行调试。当然，如果您有更好的工具也可以推荐给我们。

1. 在postman的右上角新建一个环境，名为cloudcode
![Postman环境](/cloudcode-doc/images/postman_env.png)
2. 选中pre-request script栏目，将以下代码复制进去
```javascript
const crypto = require('crypto-js'); // 引入crypto-js
const token = '您的token';
const datas = `${pm.request.body.raw}${pm.request.headers.find(item => item.key === 'openAppId').value}`;  // 获取请求body和请求头中的openAppId字段
pm.environment.set("sign", crypto.SHA256(crypto.lib.WordArray.create(datas)).toString()); // 生成sign并赋值给环境变量sign
```
3. 使用双花括号{{}}语法使用环境变量
![Postman变量](/cloudcode-doc/images/postman_var.png)

参考资料:
[https://learning.postman.com/docs/writing-scripts/pre-request-scripts/](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/)