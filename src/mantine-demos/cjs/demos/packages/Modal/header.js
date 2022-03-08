'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Modal
  opened={opened}
  onClose={() => setOpened(false)}
  hideCloseButton
>
  Modal without header, press escape or click on overlay to close
</Modal>
`;
function Demo() {
  const [opened, setOpened] = React.useState(false);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Modal, {
    opened,
    onClose: () => setOpened(false),
    hideCloseButton: true
  }, "Modal without header, press escape or click on overlay to close"), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setOpened(true)
  }, "Open Modal")));
}
const header = {
  type: "demo",
  code,
  component: Demo
};

exports.header = header;
//# sourceMappingURL=header.js.map
