---
title:  flex 布局
date:  2023/05/09
---

## 十八、元素的类型与转换
通过html的学习我们知道元素分为三类:  行内元素、块元素、行内块元素。[复习html](https://rooon-k.top/blogs/2023/liaojieHTML.html)

如果我们希望行内元素具有块元素的某些特性, 如可以设置宽高, 或者需要块元素具有行内元素的某些特性, 如不独占一行排列, 可以使用 `display` 属性对元素的类型进行转换。

`display` 属性常用的属性值及含义如下: 
| 属性值 | 含义 |
|-------|------|
| inline | 将元素显示为行内元素( 默认 ) |
| block | 将元素显示为块元素 |
| inline-block | 将元素显示为行内块元素 |
| none | 隐藏元素 |
| flex/inline-flex | 将元素显示为 flex 容器 |
| grid/inline-grid | 将元素显示为 grid 容器 |

## 十九、flex 布局
### 1.基本概念
Flexible Box 模型, 通常被称为 flexbox, 是一种一维的布局模型。它给 flexbox 的子元素之间提供了强大的空间分布和对齐能力。

学习 flex 布局需要明白 "容器" 和 "轴" 的概念, 采用 flex 布局的元素被称为 "容器", 他包括外层的父容器 ( flex-container )和内层的子容器 (flex-item), 容器默认存在两根轴:  水平的主轴 ( main axis ) 和垂直的交叉轴 ( cross axis )。主轴的开始位置叫做 `main start`, 结束位置叫做 `main end`, 交叉轴的开始位置叫做 `cross start` 结束位置叫做 `cross end`。
![flex](/flex.png)

### 2.容器的属性
flex 布局涉及 12 个 CSS 属性, 其中父容器、子容器各6个
![flex](/flex/flexTree.png)

### 3.父容器的属性
#### 3.1 flex-direction
flex-direction 属性决定主轴的方向
```
flex-direction:  row | row-reverse | column | column-reverse;
```
- row (默认值):  主轴为水平方向, 起点在左端。
- row-reverse:  主轴为水平方向, 起点在右端。
- column:  主轴为垂直方向, 起点在上沿。
- column-reverse:  主轴为垂直方向, 起点在下沿。
![flex-direction](/flex/flex-direction.png)
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>flex-direction</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 200px;
      height: 200px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 50px;
      height: 50px;
      background-color: rgb(253, 62, 62);
    }

    .row {
      flex-direction: row;
    }

    .row-reverse {
      flex-direction: row-reverse;
    }

    .column {
      flex-direction: column;
    }

    .column-reverse {
      flex-direction: column-reverse;
    }
  </style>
</head>

<body>
  <div class="container row">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container row-reverse">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container column">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container column-reverse">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</body>

</html>
```

#### 3.2 flx-wrap
flx-wrap 属性控制换行, 默认情况下, 项目都排在一条线上, 无论是否给定宽度, 都是不会主动换行的。
设定一个宽度为 500px 的父元素, 其中包含6个宽度为 100px 的子元素
```
flex-wrap:  nowrap | wrap | wrap-reverse;
```
如果需要换行, 需要设置flex-wrap

- nowrap (默认值):  不换行。
- wrap:  换行, 第一行在上方。
- wrap-reverse:  换行, 第一行在下方。
![flex-wrap1](/flex/flex-wrap1.png)
![flex-wrap2](/flex/flex-wrap2.png)
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>flx-wrap</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }
    .container {
      width: 500px;
      height: 200px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }
    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }
    .wrap {
      flex-wrap: wrap;
    }
    .wrap-reverse {
      flex-wrap: wrap-reverse;
    }
  </style>
</head>

<body>
  <!-- 不换行 -->
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
  <!-- 换行 -->
  <div class="container wrap">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
  <!-- 换行, 第一行在下方 -->
  <div class="container wrap-reverse">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>

</html>
```

#### 3.3 flex-flow
flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式, 默认值为 row nowrap
```
flex-flow:  <flex-direction> | <flex-wrap>;
```

