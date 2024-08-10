---
title: 前端面试109合集(一)
tags:
  - 面试
  - HTML
  - JavaScript
categories:
  - 面试
date: 2024/04/01
---

## 行内元素、块级元素

行内元素: 不能设置宽高, 元素宽高由内容撑大, 相邻的行内元素都会在一行, 即不会自动换行, margin 仅左右方向有效, 上下无效, padding 上下左右均有效, 主要包含的标签有`<span>`、`<strong>`、`<a>`

块级元素: 能够使用 css 定义其宽高, 会独占一行, 也就是自动换行, 且对 margin padding 的上下左右设置均有效, 主要包含的标签有`<div>`、`<p>`、`<h>`、`<ul>`、`<ol>`

行内块元素: 不会换行, 但是能够设置宽高, 主要包含的标签有`<img>`、`<input>`、`<select>`、`<option>`

## 跨标签页通信

1. BroadcastChannel  
   BroadcastChannel 通信的方式原理就是一个命名管道。它允许让指定的同源下浏览器不同的窗口来订阅它。

```
// 页面一
// 创建隧道
const broadCastChannel = new BroadcastChannel("broadcastChannel way");
// 发送数据
broadCastChannel.postMessage({
  sendMessage: "message"
});
// 关闭隧道
broadCastChannel.close();

// 页面二
// 监听数据
const channel = new BroadcastChannel("broadcastChannel way");
channel.addEventListener("message", (event) => {
  console.log(event.data) // event.data就是监听的消息
  // 关闭通道
  channel.close();
});
```

2. Service Worker  
   Service Worker 它是一种服务工作线程, 是一种在浏览器背后运行的脚本, 用于处理网络请求和缓存等任务。它是一种在浏览器与网络之间的中间层, 允许开发者拦截和控制页面发出的网络请求, 以及管理缓存, 从而实现离线访问、性能优化和推送通知等功能。
3. localStorage  
   每一次将一个值存储到本地存储时, 都会触发一个 storage 事件。

```
window.addEventListener("storage", (e) => {
  console.log("被修改的键: ", e.key);
  console.log("旧值: ", e.oldValue);
  console.log("新值: ", e.newValue);
});
```

4. SharedWorker  
   SharedWorker 是一种在 Web 浏览器中使用的 Web API，它允许不同的浏览上下文,如不同的浏览器标签页之间共享数据和执行代码。它可以用于在多个浏览上下文之间建立通信通道，以便它们可以共享信息和协同工作。
5. IndexDB
6. cookie
7. postMessage

## history 和 hash 两种路由

## DOM 树

## 原型链

## 继承

## 作用域

## 闭包

## 变量提升

## this 的指向

## 立即执行函数

## instanceof 原理

## bind 的实现

## apply 和 call

## 柯里化

## v8 垃圾回收机制

## 浮点数精度

## 事件模型

## new 操作符

## 事件循环机制

## promise 原理

## generator 原理

## 缓存策略

## 浏览器架构

## 浏览器工作原理

## 内存泄露
