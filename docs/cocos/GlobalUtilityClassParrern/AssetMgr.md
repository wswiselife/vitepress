## 一、Bundle 动态加载及获取

1. 获取 sprite 精灵图
2. 获取不同的预制

### 使用示例

```ts
coco.AssetMgr.Bundle(coco.AssetMgr.bundleType.Icon).GetSprite("BuildBigImg/" + config.res, (err, asset) => {
    if (!err && isValid(this.node)) {
        this.baseIcon.spriteFrame = asset
        this.baseIcon.node.active = true;
    }
}, this.baseIcon.node)

```

### 封装统一入口

```ts
/**
 * 指定bundle
 * @param name 
 * @returns 
 */
public Bundle(name: string): AssetMgr {
    if (!this._bundles.has(name)) {
        // console.log("没有，需要重新加载", name, this._bundles);
        assetManager.loadBundle(name, (err, asset) => {
            if (!err) {
                this._bundles.set(name, asset);
            }
        });
        return null;
    }
    this._readName = name;
    return this;
}

```


### 获取预制示例
```ts
/**
 * 获取预制体
 * @param path 
 * @param cb 
 */
public GetPrefab(path: string, cb: Function): void {
    let name: string = this._readName;
    this._bundles.get(name)?.load<Prefab>(path, (err, asset) => {
        if (!err && cb) {
            cb(err, asset);
        }
    });
}
```


### 获取icon示例
```ts
/**
 * 获取精灵
 * @param path 
 * @param cb 
 * @param tryNum 尝试次数
 */
public GetSprite(path: string, cb: Function, node: Node, tryNum: number = 0): void {
    let name: string = this._readName;

    let key: string = name + path;
    let oldKey: string = this._nodesMap.get(node);
    //加载相同资源
    if (oldKey == key) {
        cb(false, this._resMap.get(node));
        return;
    }
    this._nodesMap.set(node, key);
    this._bundles.get(name)?.load<SpriteFrame>(path + "/spriteFrame", (err, asset: SpriteFrame) => {
        if (!path) {
            //console.log("加载一个错误", path)
            cb(null, null);
            return
        }
        if (cb) {
            if (err || asset == null) {
                //没有资源 加载一个初始的
                //console.log("加载一个错误", path)
                //如果没有资源 返回默认 体力
                this.Bundle(name).GetSprite('common/artifact_' + "999", cb, node, tryNum);
                // if (path.indexOf("Equip") != -1 && tryNum <= 3) {
                //     ++tryNum;
                //     let arr: string[] = path.split("_");
                //     if (!arr || arr.length <= 3) return;
                //     this.Bundle(name).GetSprite("Equip_" + arr[1] + "_01_" + arr[3], cb, node, tryNum);
                // }
            } else {
                asset.addRef(); //增加引用
                //已经没用了
                if (this._nodesMap.get(node) != key) {
                    asset.decRef();
                    return;
                }

                let oldAsset: Asset = this._resMap.get(node);
                this._resMap.set(node, asset);
                cb(err, asset);

                //减少旧资源引用
                if (isValid(oldAsset)) oldAsset.decRef();
            }
        }
    });
}
```
