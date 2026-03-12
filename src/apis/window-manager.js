export default class WindowManager {

    static #instance = null;

    constructor({ openerName = 'window-manager'}) {

        // 1) Iff an instance already exists, return it instead of creating a new one;
        if (WindowManager.#instance) {
            return WindowManager.#instance;
        }

        window.name = openerName;
        if (window.name === openerName) {
            window.managedWindows = new Set();
        }

        // 2) Save this instance to the static property;
        WindowManager.#instance = this;

        return WindowManager.#instance;

    }

    setWindow(managedWindows, {frameOrigin = (window.origin || '/'), frameName = '_blank', frameOptions = 'left=100,top=100,width=320,height=320,popup'}) {
        
        window.name = `child-${managedWindows.size+1}`;
        window.managedWindows.add(
            window.open(frameOrigin, frameName, frameOptions)
        );
        
    }

}