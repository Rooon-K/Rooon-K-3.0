---
title: 网站组组会之了解CSS(五)
tags: 
 - CSS
categories:
 - 网站组组会
date: 2023/04/16
---

## 十六、元素的定位
浮动布局虽然灵活, 但是无法对元素的位置进行精确控制。在 CSS 中, 通过定位属性可以实现元素的精确定位。    
### 元素的定位属性
1. 定位模式
```
选择器 {
  position: 属性值;
}
```
常用属性值: 
| 值 | 描述 |
|----|-----|
| static | 静态定位(默认值) |
| relative | 相对定位, 相对于其原文档流的位置进行定位 |
| absolute | 绝对定位, 相对于其上一个已经定位的父元素进行定位 |
| fixed    | 固定定位, 相对于浏览器窗口进行定位 |

2. 边偏移

在 CSS 中通过边偏移属性 top、bottom、left、right 来精确定义元素的位置。   
边偏移设置方式:    
|  属性  | 描述 |
|--------|-----|
|  top   | 顶端偏移量, 定义元素相对于其父元素上边线的距离 |
| bottom | 底部偏移量, 定义元素相对于其父元素下边线的距离 |
|  left  | 左侧偏移量, 定义元素相对于其父元素左边线的距离 |
|  right | 右偏移量, 定义元素相对于其父元素右边线的距离 |

示例:
```
position: relative; /* 相对定位 */
top: 50px; /* 距离顶部边线 50px */
left: 20px; /* 距离左边线 20px */
```

### static 静态定位
静态定位是元素默认定位方式, 在静态定位状态下, 无法通过边偏移属性来改变元素的位置。

### relative 相对定位
相对定位是将元素相对于他在标准文档流中的位置进行定位, 当 position 的取值为 relative 时, 可以将元素定位于相对位置。并可以通过边偏移属性改变元素的位置。
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>元素的定位</title>
  <style type="text/css">
    body {
      margin: 0px;
      padding: 0px;
      font-size: 18px;
      font-weight: bold;
    }

    .father {
      margin: 10px auto;
      width: 300px;
      height: 300px;
      padding: 10px;
      background: #ccc;
      border: 1px solid #000;
    }

    .child01,
    .child02,
    .child03 {
      width: 100px;
      height: 50px;
      line-height: 50px;
      background: #ff0;
      border: 1px solid #000;
      margin: 10px 0px;
      text-align: center;
    }

    .child02 {
      position: relative;
      /*相对定位*/
      left: 150px;
      /*距左边线150px*/
      top: 100px;
      /*距顶部边线100px*/
    }
  </style>
</head>

<body>
  <div class="father">
    <div class="child01">child-01</div>
    <div class="child02">child-02</div>
    <div class="child03">child-03</div>
</body>

</html>
```
![](/position1.png)

### absolute 绝对定位
绝对定位是将元素依据最近的已经定位的( 设置绝对、相对、固定定位 )父元素进行定位, 若所有父元素都没有定位, 则一句 body 元素进行定位。当 position 的取值为 absolute 时, 可以将元素的定位模式设置为绝对定位。     
将上面案例的 36 ~ 43 行替换为以下代码:
```
.child02 {
  position: absolute; /*绝对定位*/
  left: 150px; /*距左边线150px*/
  top: 100px; /*距项部边线100px*/
}
```
上述代码中, child02 被设置为绝对定位, 由于其所有父元素没有被设置定位, 因此他直接相对于 body 元素定位。   
若要让其相对父元素以绝对定位偏移, 可设置父元素 `position: relative;` 但不设置偏移量。   
案例:
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>子元素相对于直接父元素定位</title>
  <style type="text/css">
    .father {
      margin: 10px auto;
      width: 300px;
      height: 300px;
      padding: 10px;
      background: #ccc;
      border: 1px solid #000;
      position: relative;
      /*相对定位，但不设置偏移量。*/
    }

    .child01,
    .child02,
    .child03 {
      width: 100px;
      height: 50px;
      line-height: 50px;
      background: #ff0;
      border: 1px solid #000;
      margin: 10px 0px;
      text-align: center;
    }

    .child02 {
      position: absolute;
      /*绝对定位*/
      left: 150px;
      /*距左边线150px*/
      top: 100px;
      /*距顶部边线100px*/
    }
  </style>
</head>

<body>

  <div class="father">
    <div class="child01">child-01</div>
    <div class="child02">child-02</div>
    <div class="child03">child-03</div>
  </div>

</body>

</html>
```
![](/position2.png)
在上述代码中, 第 15 行对父元素设置 position: relative; 但不设置偏移量, 同时 child02 依旧为绝对定位, 并通过偏移属性进行精确定位。

