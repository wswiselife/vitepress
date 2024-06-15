<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="工作" />
    <Badge type="tip" text="初始化" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-05-30" />
</div>

具体见douyin-node的 collection.service.js 文件处理

你提到的问题在于 `deleteCollectionService` 函数内部抛出的错误并没有通过统一的错误处理函数进行处理。这是因为在你的 `catch` 块中，错误被捕获后重新抛出，但没有附带适当的错误类型，导致错误信息被转换成普通字符串。

为了解决这个问题，你可以直接在 `catch` 块中重新抛出原始错误而不是新建一个错误对象，或者更改错误的抛出方式以包含原始错误信息。

以下是修改后的代码，保证在 `deleteCollectionService` 函数中抛出的错误能通过统一的错误处理函数进行处理：

```js
const deleteCollectionService = async ({video_id,user_id})=>{  
    try{  
        console.log(video_id,user_id)  
        const result = await collectionModel.deleteCollectionModel({video_id,user_id})  
  
        console.log('service',result)  
        if(result.affectedRows>0){  
            return {}  
        }  
        else {  
            // 为什么这里不经过统一处理呢，返回的仅仅时字符串，而不是对应的信息  
  
            //gpt 解释  
            // 你提到的问题在于 deleteCollectionService 函数内部抛出的错误并没有通过统一的错误处理函数进行处理。这是因为在你的 catch 块中，错误被捕获后重新抛出，但没有附带适当的错误类型，导致错误信息被转换成普通字符串。  
            throw new Error('DELETE_FILED');  //位置1，没有对应的视频来提供删除时
        }  
    }  
    catch(error){  
	     // 位置2
		    throw new Error('DELETE_ERROR'); // 原始1，位置1直接打印‘DELETE_ERROR’，而不是处理好的对应的文字
        //处理 这里直接throw 
	        throw error  // 修改2，位置1可以处理，但是位置2的对应的信息也不见了
    }  
}
```

你的担忧是正确的。在 `catch` 块中重新抛出一个新的错误会导致丢失原本的错误信息。为了保留原始的错误信息，同时使用自定义的错误消息，我们可以创建一个新的错误对象，保留原始错误的详细信息。

你可以使用自定义错误类来解决这个问题。以下是一个示例：

### 自定义错误类

首先，创建一个自定义错误类，用于保留原始错误信息：

javascript

复制代码

```js
class CustomError extends Error {
    constructor(message, originalError) {
        super(message);
        this.name = this.constructor.name;
        this.originalError = originalError;
    }
}

```

### 修改 `deleteCollectionService` 函数

修改 `deleteCollectionService` 函数，使用自定义错误类：

javascript

复制代码

```js

import collectionModel from '../models/collection.model.js';
import CustomError from '../errors/CustomError.js'; // 假设你将自定义错误类放在这个路径

const deleteCollectionService = async ({ video_id, user_id }) => {
    try {
        console.log(video_id, user_id);
        const result = await collectionModel.deleteCollectionModel({ video_id, user_id });

        console.log('service', result);
        if (result.affectedRows > 0) {
            return {};
        } else {
            throw new CustomError('DELETE_FILED', new Error('No rows affected'));
        }
    } catch (error) {
        console.error('Error in deleteCollectionService:', error.message);
        throw new CustomError(error.message, error);
    }
};

export default deleteCollectionService;

```