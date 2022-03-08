'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Dropzone loading>
  {/* children */}
</Dropzone>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(_base.BaseDemo, {
    loading: true
  });
}
const loading = {
  type: "demo",
  component: Demo,
  code
};

exports.loading = loading;
//# sourceMappingURL=loading.js.map
