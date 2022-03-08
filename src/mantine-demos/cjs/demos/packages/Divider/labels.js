'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Divider my="xs" label="Label on the left" />
<Divider my="xs" label="Label in the center" labelPosition="center" />
<Divider my="xs" label="Label on the right" labelPosition="right" />

<Divider
  my="xs"
  variant="dashed"
  labelPosition="center"
  label={
    <>
      <MagnifyingGlassIcon style={{ width: 12, height: 12 }} />
      <span style={{ marginLeft: 5, marginRight: 5 }}>Search results</span>
    </>
  }
/>

<Divider
  my="xs"
  label="Link label"
  labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Divider, {
    my: "xs",
    label: "Label on the left"
  }), /* @__PURE__ */ React__default.createElement(core.Divider, {
    my: "xs",
    label: "Label in the center",
    labelPosition: "center"
  }), /* @__PURE__ */ React__default.createElement(core.Divider, {
    my: "xs",
    label: "Label on the right",
    labelPosition: "right"
  }), /* @__PURE__ */ React__default.createElement(core.Divider, {
    my: "xs",
    variant: "dashed",
    labelPosition: "center",
    label: /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(radixIcons.MagnifyingGlassIcon, {
      style: { width: 12, height: 12 }
    }), /* @__PURE__ */ React__default.createElement("span", {
      style: { marginLeft: 5, marginRight: 5 }
    }, "Search results"))
  }), /* @__PURE__ */ React__default.createElement(core.Divider, {
    my: "xs",
    label: "Link label",
    labelProps: { component: "a", href: "https://mantine.dev", variant: "link", color: "blue" }
  }));
}
const labels = {
  type: "demo",
  code,
  component: Demo
};

exports.labels = labels;
//# sourceMappingURL=labels.js.map
