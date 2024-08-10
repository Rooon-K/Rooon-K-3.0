---
title: 网站组组会之Vue(三)
tags: 
 - Vue
categories:
 - 网站组组会
date: 2023/08/15
---

## 模板引用
虽然 Vue 抽象了大部分对 DOM 的直接操作, 但在某些情况下, 我们还是希望能直接访问 DOM 元素, 要实现这点, 我们可以通过使用特殊的 `ref` 属性。
```
<script setup lang="ts">
import { ref } from 'vue';

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const inputRef = ref(null); 
const log = () => {
  console.log(inputRef);
  console.log(inputRef.value); // 这样我们就拿到了同名 ref 元素的 DOM 
}
</script>

<template>
  <input ref="inputRef" />
  <button @click="log">click</button>
</template>
```

## 组件基础
组件允许我们将 UI 划分为独立的、可重用的部分, 并且可以对每个部分进行单独的思考。在实际应用中, 组件常常被组织成层层嵌套的树状结构:
![](/vue5.png)

### 定义一个组件
我们一般会将 Vue 组件定义在一个单独的 `.vue` 文件中, 这杯叫做单文件组件。

ButtonCounter.vue
```
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
```

### 使用组件
要使用一个子组件, 我们需要在父组件中导入它。

App.vue
```
<script setup>
import ButtonCounter from './ButtonCounter.vue'
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
</template>
```
组件可以被复用多次, 且各个组件之间相互独立, 复用的组件不会相互影响:
```
<h1>Here is a child component!</h1>
<ButtonCounter />
<ButtonCounter />
<ButtonCounter />
```

### 传递props
我们可以通过 props 属性来向组件传递数据, 要传递数据, 我们需要在组件的 props 列表上声明它:

BlogPost.vue
```
<script setup>
const props = defineProps(['title']);
console.log(props.title);
</script>

<template>
  <h4>{{ title }}</h4>
</template>
```
当一个 props 被注册后, 可以像下面这样自定义属性的形式传递数据:
```
<BlogPost title="My journey with Vue" />
<BlogPost title="Blogging with Vue" />
<BlogPost title="Why Vue is so fun" />
```

### 监听事件
有时候子组件需要与父组件进行交互。
子组件可以通过调用内置的 `$emit` 方法, 通过传入事件名称来抛出一个事件:

因为有了 `@countPlus="count ++"` 的监听, 父组件会接收这一事件, 从而更新 `count` 的值。

App.vue
```
<script setup lang="ts">
import { ref } from 'vue';
import countBtn from './components/countBtn.vue';

const count = ref(0)
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <countBtn @countPlus="count ++"/>
  </div>
</template>
```

countBtn.vue
```
<template>
  <button @click="$emit('countPlus')">click</button>
</template>
```

## 案例 TODO List
效果图:
![](/todo1.png)
![](/todo2.png)
App.vue
```
<script setup lang="ts">
import { ref } from 'vue';
import todoHeader from "@/components/todoHeader.vue";
import todoList from '@/components/todoList.vue';
import todoFooter from '@/components/todoFooter.vue';

interface todoItem {
  id: string,
  title: string,
  done: boolean
}
const todo = ref<todoItem[]>([])

const addTODO = (title: string) => {
  let obj = {
    id: String(todo.value.length + 1),
    title: title,
    done: false
  }
  todo.value.push(obj)
}

const deleteAll = () => {
  todo.value = todo.value.filter(item => {
    return item.done === false
  })
}

const checkTodo = (id: string) => {
  todo.value.forEach(item => {
    if (item.id === id) item.done = !item.done;
  });
}

const checkAllTodo = (done: boolean) => {
  todo.value.forEach((item) => {
    item.done = done;
  })
}

const deleteTodo = (id: string) => {
  if (confirm("确认删除吗?")) {
    todo.value = todo.value.filter(item => {
      return item.id !== id
    })
  }
}
</script>

<template>
  <div class="mainContainer">
    <todoHeader class="header" :addTODO="addTODO" />
    <todoList class="list" :todo="todo" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
    <todoFooter class="footer" :todo="todo" :deleteAll="deleteAll" :checkAllTodo="checkAllTodo" />
  </div>
</template>

<style scoped>
.mainContainer {
  width: 400px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
}
</style>
```

todoHeader.vue
```
<script setup lang="ts">

const props = defineProps(["addTODO"])
const addTODO = props.addTODO;

const add = (e: any) => {
  const title = e.target.value;
  if(!title.trim()) alert("输入不能为空");
  else addTODO(title);
  e.target.value = "";
}

</script>

<template>
  <div>
    <input type="text" placeholder="请输入你的任务名称, 按回车键确认" @keyup.enter="add" >
  </div>
</template>

<style scoped>
input {
  width: 400px;
  height: 25px;
}
div {
  display: flex;
  margin-top: 15px;
  margin-left: 15px;
  height: 25px;
  width: 370px;
}
</style>
```

todoList.vue
```
<script setup lang="ts">
import todoItem from '@/components/todoItem.vue';

defineProps(["todo", "checkTodo", "deleteTodo"]);

</script>

<template>
  <div>
    <ul>
      <todoItem class="todoItem" v-for="item in todo" :key="item.id" :data="item" :checkTodo="checkTodo"
        :deleteTodo="deleteTodo" />
    </ul>
  </div>
</template>

<style scoped>
div {
  display: flex;
  margin-top: 15px;
  margin-bottom: 5px;
}

.todoItem {
  margin-bottom: 10px;
}
</style>
```

todoItem.vue
```
<script setup lang="ts">
const props = defineProps(['data', "checkTodo", "deleteTodo"]);
const checkTodo = props.checkTodo;
const deleteTodo = props.deleteTodo;

const handleCheck = (id: string) => {
  checkTodo(id);
}

const handelDelete = (id: string) => {
  deleteTodo(id);
}
</script>

<template>
  <li>
    <label>
      <input type="checkbox" :checked="data.done" @change="handleCheck(data.id)">
      <!-- <input type="checkbox" v-model="data.done"> -->
      <span> {{ data.title }}</span>
    </label>
    <button @click="handelDelete(data.id)">删除</button>
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  width: 320px;
}
input {
  margin-right: 10px;
}
button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  display: none;
}
li:hover button {
  display: block;
}
</style>
```

todoFooter.vue
```
<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps(["todo", "deleteAll", "checkAllTodo"]);
const footerTodo = computed(() => props.todo);
const deleteAll = props.deleteAll;
const checkAllTodo = props.checkAllTodo;

const deleteTODO = () => {
  deleteAll();
}

const doneTodos = computed(() => {
  return footerTodo.value.filter((item: any) => item.done === true).length;
})

const isAll = computed({
  get() {
    return doneTodos.value == footerTodo.value.length;
  },
  set(value) {
    checkAllTodo(value);
  }
})

</script>

<template>
  <div>
    <label v-show="todo.length">
      <input type="checkbox" v-model="isAll">
    </label>
    <span v-show="todo.length">
      <span>已完成 {{ doneTodos }} </span> / 全部 {{ todo.length }}
    </span>
    <button @click="deleteTODO" v-show="doneTodos">清除已完成任务</button>
  </div>
</template>

<style scoped>
div {
  display: flex;
  margin-bottom: 15px;
  margin-left: 15px;
}

input {
  margin-right: 15px;
}

button {
  position: relative;
  right: -120px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
```