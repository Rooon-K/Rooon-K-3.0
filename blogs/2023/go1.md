---
title: Golang学习与实践(一)
tags:
  - go
categories:
  - Golang
date: 2023/10/13
---

## 下载和安装

点击链接选择对应操作系统版本根据导引指示进行安装[下载链接](https://golang.google.cn/dl/)

## IDEA 配置 GO 环境

下载插件 GO、GO Template

## 第一个 GO 程序

在 IDEA 中创建一个 go 项目。
![](/go/1.png)

编写一个 `Hello World!` go 程序。  
创建一个 `1.go` 文件并编写以下代码。

```
package main
import "fmt"

func main() {
	fmt.Printf("Hello World!")
}
```

点击右上角的运行按钮, 下方终端中即可看到输出的文本 `Hello World!`
![](/go/2.png)

## 代码解析

1. 第一行内容为 `package main`, 他表示这个源文件属于 `main` 包。`main` 包是每个 `Go` 应用程序都包含的包, 有且只有一个, 可以对应 C 语言中的 `main.c` 文件。
2. 第二行内容为 `import "fmt"`, 他的作用是导入名为 `fmt` 的包, 目的在于后面使用 `fmt` 报提供的能力, 导入的包必须被使用。
3. 第四行开始到最后是 `main` 函数, 对应 C 语言中的 `main` 函数, 它是 `Go` 程序的入口函数, 是程序运行的起点, 这个函数必须存在且只能存在一个, 且必须声明在 `main` 包中。任何一个 `Go` 函数都要求使用成对的大括号将函数包裹起来。
4. 第五行调用了 `fmt` 包中的 `Printf()` 函数, 这个函数的作用是将特定的内容输出到控制台上。
5. 第六航是 `main()` 函数的结束。

## 添加注释

### 单行注释
单行注释也称为行注释, 格式为以双斜杠 `//` 作为开头的一行。
```
package main
import "fmt"

func main(){
  //输出"Hello World!"文字
  fmt.Printf("Hello World!")
}
```

### 多行注释
多行注释也称为块注释, 格式为以 `/*` 为开头, 以 `*/` 为结束的一行或多行。
```
package main
import "fmt"

/*
这一个块注释
包裹在其中的内容都不会被执行
*/
func main() {
	fmt.Printf("Hello World!")
}
```
