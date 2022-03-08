'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function useIntersection(options) {
  const [entry, setEntry] = react.useState(null);
  const observer = react.useRef();
  const ref = react.useCallback((element) => {
    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
    }
    if (element === null) {
      setEntry(null);
      return;
    }
    observer.current = new IntersectionObserver(([_entry]) => {
      setEntry(_entry);
    }, options);
    observer.current.observe(element);
  }, [options == null ? void 0 : options.rootMargin, options == null ? void 0 : options.root, options == null ? void 0 : options.threshold]);
  return [ref, entry];
}

exports.useIntersection = useIntersection;
//# sourceMappingURL=use-intersection.js.map
