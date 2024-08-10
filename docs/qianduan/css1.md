---
title: 初识CSS、选择器
date: 2023/03/19
---

## 一、初识CSS

### 1.概念

CSS全称叫做Cascading Style Sheet 层叠样式表。

主要用于为HTML元素选择性的添加样式。

在前端三件套(HTML CSS JS)中扮演"皮肉"的角色。

同HTML一样, CSS也不是一门编程语言, 甚至不是标记语言, 他是一门样式表语言。

### 2.使用CSS
在html中使用css有两种途径:

1. 在html文件内使用`<style>`元素。
2. 新建一个以`.css`结尾的文件, 并通过`<link>`引入到html中。

### 3.基础结构

```
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

其中p我们称之为选择器(多个选择器用逗号隔开), 大括号包裹的每一条用分号隔开的我们称之为声明(color: red;), 声明由属性(color)和属性值(red)组成。

## 二、选择器
前面提到, CSS可以为HTML元素有选择性的添加样式, 方式就是通过CSS的选择器。

### 1.通配符选择器
应用于所有元素。
```
* {

}
```

### 1.标签选择器
顾名思义, 类型选择器通常是HTML页面中的元素名。

### 2.类选择器
类选择器是选择元素的`class`属性, 单一页面中, 一个类可以对应多个元素。

```
<p class="red">Hello world!</p>

.red {
  color: red;
}
```

### 3.id选择器
id选择器是选择元素的`id`属性, 单一页面中, 一个id只能对应一个元素。

```
<p id="red">Hello world!</p>

#red {
  color: red;
}
```

### 4.属性选择器
标签属性选择器是选择拥有特定属性的元素。

- `attr`: 指定属性的元素。
- `attr=val`: 属性等于值的元素。
- `attr*=val`: 属性包含指定值的元素。
- `attr^=val`: 属性以指定值开头的元素。
- `attr$=val`: 属性以指定值结尾的元素。

```
<p class="eat">吃饭</p>
<h1 class="eat">吃饭</p>
<span class="eat">吃饭</p>

.eat {
  color: red;
}
等价于
p[class="eat"] {
  color: blue;
}
```

### 5.组合选择器

#### 后代选择器: `A B`

```
<head>
  <style>
    div p {
      background: yellow;
    }
  </style>
</head>

<body>
  <div>
    <p>我是div的儿子p，被选中了，背景变成了黄色</p>
    <p>我是div的儿子p，被选中了，背景变成了黄色</p>
    <span>
      <p>我是div的孙子p，被选中了，背景变成了黄色</p>
    </span>
  </div>
  <p>我不在div中，样式没变化</p>
</body>
```

#### 相邻兄弟选择器: `A + B`
```
<head>
    <style>
        div+p{
            background: yellow;
        }
    </style>
</head>
<body>
    <h1>我是h1</h1>
    <p>我是div前面的第一个p，样式没变化</p>
    <div>
        <h2>我是h2</2>
        <p>我是div的儿子p，样式没变化</p>
    </div>
    <p>我是div后面的第一个p，被选中了，背景变成了黄色</p>
    <p>我是div后面的第二个p，样式没变化</p>
</body>
```

#### 普通兄弟选择器: `A ~ B`
```
<head>
    <style>
        div~p{
            background: yellow;
        }
    </style>
</head>
<body>
    <p>我是div前面的p，样式没变化</p>
    <p>我是div前面的p，样式没变化</p>
    <div>
        <p>我是div里面的p，样式没变化</p>
        <p>我是div里面的p，样式没变化</p>
    </div>
    <p>我是div后面的p，被选中了，背景变成了黄色</p>
    <p>我是div后面的p，被选中了，背景变成了黄色</p>
</body>
```

#### 子代选择器: `A > B`
```
<head>
    <style>
        div>p{
            background: yellow;
        }
    </style>
</head>
<body>
    <h1>我是h1</h1>
    <div>
        <h2>我是h2</2>
        <p>我是div直接包裹的儿子p，被选中了，背景变成了黄色</p>
        <p>我是div直接包裹的儿子p，被选中了，背景变成了黄色</p>
        <span>
            <p>我先被span包裹再被div包裹，是div的孙子p,没有被选中,样式没变化</p>
        </span>
    </div>
    <p>我不在div中，样式没变化</p>
</body>
```

### 6.伪类选择器
伪类选择器是选择元素的特定行为, 如鼠标悬停。

```
<p>Hello world!</p>

p:hover {
  color: red;
}
```

#### 条件伪类

- `:lang()`: 基于元素语言来匹配页面元素。
- `:dir()`: 匹配特定文字书写的方向。
- `:has()`: 匹配包含指定元素的元素。
- `:is()`: 匹配指定选择器列表里的元素。
- `:not()`: 皮诶不符合一组选择器的元素。

#### 行为伪类

- `:active`: 鼠标激活的元素。
- `:hover`: 鼠标悬浮的元素。
- `::selection`: 鼠标选中的元素。

#### 状态伪类

- `:target`: 当前锚点的元素。
- `:link`: 未访问的链接元素。
- `:visited`: 已访问的链接元素。
- `:focus`: 输入聚焦的表单元素。
- `:required`: 输入必填的表单元素。
- `:valid`: 输入合法的表单元素。
- `:invalid`: 输入非法的表单元素。
- `:in-range`: 输入范围以内的表单元素。
- `:out-of-range`: 输入范围以外的表单元素。
- `:checked`: 选项选中的表单元素。
- `:optional`: 选项可选的表单元素。
- `:enabled`: 事件启用的表单元素。
- `:disabled`: 事件禁用的表单元素。
- `:read-only`: 只读的表单元素。
- `:read-write`: 可读可写的表单元素。
- `:blank`: 输入为空的表单元素。
- `:current()`: 浏览中的元素。
- `:past()`: 已浏览的元素。
- `:future()`: 未浏览的元素。

#### 结构伪类

- `:root`: 文档的根元素。
- `:empty`: 无子元素的元素。
- `:first-letter`: 元素的首字母。
- `:first-line`: 元素的首行。
- `:nth-child(n)`: 元素中指定顺序索引的元素。
- `:nth-last-child(n)`: 元素中指定逆序索引的元素。
- `:first-child`: 元素中为首的元素。
- `:last-child`: 元素中为尾的元素。
- `:only-child`: 父元素仅有该元素的元素。
- `:nth-of-type(n)`: 标签中指定顺序索引的标签。
- `:nth-last-of-type(n)`: 标签中指定逆序索引的标签。
- `:first-of-type`: 标签中为首的标签。
- `:last-of-type`: 标签中为尾标签。
- `:only-of-type`: 父元素仅有该标签的标签。

#### 伪元素

- `::before`: 在元素前插入内容。
- `::after`: 在元素后插入内容

## 参考资料
[CSS基础](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics)  
[稀土掘金:大海我来了](https://juejin.cn/post/6941206439624966152)