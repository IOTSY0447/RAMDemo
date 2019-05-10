//帧动画图片资源配置  creator有个可以加载文件夹内所有图片的接口，用那个加载就不用配置这么多了
class base {
    /**
     * 根目录
     */
    static get url() {
        return 'img'
    }
    /**
     * 文件夹名
     */
    static get fileName() {
        return this['name']
    }
    /**
     * 资源名
     */
    static get arrImgName(): string[] {
        return []
    }
    /**
     * 缩放
     */
    static get sclice() {
        return { x: 1, y: 1 }
    }
    /**
     * 多少帧切换一次图片
     */
    static get times() {
        return 5
    }
    /**
     * 一些规范的图可直接设置
     * @param baseName 
     * @param start 
     * @param end 
     * @param length 
     */
    static setArrImgName(baseName, start, end, length = 2) {
        let arrImgName = []
        let index = start
        while (index <= end) {
            arrImgName.push(`${baseName}${("0"['repeat'](length) + index).substr(-length)}`)
            index++
        }
        return arrImgName
    }
    /**
     * 获取data
     */
    static getData(fileName) {
        if (!fileName) {
            fileName = this.fileName
        }
        let data = {
            url: this.url,
            fileName: fileName,
            arrImgName: this.arrImgName,
            sclice: this.sclice,
            times: this.times,
        }
        return data
    }
}
/**
 * 吃
 */
export class chi extends base {
    static get arrImgName() {
        return this.setArrImgName('chi_', 1, 10)
    }
}
/**
 * 暗杠
 */
export class angang extends base {
    static get arrImgName() {
        return this.setArrImgName('angang_', 1, 15)
    }
}
/**
 * 点炮
 */
export class dianpao extends base {
    static get arrImgName() {
        return this.setArrImgName('dianpao_', 1, 16)
    }
}
/**
 * 杠
 */
export class gang extends base {
    static get arrImgName() {
        return this.setArrImgName('gang_', 1, 13)
    }
}
/**
 * 胡
 */
export class hu extends base {
    static get arrImgName() {
        return this.setArrImgName('hu_', 1, 24)
    }
}
/**
 * 金币
 */
export class jinbi extends base {
    static get arrImgName() {
        return this.setArrImgName('money_', 1, 12)
    }
}
/**
 * 碰
 */
export class peng extends base {
    static get arrImgName() {
        return this.setArrImgName('peng_', 1, 13)
    }
}
/**
 * 抢杠
 */
export class qianggang extends base {
    static get arrImgName() {
        return this.setArrImgName('qg_', 1, 13)
    }
}
/**
 * 色子
 */
export class saizi extends base {
    static get arrImgName() {
        return this.setArrImgName('dice_', 1, 6)
    }
}
/**
 * 分数改变的背景特效
 */
export class scoreChange extends base {
    static get arrImgName() {
        return this.setArrImgName('scoreChange_', 1, 10)
    }
}
/**
 * 听
 */
export class ting extends base {
    static get arrImgName() {
        return this.setArrImgName('ting_', 1, 10)
    }
}
/**
 * 一炮多响
 */
export class yipaoduoxiang extends base {
    static get arrImgName() {
        return this.setArrImgName('yipaoduoxiang_', 1, 21)
    }
}
/**
 * 一炮双响
 */
export class yipaoshuangxiang extends base {
    static get arrImgName() {
        return this.setArrImgName('yipaoshuangxiang_', 1, 21)
    }
}
/**
 * 自摸
 */
export class zimo extends base {
    static get arrImgName() {
        return this.setArrImgName('zimo_', 1, 16)
    }
}
/**
 * 补花
 */
export class buhua extends base {
    static get arrImgName() {
        return ['angang_01', 'angang_02', 'angang_03', 'angang_04', 'angang_05', 'Button_ermj_buHua', 'Button_ermj_buHua', 'Button_ermj_buHua', 'Button_ermj_buHua', 'Button_ermj_buHua', 'Button_ermj_buHua']
    }
}

