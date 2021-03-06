'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function mergeClassNames(cx, classes, classNames, name) {
  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = cx(classes[className], classNames != null && classNames[className], name ? `mantine-${name}-${className}` : null);
    return acc;
  }, {});
}

exports.mergeClassNames = mergeClassNames;
//# sourceMappingURL=merge-class-names.js.map
