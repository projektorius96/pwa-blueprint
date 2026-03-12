import './style.css';
import { isPWA, removeDocTitleOnPWA } from './utils.js';
import WindowManager from './apis/window-manager.js';

if (isPWA()) {

    /**
     * @tutorial
     * @see {@link https://web.dev/articles/add-manifest#manifest-properties}
     */
    removeDocTitleOnPWA();

    const windowManager = new WindowManager({});

    document.addEventListener('click', ()=>{
        windowManager.setWindow(window.managedWindows, {});
        console.log(Array.from(window.managedWindows).at(-1).opener)
        console.log(Array.from(window.managedWindows).at(-1).opener.name)
    })
        
}