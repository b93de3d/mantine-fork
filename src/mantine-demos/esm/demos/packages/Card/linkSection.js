import React from 'react';
import { useMantineTheme, Card, Image, Group, Text, Badge, Button } from '@mantine/core';
import { demoBase } from './_demo-base.js';

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
<Card shadow="sm" padding="lg">
  <Card.Section component="a" href="https://mantine.dev" target="_blank">
    <Image src="./image" height={160} alt="Norway" />
  </Card.Section>

  {/* ... other card content */}
</Card>
`;
function Demo() {
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return /* @__PURE__ */ React.createElement(Card, {
    shadow: "sm",
    padding: "lg"
  }, /* @__PURE__ */ React.createElement(Card.Section, {
    component: "a",
    href: "https://mantine.dev",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Image, {
    src: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
    height: 160,
    alt: "Norway"
  })), /* @__PURE__ */ React.createElement(Group, {
    position: "apart",
    style: { marginBottom: 5, marginTop: theme.spacing.sm }
  }, /* @__PURE__ */ React.createElement(Text, {
    weight: 500
  }, "Norway Fjord Adventures"), /* @__PURE__ */ React.createElement(Badge, {
    color: "pink",
    variant: "light"
  }, "On Sale")), /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    style: { color: secondaryColor, lineHeight: 1.5 }
  }, "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"), /* @__PURE__ */ React.createElement(Button, {
    variant: "light",
    color: "blue",
    fullWidth: true,
    style: { marginTop: 14 }
  }, "Book classic tour now"));
}
const linkSection = __spreadProps(__spreadValues({}, demoBase), {
  type: "demo",
  code,
  component: Demo
});

export { linkSection };
//# sourceMappingURL=linkSection.js.map
