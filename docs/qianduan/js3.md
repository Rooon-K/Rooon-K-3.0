---
title: this、dom基础、事件基础
tags: 
 - JavaScript
categories:
 - 网站组组会
date: 2023/07/27
---

## this
解析器在调用函数每次都会向函数内部传递一个隐含的参数, 这个隐含的参数就是this, this指向一个对象, 这个对象我们称为函数执行的上下文对象。

根据函数的调用方式的不同, this会指向不同的对象。
1. 以函数形式调用, this永远指向window对象。
2. 以方法形式调用, this就是执行调用这个方法的对象。
3. 箭头函数的this永远指向window对象。
```
function fun (a, b) {
  console.log(this);
}
const fun1 = (a, b) => {
  console.log(this);
}
fun(1, 2); // window
const obj = {
  name: "lisi",
  sayName: fun,
  sayName1: fun1
}
obj.sayName(); // object
obj.sayName1(); // window
```

## DOM操作
### 简介
DOM全称Document Object Model文档对象模型。

js通过DOM来对HTML文档进行操作, 只要理解了DOM就可以随心所欲的操作WEB页面。

![](/dom.png)

### 节点
节点是构成我们页面的最基本的组成部分, 网页中的没一个部分都可以成为是一个节点, 常用节点分为四类:
- 文档节点: 整个HTML文档
- 元素节点: HTML文档中的HTML标签
- 属性节点: 元素的属性
- 文本节点: HTML标签中的文本内容

![](/node.png)

### 获取元素
```
<p id="pid1" name="pname" class="pclass">这是文本1</p>
<p id="pid2" name="pname" class="pclass">这是文本2</p>
```
1、根据 id 获取元素
```
document.getElementById("目标元素的id");
console.log(document.getElementById("pid1")); // 文本1
console.log(document.getElementById("pid2")); // 文本2
```

2、根据标签获取元素
```
document.getElementsByTagName("目标元素的标签名"); // 返回一个数组
console.log(document.getElementsByTagName("p")[0]); // 文本1
console.log(document.getElementsByTagName("p")[1]); // 文本2
```

3、根据 name 获取元素
```
document.getElementsByName("目标元素的name"); // 返回一个数组
console.log(document.getElementsByName("pname")[0]); // 文本1
console.log(document.getElementsByName("pname")[1]); // 文本2
```

4、根据类名 className 获取元素
```
document.getElementsByClassName("目标元素的className"); // 返回一个数组
console.log(document.getElementsByClassName("pclass")[0]); // 文本1
console.log(document.getElementsByClassName("pclass")[1]); // 文本2
```

5、querySelector() 和 querySelectorAIl()
```
console.log(document.querySelector('.pclass')); // 获取class为pclass的第1个元素
console.log(document.querySelectorAll('.pclass')); // 获取class为pclass的元素集合
console.log(document.querySelectorAll('.pclass')[0]); // 文本1
console.log(document.querySelectorAll('.pclass')[1]); // 文本2
```


### 小练习
编写index.js, 将以下代码中的两个 label 和 input 节点通过console.log打印在控制台中
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
    <label for="" name="username">用户名</label>
    <input type="text" id="username">
    <label for="" name="password">密码</label>
    <input type="text" id="password">
    <button>点击我</button>
  </div>
  <script src="./index.js"></script>
</body>
</html>
```

## 事件
### 概述
在获取到元素后, 如果需要为元素添加交互行为, 这就需要用到事件来实现。

例如, 当鼠标指针经过导航栏中的某一项时, 自动展开二级菜单, 或者在阅读文章时, 选中文本后自动弹出分享、复制等选项。

### 事件三要素
1. 事件源
2. 事件类型
3. 事件处理程序

以上三要素可以简单理解为"谁触发了事件"、"触发了什么事件"、"触发事件以后要做什么" 。

### 绑定事件
```
<button id="btn">我是一个按钮</button>

const btn = document.getElementById('btn'); // 获取元素

// 绑定事件
btn.onclick = function() {
  console.log("按钮被点击了");
}
```

### 小练习
在index.js中编写代码, 实现点击按钮, 在控制台输出两个 input 中的内容。
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
    <label for="" name="username">用户名</label>
    <input type="text" id="username">
    <label for="" name="password">密码</label>
    <input type="text" id="password">
    <button>点击我</button>
  </div>
  <script src="./index.js"></script>
</body>
</html>
```
