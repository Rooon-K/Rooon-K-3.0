---
title: 浮动
date: 2023/04/16
---

## 十三、float 浮动
在 CSS 中, 通过 float 属性来定义浮动, 元素的浮动是指设置了移动属性的元素会脱离标注文档流的控制,  移动到其父元素中指定位置的过程。   
其语法格式为: 
```
选择器 {
  float: 属性值;
}
```
float 的常用属性值: 
| 属性值 | 描述  |
|-------| ----- |
| left  | 元素向左浮动 |
| right | 元素向右浮动 |
| none  | 元素不浮动( 默认值 ) |

案例: 
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>元素的浮动</title>
  <style type="text/css">
    .father {
      background: #ccc;
      /*定义父元素的样式*/
      border: 1px dashed #999;

    }

    .box01,
    .box02,
    .box03 {
      /*定义 box01、 box02、 box03 三个盒子的样式*/
      height: 50px;
      width: 50px;
      background: #FF9;
      border: 1px solid #F33;
      margin: 15px;
      padding: 0px 10px;
    }

    p {
      /*定义段落文本的样式*/
      background: #FCF;
      border: 1px dashed #F33;
      padding: 0px 10px;
    }
  </style>
</head>

<body>

  <div class="father">
    <div class="box01">box01</div>
    <div class="box02">box02</div>
    <div class="box03">box03</div>
  </div>

  <p>12</p>

  <!--不定义float属性, float属性值都为其默认值 none-->

</body>

</html>
```
![](/float1.png)

为box1 2 3添加 `float: left`。
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>元素的浮动</title>
  <style type="text/css">
    .father {
      background: #ccc;
      /*定义父元素的样式*/
      border: 1px dashed #999;

    }

    .box01,
    .box02,
    .box03 {
      /*定义 box01、 box02、 box03 三个盒子的样式*/
      height: 50px;
      width: 50px;
      background: #FF9;
      border: 1px solid #F33;
      margin: 15px;
      padding: 0px 10px;
    }

    p {
      /*定义段落文本的样式*/
      background: #FCF;
      border: 1px dashed #F33;
      padding: 0px 10px;
    }

    .box01,
    .box02,
    .box03 {
      /*定义box01、box02、box03左浮动*/
      float: left;
    }
  </style>
</head>

<body>

  <div class="father">
    <div class="box01">box01</div>
    <div class="box02">box02</div>
    <div class="box03">box03</div>
  </div>

  <p>12</p>

  <!--不定义float属性, float属性值都为其默认值 none-->

</body>

</html>
```
![](/float2.png)

## 十四、清除浮动
由于浮动元素不在占用原文档流的位置, 使用浮动会影响后面相邻元素的固定元素。   
例如上面案例 p 元素受到浮动影响, 产生了位置上的变化, 此时要避免浮动对其他元素的影响, 就需要清楚浮动。在 CSS 中使用 clear 属性清楚浮动, 其基本语法为:
```
选择器 {
  clear: 属性值;
}
```
clear 的常用属性值:
| 属性值 | 描述 |
|-------|------|
| left  | 清除左侧浮动的影响 |
| right | 清除右侧浮动的影响 |
| both  | 清楚两侧浮动的影响 |

案例:
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>清除元素的左浮动</title>
  <style type="text/css">
    .father {
      /*定义父元素的样式*/
      background: #ccc;
      border: 1px dashed #999;
    }

    .box01,
    .box02,
    .box03 {
      /*定义box01、box02、box03三个盒子的样式*/
      height: 50px;
      line-height: 50px;
      background: #FF9;
      border: 1px solid #F33;
      margin: 15px;
      padding: 0px 10px;
      float: left;
      /*定义box01、box02、box03 左浮动*/
    }

    p {
      /*定义段落文本的样式*/
      background: #FCF;
      border: 1px dashed #F33;
      margin: 15px;
      padding: 0px 10px;
      clear: left;
      /*清除左浮动*/
      /*上一行代码用于清除段落文本左侧浮动元素的影响*/
    }
  </style>
