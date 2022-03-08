'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
// If you do not pass bullet prop, default bullet will be rendered
<Timeline.Item />

// You can use any react node as bullet, e.g. Avatar, ThemeIcon or any svg icon
<Timeline.Item
  title="Avatar"
  bullet={<Avatar size={22} radius="xl" src="./avatar.png" />}
/>

<Timeline.Item
  title="Icon"
  bullet={<SunIcon style={{ width: 14, height: 14 }} />}
/>

<Timeline.Item
  title="ThemeIcon"
  bullet={(
    <ThemeIcon
      size={22}
      variant="gradient"
      gradient={{ from: 'lime', to: 'cyan' }}
      radius="xl"
    >
      <VideoIcon style={{ width: 14, height: 14 }} />
    </ThemeIcon>
  )}
/>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, margin: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Timeline, null, /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    title: "Default bullet",
    bulletSize: 24
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "Default bullet without anything")), /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    title: "Avatar",
    bulletSize: 24,
    bullet: /* @__PURE__ */ React__default.createElement(core.Avatar, {
      size: 22,
      radius: "xl",
      src: "https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
    })
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "Timeline bullet as avatar image")), /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    title: "Icon",
    bulletSize: 24,
    bullet: /* @__PURE__ */ React__default.createElement(radixIcons.SunIcon, {
      style: { width: 14, height: 14 }
    })
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "Timeline bullet as icon")), /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    title: "ThemeIcon",
    bulletSize: 24,
    bullet: /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
      size: 22,
      variant: "gradient",
      gradient: { from: "lime", to: "cyan" },
      radius: "xl"
    }, /* @__PURE__ */ React__default.createElement(radixIcons.VideoIcon, {
      style: { width: 14, height: 14 }
    }))
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "Timeline bullet as ThemeIcon component"))));
}
const bullet = {
  type: "demo",
  component: Demo,
  code
};

exports.bullet = bullet;
//# sourceMappingURL=bullet.js.map