#### 3.4 justify-content
justify-content 属性定义了项目在主轴上的对齐方式
```
justify-content:  flex-start | flex-end | center | space-around | space-between | space-evenly;
```
- flex-start(默认值): 左对齐
- flex-end: 右对齐
- center:  居中
- space-around: 每个项目两侧的间隔相等。
- space-between: 两端对齐, 项目之间的间隔都相等。
- space-evenly: 每个项目的间隔与项目和容器之间的间隔是相等的。
![justify-content](/flex/justify-content.png)
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>justify-content</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 500px;
      height: 200px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }

    .flex-start {
      justify-content: flex-start;
    }

    .flex-end {
      justify-content: flex-end;
    }

    .center {
      justify-content: center;
    }

    .space-around {
      justify-content: space-around;
    }

    .space-between {
      justify-content: space-between;
    }

    .space-evenly {
      justify-content: space-evenly;
    }
  </style>
</head>

<body>
  <div class="container flex-start">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container flex-end">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container center">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container space-around">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container space-between">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container space-evenly">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</body>

</html>
```

#### 3.5 align-items
align-items 属性定义项目在交叉轴上如何对齐
```
align-items:  flex-start | flex-end | center | baseline | stretch;
```
- flex-start: 交叉轴的起点对齐。
- flex-end: 交叉轴的终点对齐。
- center: 交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch(默认值):  如果项目未设置高度或设为auto, 将占满整个容器的高度。
![align-items](/flex/align-items.png)
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>align-items</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 500px;
      height: 200px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }

    .flex-start {
      align-items: flex-start;
    }

    .flex-end {
      align-items: flex-end;
    }
 
    .center {
      align-items: center;
    }

    .baseline {
      align-items: baseline;
    }

    .baseline .item:nth-child(1) {
      margin-top: 30px;
    }

    .baseline .item:nth-child(3) {
      padding-top: 30px;
    }

    .stretch {
      align-items: stretch;
    }

    .stretch div {
      align-items: stretch;
      height: auto;
    }
  </style>
</head>

<body>
  <div class="container flex-start">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container flex-end">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container center">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container baseline">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
  <div class="container stretch">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</body>

</html>
```

#### 3.6 align-content
align-content 属性定义了多根轴线的对齐方式, **前提是需要设置flex-wrap: wrap, 否则不会有效**
```
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```
- flex-start: 与交叉轴的起点对齐。
- flex-end: 与交叉轴的终点对齐。
- center: 与交叉轴的中点对齐。
- space-between: 与交叉轴两端对齐, 轴线之间的间隔平均分布。
- space-around: 每根轴线两侧的间隔都相等。
- stretch(默认值): 轴线占满整个交叉轴。
![align-content](/flex/align-content.png)
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>align-content</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 500px;
      height: 400px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
      flex-wrap: wrap;
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }

    .flex-start {
      align-content: flex-start;
    }
    .flex-end {
      align-content: flex-end;
    }
    .center {
      align-content: center;
    }
    .space-between {
      align-content: space-between;
    }
    .space-around {
      align-content: space-around;
    }
    .stretch {
      align-content: stretch;
    }
  </style>
</head>

<body>
  <div class="container flex-start">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
  <div class="container flex-end">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
  <div class="container center">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
  <div class="container space-between">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
  <div class="container space-around">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
  <div class="container stretch">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>

</html>
```

### 4.子容器的属性
#### 4.1 order
order 属性定义项目的排列顺序。数值越小, 排列越靠前, 默认为0, 可以是负数。
```
order:  <integer>;
```
![order](/flex/order.png)
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>order</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 500px;
      height: 400px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }
  </style>
</head>
<body>
  <div class="container order1">
    <div class="item" style="order: 1;">1 order: 1</div>
    <div class="item" style="order: 2;">2 order: 2</div>
    <div class="item" style="order: 3;">3 order: 3</div>
  </div>
  <div class="container order2">
    <div class="item" style="order: 1;">1 order: 1</div>
    <div class="item" style="order: 0;">2 order: 0</div>
    <div class="item" style="order: -1;">3 order: -1</div>
  </div>
  <div class="container order3">
    <div class="item" style="order: 1;">1 order: 1</div>
    <div class="item" style="order: 2;">2 order: 2</div>
    <div class="item" style="order: -1;">3 order: -1</div>
  </div>
</body>
</html>
```


