'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _demoBase = require('./_demo-base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const code = `
<Card
  shadow="sm"
  padding="xl"
  component="a"
  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  target="_blank"
>
  <Card.Section>
    <Image src="unsplash.png" height={160} alt="No way!" />
  </Card.Section>

  <Text weight={500} size="lg">
    You've won a million dollars in cash!
  </Text>

  <Text size="sm">
    Please click anywhere on this card to claim your reward, this is not a fraud, trust us
  </Text>
</Card>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Card, {
    shadow: "sm",
    padding: "xl",
    component: "a",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    target: "_blank"
  }, /* @__PURE__ */ React__default.createElement(core.Card.Section, null, /* @__PURE__ */ React__default.createElement(core.Image, {
    src: "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    height: 160,
    alt: "No way!"
  })), /* @__PURE__ */ React__default.createElement(core.Text, {
    weight: 500,
    size: "lg",
    style: { marginTop: 15 }
  }, "You've won a million dollars in cash!"), /* @__PURE__ */ React__default.createElement(core.Text, {
    style: { marginTop: 7 },
    size: "sm"
  }, "Please click anywhere on this card to claim your reward, this is not a fraud, trust us"));
}
const link = __spreadProps(__spreadValues({}, _demoBase.demoBase), {
  type: "demo",
  code,
  component: Demo
});

exports.link = link;
//# sourceMappingURL=link.js.map
