# setting.json 文件配置

<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2024-05-10" />
</div>

```json
{
    // 主题色
    "workbench.colorTheme": "Default Dark Modern",
    // tailwind
    "files.associations": {
        "*.css": "tailwindcss"
    },
    // jsx/tsx 中tailwind高亮显示
    "editor.quickSuggestions": {
        "strings": "on"
      },
    // 自动保存-焦点改变
    "files.autoSave": "onFocusChange",
    "[vue]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    // prettier 格式化
    // 单个函数的箭头函数不带括号
    "prettier.arrowParens": "avoid",
    // tab 空格数
    "prettier.tabWidth": 4,
    // 保存自动格式化
    "editor.formatOnSave": true,
    // 不突出参考线，也就是4格一条线
    "editor.guides.highlightActiveIndentation": false,
    // 数据库连接
    "json.schemas": [

    ],
    "editor.stickyScroll.enabled": false,
    "explorer.confirmPasteNative": false,
  
}

```