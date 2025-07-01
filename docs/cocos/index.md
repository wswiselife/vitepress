一、初始化全局类

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


