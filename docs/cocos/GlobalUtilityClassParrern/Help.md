## 一、各函数封装合集

1. button 点击事件封装
2. 提示 tips 弹框封装
3. 本地数据存、取、移除
4. 数值转换工具
5. 时间格式化
6. 订单信息处理，保存，移除，补发
7. 广告加载及展示
8. 跳转第三方平台 url
9. 上报支付信息
10. 线上环境打印去除




### button 点击事件封装

```ts
 public ListenBtnClick<T extends Component>(target: Node, btn: Button, cn: T, fuc: Function, cs: string = '', noMultiCb: boolean = true) {
    if (sys.os == sys.OS.IOS || sys.os == sys.OS.OSX) {
        btn.zoomScale = 0.9;
        btn.duration = 0.1;
    }
    const clickEventHandler = new EventHandler();
    clickEventHandler.target = target; // 这个 node 节点是你的事件处理代码组件所属的节点
    clickEventHandler.component = js.getClassName(cn);// 这个是脚本类名
    clickEventHandler.handler = fuc.name;

    let btnScaleZoom = btn.node.getComponent(Button)
    let transitionScale = btnScaleZoom.transition === Button.Transition.SCALE;
    if (btnScaleZoom && transitionScale) {
        btnScaleZoom.zoomScale = 1.2
    }
    if (cs || cs == '0') clickEventHandler.customEventData = cs;
    function func(event) {
        let posX = event.getUILocation().x
        let posY = event.getUILocation().y
        coco.EventMgr.emit("Game.touchEvent", { x: posX, y: posY })
        coco.EventMgr.emit("BtnOnClick", this);
        //播放按钮声音
        coco.AudioMgr.PlayEff(AudioSubType.BUTTON, 0.5);

    }


    if (btn.clickEvents.length == 0) {
        btn.node.on(Input.EventType.TOUCH_START, func.bind(btn.node), this);
    }
    if (btn.clickEvents.length > 0 && noMultiCb) {
        btn.clickEvents.splice(0);
    }
    btn.clickEvents.push(clickEventHandler);
}

```




