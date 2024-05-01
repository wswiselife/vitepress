# git connect github

<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-04-30" />
</div>

## 安装 git 

首先，您需要在您的计算机上安装Git。您可以从Git官网下载适合您操作系统的安装程序，并按照安装说明进行安装。

## 配置 git

在安装完成后，您需要配置Git，以便Git知道您是谁。您可以通过以下命令设置您的用户名和电子邮件地址：

```
git config --global user.name 'your name'
git config --global user.email 'your.email@gmail.com'

```

## 生成 SSH 密钥

为了安全地连接到GitHub，通常建议您使用SSH密钥。您可以使用以下命令生成SSH密钥：

```
ssh-keygen -t rsa -b 4096 -C "your.email@gmail.com"

```

这将在您的计算机上生成SSH密钥对。按照提示操作，并将密钥添加到SSH代理，以便您无需每次与GitHub通信时都输入密码。

## 将SSH密钥添加到GitHub帐户

记事本打开地址 C:/Users/[user]/.ssh 路径下的 id_rsa.pub，并复制

登录到GitHub，转到“Settings”（设置） > “SSH and GPG keys”（SSH和GPG密钥），然后将您的SSH公钥添加到您的GitHub帐户中。

## 测试连接

```
ssh -T git@github.com

```

如果一切设置正确，您应该会收到一条消息，表示您已成功连接到GitHub。