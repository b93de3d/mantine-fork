'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var getLockStyles = require('./utils/get-lock-styles.js');
var injectStyleTag = require('./utils/inject-style-tag.js');
var insertStyleTag = require('./utils/insert-style-tag.js');
var makeStyleTag = require('./utils/make-style-tag.js');

function useScrollLock(lock, options = {
  disableBodyPadding: false
}) {
  const [scrollLocked, setScrollLocked] = react.useState(lock || false);
  const scrollTop = react.useRef(0);
  const { disableBodyPadding } = options;
  const stylesheet = react.useRef(null);
  const lockScroll = () => {
    scrollTop.current = window.scrollY;
    const styles = getLockStyles.getLockStyles({ disableBodyPadding });
    const sheet = makeStyleTag.makeStyleTag();
    injectStyleTag.injectStyles(sheet, styles);
    insertStyleTag.insertStyleTag(sheet);
    stylesheet.current = sheet;
  };
  const unlockScroll = () => {
    if (!(stylesheet == null ? void 0 : stylesheet.current))
      return;
    stylesheet.current.parentNode.removeChild(stylesheet.current);
    stylesheet.current = null;
  };
  react.useEffect(() => {
    if (scrollLocked) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return unlockScroll;
  }, [scrollLocked]);
  react.useEffect(() => {
    if (lock !== void 0) {
      setScrollLocked(lock);
    }
  }, [lock]);
  react.useEffect(() => {
    if (lock === void 0 && typeof window !== "undefined") {
      window.document.body.style.overflow === "hidden" && setScrollLocked(true);
    }
  }, [setScrollLocked]);
  return [scrollLocked, setScrollLocked];
}

exports.useScrollLock = useScrollLock;
//# sourceMappingURL=use-scroll-lock.js.map
