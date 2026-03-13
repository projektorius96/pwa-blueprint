/**
 * Sets the document title only when the app runs in a browser tab
 * and not in PWA standalone mode.
 *
 * In standalone mode the OS/app launcher already displays the app
 * name from the Web App Manifest, so manually setting the title
 * may be redundant.
 *
 * @param {string} documentTitle Title to apply when running in a browser tab.
 */
export function removeDocTitleOnPWA() {
    if (isPWA()) {
      document.title = ""; // Chrome will use .webmanifest respective fields to set it internally
    }
}

export function isPWA() {

  return (
    window.matchMedia('(display-mode: standalone)').matches
  );
  
}

export function toList(iterable) {

  return (
    Array.from(iterable)
  );

}

