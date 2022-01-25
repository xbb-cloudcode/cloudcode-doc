---
sidebarDepth: 2
---

# API列表

## 在SDK加载完成后执行
### xbb.ready(callback)
#### 参数
`[Function callback]` 回调函数
#### 返回值
`无`
#### 示例
```javascript
xbb.ready(() => {
  xbb.getUserInfo().then(userInfo => {
    console.log(userInfo)
  })
})
```


## 获取用户信息
### xbb.getUserInfo()
#### 参数
`无`
#### 返回值
`Promise<userInfo>`
| 属性 | 类型 | 说明 |
| --- | ---  | --- |
| action | String | 调用的组件名称 |
| data | Object | 传递给组件的数据 |
#### 示例
```javascript
xbb.getUserInfo().then(userInfo => {
  console.log(userInfo)
})
```

## 调用销帮帮CRM系统组件
### xbb.useComponent(object)
#### 参数
`[Object object]`
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
`Promise<result>`组件的返回值
#### 示例
```javascript
xbb.useComponent({
  action: 'openDetailPage',
  data: {
    appId: '123',
    dataId: '123',
    saasMark: '101',
    businessType: '100',
    subBusinessType: 'customer'
  }
}).then(result => {
  console.log(result)
})
```

## 关闭插件容器
### xbb.closeContainer() <Badge text="仅抽屉容器可用" type="warning"/>

#### 参数
`无`
#### 返回值
`无`
#### 示例
```javascript
xbb.closeContainer()
```


## 显示消息提示
### sdk.showToast(info)

**参数**

`[Object info]`

| 属性      | 类型     | 默认值 | 必填  | 说明                               |
|---------|--------|-----|-----|----------------------------------|
| type    | String | 无   | 是   | 提示类型: success/warning/info/error |
| content | String | 无   | 否   | 消息内容                             |
| time    | Number | 无   | 否   | 显示时长，单位为毫秒，最大值为3000              |

**返回值**

`Promise`

示例代码

```js
xbb.showToast({
  type: 'success', 
  content: '这是内容', 
  time: 3000
}).then(() => {
  // do something
})
```

## 刷新详情页
### xbb.refreshDetail()

#### 参数
`无`
#### 返回值
`Promise`
#### 示例
```javascript
xbb.refreshDetail().then(() => {
  //do something
})
```

## 刷新整个页面
### xbb.refreshPage()

#### 参数
`无`
#### 返回值
`Promise`
#### 示例
```javascript
xbb.refreshPage().then(() => {
  //do something
})
```


## 调用云函数
### xbb.cloud.callFunction(object)

#### 参数
#### Object object
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | ----- | ---- | --- |
| name | String | | 是 | 调用的云函数名称 |
| data | Object | | 否 | 传递给云函数的参数 |
#### 返回值
`Promise<data>`云函数的返回值
#### 示例
```javascript
xbb.cloud.callFunction({
  name: 'test',
  data: {
    a: 1,
    b: 2
  }
}).then(data => {
  console.log(data)
})
```

## 上传文件到云存储
### xbb.cloud.uploadFile(object)

#### 参数
`[Object object]`
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | ----- | ---- | --- |
| cloudPath | String | | 是 | 云存储路径 |
| file | file | | 是 | 上传的文件 |
#### 返回值
`Promise<url>`文件的云存储地址
#### 示例
```javascript
xbb.cloud.uploadFile({
  cloudPath: 'test/test.png',
  file: file
}).then(url => {
  console.log(url)
})
```
