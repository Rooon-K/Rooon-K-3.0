---
title: 网站组组会之了解CSS(二)
tags: 
 - CSS
categories:
 - 网站组组会
date: 2023/04/09
---

## 三、优先级
优先级就是分配给指定的 CSS 声明的一个权重, 它由匹配的选择器中的每一种选择器类型的数值决定。
具体如下:
`!important` > 内联样式 > id选择器 > 类选择器、伪类选择器、属性选择器 > 元素选择器、伪元素选择器 > 通配符选择器、后代选择器、兄弟选择器。
权重相同的情况下, 采用后来居上的原则, 即后面的样式会覆盖掉前面相同的样式。
由于`!important`具有最高优先级, 因此需要谨慎使用:
1. 优先考虑使用样式规则的优先级来解决问题。
2. 只在需要覆盖全栈或者外部 CSS 的特定页面使用。
3. 永远不要在你的插件中使用。
4. 永远不要在全站范围的 CSS 代码中使用。

## 四、继承性
在 CSS 中部分设置在父元素的属性是可以被子元素继承的。

可被继承:
- 字体相关: `font-family`、`font-style`、`font-size`、`font-weight` 等。
- 文本相关: `text-align`、`text-indent`、`text-decoration`、`text-shadow`、`letter-spacing`、`word-spacing`、`white-space`、`line-height`、`color` 等。
- 列表相关: `list-style`、`list-style-image`、`list-style-type`、`list-style-position` 等。
- 其他属性: `visibility`、`cursor` 等。

不可被继承:
- `inherit`: 继承父元素对应属性的计算值。
- `initial`: 应用该属性的默认值, 比如 color 的默认值是 #000。
- `unset`: 如果属性是默认可以继承的, 则取 inherit 的效果, 否则同 initial。
- `revert`: 效果等同于 unset, 兼容性差。

## 五、盒子模型
在 CSS 中任何元素都可以看成是一个盒子, 而一个盒子是由 4 部分组成的: 内容(content)、内边距(padding)、边框(border)和外边距(margin)。
![box](/boxModel.png)

## 六、背景
1. 背景颜色: `background-color`接收一个color值。
2. 背景图片: `background-image`接收一个url。
3. 控制背景平铺: `background-repeat`接收`no-repeat`、`repeat-x`、`repeat-y`、`repeat`。
4. 控制背景大小: `background-size`接收长度或百分比值。
5. 背景图像定位: `background-position`允许选择背景图像显示在其应用到的盒子中的位置。在其坐标系中, 框的左上角是(0, 0), 框沿水平( x )和垂直( y )轴定位。

## 七、边框
我们一般使用`border`为一个盒子添加边框。
```
// 为四边添加1像素宽的黑色实线
border: 1px solid black;
// 单独为一个边设置
border-top: 1px solid black;
border-bottom: 1px solid black;
border-left: 1px solid black;
border-right: 1px solid black;
```

## 参考资料
[CSS基础](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics)  
[稀土掘金:大海我来了](https://juejin.cn/post/6941206439624966152)
