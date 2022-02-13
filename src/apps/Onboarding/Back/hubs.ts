import App from "./App.vue";
import HubsAppProto from "../../HubsApp";

class HubsApp extends HubsAppProto {
    constructor (width: number, height: number, params: any = {}) {
        super(App, width, height, params)
        //this.isInteractive = true;
    }
}

var init = async function () {
    let app = new HubsApp(600, 475)
    await app.mount()
    return app
}

export default init