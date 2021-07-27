---
sidebarDepth: 4
---

# 使用SDK

## 安装SDK
1. 使用npm
```shell
npm i xbb-sdk -S
```
2. 使用cdn
```html
<script src="https://cdn.jsdelivr.net/npm/xbb-sdk/index.js" entry></script>
```

## API列表

### xbb.getUserInfo
> 获取用户信息
#### 参数
#### 返回值
#### Promise
```javascript
{
  userId, // 用户的userid
  corpid  // 用户的公司corpid
}
```

### xbb.useComponent(Object object)
> 调用销帮帮CRM系统组件
#### 参数
#### Object object
| 属性 | 类型 | 必填 | 说明 |
| --- | --- |  ---- | --- |
| action | String | 是 | 调用的组件名称 |
| data | Object | 否 | 传递给组件的数据 |

目前支持调用的组件如下:
| action | data | 说明 |
| ------ | ---- | --- |
| openDetailPage | {appId, dataId, saasMark, businessType, subBusinessType} | 调用详情页 |
| addNewForm | {appId, formId, saasMark, menuId, businessType, subBusinessType, cloudcodeData} | 调用新建表单页 |
| showMessage | {type, content, time} | 调用message组件 |


#### 返回值
#### Promise

### xbb.sendMessage(Object object)
> 向销帮帮CRM发送消息
#### 参数
#### Object object
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | ----- | ---- | --- |
| type | String | | 是 | 消息类型 |
| data | Object | | 否 | 消息内容 |

#### 返回值
#### Promise


### xbb.onMessage(function callback)
> 接受销帮帮CRM发来的消息
#### 参数
#### function callback
`callback(data)`
#### data: Object object
| 属性 | 类型 | 说明 |
| --- | --- | --- |
| type | String | 消息类型 |
| data | Object | 消息内容 |
#### 返回值

### xbb.cloud.callFunction(Object object)
> 调用云函数
#### 参数
#### Object object
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | ----- | ---- | --- |
| name | String | | 是 | 调用的云函数名称 |
| data | Object | | 否 | 传递给云函数的参数 |
#### 返回值
#### Promise data
云函数运行的结果

### xbb.cloud.uploadFile(Object object)
> 上传文件到云存储
#### 参数
#### Object object
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | ----- | ---- | --- |
| cloudPath | String | | 否 | 云存储路径 |
| file | file | | 否 | 上传的文件 |
#### 返回值
#### Promise url
文件的云存储地址