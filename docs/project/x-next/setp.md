<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="工作" />
    <Badge type="tip" text="初始化" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-06-16" />
</div>

## 项目初始化

```
npx create-next-app --typescript
```

## 处理 git 代码管理

## 处理默认代码删除

## 处理默认样式

### 通用处理
验证tailwindcss

## 首页样式处理-layout

## 处理图标库
```
npm install react-icons
```


## 处理状态管理库
```
npm install zustand
```

hooks 处理
``` tsx
import { create } from "zustand";

  

interface LoginModalStore {

    isOpen: boolean;

    onOpen: () => void;

    onClose: () => void;

}

  

const useLoginModal = create<LoginModalStore>(set => ({

    isOpen: false,

    onOpen: () => set({ isOpen: true }),

    onClose: () => set({ isOpen: false }),

}));

export default useLoginModal
```


## prisma 下载

```
npm install -D prisma

npx prisma init
```

将mongodb 的链接vscode的链接复制到.env文件之后，还需要在末尾添加/test，记得密码需要去掉<password\>，需要整个去掉，同时记得将ip地址开放

~~~
mydatabase?retryWrites=true&w=majority    // 需要在最后加上这个

DATABASE_URL="mongodb+srv://wowiselife:5gFRXpeHm08BDZmL@x-next.n8eu6cb.mongodb.net/mydatabase?retryWrites=true&w=majority"
~~~

vscode 安装 prisma 插件

处理好prisma后，将表结构提交到monogodb中

```
npx prisma db push
```
### 安装prisma/client

```
npm install @prisma/client
```

处理 libs/prismadb.ts

```
import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;

// 作用未知
```

处理密码bcrpyt

```
npm install bcrypt
 npm install @types/bcrypt -D
 npm install next-auth 
 npm install @next-auth/prisma-adapter
```

### 2024616第一天截止时间，01：25

安装 swr【处理持久化，减少请求】

```
npm install swr
npm install axios
```

安装 toast
```
npm install react-hot-toast
```

```
npm install react-spinners
```

处理处理时间格式化

```
npm install data-fns
```

2.38 处理bio修改信息出错
另外传id方法处理

```ts
import { NextApiRequest, NextApiResponse } from "next";

  

import prisma from "@/libs/prismadb";

import serverAuth from "@/libs/serverAuth";

// import useCurrentUser from "../hooks/useCurrentUser";

  

export default async function handler(

    req: NextApiRequest,

    res: NextApiResponse

) {

    if (req.method !== "PATCH") {

        return res.status(405).end();

    }

  

    try {

        // 有session获取得到用户currentUser.id的方法失败，返回没有登录

        // const { data: currentUser } = useCurrentUser();

        // const { currentUser } = await serverAuth(req);

        // console.log("currentUser", currentUser);

        // 改成由body传入却可以。原因未知-20240617

        const { name, username, bio, profileImage, coverImage, id } = req.body;

  

        if (!name || !username) {

            throw new Error("Missing fields");

        }

  

        const updateUser = await prisma.user.update({

            // 修改成body传入

            // where: { id: currentUser.id },

            where: { id: id },

            data: {

                name,

                username,

                bio,

                coverImage,

                profileImage,

            },

        });

  
		// return res.status(200).json( updateUser );// 这里本身是没有{ }的
        return res.status(200).json({ updateUser });

    } catch (error) {

        console.log("error", error);

        return res.status(400).end();

    }

}
```

### 文件上传处理
```
npm install react-dropzone
```

### 20240617第二天截止时间，02：38 

```
interface ImageUploadProps {
    value?:string
    disabled?:boolean
    label?:string;
    onChange:(base64:string) => void
}
// 怎么解释onchange
```

这里的input处理要详细学习

input的文件上传处理，base64也要学习

textarea 熟悉
```
 <textarea

	disabled={isLoading}

	onChange={(e) => setBody(e.target.value)}

	value={body}

	placeholder={placeholder}

	className="

		w-full

		mt-3

		peer

		resize-none

		outline-none

		text-[20px]

		placeholder-neutral-500

		text-white

		disabled:opacity-80

		ring-0

		bg-black

	"

></textarea>

<hr

	className="

		opacity-0
```

3.06处理post创建
prisma建表数据有误 

--authServer错误原因视频简介有描述

处理post【-3.23】

follow【3.23-3.34】

【反思--要是这些东西熟练起来，可以做到博主一样丝滑写出来，真的很难-还有很长的路要走呢】

单条post【3.34-3.43】

like处理【3.43】

## 晚上处理样式项目
ionicons在react中使用方式？

20240618 对总价部分的逻辑处理，待记忆理解