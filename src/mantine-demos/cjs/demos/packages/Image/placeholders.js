'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Image
  width={200}
  height={120}
  src={null}
  alt="Without placeholder"
/>

<Image
  width={200}
  height={120}
  src={null}
  alt="With default placeholder"
  withPlaceholder
/>

<Image
  height={120}
  width={200}
  src="42.png"
  alt="With custom placeholder"
  withPlaceholder
  placeholder={<Text align="center">This image contained the meaning of life</Text>}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Image, {
    width: 200,
    height: 120,
    src: null,
    alt: "Without placeholder"
  }), /* @__PURE__ */ React__default.createElement(core.Image, {
    width: 200,
    height: 120,
    src: null,
    alt: "With default placeholder",
    withPlaceholder: true
  }), /* @__PURE__ */ React__default.createElement(core.Image, {
    height: 120,
    width: 200,
    src: "42.png",
    alt: "With custom placeholder",
    withPlaceholder: true,
    placeholder: /* @__PURE__ */ React__default.createElement(core.Text, {
      align: "center"
    }, "This image contained the meaning of life")
  }));
}
const placeholders = {
  type: "demo",
  code,
  component: Demo
};

exports.placeholders = placeholders;
//# sourceMappingURL=placeholders.js.map
