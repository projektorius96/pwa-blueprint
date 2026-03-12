import './style.css';
import { applyBrowserTitle } from './utils.js';
import WindowManager from './apis/window-manager.js';

/**
 * @tutorial
 * @see {@link https://web.dev/articles/add-manifest#manifest-properties}
 */
applyBrowserTitle();

const isPWA = () => window.matchMedia('(display-mode: standalone)').matches;

if (isPWA()) {

    const windowManager = new WindowManager({});

    document.addEventListener('click', () => {
        windowManager.setWindow({});
    });

}


