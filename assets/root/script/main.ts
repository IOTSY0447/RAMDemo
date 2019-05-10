
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label) label: cc.Label = null;

    @property text: string = 'hello';

    start() {
    }
    onClick(event: cc.Event) {
        let nodeName = event.currentTarget.name;
        switch (nodeName) {
            case "loadBtn":
                cc.director.loadScene('loadScene')
                break
        }
    }
}
