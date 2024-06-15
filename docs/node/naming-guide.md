<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-05-30" />
</div>

无论是按照**模块划分**，还是按照**功能划分**，命名文件名时都应采用以下规则

入口文件以 `app.js/app.ts` 命名

- `功能文件名` 做到见名知意

**模块划分**
- `router` 文件夹

`controller` 文件导入时
```
import nameController from `*功能*.controller.js` 

// 引用时使用
router.post('/path',nameController.getNameController)
```

- `controller` 文件夹

`service` 文件导入时
```
import nameService from `*功能*.service.js` 

// 引用时使用
router.post('/path',nameService.getNameService({params}))
```

- `service` 文件夹

`controller` 文件导入时
```
import nameController from `*功能*.controller.js` 

// 引用时使用
router.post('/path',nameController.getNameController)
```


当处理的是获取接口时，我们使用`createCollectionController` 进行函数的命名
在不同的文件下，修改成对应的文件功能即可，例如`createCollectionService`、`createCollectionModel`

