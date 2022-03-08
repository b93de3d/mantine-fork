'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { CloseButton, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <CloseButton aria-label="Close modal" />
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.CloseButton, {
    "aria-label": "Close modal"
  }), /* @__PURE__ */ React__default.createElement(core.CloseButton, {
    title: "Close popover",
    size: "xl",
    iconSize: 20
  }));
}
const closeButton = {
  type: "demo",
  component: Demo,
  code
};

exports.closeButton = closeButton;
//# sourceMappingURL=closeButton.js.map
