'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var _mockdata = require('./_mockdata.js');

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const code = `
import { Group, Avatar, Text, Autocomplete } from '@mantine/core';

export const LABELS_DATA = [
  {
    image: 'avatar.png',
    value: 'Bender Bending Rodr\xEDguez',
    description: 'Fascinated with cooking, though has no sense of taste',
  },
  {
    image: 'avatar.png',
    value: 'Carol Miller',
    description: 'One of the richest people on Earth',
  },
  // ... other items
]

const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ description, value, image, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text>{value}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

function Demo() {
  return (
    <Autocomplete
      label="Choose employee of the month"
      placeholder="Pick one"
      itemComponent={AutoCompleteItem}
      data={data}
      filter={(value, item) =>
        item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}
`;
const data = _mockdata.charactersList.map((item) => __spreadProps(__spreadValues({}, item), { value: item.label }));
const AutoCompleteItem = React.forwardRef((_a, ref) => {
  var _b = _a, { description, value, image } = _b, others = __objRest(_b, ["description", "value", "image"]);
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    ref
  }, others), /* @__PURE__ */ React__default.createElement(core.Group, {
    noWrap: true
  }, /* @__PURE__ */ React__default.createElement(core.Avatar, {
    src: image
  }), /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Text, null, value), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "xs",
    color: "dimmed"
  }, description))));
});
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Autocomplete, {
    label: "Choose employee of the month",
    placeholder: "Pick one",
    itemComponent: AutoCompleteItem,
    data,
    filter: (value, item) => item.value.toLowerCase().includes(value.toLowerCase().trim()) || item.description.toLowerCase().includes(value.toLowerCase().trim())
  }));
}
const itemComponent = {
  type: "demo",
  code,
  component: Demo
};

exports.itemComponent = itemComponent;
//# sourceMappingURL=itemComponent.js.map
