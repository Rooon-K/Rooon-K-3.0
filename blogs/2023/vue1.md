---
title: 网站组组会之Vue(一)
tags: 
 - Vue
categories:
 - 网站组组会
date: 2023/08/07
---

## 简介
Vue 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建, 并提供了一套声明式的、组件化的编程模型, 帮助你高效地开发用户界面。无论是简单还是复杂的界面, Vue 都可以胜任。

## 创建一个 Vue 应用
Vue 官方给我们提供了创建应用的快捷指令
```
npm init vue@latest
```
这一指令将会安装并执行 create-vue, 它是 Vue 官方的项目脚手架工具。你将会看到一些诸如 TypeScript 和测试支持之类的可选功能提示: 
```
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```
如果不确定是否要开启某个功能, 你可以直接按下回车键选择 No。在项目被创建后, 通过以下步骤安装依赖并启动开发服务器:
```
cd <your-project-name>
npm install
npm run dev
```
你现在应该已经运行起来了你的第一个 Vue 项目！
![](/vue1.png)

## 项目结构解剖
下面是我们刚刚创建好的 vue 项目的文件结构
![](/vue2.png)

### main.ts
首先进到 `main.ts` 中, 可以看到如下代码:
![](/vue3.png)

每个 vue 应用都是通过 `createApp` 函数创建的一个新的应用实例, 我们传入 `createApp` 的对象实际上是一个组件, 每个应用都需要一个“根组件”, 其他组件将作为其子组件。

应用实例必须在调用了 `.mount()` 方法后才会渲染出来。该方法接收一个“容器”参数, 可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串
```
// index.html
<div id="app"></div>
// main.ts
app.mount('#app');
```

### App.vue
App.vue 一般作为我们页面的根组件

### components 文件夹
该文件夹下一般存放各类组件

### 实际项目中
在实际项目中, 我们还会创建不同文件夹来对不同功能的代码进行一个区分
![](/vue4.png)
- api 文件夹下存放对请求的封装
- components 文件夹下存放公共组件
- config 文件夹下存放项目配置
- hooks 文件夹下存放钩子函数
- layout 文件夹下存放默认展示页面
- router 文件夹下存放路由配置
- store 文件夹下存放状态库配置
- types 文件夹下存放ts类型
- utils 文件夹下存放工具函数
- views 文件夹下存放各个页面及其内部组件

## 模板语法
### 文本插值
最基本的数据绑定形式是文本插值
```
<span>count: {{ count }}</span>
```
双大括号标签会被替换为相应组件实例中 msg 属性的值。同时每次 msg 属性更改时它也会同步更新。

此外, 双大括号内也可以写 js 表达式
```
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
```
也可以进行函数的调用
```
{{ sum(1, 2) }}
```
### v-bind
双大括号不能在元素的属性中使用。要想响应式的绑定一个属性, 应该使用 `v-bind` 指令
```
<div v-bind:id="eleId"></div>
```
因为 v-bind 非常常用, 官方提供了特定的简写语法:
```
<div :id="eleId"></div>
```
### 属性绑定
若我们要动态的修改元素的属性值, 可以通过 `:` + `属性值` 的形式来进行修改。
```
<button :disabled="isButtonDisabled">Button</button>
```
此时 `""`中要写的是js表达式

## 响应式基础
### ref()

`ref()` 接收参数, 并将其包裹在一个带有 `.value` 属性的 `ref` 对象中返回: 
```
const count = ref(0);

console.log(count); // { value: 0 }
console.log(count.value); // 0

count.value++;
console.log(count.value); // 1
```
注意, 在模板中使用 ref 时, 我们不需要附加 .value。为了方便起见, 当在模板中使用时, ref 会自动解包

### reactive()
还有另一种声明响应式状态的方式, 即使用 reactive() API。与将内部值包装在特殊对象中的 ref 不同, reactive() 将使对象本身具有响应性: 
```
import { reactive } from 'vue';

const state = reactive({ count: 0 });
```

### reactive()的局限性
1. 有限的值类型: 它只能用于对象类型 (对象、数组和如 Map、Set 这样的集合类型)。它不能持有如 string、number 或 boolean 这样的原始类型。
2. 不能替换整个对象: 由于 Vue 的响应式跟踪是通过属性访问实现的, 因此我们必须始终保持对响应式对象的相同引用。这意味着我们不能轻易地“替换”响应式对象, 因为这样的话与第一个引用的响应性连接将丢失: 
```
let state = reactive({ count: 0 });

// 上面的 ({ count: 0 }) 引用将不再被追踪
// (响应性连接已丢失！)
state = reactive({ count: 1 });
```
3. 对解构操作不友好: 当我们将响应式对象的原始类型属性解构为本地变量时, 或者将该属性传递给函数时, 我们将丢失响应性连接: 
```
const state = reactive({ count: 0 });

// 当解构时，count 已经与 state.count 断开连接
let { count } = state;
// 不会影响原始的 state
count++;

// 该函数接收到的是一个普通的数字
// 并且无法追踪 state.count 的变化
// 我们必须传入整个对象以保持响应性
callSomeFunction(state.count);
```
由于以上限制, vue官方推荐我们使用 `ref()` 作为声明响应式状态的主要 API

## 条件渲染
### `v-if`
该指令由于条件性的渲染一块内容, 条件值为 true 时, 才会进行渲染
```
<h1 v-if="ok">Hello!</h1>
```

### `v-show`
该指令同 `v-if`, 不同的是, 他不能作用在 `<template>` 标签上, 同时, 该元素会在 DOM 中保留, 等效于 `display: none;`
```
<h1 v-show="ok">Hello!</h1>
```

## 列表渲染
### `v-for`
我们可以通过 `v-for` 指令, 基于一个数组来渲染一个列表, 其中 item 是迭代项的别名, index 是迭代项的位置索引, items 是数据源
```
<li v-for="(item, index) in items">
  {{ item.message }}
</li>
```

### `v-for与对象`
我们也可以使用 `v-for` 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用 `Object.keys()` 的返回值来决定。
```
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

<ul>
  <li v-for="(value, key, index) in myObject">
    {{ index }}, {{ key }}: {{ value }}
  </li>
</ul>
```

### `v-for` 与 `v-if`
不推荐同时使用 `v-for` 和 `v-if` !

当他们位于同一个节点上时, `v-if` 比 `v-for` 优先级更高
```
<!--
 这会抛出一个错误，因为属性 todo 此时
 没有在该实例上定义
-->
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo.name }}
</li>
```
在外新包装一层 `<template>` 再在其上使用 v-for 可以解决这个问题 (这也更加明显易读):
```
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```
