/**
 * 管理加载
 */
export default class loadManage {
    resourcePool: { [url: string]: resourceOne } = {}//管理已加载资源
    load(url: string, type: cc.SpriteFrame | cc.Prefab, callBack: Function) {

    }
}
class resourceOne {
    constructor(asset: cc.SpriteFrame | cc.Prefab) {
        this.asset = asset
    }
    asset: cc.SpriteFrame | cc.Prefab = null
    useCount: number = 0
    /**
     * 增加引用次数
     */
    addUseCount() {
        this.useCount++
    }
    /**
     * 减少引用次数，如果没引用了，就清理掉
     */
    reduceUseCount() {
        this.useCount--
        if (this.useCount <= 0) {
            
        }
    }
}
