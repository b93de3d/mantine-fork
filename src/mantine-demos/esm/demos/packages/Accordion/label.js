import React from 'react';
import { Accordion, Text, Group, Avatar } from '@mantine/core';
import { charactersList } from './_mockdata.js';

var __defProp = Object.defineProperty;
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
const code = `
import { Group, Avatar, Text, Accordion } from '@mantine/core';

function AccordionLabel({ label, image, description }) {
  return (
    <Group noWrap>
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function Demo() {
  return (
    <Accordion initialItem={-1} iconPosition="right">
      <Accordion.Item label={<AccordionLabel image="./avatar.png" label="Bender Bending Rodr\xEDguez" description="..." />}>
        <Text size="sm">{item.content}</Text>
      </Accordion.Item>
      {/* ... other items */}
    </Accordion>
  );
}
`;
function AccordionLabel({ label: label2, image, description }) {
  return /* @__PURE__ */ React.createElement(Group, {
    noWrap: true
  }, /* @__PURE__ */ React.createElement(Avatar, {
    src: image,
    radius: "xl",
    size: "lg"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, null, label2), /* @__PURE__ */ React.createElement(Text, {
    size: "sm",
    color: "dimmed",
    weight: 400
  }, description)));
}
function AccordionDemo(props) {
  const items = charactersList.map((item) => /* @__PURE__ */ React.createElement(Accordion.Item, {
    label: /* @__PURE__ */ React.createElement(AccordionLabel, __spreadValues({}, item)),
    key: item.label
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "sm"
  }, item.content)));
  return /* @__PURE__ */ React.createElement(Accordion, __spreadValues({
    initialItem: -1,
    iconPosition: "right"
  }, props), items);
}
function Demo() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { maxWidth: 540, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React.createElement(AccordionDemo, null));
}
const label = {
  type: "demo",
  code,
  component: Demo
};

export { AccordionDemo, label };
//# sourceMappingURL=label.js.map
