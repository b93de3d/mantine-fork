'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<ThemeIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'orange', to: 'red' }}>{icon}</ThemeIcon>
<ThemeIcon variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>{icon}</ThemeIcon>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan" }
  }, /* @__PURE__ */ React__default.createElement(radixIcons.RocketIcon, {
    style: { width: 20, height: 20 }
  })), /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "teal", to: "lime", deg: 105 }
  }, /* @__PURE__ */ React__default.createElement(radixIcons.RocketIcon, {
    style: { width: 20, height: 20 }
  })), /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "teal", to: "blue", deg: 60 }
  }, /* @__PURE__ */ React__default.createElement(radixIcons.RocketIcon, {
    style: { width: 20, height: 20 }
  })), /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "orange", to: "red" }
  }, /* @__PURE__ */ React__default.createElement(radixIcons.RocketIcon, {
    style: { width: 20, height: 20 }
  })), /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
    size: "lg",
    variant: "gradient",
    gradient: { from: "grape", to: "pink", deg: 35 }
  }, /* @__PURE__ */ React__default.createElement(radixIcons.RocketIcon, {
    style: { width: 20, height: 20 }
  })));
}
const gradient = {
  type: "demo",
  component: Demo,
  code
};

exports.gradient = gradient;
//# sourceMappingURL=gradient.js.map
