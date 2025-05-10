# nvm 安装

<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2025-05-09" />
</div>

## 一、前期准备

- **系统环境**: window

## 二、安装

 1. 下载 window 版 nvm 安装包，参考链接: [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)，下拉，找到 Contributors 下面的asset,选择*nvm-setup.exe*或者*nvm-setup.zip* 等其他版本

 2. 返回本地进行安装，默认全选下一步即可

 3. 检查是否安装成功

```termainal
nvm -v

// result: 1.2.2
```

## 三、常用命令

| 命令                            | 说明                                                   |
|---------------------------------|--------------------------------------------------------|
| `nvm ls`                        | 列出已安装的所有 Node.js 版本                         |
| `nvm use <version>`             | 切换到指定版本，例如：`nvm use 18`                    |
| `nvm install <version>`         | 安装指定版本的 Node.js，例如：`nvm install 18`        |
| `nvm ls-remote`                 | 查看所有远程可用版本                                  |
| `nvm current`                  | 显示当前正在使用的 Node.js 版本                       |
| `nvm uninstall <version>`      | 卸载指定版本，例如：`nvm uninstall 16.14.0`          |
| `nvm alias default <version>`  | 设置默认版本，例如：`nvm alias default 18`            |

版本切换示例
```
nvm install 20          # 安装 Node.js v20
nvm use 20              # 切换到 Node.js v20
nvm alias default 20    # 设置默认版本为 v20
```
 
 

