---
title: 网站组组会之js入门(六)
tags: 
 - JavaScript
categories:
 - 网站组组会
date: 2023/08/03
---

## 定时器
定时器就是在指定时间后执行特定操作, 或者让程序代码每隔一段时间执行一次, 实现间歇操作。在 JavaScript 中, 提供了两组方法用于定时器的实现。
1. setTimeout()、clearTimeout() 在指定的毫秒数后调用函数或执行一段代码
2. setInterval()、clearInterval() 按照指定的周期(以毫秒计)来调用函数成执行一段代码    

语法格式如下:
```
setTimeout(调用的函数，[延迟的毫秒数]);
setInterval(调用的函数，[延迟的毫秒数]);
```
例子: 创建定时任务  
``` 
// 1 秒后打印111
setTimeout(function() {
  console.log("111");
}, 1000);

// 每秒打印一次111
setInterval(function() {
  console.log("111");
}, 1000);
```
取消定时器: 在实际开发中, 一个网页可能会存在多个定时器, 我们可以通过一个变量来保存定时器的 id。若再定时器启动后, 想要取消该定时器操作, 可以将定时器 id 传递给 clearTimeout()。( clearInterval 同理 )
```
const timer = setTimeout(fn, 3000);
clearTimeout(timer);
```

## 案例: 60秒内只能发送一次短信
页面中有一个 input 和一个 button 在文本框中输入手机号, 点击发送按钮发送验证码, 要求编写 HTML 代码实现:    
1. 点击发送按钮后, 该按钮 60 秒内不能再次点击 ( disabled 属性)
2. 点击发送后, 按钮文字变成 " x 秒后再次点击"
```
<body>
  手机号码:<input type="number"> <button>发送</button>
  <script>
    let btn = document.querySelector('button');
    let time = 10;
    btn.onclick = function () {
      btn.disabled = true;
      btn.innerHTML = ' 还剩下 ' + time + '秒';
      let timer = setInterval(function () {
        if (time <= 1) {
          clearInterval(timer);
          btn.disabled = false;
          btn.innerHTML = '发送';
        } else {
          btn.innerHTML = ' 还剩下 ' + (time - 1) + '秒';
          time --;
        }
      }, 1000);
      setTimeout(function () {
        time = 10;
        clearInterval(timer);
      }, 3000);
    }
  </script>
</body>
```

## 案例: 轮播图
编写 JavaScript 代码实现轮播图效果。

```
<div id="wrap">
  <div class="picbox">
    <ul id="picbox">
      <li>
        <img src="img/float1.png" alt="">
      </li>
      <li>
        <img src="img/float2.png" alt="">
      </li>
      <li>
        <img src="img/float3.png" alt="">
      </li>
      <li>
        <img src="img/float4.png" alt="">
      </li>
      <li>
        <img src="img/float5.png" alt="">
      </li>
    </ul>
  </div>
  <ul id="nav">
    <li class="active">图片1</li>
    <li>图片2</li>
    <li>图片3</li>
    <li>图片4</li>
    <li>图片5</li>
  </ul>
</div>
```


