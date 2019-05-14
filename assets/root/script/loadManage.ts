/**
 * 管理加载
 */
class loadManage {
    constructor() {
        // let instantiate = cc.instantiate
        // cc.instantiate.prototype = (prefab: cc.Prefab) => {
        //     if (!(prefab instanceof cc.Prefab)) {//保留克隆对象的功能
        //         return instantiate(prefab)
        //     }
        //     let newNode: cc.Node = instantiate(prefab)
        //     this.instantiateNodePool[prefab.name].push(newNode)
        // }
    }
    instantiateNodePool: { [name: string]: cc.Node[] } = {} //记录预制使用
    testObj: any = {}
    resourcePool: { [url: string]: resourceOne } = {}//管理已加载资源
    /**
     * 加载资源
     * @param url 
     * @param type 
     * @param callBack 
     * @param id 
     */
    load(url: string, type: typeof cc.Asset, callBack: Function, uuid: symbol) {
        if (this.resourcePool[url]) {
            callBack(null, this.resourcePool[url])
            return
        }
        cc.loader.loadRes(url, type, (err, asset: cc.Asset) => {
            callBack(err, asset)
            if (err) {
                cc.error(err)
            } else {
                this.resourcePool[url] = new resourceOne(asset)
            }
        });
    }
    addInterfaceUse(){
        
    }
    /**
     * 当界面关闭
     * @param uuid 
     */
    onInterfaceClose(uuid: string){

    }
}
class resourceOne {
    asset: cc.Asset = null
    useCount: number = 0
    isNeedRelease: boolean = false//是否需要释放，目前只释放图片、预制
    constructor(asset: cc.Asset) {
        this.asset = asset
        this.isNeedRelease = asset instanceof cc.Prefab || asset instanceof cc.SpriteFrame 
    }
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
export default new loadManage()

