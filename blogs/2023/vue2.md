---
title: 网站组组会之Vue(二)
tags: 
 - Vue
categories:
 - 网站组组会
date: 2023/08/13
---

## 计算属性
模板中的表达式虽然方便, 但也只能用来做简单的操作。如果在模板中写太多逻辑, 会让模板变得臃肿, 难以维护。我们可以通过计算属性来描述这些复杂逻辑, 使其简单化、可重复利用。

语法:
```
const 变量名 = computed(() => {
  return 返回值
})
```
改造示例:
```
<script setup>
import { ref, computed } from 'vue';

const score = ref(100);

const computedScore = computed(() => {
  return score.value === 100 ? '满分' : (score.value < 60 ? '不及格' : score.value);
});
</script>

<template>
  <p>你的分数是: {{ score === 100 ? '满分' : (score < 60 ? '不及格' : score) }}</p>
  <p>你的分数是: {{ computedScore }}</p>
</template>
```

## 事件处理
我们可以通过使用 `v-on` 或简写 `@` 来监听 DOM 事件, 并在事件触发时执行对应的 JS 语句。

如: 
```
<button @click="count++">Add 1</button>
```

## 表单输入绑定
在处理表单时, 我们常常需要将表单输入的内容同步给 `JS` 中相应的变量。要做到这个通常需要监听值的变化, 去修改, 这一过程可能会很麻烦。
```
<input type="text" :value="score"> // input 内容变化 p 标签中的内容不会变化
<input type="text" :value="score" @input="e => score = e.target.value"> // input 中内容变化, 触发 input 事件, 进行手动赋值, p标签中内容变化
<p>{{ score }}</p>
```
### 基本用法
Vue 中 `v-model` 指令很好的简化了这个过程。
```
<input v-model="score"> // 自动完成监听赋值操作
<p>{{ score }}</p>
```
::: tip
`v-model` 会忽略任何表单元素上初始的 `value`、`checked` 或 `selected` attribute。它将始终将当前绑定的 JavaScript 状态视为数据的正确来源。
:::

#### 文本 input
```
<p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" />
```

#### 多行文本 textarea
```
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

#### 复选框 checkbox
```
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
```

#### 单选按钮 radio
```
<div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>
```

#### 选择器 select
```
<div>Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

### 值绑定
对于单选按钮, 复选框和选择器选项, v-model 绑定的值通常是静态的字符串 (或者对复选框是布尔值)

但有时我们可能希望将该值绑定到当前组件实例上的动态数据。这可以通过使用 `v-bind` 来实现。此外, 使用 `v-bind` 还使我们可以将选项值绑定为非字符串的数据类型。

#### 单选按钮 radio
`pick` 会在第一个按钮选中时被设为 `first`, 在第二个按钮选中时被设为 `second`。
```
<input type="radio" v-model="pick" :value="first" />
<input type="radio" v-model="pick" :value="second" />
```

#### 选择器选项
`v-model` 同样也支持非字符串类型的值绑定。在上面这个例子中, 当某个选项被选中, `selected` 会被设为该对象字面量值 `{ number: 123 }`。
```
<select v-model="selected">
  <!-- 内联对象字面量 -->
  <option :value="{ number: 123 }">123</option>
</select>
```

## 侦听器
计算属性允许我们声明性地计算衍生值。然而在有些情况下, 我们需要在状态变化时执行一些"副作用": 例如更改 DOM, 或是根据异步操作的结果去修改另一处的状态。

我们可以通过 `watch` 函数在每次响应式状态发生变化时触发回调函数。

### 基本用法
```
const obj = reactive({ count: 0 });
// obj 为被监听对象
watch(obj, (newValue, oldValue) => {
  // 逻辑操作
});
```
示例:
```
<script setup lang="ts">
import { ref, watch } from 'vue';

const question = ref('');
const answer = ref('问题需要以问号结尾. ;-)');

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = '思考中...';
    try {
      const res = await fetch('https://yesno.wtf/api');
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = '请求 API 错误' + error;
    }
  } else {
    answer.value = '问题需要以问号结尾. ;-)';
  }
})
</script>

<template>
  <p>
    问一个答案为 是 或 否 的问题:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>
```

### 侦听数据源类型
`watch` 的第一个参数可以是不同形式的数据源: 一个ref(包括计算属性)、一个响应式对象、一个`getter`函数或多个数据源组成的数组。
```
const x = ref(0);
const y = ref(0);
const obj = reactive({ count: 0 });

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`);
});

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  }
);

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
});

// 响应式对象(不能直接侦听响应式对象的属性值, 需通过返回该属性的 getter 函数)
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`);
  }
);
```

### 深层监听
直接给 `watch()` 传入一个响应式对象, 会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发
```
const obj = reactive({
  count: 0, 
  score: {
    math: "1"
  }
});

watch(obj, (newValue, oldValue) => {
  // 在嵌套的属性变更时触发
  // 注意：`newValue` 此处和 `oldValue` 是相等的
  // 因为它们是同一个对象！
})
```

相比之下, 一个返回响应式对象的 `getter` 函数, 只有在返回不同的对象时, 才会触发回调
```
watch(
  () => obj.count,
  () => {
    // 仅当 obj.count 被替换时触发
  }
)

watch(
  () => obj.score,
  () => {
    // 仅当 obj.score 被替换时触发 (修改obj.score.math 不会触发)
  }
)
```
你也可以给上面这个例子显式地加上 `deep` 选项, 强制转成深层侦听器
```
watch(
  () => obj.score,
  (newValue, oldValue) => {
    // 注意：`newValue` 此处和 `oldValue` 是相等的
    // *除非* obj.score 被整个替换了
  },
  { deep: true }
)
```

### 即时回调的侦听器
`watch` 默认是懒执行的: 仅当数据源变化时, 才会执行回调。但在某些场景中, 我们希望在创建侦听器时, 立即执行一遍回调。

我们可以通过传入 `immediate: true` 选项来强制侦听器的回调立即执行:
```
watch(source, (newValue, oldValue) => {
  // 立即执行，且当 `source` 改变时再次执行
}, { immediate: true })
```