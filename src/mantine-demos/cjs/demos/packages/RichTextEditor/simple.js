'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _SSRWrapper = require('./_SSRWrapper.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

function Demo() {
  const [value, onChange] = useState(initialValue);
  return <RichTextEditor value={value} onChange={onChange} />;
}
`;
const initialValue = "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";
function Demo() {
  const [value, onChange] = React.useState(initialValue);
  return /* @__PURE__ */ React__default.createElement(_SSRWrapper.SSRWrapper, {
    value,
    onChange
  });
}
const simple = {
  type: "demo",
  component: Demo,
  code
};

exports.simple = simple;
//# sourceMappingURL=simple.js.map
