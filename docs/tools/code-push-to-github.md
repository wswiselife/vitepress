# push code to github

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

## 在GitHub上创建新的仓库

首先，在GitHub上创建一个新的空仓库。登录到您的GitHub帐户，然后点击页面右上角的加号图标，选择“New repository”（新建仓库），然后按照页面上的指示填写仓库的名称、描述等信息，最后点击“Create repository”（创建仓库）按钮即可。

## 在本地初始化Git仓库

在您的本地项目目录中创建一个新的Git仓库

```
git init

```

## 将文件添加到暂存区

```
git add .

```

## 提交更改

```
git commit -m "Project Initial"

```

## 由master分支切换为main分支

由于GitHub中主分支为main分支，而本地仓库的主分支为master分支，需要把本地的分支切换成main分支，并删除master分支

```
git branch                // 查看分支
git branch -m main        // 创建并切换到main分支
git branch -d master      // 删除master分支

```

## 将远程仓库链接到本地仓库

使用git remote add命令将您的本地仓库链接到远程GitHub仓库。替换yourusername和yourrepository为您在GitHub上创建的仓库的用户名和仓库名称

```
git remote add origin git@github.com:yourusername/yourrepository.git

```

## 处理冲突
```
git pull origin main
git pull origin main --allow-unrelated-histories    // 强制拉取并合并不同历史记录
```

冲突处理合并

## 推送到GitHub

```
git add .
git commit -m 'something'
git push -u origin main

```

