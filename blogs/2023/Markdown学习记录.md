---
title: markdown学习记录
tags: 
 - Markdown
categories:
 - 学习笔记
date: 2023/04/02
---

::: tip 什么是Markdown
&emsp;&emsp;Markdown 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML（或者HTML）文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。

&emsp;&emsp;由于 Markdown 的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。如 GitHub、Reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge、简书等，甚至还能被使用来撰写电子书。
:::

## 标题
Markdown支持六个级别的标题。
```
语法：
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 文本样式

### 分段
在Markdown中, 分段需要使用空白行分割文本, 不应缩进带有空格或制表符的段落。
### 换行
以两个或多个空格结束, 并回车。
### 加粗
在需要加粗的地方前后添加两个星号或下划线。
### 斜体
在需要斜体的地方前后添加一个星号或下划线。
### 既加粗又斜体
前后添加三个星号或下划线。

## 块引用
在段落前面添加一个`>`
### 嵌套块引用
在段落前面添加一个`>>`

## 列表
### 有序表
在每一项前添加数字和句点, 数字不必按顺序, 但应以数字开头。
```
1. aaa
2. bbb
3. ccc
```
### 无序表
在每一项前添加`-`、`*`或`+`。
```
+ First item
* Second item
 - Indented item
  - Indented item
- Third item
```

## 代码
将单词或短语表示为代码使用两个"`"包裹。
### 代码块
将单词或短语表示为代码使用两个"```"包裹。

## 分割线
要创建水平线***, 请单独在一行上使用三个或更多的星号（）, 破折号（---）或下划线（___）。

## 链接
要创建链接, 请将链接文本括在方括号（例如[Rooon-K]）中, 然后立即在URL后面加上括号（例如(https://rooon-k.top)）中的URL。[Rooon-K](https://rooon-k.top)
```
[Rooon-K](https://rooon-k.top)
```

## 图片
要添加图像，请添加感叹号（!）, 然后在括号中添加替代文本, 并在括号中添加图像资源的路径或URL。您可以选择在括号中的URL之后添加标题。
```
![Pinia Logo](https://pinia.vuejs.org/logo.svg)
```
![Pinia Logo](https://pinia.vuejs.org/logo.svg)
