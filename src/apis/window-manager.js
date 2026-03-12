export default class WindowManager {

    static #instance = null;

    constructor({ openerName = 'window-manager'}) {

        // 1) Iff an instance already exists, return it instead of creating a new one;
        if (WindowManager.#instance) {
            return WindowManager.#instance;
        }

        window.name = openerName;
        if (window.name === openerName) {
            window.windowQueue = new Set()
        }

        // 2) Save this instance to the static property;
        WindowManager.#instance = this;

        return WindowManager.#instance;

    }

    setWindow({ frameOrigin = (window.origin || '/'), frameName = '_blank', frameOptions = 'popup' }) {
        window.open = registerWindowOpener({frameOrigin, frameName, frameOptions});
    }

}

function registerWindowOpener({frameOrigin, frameName, frameOptions}) {

    return (
        new Proxy(window.open, {
        apply(target, thisArg, argArray /* <= will be overriden */) {
            // Execute the original window.open
            console.log(argArray);
            
            const newWindow = Reflect.apply(target, thisArg, /* argArray */[frameOrigin, frameName, "".concat(frameOptions, ',popup')]);
            
            // If a window was successfully opened, add it to our Set
            if (newWindow) {
                window.windowQueue.add(newWindow);
            }
            
            return newWindow;
        }
        })  
    );
    
}