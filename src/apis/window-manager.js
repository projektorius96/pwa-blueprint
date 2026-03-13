export default class WindowManager {

    static #instance = null;

    constructor() {

        // 1) Iff an instance already exists, return it instead of creating a new one;
        if (WindowManager.#instance) {
            return WindowManager.#instance;
        }

        window.managedWindows = new Set();

        // 3) When the parent closes, close all tracked child windows (wnd) so they do not outlive the parent;
        window.addEventListener('beforeunload', () => {
            for (const wnd of window.managedWindows) {
                if ( !(wnd?.closed) ) {
                    wnd.close();
                }
            }
        });

        // 2) Save this instance to the static property;
        WindowManager.#instance = this;

        return WindowManager.#instance;

    }

    setWindow(managedWindows, {frameOrigin = (window.origin || '/'), frameName, frameOptions = 'left=100,top=100,width=320,height=320,popup'}) {

        // Give each child a unique name; this becomes child.name and establishes the parent-child relationship
        // via window.open()'s second argument — do NOT mutate window.name here, as that would rename the parent.
        const childName = frameName ?? `child-${managedWindows.size + 1}`;
        const childWindow = window.open(frameOrigin, childName, frameOptions);

        if (childWindow) {
            managedWindows.add(childWindow);

            // Remove child from the tracked set once it is closed;
            childWindow.addEventListener('beforeunload', () => {
                managedWindows.delete(childWindow);
            });
        }

    }

}