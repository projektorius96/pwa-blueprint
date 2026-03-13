import './style.css';
import { isPWA, removeDocTitleOnPWA, toList } from './utils.js';
import WindowManager from './apis/window-manager.js';

if ( isPWA() ) {

    /**
     * @tutorial
     * @see {@link https://web.dev/articles/add-manifest#manifest-properties}
     */
    removeDocTitleOnPWA();

    const windowManager = new WindowManager({});

    document.addEventListener('click', ()=>{
        
        // DEV_NOTE # herein we explicitly pass "window.managedWindows" on every click as the WindowManager is a "static" Singleton
        windowManager.setWindow(window.managedWindows, {});

        /**
         * @debugger (RETURNS_x1)
         * @description should return a list of "window.managedWindows" with Array.prototype    | [PASSING]
         */
        let DEBUGGER_x1; {
            console.log( toList(window.managedWindows).at(-1).name )
            console.log( toList(window.managedWindows).at(-1) )
        }

        /**
         * @debugger (RETURNS_x2)
         * @description should return last "nth" child window added to "window.managedWindows" | [PASSING]
         */
        let DEBUGGER_x2; {
            console.log( toList(window.managedWindows).at(-1).name )
            console.log( toList(window.managedWindows).at(-1) )
        }

    })
        
}