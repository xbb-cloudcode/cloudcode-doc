# 介绍
云叩是一个围绕销帮帮 CRM 展开的低代码平台，基于“微前端”的系统架构可以让开发者快速开发出自定义组件，赋能原有的销帮帮CRM系统。

## 相关技术介绍
#### 前端技术
云叩在前端使用了“微前端”的系统架构去拆分前端代码，同时基于“微前端”也让加载用户自定义组件成为了可能。我们在销帮帮CRM系统中预先植入了云叩的容器(即微前端框架的基座)，在适当的时候去加载开发者自己编写的组件(即普通HTML页面，云叩并不限制您的前端框架，您可以使用您熟悉的框架去开发)，通过云叩提供的SDK实现与销帮帮CRM的通信。

#### 后端技术
云叩并不限制后端技术栈，你可以用你熟悉的语言去开发云叩的后端。但云叩平台本身也提供了一套ServerLess环境给到开发者，赋能开发者更快速的实现自己的业务逻辑。如需了解更多请关注[云开发](/cloud-dev/)。

## 相关术语介绍
#### 控件
控件指的是销帮帮系统中已经存在的可以看得见的组件，比如一个按钮，一个对话框，一个卡片等等。用户可以通过这些组件和系统进行交互，也可以对特定的信息进行合理的展示。它也是调用插件、设置交互的入口。用户无需编码就可以完成对于控件的添加。

#### 插件
插件是我们实现业务自定义的最小单位，是对销帮帮系统本身功能的一个扩展， 用户可以通过自己编写代码来完成他想要的功能。用户编写完用于处理自己业务的插件后，需要在云叩平台进行上传，指定该插件调用的入口(即控件)后方可使用

#### 交互效果
交互效果是针对控件来说的，指的是用户在调用控件时应该触发的动作，比如在点击一个按钮的控件之后要显示一个对话框的控件，本质就是系统对于用户的指令所作出的响应。

#### 用户逻辑
![用户逻辑](/cloudcode-doc/images/yuque_diagram.png)