# 在 react 项目中引入 ion-icons

<div style="color: red;padding: 16px 0; font-weight: 600;color: rgb(82 82 82); display: flex;gap: 10px;">
    <span>标签：</span>
    <Badge type="tip" text="前端" />
    <Badge type="tip" text="html" />
    <Badge type="tip" text="原子化" />
</div>

<div style="color: red; font-weight: 600;color: rgb(82 82 82);">
    <span>创建时间：</span>
    <Badge type="tip" text="2025-05-11" />
</div>

## 一、npm 下载
直接使用 Ionicons React 官方包（最简单）
Ionic 官方提供了 React 组件库，直接安装即可使用：

```termainal
npm install @ionic/react @ionic/react-icons
```

```tsx
// header.tsx
import { IonIcon } from '@ionic/react';
import { apertureOutline } from 'ionicons/icons';

const Logo = () => {
  return (
    <IonIcon 
      icon={apertureOutline} 
      className="text-red-800 w-10 h-10" 
    />
  );
};
```

## 二、下载 svg,再引用到项目中


