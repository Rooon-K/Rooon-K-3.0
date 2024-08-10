---
title: HTML 基础
date: 2023/03/19
---

## 一、初识HTML

### 1.概念
HTML全称叫做HyperText Markup Language 超文本标记语言。

主要负责描述页面的语义。

在前端三件套(HTML CSS JS)中扮演"骨架"的角色。

需要明确的是HTML不是一门编程语言, 他是一种用于定义内容结构的标记语言。他由一系列的元素组成, 这些元素可以用来包围不同部分的内容, 使其以某种方式呈现或者工作。

### 2.基础结构
在VSCode中, 新建一个拓展名为html的文件, 输入"!"然后回车, 你就会看到如下页面。

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

我们来分析一下这个代码

这里分为四大部分
1. 第一行为声明文档类型是html。
2. 第2、12行的`<html> </html>`是html页面的根元素, 包裹住所有的内容。
3. 第3、8行的`<head> </head>`是html页面的头, 包含文档的元数据`<meta>`、文档的标题`<tittle>`, 我们可以通过`<meta>`标签设置一些网站的属性, 通过`<tittle>`来设置网页的标题, 通过`<link>`来引入外部文件。
4. 第9、11行的`<body> </body>`是html页面的可见内容, 后面构建的"骨骼"都是写在body标签内。

### 3.元素组成

1. 首先我们来看一个例子`<p>Hello world!</p>`, 这个元素的主要部分由：

开始标签`<p>`: 包含元素名称(p), 被<>包裹, 表示元素从这里开始。

结束标签`</p>`: 包含元素名称(p), 被<>包裹, 同时元素名称前包含一个斜杠, 表示元素在此结束。

内容`Hello world!`: 元素的内容。

三大部分组成。

2. 元素也可以拥有属性, 我们通常写在开始标签内，如`<p class="" id="" style="">Hello world</p>`, 这些属性可以控制元素的样式、行为, 具体用法我们在css、js部分详细说明。

### 4.嵌套元素

我们可以将一个元素放置于其他元素之中, 称之为嵌套, `<p>I'm <strong>very</strong> happy</p>`, 会发现句子中的"very"被加粗了。

### 5.空元素

我们将不包含任何内容的元素成为空元素, 如`<img>`元素, 由于他不包含内容, 因此他的组成便简写为`<img/>`。

## 二、行内元素
行内元素设置不能设置宽高, 元素宽高由内容撑大, 相邻的行内元素都会在一行, 即不会自动换行, margin 仅左右方向有效，上下无效，padding 上下左右均有效

### 1. `<span>`
在我们学习了css之后, 如果我们想依据自己的想法调整内容的大小, 可以将内容用`<span></span>`元素包裹, `<span>`元素没有任何语义, 非常方便我们用css、js来对其包裹的内容进行调整。

### 2. `<code>`
`<code></code>`元素一般用于包裹代码, 其中的代码不会被浏览器执行。

### 3. 斜体`<em>`

### 4. 强调`<strong>`

### 5. 超链接`<a>`
如果我们想要访问其他网址, 我们可以通过将文本或其他内容包裹在`<a>`元素内, 并给他一个`herf`属性, 就可以创建一个基本链接。 
如`<a href="http://www.baidu.com">点此前往百度</a>`



## 三、块级元素
块级元素能够使用 css 定义其宽高, 会独占一行, 也就是自动换行, 且对 margin padding 的上下左右设置均有效

### 1. `<p>`
段落都是由`<p>`元素标签进行定义。
如`<p>我是一个段落，千真万确。</p>`。

### 2. `<h>`
标题都是包裹在一个标题元素中(h1、h2、h3、h4、h5、h6), 依次表示主标题、二级标题、三级标题、四级标题、五级标题、六级标题。
如`<h1>我是文章的主标题</h1>`。

### 3. `<ul>`
无序列表, 每份无序列表都由`<ul>`开始, 包裹清单上的所以内容, 其中又需要用`<li>`元素单独包裹每项内容。

```
<ul>
  <li>吃饭</li>
  <li>睡觉</li>
  <li>打豆豆</li>
</ul>
```

### 4. `<ol>`
有序列表, 每份无序列表都由`<ol>`开始, 包裹清单上的所以内容, 其中又需要用`<li>`元素单独包裹每项内容。

```
<ul>
  <li>吃饭</li>
  <li>睡觉</li>
  <li>打豆豆</li>
</ul>
```
### 5. `<div>`
`<div>`同行内元素的`<span>`一样, 是一个块级无语意元素。

## 四、行内块元素
不会换行, 但是能够设置宽高

### 1. `<img>`
`<img>`元素是一个空元素, 需要一个`src`属性引入图片路径, 例如: `<img src="dinosaur.jpg">`。

### 2. `<input>`
`<input>`元素通常用于`<form>`表单元素中, 输入类型通过type属性控制(默认为text), type属性可以为`text | button | radio | checkbox | text | number | password`等。

### 3. `<select>`、`<option>`
`<select>`元素表示一个提供菜单的控件, 通常和`<option>`元素搭配使用。

```
<select name="select">
  <option value="value1">Value 1</option>
  <option value="value2">Value 2</option>
  <option value="value3">Value 3</option>
</select>
```

## 作业
使用html仿写此文档。

## 参考资料
[HTML基础](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/HTML_basics)