'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
  <Pagination total={20} siblings={3} />
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, {
    style: { marginBottom: 10 }
  }, "1 sibling (default)"), /* @__PURE__ */ React__default.createElement(core.Pagination, {
    total: 20,
    siblings: 1,
    initialPage: 10
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    style: { marginTop: 30, marginBottom: 10 }
  }, "2 siblings"), /* @__PURE__ */ React__default.createElement(core.Pagination, {
    total: 20,
    siblings: 2,
    initialPage: 10
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    style: { marginTop: 30, marginBottom: 10 }
  }, "3 siblings"), /* @__PURE__ */ React__default.createElement(core.Pagination, {
    total: 20,
    siblings: 3,
    initialPage: 10
  }));
}
const siblings = {
  type: "demo",
  code,
  component: Demo
};

exports.siblings = siblings;
//# sourceMappingURL=siblings.js.map