#### 4.2 flex-grow
flex-grow flex容器中剩余空间的多少应该分配给项目, 也称为扩展规则。最终的项目的宽度为: 自身宽度 + 容器剩余空间分配宽度, flex-grow最大值是1, 超过1按照1来扩展
```
flex-grow:  <number>; /* default 0 */
```
![flex-grow](/flex/flex-grow.png)
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>flex-grow</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 400px;
      height: 400px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 120px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }
  </style>
</head>

<body>

  <div class="container">
    <div class="item">1</div>
    <div class="item" style="flex-grow: 0;">2 flex-grow: 0</div>
  </div>
  <div class="container">
    <div class="item">1</div>
    <div class="item" style="flex-grow: 0.5;">2 flex-grow: 0.5</div>
  </div>
  <div class="container">
    <div class="item">1</div>
    <div class="item" style="flex-grow: 1;">2 flex-grow: 1</div>
  </div>
</body>

</html>
```


#### 4.3 flex-shrink
flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩, 其收缩的大小是依据 flex-shrink 的值, 默认值是1, 0为不收缩

```
flex-shrink:  <number>;  /* default 1 */
```
![flex-shrink](/flex/flex-shrink.png)
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>flex-shrink</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 400px;
      height: 400px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item1 {
      width: 200px;
      height: 200px;
      background-color: rgb(253, 62, 62);
    }
    .item2 {
      width: 300px;
      height: 200px;
      background-color: pink;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="item1">200px flex-shrink: 1;</div>
    <div class="item2">300px flex-shrink: 1;</div>
  </div>
  <div class="container">
    <div class="item1" style="flex-shrink: 0;">200px flex-shrink: 0;</div>
    <div class="item2">300px flex-shrink: 1;</div>
  </div>
</body>

</html>
```
收缩后子容器宽度计算公式:   
1. (200+300)所有子项的宽度的和 - (400)容器的宽度 = (100)
2. 第一个子项的宽度占比：2/5，第二个子项的宽度占比：3/5
3. 则第一个子项的的宽度为：200 - 2/5 * 100 = 160，第二个子项的宽度为：300 - 3/5 * 100 = 240

#### 4.4 flex-basis
flex-basis 指定了子项在容器主轴方向上的初始大小, 优先级高于自身的宽度width

```
flex-basis:  0 | 100% | auto | <length>
```
![flex-basis](/flex/flex-basis.png)
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>flex-basis</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 400px;
      height: 400px;
      background-color: rgba(55, 55, 234, 0.729);
      float: left;
      margin: 40px 40px;
      display: flex;
    }

    .item {
      flex-basis: 300px;
      width: 200px;
      height: 200px;
      background-color: rgb(253, 62, 62);
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="item">flex-basis: 300px;</div>
  </div>
</body>

</html>
```

#### 4.5 flex
flex 属性是 flex-grow , flex-shrink 和 flex-basis 的简写, 默认值为 0 1 auto 。后两个属性可选。
```
flex:  none | [ <'flex-grow'> <'flex-shrink'>? <'flex-basis'>?]
```

#### 4.6 align-self
align-self 属性允许单个项目有与其他项目不一样的对齐方式, 可覆盖 align-items 属性。默认值为 auto , 表示继承父元素的 align-items 属性, 如果没有父元素, 则等同于 stretch 。

```
align-self:  auto | flex-start | flex-end | center | baseline | stretch;
```
![align-self](/flex/align-self.png)
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>align-self</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 300px;
      height: 300px;
      background-color: rgba(55, 55, 234, 0.729);
      margin: 40px 40px;
      display: flex;
    }

    .item {
      width: 100px;
      height: 100px;
      background-color: rgb(253, 62, 62);
    }
    .container .flex-start {
      align-self: flex-start;
    }
    .container .center {
      align-self: center;
    }
    .container .flex-end {
      align-self: flex-end;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item flex-start">align-self: flex-start;</div>
    <div class="item center">align-self: center;</div>
    <div class="item flex-end">align-self: flex-end;</div>
  </div>
</body>
</html>
```

### 练习网站
[flex test](http://flexboxfroggy.com/#zh-cn)