运行后子元素相对父元素进行偏移。

注意:
1. 如果仅设置绝对定位, 不设置偏移, 则元素位置不变, 但他会脱离文档流, 会与后续上移元素重叠。   
案例:
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>子元素相对于直接父元素定位</title>
  <style type="text/css">
    .father {
      margin: 10px auto;
      width: 300px;
      height: 300px;
      padding: 10px;
      background: #ccc;
      border: 1px solid #000;
    }

    .child01,
    .child02,
    .child03 {
      width: 100px;
      height: 50px;
      line-height: 50px;
      background: #ff0;
      border: 1px solid #000;
      margin: 10px 0px;
      text-align: center;
    }

    .child02 {
      position: absolute; /* 不设置偏移量 */
    }
  </style>
</head>

<body>

  <div class="father">
    <div class="child01">child-01</div>
    <div class="child02">child-02</div>
    <div class="child03">child-03</div>
  </div>

</body>

</html>
```
![](/position3.png)
2. 定义多个边偏移属性时, 如果 left 和 right 冲突, 以 left 为准, top 和 bottom 冲突, 以 top 为准。

### fixed 固定定位
固定定位是绝对定位的一种特殊形式, 他以浏览器窗口作为参照物定义网页元素。当 position 的取值为 fixed 时, 即可将元素定位模式设置为固定定位。

## 十七、z-index 层叠等级属性
当多个元素重叠时, 想要调整元素堆叠顺序, 可以对定位元素应用 z-index 层叠等级属性, 其取值可为正整数、负整数和 0 。默认值为 0 , 取值越大, 定位元素在层叠元素中越靠上。

注意: z-index 属性仅对定位元素生效。
案例: 
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>子元素相对于直接父元素定位</title>
  <style type="text/css">
    .father {
      margin: 10px auto;
      width: 300px;
      height: 300px;
      padding: 10px;
      background: #ccc;
      border: 1px solid #000;
    }

    .child01,
    .child02,
    .child03 {
      width: 100px;
      height: 50px;
      line-height: 50px;
      background: #ff0;
      border: 1px solid #000;
      margin: 10px 0px;
      text-align: center;
    }

    .child02 {
      position: absolute; /* 不设置偏移量 */
    }

    .child03 {
      position: absolute; /* 设置定位 */
    }
  </style>
</head>

<body>

  <div class="father">
    <div class="child01">child-01</div>
    <div class="child02">child-02</div>
    <div class="child03">child-03</div>
  </div>

</body>

</html>
```
![](/position5.png)
将 child02 的 z-index 设置为 1 。
```
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>子元素相对于直接父元素定位</title>
  <style type="text/css">
    .father {
      margin: 10px auto;
      width: 300px;
      height: 300px;
      padding: 10px;
      background: #ccc;
      border: 1px solid #000;
    }

    .child01,
    .child02,
    .child03 {
      width: 100px;
      height: 50px;
      line-height: 50px;
      background: #ff0;
      border: 1px solid #000;
      margin: 10px 0px;
      text-align: center;
    }

    .child02 {
      position: absolute; /* 不设置偏移量 */
      z-index: 1; /* 层级为 1 */
    }

    .child03 {
      position: absolute; /* 设置定位 */
    }
  </style>
</head>

<body>

  <div class="father">
    <div class="child01">child-01</div>
    <div class="child02">child-02</div>
    <div class="child03">child-03</div>
  </div>

</body>

</html>
```
![](/position4.png)
