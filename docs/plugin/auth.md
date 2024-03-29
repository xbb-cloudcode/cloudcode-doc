# 鉴权相关

当您遇到嵌入式系统类的需求场景式，可以使用云叩插件体系进行集成，把系统集成至销帮帮。
此时您如果需要考虑免登录、鉴权等问题，则可参考此文档提供的方案：

### 整体架构及流程
![img_7.png](./img_7.png)
### 云叩和第三方系统侧

您通过云叩平台集成三方系统至销帮帮，可以安装 SDK 完成和销帮帮之间的通信以及必要信息的获取，如 userId/corpid 等。

```javascript
// 安装 sdk 至您的项目
npm i xbb-sdk -S
// 或使用 script 导入
<script src="https://cdn.jsdelivr.net/npm/xbb-sdk/index.js"></script>

// 在您的程序入口处
xbb.ready(() => {
  xbb.getUserInfo().then(data => {
    console.log(data)
    // data返回的数据如下
    // companyName: "云叩学院" // 公司名称
    // corpid: "ding012d1a0065f8b378ffe93478753d9884" // 公司id
    // roleIds: "|1|5|"  // 角色权限 id
    // userId: "1060661526-1904315290"  // 用户 id
    // userName: "Han 谭景琳  // 用户名称
    // 进行合法性鉴权
    xbb.cloud.auth().then(res => {
      console.log(res)
      // 返回为 true 的情况下 代表此用户已经通过销帮帮的鉴权，且用户信息有效。接下来进行第三方系统鉴权即可
    })
  })
})
```
需要注意上方我们调用了`xbb.cloud.auth`这个方法，使用这个方法的主要目的就是防止伪造 `corpid` 和 `userId`，通过云鉴权可以确保当前项目拿到的`corpid`和`userId`是合法的。
随后您可以在 `auth` 回调中根据对应平台方式获取与您系统唯一关联性的用户身份凭证，通常我们会使用手机号作为用户凭证
- 钉钉环境内销帮帮不会存留用户手机号，但您可以通过 corpid 和 userId 结合您企业开发者身份去钉钉调用
- 企微可以通过和钉钉平台类似的方式，通过 corpid 和 userId 前往企微相关接口查找，此外，企微也支持您直接通过 `corpid` 和 `userid`查询[用户列表接口](https://appfapi.xbongbong.com/#/apitest?anchor=%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95)，获取用户在销帮帮内绑定的手机号。
- 飞书平台通过 `corpid` 和 `userid`查询[用户列表接口](https://appfapi.xbongbong.com/#/apitest?anchor=%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95)，获取用户在销帮帮内绑定的手机号。
- 独立版通过 `corpid` 和 `userid`查询[用户列表接口](https://appfapi.xbongbong.com/#/apitest?anchor=%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95)，获取用户在销帮帮内绑定的手机号。

### 如何绑定手机号以及通过 API 查询
绑定手机号可在销帮帮登录后右上角用户名称-点击-账号设置-绑定完成手机号绑定。
![img_8.png](./img_8.png)
绑定完成后，通过`https://appapi.xbongbong.com/pro/v2/api/user/list`接口获取：
![img_9.png](./img_9.png)
读取到手机号以后可使用手机号作为您查找您系统内用户的条件，完善您系统的鉴权业务逻辑即可。

此外，销帮帮会尽快上线 SSO、OAuth 等三方鉴权和单点登录的方案，届时可以通过更方便的方式直接授权登录。