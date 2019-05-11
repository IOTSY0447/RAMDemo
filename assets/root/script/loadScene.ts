import * as anctionData from "./anctionData";
const { ccclass, property } = cc._decorator;
@ccclass
export default class loadScene extends cc.Component {
    @property(cc.Node) content: cc.Node = null;
    @property(cc.Node) item: cc.Node = null;
    @property(cc.Node) content2: cc.Node = null;
    spriteFramePool: { [key: string]: cc.Prefab } = {} //存储加载的图片资源
    prefabPool: { [key: string]: cc.Prefab } = {} //存储加载的预制
    start() {

    }
    /**
     * 点击事件
     * @param event 
     */
    onClick(event: cc.Event) {
        let nodeName = event.currentTarget.name;
        switch (nodeName) {
            case "close":
                cc.director.loadScene('main')
                break
            case "loadPrefab":
                this.loadPrefabTest()
                break
            case "releasePrefab":
                this.releasePrefabTest()
                break
            case "loadImg":
                this.loadSpriteFrameTest()
                break
            case "releaseImg":
                this.releaseSpriteFrameTest()
                break
        }
    }
    /**
     * 测试加载图片
     */
    loadPrefabTest() {
        let arrUrl = ['prefab/prefab', 'prefab/test1', 'prefab/test2', 'prefab/test3', 'prefab/test4', 'prefab/test5', 'prefab/test6']
        arrUrl.forEach(url => {
            this.loadPrefab(url, (err, result) => {
                let newNode = cc.instantiate(result)
                this.content2.addChild(newNode)
            })
        })
    }
    /**
     * 释放预制
     */
    releasePrefabTest() {
        this.content2.getComponentsInChildren(cc.Sprite).forEach(sprite => {
            sprite.spriteFrame = null
        })
        this.content2.removeAllChildren(true)
        this.releaseAllPrefab()
    }
    /**
     * 加载并测试图片
     */
    loadSpriteFrameTest() {
        for (let key in anctionData) {
            let data = anctionData[key]
            data.arrImgName.forEach(imgName => {
                let loadData = {
                    type: cc.SpriteFrame,
                    url: `${data.url}/${data.fileName}/${imgName}`
                }
                let item = cc.instantiate(this.item)
                this.loadAndSetSpriteFrame(loadData.url, (err, result) => {
                    item.getComponent(cc.Sprite).spriteFrame = result
                    item.x = 0
                    this.content.addChild(item)
                })
            });
        }
    }
    /**
     * 释放图片测试
     */
    releaseSpriteFrameTest() {
        this.content.getComponentsInChildren(cc.Sprite).forEach(sprite => { // ！！！包括自身的图也会被清理
            sprite.spriteFrame = null
        })
        this.content.children.forEach(node => {
            node.destroy()
        })
        this.content.removeAllChildren(true)
        this.releaseAllSpriteFrame()
    }
    //------------------------------------------------------------------
    /**
     * 加载并设置图片
     * @param url 
     * @param sprite 
     * @param callBack 
     */
    loadAndSetSpriteFrame(url: string, callBack: Function) {
        if (this.spriteFramePool[url]) {
            callBack(null, this.spriteFramePool[url])
            return
        }
        cc.loader.loadRes(url, cc.SpriteFrame, (err, asset) => {
            callBack(err, asset)
            if (err) {
                cc.error(err)
            } else {
                this.spriteFramePool[url] = asset
            }
        });
    }
    /**
     * 释放所有的图片
     */
    releaseAllSpriteFrame() {
        for (let url in this.spriteFramePool) {
            let spriteFrame = this.spriteFramePool[url]
            var deps = cc.loader.getDependsRecursively(spriteFrame);
            cc.loader.release(deps);
        }
        this.spriteFramePool = {}
        cc.sys.garbageCollect();
    }
    /**
     * 加载预制
     * @param url 
     * @param callBack 
     */
    loadPrefab(url: string, callBack: Function) {
        if (this.prefabPool[url]) {
            callBack(null, this.prefabPool[url])
            return
        }
        cc.loader.loadRes(url, cc.Prefab, (err, asset) => {
            callBack(err, asset)
            if (err) {
                cc.error(err)
            } else {
                this.prefabPool[url] = asset
            }
        });
    }
    /**
     * 释放所有预制
     */
    releaseAllPrefab() {
        for (let url in this.prefabPool) {
            let prefab = this.prefabPool[url]
            var deps = cc.loader.getDependsRecursively(prefab);
            cc.loader.release(deps);
        }
        this.prefabPool = {}
        cc.sys.garbageCollect();
    }
}
