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
    addUseCount() {
        this.useCount++
    }
    reduceUseCount() {
        this.useCount--
        if (this.useCount <= 0) {

        }
    }
}
