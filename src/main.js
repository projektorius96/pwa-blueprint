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
        windowManager.setWindow({frameOptions: 'left=100,top=100,width=320,height=320'})

    
    document.addEventListener('click', open.bind(null))
        
}