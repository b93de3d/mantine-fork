import { useEffect } from 'react';
import { getHotkeyMatcher } from './parse-hotkey.js';
export { getHotkeyHandler } from './parse-hotkey.js';

function shouldFireEvent(event) {
  if (event.target instanceof HTMLElement) {
    return !["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName);
  }
  return true;
}
function useHotkeys(hotkeys) {
  useEffect(() => {
    const keydownListener = (event) => {
      hotkeys.forEach(([hotkey, handler]) => {
        if (getHotkeyMatcher(hotkey)(event) && shouldFireEvent(event)) {
          event.preventDefault();
          handler(event);
        }
      });
    };
    document.documentElement.addEventListener("keydown", keydownListener);
    return () => document.documentElement.removeEventListener("keydown", keydownListener);
  }, [hotkeys]);
}

export { useHotkeys };
//# sourceMappingURL=use-hotkeys.js.map
