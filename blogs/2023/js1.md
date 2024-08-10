---
title: 网站组组会之js入门(一)
tags: 
 - JavaScript
categories:
 - 网站组组会
date: 2023/05/14
---
::: tip 什么是JavaScript
JavaScript 是一门跨平台、面向对象的脚本语言，它能使网页可交互（例如拥有复杂的动画，可点击的按钮，通俗的菜单等）。另外还有高级的服务端 Javascript 版本，例如 Node.js，它可以让你在网页上添加更多功能，不仅仅是下载文件（例如在多台电脑之间的协同合作）。在宿主环境（例如 web 浏览器）中，JavaScript 能够通过其所连接的环境提供的编程接口进行控制。
:::

## HelloWorld!
js 代码需要编写在 `<script>` 标签中。    
打开网页, F12调出开发者工具, 切换到Console, 就能看到运行结果了。
```
<script>
  console.log("HelloWorld!");
</script>
```
我们也可以通过创建 `.js` 文件, 并在html文件中引用, 来实现同样的效果。

1.js
```
console.log("HelloWorld!");
```

1.html
```
<script src="./1.js"></script>
```

## 基本语法
### 规范
1. 注释:
```
// 单行注释 只对后面有效果
/**
  多行注释 对中间编写的内容都有效
 */
```
2. JS 中严格区分大小写
3. 建议每一条语句中都以`;`结尾, 不写浏览器会自动添加, 不报错, 但最好写上。

### 变量声明
js 中使用 `var`、`const`、`let` 来声明变量, 其中不建议使用 `var`, `const` 声明的值为只读, `let` 声明的值可读可写。   
js中不需要我们去声明变量类型, 会根据赋值自动判断类型
```
let a = 0;
const b = 1;
a = 1; √
b = 2; ×
```
### 标识符
js中所有的可以由我们自主命名的都可以被称为标识符: 变量名、函数名、属性名。
遵循如下规则:
1. 可以含有字母、数字、_、$
2. 不能以数字开头
3. 不能是关键字或保留字
4. 一般采用驼峰命名法
  - 小驼峰: 首字母小写、后面每个单词的首字母大写其余小写 helloWorld
  - 大驼峰: 每个单词的首字母大写其余小写 HelloWorld
5. 不建议用中文
6. 命名应通俗易懂

## 数据类型
### 字符串 string
字符串需要用单引号或双引号引起来, 但是引号不能嵌套( 双引号里不能用双引号、单引号里面不能有单引号 )。
```
let str = "123";
console.log("123");
console.log("我说: "今天天气真好"。"); ×
console.log("我说: '今天天气真好'。"); √
```
如果非要用需要在前面加上 `\` 转义 `\"`、`\'` 
```
console.log("我说: \"今天天气真好\"。"); 
```
字符串可以用 + 拼接在一起
```
let a = "1";
let b = "2";
console.log(a + b); // 12
```
### 数值 number
js 中所有数值都是Number类型, 包括整数和浮点数
```
let a = 1;
let b = 2;
console.log(a + b); // 3
```
```
let a = Infinity; //正无穷
let b = NaN; // not a number
```
0.1 + 0.2 != 0.3 问题
```
let a = 0.1;
let b = 0.2;
console.log(a + b); //0.30000000000000004
```
如果用js进行浮点运算, 可能会得到一个不精确的结果, 因此不要用 js 进行对精确度比较高的运算。
解决办法(非要用的话)
```
let a = 0.1;
let b = 0.2;
console.log((a*10 + b*10) / 100);
```
### 布尔值 boolean
布尔值只有两个 true 和 false 用来做逻辑判断。
### 空值 null 未定义 undefined
null类型的值只有一个, 即 `null`, 专门用来表示空对象。     
undefined, 即 `undefined`, 专门用来表示声明了但是没有赋值的变量。
### 对象 object (后续涉及)
### 类型检查
js 中我们可以通过 `typeof` 检查变量类型。
```
let a = "1";
let b = 1;
console.log(a); // 1
console.log(b); // 1
// 在控制台中我们输出看不出来类型, 通过 typeof 检查
console.log(typeof a); // string
console.log(typeof b); // number
```
### 强制类型转换
指将一个数据类型强制转换为其他的数据类型。     
主要指将其他的数据类型转换为 String Number Boolean。    
转换为 String :
```
let a = 123;
// 1.调用 a 的 toString() 方法
console.log(a.toString); // 有局限性(null、undefined不能用)
// 2.调用 String() 函数
console.log(String(a));
```
转换为 Number :   
```
let a = "123";
// 1.调用 Number() 函数
console.log(Number(a)); 
// 纯数字字符串直接转换为数字
// 有非数字内容或 undefined 转化为 NaN
// 字符串为空或空格则转化为 0
// true 转 1 , false 转 0
// 2.调用 parseInt() 函数, 将字符串中的有效整数内容取出
let b = "123px";
let c = "123px456"
console.log(Number(a)); // NaN
console.log(parseInt(b)); // 123
console.log(parseInt(c)); // 123
// 3.调用 parseFloat() 函数, 将字符串中的有效小数内容取出
let d = "0.1a";
console.log(parseInt(d)); // 0
console.log(parseFloat(d)); // 0.1
```
转换为Boolean:    
1. 调用 Boolean() 函数
   - 数值: 除了 0 和 NaN 都是 true
   - 字符串: 除了空串都是 true
   - null 和 undefined 都是 false
## 运算符
通过运算符可以对一个或多个值进行运算并获得运算结果。
### 算数运算符
`+ - * /`
### 一元运算符
`+` 正号、`-` 负号
### 自增自减
使变量在自身的基础上增加、减少 1   
```
let a = 0;
a ++;
++ a;
```
`a ++` 和 `++ a`都会立即使变量立即加 1   
但是`a ++`等于原值 `++ a`等于自增后的值
```
let a = 10;
a ++;
console.log(a ++); // 11
console.log(a); // 12
```
### 逻辑运算符
js 为我们提供了三种运算符 `!`非 `&&`与 `||`或。      
1. 非 取反
2. 与 两边都为true, 结果才为true
3. 或 两边都为false, 结果才为false
### 赋值运算符
`=` `+=` `-=` `*=` `/*`
```
let a = 10;
a += 1; // 11
a -= 1; // 10
a *= 2; // 20
a /= 2; // 10
```
### 关系运算符
通过关系运算符可以比较两个值的大小关系。    
`>` `<` `<=` `>=`
### 相等运算符
`==` `===`
```
let a = 10;
console.log(a == "10"); //true
console.log(a === "10"); //false
```
### 条件运算符
表达式?语句1:语句2;     
对表达式进行判断, 值为true执行语句1, 值为false执行语句2。
### 运算符优先级
高优先级先计算, 同优先级从左往右运算。    
参考[优先级表](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
## if 语句
```
if(条件表达式1) {
  语句1;
} else if(条件表达式2) {
  语句2;
} else {
  语句3;
}
```
## switch 语句
```
switch(条件表达式) {
  case 表达式1:
    语句1;
    break;
  case 表达式2：:
    语句2;
    break;
  default:
    语句3;
    break;
}
```
## while 循环
```
while(条件表达式) {

}
```
## for 循环
```
for(let i = 0; i < 10; i ++) {
  
}
```