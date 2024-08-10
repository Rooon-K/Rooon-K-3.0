---
title: 网站组组会之js入门(二)
tags: 
 - JavaScript
categories:
 - 网站组组会
date: 2023/05/16
---

## 对象
对象属于一种复合数据类型, 在对象中可以保存多种数据类型的属性。     
对象的分类:     
1. 内建对象: 由 ES 标准中定义的对象, 在任何 ES 实现中都能使用。
2. 宿主对象: 由 JS 运行环境提供的对象, 如 DOM BOM
3. 自定义对象: 由开发人员自己创建的对象

### 创建对象
使用 `new` 关键字调用的函数, 是构造函数constructor     
构造函数是专门用来创建对象的函数     
```
let girlfriend = new Object();
```
### 添加属性
语法: 对象名.属性名(字符串) = 属性值;
```
girlfriend.name = "xiaohong";
girlfriend.age = 18;
```
### 读取属性
语法: 对象名.属性名(字符串);    
如果读取对象中没有的属性会返回undefined;
```
console.log(girlfriend.name); // xiaohong
console.log(girlfriend.sex); // undefined
```
### 修改属性
语法: 对象名.属性名(字符串) = 属性值;
```
girlfriend.name = "lisi";
```
### 删除属性
语法: delete 对象名.属性名(字符串)
```
delete girlfriend.age;
```
### 特殊的属性名(计算属性)
语法: 对象名[属性名(字符串)] = 属性值;
```
girlfriend.123 = "456"; // 报错
girlfriend["123"] = "456";
console.log(girlfriend["123"]); // 456
// 动态属性
let a = "123"; 
console.log(girlfriend[a]); // 456
```
###  属性检查
检查一个对象中是否有某个属性, 有返回true, 无返回false。
语法: 属性名(字符串) in 对象;
```
console.log("name" in girlfriend); // true
```

## 基本数据类型和引用数据类型
基本数据类型有: String Number Boolean Null Undefined    
引用数据类型有: Object   
```
let a = 10;
let b = a;
a ++;
console.log(a);
console.log(b);
```
```
let obj = new Object();
obj.name = "zhangsan";
let obj2 = obj;
obj.name = "lisi";
console.log(obj.name);
console.log(obj1.name);
```
由上面两个例子可以看出:    
基本数据类型的值直接存储在栈内存中, 值与值之间是相互独立的, 一个值的改变不会影响另一个值。    
对象是保存在堆内存中, 每创建一个对象就会在堆内存中开辟出一个新的空间, 变量保存的是对象的内存地址(对象的引用), 如果两个变量保存的是同一个对象引用, 当通过一个变量修改属性时, 另一个也会受到影响。
![](/js/js2-1.png)

![](/js/js2-2.png)

## 对象字面量
对象字面量是创建对象的另一种方式
```
let girlfriend = {
  name: "xiaohong",
  age: 18
};
```

## 函数
- 在 js 中, 函数也是个对象
- 函数可以封装一些功能, 在需要时可以执行这些功能
- 函数中可以保存一些代码在需要的时候调用
- 使用 typeof 检查一个函数对象时, 会返回 function

### 创建函数
```
function fun() {
  console.log("这是一个函数");
}
let fun = function() {
  console.log("这是一个函数");
}
let fun = () => {
  console.log("这是一个箭头函数");
}
```
封装到函数中的代码不会立即执行, 会在调用的时候执行。
### 调用函数
语法: 函数名();
```
fun(); //这是一个函数
fun();
```
### 函数传参
可以在函数的()中指定一个火多个形参, 多个形参之间用 `,` 隔开, 声明形参相当于在函数内部声明了对应的变量, 但是不赋值, 在调用函数时, 可以在()中指定实参, 实参将赋值给函数中对应的形参, 多余的实参不会被赋值, 缺失的实参, 值会为undefined
```
function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(1, 2); // 3
sum(1, 2, 3); // 3
sum(1); // NaN
```
### 函数返回值
可以使用 return 来设置函数的返回值。     
语法: return 值    
return后的值将会作为函数的执行结果返回。
```
function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(1, 2);
console.log(result); // 3
```
### 立即执行函数
用 `()` 包裹匿名函数并在后面加 `()` , 函数会立即执行, 这类函数往往只执行一次。     
可以在前面的括号中接收参数, 在后面的括号中传递参数。
```
(function(a, b) {
  console.log(a + b); // 579
})(123, 456);
```

### 方法
对象的属性值可以是任何的数据类型, 也可以是一个函数。
```
let obj = {};
obj.name = "zhangsan";
obj.age = 22;
obj.sayName = function() {
  console.log(obj.name);
}
obj.sayName(); //zhangsan
```

### for in
我们可以通过 for in 来获取对象的属性名。    
语法:
```
let obj = {
  name: "zhangsan",
  age: 18,
  sex: "男"
}
for(let n in obj) {
  console.log(n); // name age sex
  console.log(obj[n]); // zhangsan 18 男
}
```

## 数组
语法: `数组[索引] = 值`
```
let a = [];
a[0] = 1;
a[1] = 2;
console.log(a[0]); // 1
console.log(a.length); // 获取数组长度 2
```
Array的方法
| 方法 | 描述 |
|------|-----|
| concat() | 连接两个或更多的数组, 并返回结果。 |
| join() | 将数组的所有元素连接成一个字符串。 |
| pop() | 删除数组的最后一个元素, 并返回该元素。 |
| push() | 将新元素添加到数组的末尾, 并返回新的长度。 |
| shift() | 删除数组的第一个元素, 并返回该元素。 |
| reverse() | 反转数组中元素的顺序。 |
| slice() | 选择数组的一部分, 并返回新数组。 |
| sort() | 对数组的元素进行排序。 |
| splice() | 从数组中添加/删除元素。 |
| toString() | 将数组转换为字符串, 并返回结果。 |
| includes() | 检查数组是否包含指定的元素。 |
| find() | 返回数组中第一个通过测试的元素的值。 |
| filter() | 使用数组中通过测试的每个元素创建新数组。 |
| map() | 使用为每个数组元素调用函数的结果创建新数组。 |
