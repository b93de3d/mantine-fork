'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { ColorPicker, Group, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Group position="center" direction="column">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Group>
  );
}
`;
function Demo() {
  const [value, onChange] = React.useState("rgba(47, 119, 150, 0.7)");
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    direction: "column"
  }, /* @__PURE__ */ React__default.createElement(core.ColorPicker, {
    format: "rgba",
    value,
    onChange
  }), /* @__PURE__ */ React__default.createElement(core.Text, null, value));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
