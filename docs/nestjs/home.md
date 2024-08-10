---
title: nestjs简介
date: 2023/05/11
---

::: tip 简介
Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的开发框架。它利用 JavaScript 的渐进增强的能力, 使用并完全支持 TypeScript (仍然允许开发者使用纯 JavaScript 进行开发), 并结合了 OOP (面向对象编程)、FP (函数式编程)和 FRP (函数响应式编程)。

在底层, Nest 构建在强大的 HTTP 服务器框架上, 例如 Express (默认), 并且还可以通过配置从而使用 Fastify !

Nest 在这些常见的 Node.js 框架 (Express/Fastify)之上提高了一个抽象级别, 但仍然向开发者直接暴露了底层框架的 API。这使得开发者可以自由地使用适用于底层平台的无数的第三方模块。
:::

::: tip 理念
近年来, 由于 Node.js、JavaScript 已经成为 web 前端和后端应用程序的“通用开发语言”。这促成了诸如 Angular、React 和 Vue 等优秀项目的出现, 他们提高了开发者的工作效率, 并能够创建快速、可测试和可扩展的前端应用程序。然而, 尽管 Node （和服务器端 JavaScript）拥有大量优秀的软件库、辅助程序和工具, 但没有一个能够有效地解决我们所面对的主要问题, 即 架构。

Nest 提供了一个开箱即用的应用程序体系结构, 允许开发者及其团队创建高度可测试、可扩展、松散耦合且易于维护的应用程序。这种架构深受 Angular 的启发。
:::

## 安装
使用 Nest CLI 构建项目, 运行以下命令。( Nodejs Version >= 12 && Version != 13)
```
npm i -g @nestjs/cli      yarn add -g @nest/cli
nest new project-name
cd project-name
npm install               yarn
npm run start             yarn start
```
打开浏览器并导航到 `http://localhost:3000/` 地址。

