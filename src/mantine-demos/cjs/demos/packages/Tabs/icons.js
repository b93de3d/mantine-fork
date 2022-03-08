'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Tabs>
  <Tabs.Tab label="Chat" icon={<ChatBubbleIcon />}>Chat here</Tabs.Tab>
  <Tabs.Tab label="Settings" icon={<MixerHorizontalIcon />}>Settings</Tabs.Tab>
  <Tabs.Tab icon="$">Get money!</Tabs.Tab>
</Tabs>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, {
    styles: { body: { paddingTop: 5 } }
  }, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Chat",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.ChatBubbleIcon, null)
  }, "Chat here"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Settings",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.MixerHorizontalIcon, null)
  }, "Settings"), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    icon: "$"
  }, "Get money!"));
}
const icons = {
  type: "demo",
  code,
  component: Demo
};

exports.icons = icons;
//# sourceMappingURL=icons.js.map
