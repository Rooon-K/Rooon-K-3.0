---
title: 边距属性、外边距重叠、防止外边距重叠的方法、box-shadow 盒子阴影效果、opacity
date: 2023/04/15
---

## 八、边距属性
CSS的边距属性包括内边距和外边距。
### 1.内边距
内边距指的是元素内容与边框之间的距离。   
在CSS中我们通过padding属性来设置内边距, 相关设置方法如下:
```
padding: 上下左右方向边距相同
padding-top: 上边距
padding-bottom: 下边距
padding-right: 右边距
padding-left: 左边距
```
在上面的设置中, padding的相关取值可以为`auto`、百分比、像素值`px`。
使用`padding`定义内边距时, 按顺时针顺序采用值复制
```
padding: 10px; //四方向内边距都为10px
padding: 10px 20px; //上下内边距为10px, 左右内边距为20px
padding: 10px 20px 30px; //上内边距为10px, 左右内边距为20px, 下内边距为30px
padding: 10px 20px 30px 40px; //上内边距为10px, 右内边距为20px, 下内边距为30px, 左内边距为40px
```
::: warning 注意
如果内边距设置为百分比, 都是相对于父元素的 width 值的百分比, 和高度 hight 无关
:::

### 2.外边距
外边距指的是元素边框与相邻元素之间的距离。   
其用法和`padding`相同

## 九、外边距重叠
块的上下边距有时会合并为单个边距, 其大小为单个边距的最大值, 这种行为被称为 **边距折叠** 。  
注意: 只有 **块元素** 会发生外边距重叠,  **行内元素** 和 **行内块元素** 都不会发生外边距重叠问题。 
外边距重叠算法:

有三种情况会形成外边距折叠:
### 1.同一层相邻元素之间
```
<style>
p:nth-child(1){
  margin-bottom: 13px;
}
p:nth-child(2){
  margin-top: 87px;
}
</style>

<p>下边界范围会...</p>
<p>...会跟这个元素的上边界范围重叠。</p>
```
如果没有边距折叠的话上下两个p元素中间应该会间隔100px, 但实际为87px。

### 2.没有内容将父元素和后代元素分开
举个例子:
```
<div id="box1">
  <div id="box2"></div>
</div>
<style>
#box1{
  width: 200px;
  height:200px;
  background:red;
} 
#box2{
  width: 100px;
  height:100px;
  background:yellow;
  margin-top:100px;
} 
</style>
```
从代码中我们的目的是让子元素距离父元素的顶部100px, 但结果是父级会和子级一起移动距离顶部100px。
![](/margin.png)
### 3. 空的块级元素
当一个块级元素的上边界贴到下边界的时候也会发生边界折叠。  
这种情况发生在一个块元素完全没有设定边框`border`、内边距`padding`、高度`hight`、最小高度`min-hight`、最大高度`max-hight`、内用设定为`inline`或是加上`clear-fix`的时候。
```
<p>下边界范围是 87 ...</p>
<div></div>
<p>... 上边界范围是 87</p>
<style>
  p {
    margin: 0;
  }
  div {
    margin-top: 13px;
    margin-bottom: 87px;
  }
</style>
```

边距重叠算法:
1. 两个正数取最大值。
2. 两个负数取绝对值最大值。
3. 一正一负取两者之和。

## 十、防止外边距重叠的方法
- 对容器使用`overflow: auto`, 防止内部元素的外边距和容器外部的外边距重叠。
- 在连外边距之间加上边框或内边距。
- 设置容器为浮动元素`float`、内联块`display: inline;`、绝对定位`position: absolute;`、固定定位`position: fixed;`。
- 使用`flex`布局。

## 十一、box-shadow 盒子阴影效果

| 参数值   | 说明                                       |
| -------- | ------------------------------------------ |
| 像素值1  | 表示元素水平阴影位置, 可以为负值( 必选 )。 |
| 像素值2  | 表示元素垂直阴影位置, 可以为负值( 必选 )。 |
| 像素值3  | 阴影的模糊半径( 可选 )。                   |
| 像素值4  | 阴影扩展半径( 可选 )。                     |
| 颜色值   | 阴影颜色( 可选 )。                         |
| 阴影类型 | 内阴影( inset ) / 外阴影( 默认 ) ( 可选 ) |

## 十二、opacity 透明度
在 CSS 中, 使用 `opacity` 属性能使任何元素呈现出透明效果。
语法格式:
```
opacity: opacityValue;
```
参数 `opacityValue` 表示不透明度的值, 介于 0 ~ 1 之间, 其中 0 表示完全透明, 1 表示完全不透明。
