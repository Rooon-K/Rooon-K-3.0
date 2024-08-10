---
title: CLI 命令参考
date: 2023/05/12
---

使用 `nest -h` 可以查看nestjs的所有命令。
   
根据原理图生成或修改文件
```
nest g <schematic> <name>
```

参数
|   参数   |   描述   |
|---------|----------|
| `<schematic>` | 原理图或集合:生成原理图。可用的示意图见下表。 |
| `<name>` | 生成的组件的名称。 |

Schematics
|   命令   |   别名   |   描述   |
|---------|----------|----------|
| app | app | 在 `monorepo` 中生成新的应用程序 |
| library | lib | 在 `monorepo` 中生成一个新库 |
| class | cl | 生成新的类 |
| controller | co | 生成控制器声明 |
| decorator | d | 生成自定义装饰器 |
| filter | f | 生成过滤器声明 |
| gateway | ga | 生成网关声明 |
| guard | gu | 生成守卫声明 |
| interface| itf | 生成一个接口 |
| interceptor | itc | 生成一个拦截器声明 |
| middleware | mi | 生成中间件声明 |
| module | mo | 生成模块声明 |
| pipe | pi | 生成管道声明 |
| provider | pr | 生成提供者声明 |
| resolver | r | 生成解释器声明 |
| resource | res | 生成新的 CRUD 资源 |
| service | s | 生成服务声明 |