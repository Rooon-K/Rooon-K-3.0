---
title: git&gitlab
tags:
  - git
categories:
  - git
date: 2023/10/30
---

## git
### 什么是git
git是一个分布式版本控制`工具`, 通常用来对软件开发过程中的源代码文件进行管理。
### git的安装
1. 下载安装包[点击下载](https://mirrors.tuna.tsinghua.edu.cn/github-release/git-for-windows/git/LatestRelease/Git-2.42.0.2-32-bit.exe)。
2. 默认选项不动一直点下一步即可。
3. 右键桌面, 点击显示更多选项, 出现`Git GUI Here`和`Git Bash Here`即代表安装成功。
![](/git/1.png)
![](/git/2.png)
### 配置基本信息
点击刚才的`Git Bash Here`选项, 打开git控制终端, 输入以下两个命令, 配置用户名、邮箱作为身份标识
```
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```
之后再输入
```
git config --list
```
查看是否配置成功(最后两行)
![](/git/3.png)
### git的命令
在终端输入`git --help`可查看git的所有命令及简介。
![](/git/4.png)
<!-- 1. git init
2. git clone
3. git add
4. git mv
5. git restore
6. git rm
7. git bisect
8. git diff
9. git grep
10. git log
11. git show
12. git status
13. git branch
14. git commit
15. git merge
16. git rebase
17. git reset
18. git switch
19. git tag
20. git fetch
21. git pull
22. git push -->

## gitlab
gitlab是一个开源的仓库管理软件, 使用Git作为代码管理工具, 并在此基础上搭建起来的Web服务。    
访问gitlab.orangestudio.cn即可进入橙果自建gitlab仓库。
![](/git/5.png)
### 注册
点击 `立即注册` 前往注册页面。     
填写真实姓名, 自定义用户名、密码、邮箱。
![](/git/6.png)
点击注册后, 你的邮箱将会收到一封确认邮件, 点击确认后, 等待管理员审批, 通过后将收到审批通过的邮件, 就可以进行登录了。
![](/git/7.png)
### 创建一个新项目
登录成功后, 点击右上角新建项目。
![](/git/8.png)
创建空白项目。
![](/git/9.png)
填写项目名称(不要有中文)、选择群组或用户空间、可见性级别(建议非私有化项目选择内部), 然后点击新建项目, 项目便创建好了。
![](/git/10.png)
### 将项目代码传到gitlab
点击`克隆`, 复制链接
![](/git/11.png)
在桌面右键, 点击 `Git Bash Here` 或 `Open in Terminal` 进入终端。
![](/git/12.png)
输入`git clone 刚才复制的链接` 回车。(第一次使用可能需要输入用户名密码)
![](/git/13.png)
项目便被克隆到桌面上了。
![](/git/14.png)

