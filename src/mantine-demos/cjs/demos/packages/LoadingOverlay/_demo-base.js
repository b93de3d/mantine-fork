'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const demoBase = {
  wrapper: ({ children }) => /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 400, margin: "auto" }
  }, children),
  background: (colorScheme) => colorScheme === "dark" ? core.DEFAULT_THEME.colors.dark[7] : core.DEFAULT_THEME.colors.gray[0]
};

exports.demoBase = demoBase;
//# sourceMappingURL=_demo-base.js.map
