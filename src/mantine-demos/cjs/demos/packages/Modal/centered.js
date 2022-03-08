'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var AuthenticationForm = require('../../../shared/AuthenticationForm/AuthenticationForm.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = "<Modal centered />";
function Demo() {
  const [opened, setOpened] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Modal, {
    opened,
    onClose: () => setOpened(false),
    title: "Introduce yourself!",
    centered: true
  }, /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, {
    noShadow: true,
    noPadding: true
  })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setOpened(true)
  }, "Open centered Modal")));
}
const centered = {
  type: "demo",
  code,
  component: Demo
};

exports.centered = centered;
//# sourceMappingURL=centered.js.map
