'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Anchor href="https://mantine.dev" target="_blank">
  <Center inline>
    <ArrowLeftIcon style={{ marginRight: 5 }} />
    <span>Back to Mantine website</span>
  </Center>
</Anchor>
`;
function Demo() {
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(core.Anchor, {
    href: "https://mantine.dev",
    target: "_blank"
  }, /* @__PURE__ */ React__default.createElement(core.Center, {
    inline: true
  }, theme.dir === "ltr" ? /* @__PURE__ */ React__default.createElement(radixIcons.ArrowLeftIcon, {
    style: { marginRight: 5 }
  }) : /* @__PURE__ */ React__default.createElement(radixIcons.ArrowRightIcon, {
    style: { marginLeft: 5 }
  }), /* @__PURE__ */ React__default.createElement("span", null, "Back to Mantine website")));
}
const inline = {
  type: "demo",
  code,
  component: Demo
};

exports.inline = inline;
//# sourceMappingURL=inline.js.map
