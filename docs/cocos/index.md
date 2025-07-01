# loading 全局挂载

## 一、初始化全局类

将多个工具方法集中封装在一个类里，并作为一个统一入口使用，

✅ 你这种做法的名称是：
✅ 工具类模式（Utility Class Pattern）
✔ 定义：
将多个无状态的公共方法（如格式化、存储、转换、事件绑定等）封装在一个类中，作为工具使用，通常是静态方法，也可以是实例方法。

✔ 特征：
方法之间没有强依赖；

功能通用、分散，不特定于某一个场景；

通常用于辅助业务逻辑；

在 Cocos 中常作为全局对象访问（如 coco.Help）。

👇 你还有一个更大范围的架构方式：
✅ Facade Pattern（外观模式）
✔ 定义：
为子系统中的一组接口提供一个统一的高层接口，使子系统更易使用。

你 window.coco = { Help, AssetMgr, PanelMgr, SceneMgr, ... } 这种做法，就是将多个系统统一暴露为一个全局对象 coco，作为一个“外观”来访问子系统。

这非常标准地属于：

外观模式（Facade）

🧠 总结：
编程结构	你封装的部分	专业术语
Help 类	工具函数合集	Utility Class
window.coco = {...}	多子系统统一对外暴露	Facade Pattern（外观模式）

```ts
 window.coco = {
    Help: new Help(),
    AssetMgr: new AssetMgr(),
    PanelMgr: new PanelMgr(),
    SceneMgr: new SceneMgr(),
    ConfigMgr: new ConfigMgr(),
    EventMgr: new EventMgr(),
    GameData: new GameData(),
    i18n: new i18n(""),
    AudioMgr: this.AudioMgrN.getComponent(AudioMgr),
    GuideMgr: GuideMgr.getInstance(),
    GameAPI: new GameAPI(),
    RewardFly: null,
    RedPointMgr: new RedPointMgr(),
    LoginRedpointMgr: LoginRedpointMgr.getInstance()
};

```

### 全局常驻节点

```ts
    director.addPersistRootNode(this.residentNode)

```
声明常驻根节点，该节点不会在场景切换中被销毁。 目标节点必须位于为层级的根节点，否则无效。

常驻节点放置例如
1. 广告管理(AdsMgr)
2. 上报后台的数据(TAMgr)
3. 上报第三方平台的数据

### 加载游戏资源（初始化调用资源）

1. 加载语言包
2. 加载音效资源
3. 加载 home 主体场景
4. 加载战斗资源
5. 加载配置包
   
```ts
 coco.i18n.Init((err) => {
    if (!err) return;
    console.log("语言包加载完毕");
});

coco.AssetMgr.PreLoadBundle("Audio", (err, asset) => {
    if (err) return;
    console.log("音效包加载完毕");
    coco.AudioMgr.LoadAll();//加载所有音效文件
});

coco.AssetMgr.PreLoadBundle("Home", (err, asset) => {
    if (err) {
        console.log("Home资源加载失败", JSON.stringify(err));
        return;
    }
    this.hasLoadHome = true;
    console.log("Home资源加载完毕", asset);
});
```

