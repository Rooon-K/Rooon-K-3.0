---
title: 节点操作
tags: 
 - JavaScript
categories:
 - 网站组组会
date: 2023/08/01
---

## 节点详解
一般来说节点至少拥有nodeType( 节点类型 )、nodeName( 节点名称 )、nodeValue( 节点值 )三个基本属性。
- 元素节点, nodeType 为 1
- 属性节点, nodeType 为 2
- 文本节点, nodeType 为 3

在实际开发中, 节点操作主要操作的是元素节点, 开发者可以根据 nodeType 的值来判断是否为元素节点。

## 节点层级
### 层级关系
DOM 中将 HTML 文档视为树结构, 一个 HTML 文档可以看做所有元素组成的一个节点树, 各个元素节点有级别划分。
- 根节点: `<HTML>` 标签是整个文档的根节点, 有且仅有一个。
- 父节点: 指的是某个节点的上级节点
- 子节点: 指的是某个节点的下级节点
- 兄弟节点: 两个节点同属一个父节点则为兄弟节点

```
<div class="demo">
	<div class="box">
		<span class="child">span元素</span>
	</div>
</div>
```
### 获取父节点
使用 `parentNode` 属性还获取里当前元素最近的父节点, 若找不到返回 null, 语法: obj.parentNode
```
<script>
  let child = document.querySelector(".child");
  console.log(child.parentNode);
</script>
```
### 获取子节点
( 1 ) 使用 `childNodes` 属性来获取当前元素的所有子节点的集合, 若找不到返回 null, 语法: obj.childNodes
```
<script>
  let parent = document.querySelector(".box");
  console.log(parent.childNodes);
</script>
```
运行后发现 childNodes 属性返回的是 NodeList 对象的集合。返回值里面包含了元素节点、文本节点等其他类型的节点。
想要获取元素节点, 需要做一下专门处理, 在节点详解中我们提到, 元素节点的 nodeType 属性的值为 1 ,我们可以通过这个来判断元素节点
```
<script>
  let parent = document.querySelector(".box");
  console.log(parent.childNodes);
  for(let i = 0; i < parent.childNodes.length; i ++) {
    console.log(parent.childNodes[i].nodeType === 1);
  }
</script>
```
( 2 ) 使用 `children` 属性, `children` 属性只返回元素节点, 其余节点不返回。
```
<script>
  let parent = document.querySelector(".box");
  console.log(parent.children);
</script>
```
以上两种方式, 若只进行元素节点操作, 推荐使用第二种办法。

( 3 ) 获取子节点 firstChild 属性和 lastChild 属性   
firstChild 属性和 lastChild 属性, 前者返回第一个子节点, 后者返回的是最后一个子节点, 如果找不到则返回 null。需要注意的是, 它们的返回值包括文本节点和元素节点等。

( 4 ) 获取子元素节点 firstElementChild 属性和 lastElementChild 属性    
firstElementChild 属性和 lastElementChild 属性, 前者返回第一个子元素节点, 后者返回最后一个子元素节点, 如果找不到则返回 null。

虽然( 4 )这个方法在 IE9 以上才支持, 但是随着 IE 时代的终结, 现在正常情况下是没事的。

### 获取兄弟节点
在 JavaScript 中, 可以使用 nextSibling 属性来获得下一个兄弟节点, 使用previousSibling 属性来获得上一个兄弟节点。它们的返回值包含元素节点或者文本节点等。如果找不到, 就返回 null。   
如果想要获得兄弟元素节点, 则可以使用 nextElementSibling 返回当前元素的下一个兄弟元素节点, 使用 previousElementSibling 属性返回当前元素的上一个兄弟元素节点。如果找不到则返回 null。

### 案例: 下拉菜单
鼠标指针经过下拉菜单时, 显示当前下拉框中的内容, 并隐藏其他下拉菜单内容。具体实现步骤如下。
```
<body>
  <ul class="nav">
    <li>
      <a href="#">微博</a>
      <ul>
        <li><a href=""> 私信</a></li>
        <li><a href=""> 评论</a></li>
        <li><a href="">@ 我</a></li>
      </ul>
    </li>
    <li>
      <a href="#">微博</a>
      <ul>
        <li><a href=""> 私信</a></li>
        <li><a href=""> 评论</a></li>
        <li><a href="">@ 我</a></li>
      </ul>
    </li>
  </ul>

  <script>
    let nav = document.querySelector('.nav');
    let lis = nav.children;
    for (var i = 0; i < lis.length; i++) {
      lis[i].onmouseover = function () {
        this.children[1].style.display = 'block';
      };
      lis[i].onmouseout = function () {
        this.children[1].style.display = 'none';
      };
    }
  </script>
</body>
```

## 创建节点
( 1 ) document.write(), 不推荐使用, 不介绍。

( 2 ) element.innerHTML(), 用于直接将内容写入某个节点。
```
<body>
  <div>aaa</div>

  <script>
    let ele = document.querySelector("div");
    ele.innerHTML = `<p>111</p>`
  </script>
</body>

// f12 查看实际页面结构
<div>
  <p>111</p>
</div>
```

( 3 ) document.createElement() 不直接使用, 一般配合节点添加使用   
document.createElement() 创建多个元素时效率稍微低一点, 但是结构更加清晰。

## 节点添加、删除
### ( 1 ) appendChild()   
将一个节点添加到指定父节点的子节点列表末尾, 类似于 CSS 中的 after 伪元素。
```
<body>
  <div>aaa</div>

  <script>
    let ele = document.querySelector("div");
    let p = document.createElement('p');
    p.innerHTML = `<p>1</p>`
    ele.appendChild(p);
  </script>
</body>
```
### ( 2 ) insertBefore()    
将一个节点添加到父节点的指定子节点前面, 类似于 CSS 中的 before 伪元素。
```
<body>
  <div>aaa</div>

  <script>
    let ele = document.querySelector("div");
    let p = document.createElement('p');
    p.innerHTML = `<p>2</p>`
    ele.insertBefore(p, ele.children[0]);
  </script>
</body>
```

### ( 3 ) removeChild()    
用于删除节点, 该方法从 DOM 中删除一个子节点, 返回删除的节点。
```
<body>
  <div>aaa</div>

  <script>
    let ele = document.querySelector("div");
    let p = document.createElement('p');
    p.innerHTML = `<p>2</p>`
    ele.insertBefore(p, ele.children[0]);
    let pNode = document.querySelector('p');
    ele.removeChild(pNode);
  </script>
</body>
```

### 案例: 留言板
案例：将利用节点的创建、添加和删除相关知识完成一个简易的留言板功能。在页面中实现单击 “ 发布 ” 按钮动态创建一个 li, 添加到 ul 里面。具体实现步骤如下。
```
<body>
  <input></input>
  <button>发布</button>
  <ul></ul>

  <script>
    let btn = document.querySelector('button');
    let ul = document.querySelector('ul');

    btn.onclick = function () {
      let text = document.querySelector('input');
      if (text.value === "") {
        alert('您没有输人内容');
        return false;
      } else {
        let li = document.createElement('li');
        li.innerHTML = text.value + '<a href="javascript:;">删除</a>';
        ul.insertBefore(li, ul.children[0]);
        let as = document.querySelectorAll('a');
        for (let i = 0; i < as.length; i++) {
          as[i].onclick = function () {
            ul.removeChild(this.parentNode);
          };
        }
      }
    };
  </script>
</body>
```