</head>

<body>

  <div class="father">
    <div class="box01">box01</div>
    <div class="box02">box02</div>
    <div class="box03">box03</d1v>
      <p>111</p>
    </div>

</body>

</html>
```
![](/float3.png)
运行后可以看出, 清除段落文本左侧的浮动后, 段落文本不再受到浮动元素的影响, 而是按照元素自身的默认排列方式, 独占一行, 排列在浮动元素 box01、 box02、box03的下面。
**需要注意的是,  clear 属性只能清除元素左右两侧浮动的影响。**   
然而在制作网页时, 经常会遇到一些特殊的浮动影响。   
例如, 对子元素设置浮动时, 如果不对其父元素定义高度, 则子元素的浮动会对父元素产生影响。
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>清除浮动</title>
  <style type="text/css">
    .father {
      /*没有给父元素定义高度*/
      background: #ccc;
      border: 1px dashed #999;
    }

    .box01,
    .box02,
    .box03 {
      height: 50px;
      line-height: 50px;
      background: #f9c;
      border: 1px dashed #999;
      margin: 15px;
      padding: 0px 10px;
      float: left;
      /*定义box01、box02、box03三个盒子左浮动*/
    }
  </style>
</head>

<body>

  <div class="father">
    <div class="box01">box01</div>
    <div class="box02">box02</div>
    <div class="box03">box03</div>
  </div>

</body>

</html>
```
![](/float4.png)
上面这个例子中, 给 box1 2 3 三个盒子定义左浮动, 同时不给其父元素设置高度。   
运行后由于受到子元素浮动的影响, 没有设置高度的父元素变成了一条直线, 即父元素不能自适应子元素的高度。

由于父元素和子元素为嵌套关系, 不存在左右位置, 所以使用 clear 属性并不能清除子元素浮动对父元素的影响。对于这种情况有以下三种方法:
### 1. 使用空标记清除浮动
在浮动元素之后添加一个空标签, 并对该标签使用 `clear: both` 样式, 即可清除元素浮动所产生的影响。
案例:
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>空标记清除浮动</title>
  <style type="text/css">
    .father {
      /*没有给父元素定义高度*/
      background: #ccc;
      border: lpx dashed #999;
    }

    .box01,
    .box02,
    .box03 {
      height: 50px;
      line-height: 50px;
      background: #f9c;
      border: 1px dashed 999;
      margin: 15px;
      padding: 0px 10px;
      float: left;
      /*定义box01、box02、box03三个盒子左浮动*/
    }

    .box04 {
      clear: both;
    }

    /*对空标记应用clear:both;*/
  </style>
</head>

<body>

  <div class="father">
    <div class="box01">box01</div>
    <div class="box02">box02</div>
    <div class="box03">box03</div>
    <div class="box04"></div>
    <!--在浮动元素后添加空标记-->
  </div>

</body>

</html>
```
![](/float5.png)
在浮动元素 box1 2 3 之后添加 class 为 box4 的空 div , 然后对 box4 应用 `clear: both` , 父元素被其子元素撑开, 即消除浮动对父元素的影响。   
注意: 此方法虽然可以清除浮动但无形中增加了无意义的结构元素, 因此不建议使用。

### 2. 使用 `overflow` 属性清除浮动
对元素应用 `overflow: hidden;` 也可以清除浮动对元素的影响, 该方法弥补了方法一的不足。   
案例:
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>overflow属性清除浮动</title>
  <style type="text/css">
    /*没有给父元素定义高度*/
    .father {
      background: #ccc;
      border: 1px dashed #999;
      overflow: hidden;
      /*对父元素应用overflow:hidden;*/
    }

    .box01,
    .box02,
    .box03 {
      height: 50px;
      line-height: 50px;
      background: #f9c;
      border: 1px dashed #999;
      margin: 15px;
      padding: 0px 10px;
      float: left;
      /*定义box01、box02、box03三个盒子左浮动*/
    }
  </style>
</head>

<body>

  <div class="father">
    <div class="box01">box01</div>
    <div class="box02">box02</div>
    <div class="box03">box03</div>
  </div>

</body>

</html>
```
![](/float5.png)

