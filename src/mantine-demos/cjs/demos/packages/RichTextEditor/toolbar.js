'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var rte = require('@mantine/rte');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<RichTextEditor
  controls={[
    ['bold', 'italic', 'underline', 'link', 'image'],
    ['unorderedList', 'h1', 'h2', 'h3'],
    ['sup', 'sub'],
    ['alignLeft', 'alignCenter', 'alignRight'],
  ]}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Text, {
    style: { paddingLeft: 15 }
  }, "Default toolbar:"), /* @__PURE__ */ React__default.createElement(rte.Toolbar, {
    controls: rte.DEFAULT_CONTROLS,
    labels: rte.DEFAULT_LABELS,
    style: { borderBottomWidth: 0 }
  }), /* @__PURE__ */ React__default.createElement(core.Text, {
    style: { paddingLeft: 15, marginTop: 15 }
  }, "Custom toolbar:"), /* @__PURE__ */ React__default.createElement(rte.Toolbar, {
    controls: [
      ["bold", "italic", "underline", "link", "image"],
      ["unorderedList", "h1", "h2", "h3"],
      ["sup", "sub"],
      ["alignLeft", "alignCenter", "alignRight"]
    ],
    labels: rte.DEFAULT_LABELS,
    style: { borderBottomWidth: 0 }
  }));
}
const toolbar = {
  type: "demo",
  component: Demo,
  code
};

exports.toolbar = toolbar;
//# sourceMappingURL=toolbar.js.map
