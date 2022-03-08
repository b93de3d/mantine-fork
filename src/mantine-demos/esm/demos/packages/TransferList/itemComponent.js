import React, { useState } from 'react';
import { TransferList, Group, Avatar, Text, Checkbox } from '@mantine/core';
import { charactersList } from './_mockdata.js';

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
import { useState } from 'react';
import {
  Checkbox,
  Group,
  Avatar,
  Text,
  TransferList,
  TransferListData,
  TransferListItemComponent,
  TransferListItemComponentProps,
} from '@mantine/core';

const mockdata = [
  {
    value: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodr\xEDguez',
    description: 'Fascinated with cooking, though has no sense of taste',
  },

  {
    value: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
  },
  // ...other items
];

const ItemComponent: TransferListItemComponent = ({
  data,
  selected,
}: TransferListItemComponentProps) => (
  <Group noWrap>
    <Avatar src={data.image} radius="xl" size="lg" />
    <div style={{ flex: 1 }}>
      <Text size="sm" weight={500}>
        {data.label}
      </Text>
      <Text size="xs" color="dimmed" weight={400}>
        {data.description}
      </Text>
    </div>
    <Checkbox checked={selected} onChange={() => {}} tabIndex={-1} sx={{ pointerEvents: 'none' }} />
  </Group>
);


function Demo() {
  const [data, setData] = useState<TransferListData>([mockdata, []]);
  return (
    <TransferList
      value={data}
      onChange={setData}
      searchPlaceholder="Search employees..."
      nothingFound="No one here"
      titles={['Employees to hire', 'Employees to fire']}
      listHeight={300}
      breakpoint="sm"
      itemComponent={ItemComponent}
      filter={(query, item) =>
        item.label.toLowerCase().includes(query.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(query.toLowerCase().trim())
      }
    />
  );
}
`;
const initialValues = [
  charactersList.map((item, index) => __spreadProps(__spreadValues({}, item), { value: index.toString() })),
  []
];
const ItemComponent = ({
  data,
  selected
}) => /* @__PURE__ */ React.createElement(Group, {
  noWrap: true
}, /* @__PURE__ */ React.createElement(Avatar, {
  src: data.image,
  radius: "xl",
  size: "lg"
}), /* @__PURE__ */ React.createElement("div", {
  style: { flex: 1 }
}, /* @__PURE__ */ React.createElement(Text, {
  size: "sm",
  weight: 500
}, data.label), /* @__PURE__ */ React.createElement(Text, {
  size: "xs",
  color: "dimmed",
  weight: 400
}, data.description)), /* @__PURE__ */ React.createElement(Checkbox, {
  checked: selected,
  onChange: () => {
  },
  tabIndex: -1,
  sx: { pointerEvents: "none" }
}));
function Demo() {
  const [data, setData] = useState(initialValues);
  return /* @__PURE__ */ React.createElement(TransferList, {
    value: data,
    onChange: setData,
    searchPlaceholder: "Search employees...",
    nothingFound: "No one here",
    titles: ["Employees to hire", "Employees to fire"],
    listHeight: 300,
    breakpoint: "sm",
    itemComponent: ItemComponent,
    filter: (query, item) => item.label.toLowerCase().includes(query.toLowerCase().trim()) || item.description.toLowerCase().includes(query.toLowerCase().trim())
  });
}
const itemComponent = {
  type: "demo",
  component: Demo,
  code
};

export { itemComponent };
//# sourceMappingURL=itemComponent.js.map
