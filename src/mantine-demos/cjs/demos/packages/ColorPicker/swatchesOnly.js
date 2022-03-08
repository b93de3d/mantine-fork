'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(null);

  return (
    <div style={{ maxWidth: 200, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red,
          ...DEFAULT_THEME.colors.green,
          ...DEFAULT_THEME.colors.blue,
        ]}
      />
      <Text align="center" style={{ marginTop: 5 }}>
        {value}
      </Text>
    </div>
  );
}
`;
function Demo() {
  const [value, onChange] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 200, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.ColorPicker, {
    format: "hex",
    value,
    onChange,
    withPicker: false,
    fullWidth: true,
    swatches: [
      ...core.DEFAULT_THEME.colors.red,
      ...core.DEFAULT_THEME.colors.green,
      ...core.DEFAULT_THEME.colors.blue
    ]
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center",
    style: { marginTop: 5 }
  }, value));
}
const swatchesOnly = {
  type: "demo",
  component: Demo,
  code
};

exports.swatchesOnly = swatchesOnly;
//# sourceMappingURL=swatchesOnly.js.map
