---
title: 网站组组会之js入门(四)
tags: 
 - JavaScript
categories:
 - 网站组组会
date: 2023/07/30
---

## 操作元素样式
js除了可以操作元素内容和属性外, 还可以操作元素样式。    
我们通过 元素对象.style.样式属性名 的方式操作。
```
<div id="box">aaa</div>

<script>
	const ele = document.querySelector('#box');
	ele.style.width = '100px';
	ele.style.height = '100px';
</script>
```
效果等效于
```
#box {
	width: 100px;
	height: 100px;
}
```
我们也可以通过修改类名的方式更改元素样式: 元素对象.className
```
<div id="box" class="first">aaa</div>

<style>
.first {
  background-color: red;
}
.second {
  background-color: blue;
}
</style>

<script>
	const ele = document.querySelector('#box');
	ele.onclick = function() {
    ele.className = 'second'
  }
</script>
```

### 小练习1
要求: 为一个文本框添加提示文本。当单击文本框时, 里面的默认提示文字( 手机 )会隐藏, 鼠标指针离开文本框, 里面的文字会显示出来。

具体实现步骤如下: 
1. 为元素绑定获取文本框焦点事件 onfocus 和失去焦点事件 onblur。
2. 如果获取焦点时, 文字颜色改为 blue, 需要判断表单里面的内容是否为默认文字, 如果是默认文字, 就清空表单内容。
3. 如果失去焦点, 文字颜色改为 red, 需要判断表单内容是否为空；如果为空, 则表单里边的内容改为默认文字。

```
<body>
  <input type="text" value="手机" style="color:red">
</body>
```

### 小练习2
编写 JavaScript 代码, 实现单击按钮, 改变当前按钮背景色效果( 当前按钮背景色变为粉色, 其他按钮背景色还原 )

具体实现步骤如下: 
1. 获取所有按钮元素
2. for 循环遍历每一个按钮元素
3. 给每个按钮元素添加 onclick 事件,
4. 先 for循环 把所有按钮背景颜色去掉
5. 在设置当前元素背景颜色
```
<button>按钮1</button>
<button>按钮2</button>
<button>按钮3</button>
<button>按钮4</button>
<button>按钮5</button>
```

### 小练习3
编写 JavaScript 代码, 实现点击li展示对应内容, 并高亮。

具体实现步骤如下: 
1. 获取所有 li 元素
2. for 循环遍历每一个 li 元素
3. 给每个 li 元素添加 onclick 事件
4. for循环 把所有 li 背景颜色, 所有item的 className 改为 item
5. 在设置当前 li 元素 className 为 current, 设置对应 item 的className 为 item active

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <style>
    .item {
      display: none;
      background-color: yellow;
    }
    .active {
      display: block;
    }
    .current {
      color: red;
    }
  </style>
</head>

<body>
  <div class="tab">
    <div class="tab_list">
      <ul>
        <li class="current">商品介绍</li>
        <li>规格与包装</li>
        <li>售后保障</li>
        <li>商品评价(50000)</li>
        <li>手机社区</li>
        </u1>
    </div>
    <div class="tab_con">
      <div class="item active">商品介绍模块内容</div>
      <div class="item">规格与包装模块内容</div>
      <div class="item">售后保障模块内容</div>
      <div class="item">商品评价(50000)模块内容</div>
      <div class="item">手机社区模块内容</div>
    </div>
  </div>

</body>

</html>
```