### 3. 使用 `after` 伪元素清除浮动
使用 `after` 伪元素也可以清除浮动, 该方法只适用于 IE8+ 和非 IE 浏览器。  
使用 `after` 伪元素清除浮动的时候要注意:
1. 必须为需要清除浮动的伪元素设置 `hight: ();` 样式, 否则该元素会比实际高度高出若干元素。
2. 必须在伪元素中设置 `content` 属性, 属性值可以为空, 如 `content: ""`;

案例:
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>使用after伪对象清除浮动</title>
  <style type="text/css">
    .father {
      /*没有给父元素定义高度*/
      background: #ccc;
      border: 1px dashed #999;
    }

    .father:after {
      /*对父元素应用after伪对象样式*/
      display: block;
      clear: both;
      content: "";
      visibility: hidden;
      height: 0;
    }

    .box01,
    .box02,
    .box03 {
      height: 50px;
      line-height: 50px;
      background: #f9c;
      border: 1px dashed #999;
      margin: 15px;
      padding: 0px 10px;
      float: left;
      /*定义box01、box02、box03三个盒子左浮动*/
    }
  </style>
</head>

<body>

  <div class="father">
    <div class="box01">box01</div>
    <div class="box02">box02</div>
    <div class="box03">box03</div>
  </div>

</body>

</html>
```
![](/float5.png)

## 十五、`overflow` 属性
当盒子内的元素超出盒子自身大小的时候, 内容就很溢出, 如果想要规范溢出内容的显示方式, 就需要使用 `overflow` 属性。
```
选择器 {
  overflow: 属性值;
}
```
常用属性值:
| 属性值 | 描述 |
|-------|------|
| visible | 内容不会被修剪, 会呈现在元素框之外(默认值) |
| hidden  | 溢出内容会被修剪, 且被修剪内容不可见      |
| auto  | 在需要时产生滚动条, 即自适应所要显示的内容 |
| scroll | 溢出内容会被修剪, 且浏览器会时钟显示滚动条 |
案例: 
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>overflow属性</title>
  <style type="text/css">

    .a {
    width: 100px;
    height: 140px;
    background: red;
    overflow: visible; /*溢出内容呈现在元素框之外*/
    float: left;
    }
    .b {
    width: 100px;
    height: 140px;
    background: yellow;
    overflow: hidden; /*溢出内容会被修剪，并且被修剪的内容是不可见的*/
    float: left;
    }
    .c {
    width: 100px;
    height: 140px;
    background: blue;
    overflow: auto; /*在需要时产生滚动条，即自适应所要显示的内容*/
    float: left;
    }
    .d {
    width: 100px;
    height: 140px;
    background: green;
    overflow: scroll; /*溢出内容会被修剪，且浏览器会始终显示滚动条*/
    float: left;
    }

    </style>
</head>

<body>

  <div class="a">
    当盒子内的元素超出盒子自身的大小时, 内容就会滥出, 如果想要规范後出内容的显示方式, 就需要使用overflow属性, 它用于规范元素中溢出内容的显示方式。
  </div>
  <div class="b">
    当盒子内的元素超出盒子自身的大小时, 内容就会滥出, 如果想要规范後出内容的显示方式, 就需要使用overflow属性, 它用于规范元素中溢出内容的显示方式。
  </div>
  <div class="c">
    当盒子内的元素超出盒子自身的大小时, 内容就会滥出, 如果想要规范後出内容的显示方式, 就需要使用overflow属性, 它用于规范元素中溢出内容的显示方式。
  </div>
  <div class="d">
    当盒子内的元素超出盒子自身的大小时, 内容就会滥出, 如果想要规范後出内容的显示方式, 就需要使用overflow属性, 它用于规范元素中溢出内容的显示方式。
  </div>

</body>

</html>
```
![](/float6.png)
