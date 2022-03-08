'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var AuthenticationForm = require('../../../shared/AuthenticationForm/AuthenticationForm.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const SIZES = ["xs", "sm", "md", "lg", "xl", "full", 322, "70%"];
function Demo() {
  const [opened, setOpened] = React.useState(false);
  const [size, setSize] = React.useState("md");
  const buttons = SIZES.map((s) => /* @__PURE__ */ React__default.createElement(core.Button, {
    key: s,
    variant: "outline",
    onClick: () => {
      setSize(s);
      setOpened(true);
    }
  }, typeof s === "number" ? `${s}px` : s));
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Modal, {
    opened,
    onClose: () => setOpened(false),
    title: "Introduce yourself!",
    size
  }, /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, {
    noShadow: true,
    noPadding: true
  })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, buttons));
}
const sizes = {
  type: "demo",
  component: Demo
};

exports.sizes = sizes;
//# sourceMappingURL=sizes.js.map
