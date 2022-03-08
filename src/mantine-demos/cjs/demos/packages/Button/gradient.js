'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
<Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Button>
<Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Button>
<Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
<Button variant="gradient" gradient={{ from: 'grape', to: 'pink', deg: 35 }}>Grape pink</Button>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan" }
  }, "Indigo cyan"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "gradient",
    gradient: { from: "teal", to: "lime", deg: 105 }
  }, "Lime green"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "gradient",
    gradient: { from: "teal", to: "blue", deg: 60 }
  }, "Teal blue"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "gradient",
    gradient: { from: "orange", to: "red" }
  }, "Orange red"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "gradient",
    gradient: { from: "grape", to: "pink", deg: 35 }
  }, "Grape pink"));
}
const gradient = {
  type: "demo",
  component: Demo,
  code
};

exports.gradient = gradient;
//# sourceMappingURL=gradient.js.map
