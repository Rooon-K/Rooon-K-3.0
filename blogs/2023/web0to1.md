---
title: 从零开始部署web服务
tags: 
 - Linux
categories:
 - 项目实战
date: 2023/03/23
---

::: tip 前情提要
1. 开发中的项目需要进行前后端联调, 故申请了两个服务器用于项目测试、上线。
2. 在部署第一个服务器环境时遇到了一些坑, 特此记录。
:::

## 一、环境需求
1. nodejs
2. nginx

## 二、部署过程
### 1. vim缺失 报错bash vim: command not found<br>
首先检查系统是否完整安装vim<br>
执行一下命令
```
rpm -qa|grep vim
```

如果完整安装, 会显示如下三行:
```
vim-enhanced-7.0.109-7.el5
vim-minimal-7.0.109-7.el5
vim-common-7.0.109-7.el5
```

如果少了其中的某一条, 就用以下命令来安装(示例为缺少第一条)
```
yum -y install vim-enhanced
```

如果上面的三条一条都沒有返回, 可以直接用以下命令
```
yum -y install vim* 
```

### 2. NVM安装
对于nodejs安装, 采用nvm进行版本控制<br>

nvm下载
```
cd /
wget https://github.com/nvm-sh/nvm/archive/refs/tags/v0.39.3.tar.gz
mkdir -p /.nvm
tar -zxvf v0.39.3.tar.gz -C /.nvm
```

配置
```
vim ~/.bashrc
```
在文件末尾添加(注意修改nvm路径中的版本号)
```
export NVM_DIR="/.nvm/nvm-0.39.3"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
让配置文件生效
```
source ~/.bashrc
```
打开命令行, 执行nvm -v命令后, 出现版本号, 则证明安装成功。

### 3. nvm的使用——nodejs版本控制
1. 查询目前线上所能安装的所有nodejs版本
```
nvm ls-remote
```
2. 安装响应版本nodejs
```
nvm install 16.14.0
```
3. 使用相应版本nodejs
```
nvm use 16.14.0
```
4. 列出已经安装的版本
```
nvm ls
```
5. 卸载相应的nodejs
```
nvm uninstall 16.14.0
```
6. 查看当前版本
```
nvm current
```

### 4. 安装gcc
执行以下命令进行安装
```
yum -y install gcc-c++
```

### 5. 安装nginx
创建nginx目录, 进入目录后操作
```
mkdir nginx
cd nginx
```
一、 安装nginx依赖: pcre
1. 下载pcre
```
wget http://downloads.sourceforge.net/project/pcre/pcre/8.37/pcre-8.37.tar.gz
```
2. 解压pcre
```
tar -xzpvf pcre-8.37.tar.gz
```
3. 进入pcre-8.37 执行命令:
```
./configure
```
4. 执行命令:
```
make && make install
```
5. 验证pcre是否成功(出现版本号即为成功):
```
pcre-config --version
```

二、安装 openssl 、zlib 、 gcc 依赖:
1. 安装命令:
```
yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel
```

三、安装nginx
1. 进入之前创建的nginx目录, 下载nginx:
```
wget http://nginx.org/download/nginx-1.20.1.tar.gz
```
2. 解压nginx:
```
tar -zxvf nginx-1.20.1.tar.gz
```
3. 进入nginx-1.20.1目录, 执行:
```
./configure
```
4. 编译:
```
make && make install
```

四、启动nginx
1. 进入/usr/local/nginx/sbin, 启动nginx:
```
cd /usr/local/nginx/sbin
./nginx
```

2. 查看nginx是否启动:
```
ps -ef | grep nginx
```
3. 查找nginx占用端口:
```
netstat -anp|grep xxxxx(上一步第二列第一行)
```

五、访问nginx
浏览器输入服务器ip出现"Welcome to nginx"界面即为成功

六、建立软连接
如果我们此时输入nginx -v会提示command not found<br>
我们需要去/usr/bin目录下创建一个软连接, 索引到nginx的安装目录里。
1. 查找名为nginx的路径
```
sudo find / -name nginx
```
得到以下结果<br>
![](/23032301.png)
然后复制上级目录为/sbin的路径, 使用建立软连接的代码
```
ln -s /usr/local/nginx/sbin/nginx /usr/bin
```
在查看一次版本号
```
nginx -v
```
出现版本号即为成功

### 6. 配置nginx
1. 停止nginx服务
```
nginx -s stop
```
2. 找到nginx的配置文件
```
whereis nginx
```
3. cd到该目录下, 其中nginx.conf就是默认配置文件
4. 使用vim编辑nginx.conf, 修改root后面目录为前端dist文件夹地址
<img :src="$withBase('/image/23032302.png')">
1. 重启nginx
```
nginx -s reload
```
此时会报错2: No such file or directory<br>
解决办法:<br>
```
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
nginx -s reload
```

至此再次访问ip地址, 便能访问到部署的项目了。
