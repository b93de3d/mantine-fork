import React from 'react';
import { Text } from '../../Text/Text.js';
import { Divider } from '../../Divider/Divider.js';
import useStyles from './SelectItems.styles.js';

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
function SelectItems({
  data,
  hovered,
  classNames,
  styles,
  isItemSelected,
  uuid,
  __staticSelector,
  onItemHover,
  onItemSelect,
  itemsRefs,
  itemComponent: Item,
  size,
  nothingFound,
  creatable,
  createLabel
}) {
  const { classes, cx } = useStyles({ size }, { classNames, styles, name: __staticSelector });
  const unGroupedItems = [];
  const groupedItems = [];
  let creatableDataIndex = null;
  const constructItemComponent = (item, index) => {
    const selected = typeof isItemSelected === "function" ? isItemSelected(item.value) : false;
    return /* @__PURE__ */ React.createElement(Item, __spreadValues({
      key: item.value,
      className: cx(classes.item, {
        [classes.hovered]: !item.disabled && hovered === index,
        [classes.selected]: !item.disabled && selected,
        [classes.disabled]: item.disabled
      }),
      onMouseEnter: () => onItemHover(index),
      id: `${uuid}-${index}`,
      role: "option",
      tabIndex: -1,
      "aria-selected": hovered === index,
      ref: (node) => {
        if (itemsRefs && itemsRefs.current) {
          itemsRefs.current[item.value] = node;
        }
      },
      onMouseDown: !item.disabled ? (event) => {
        event.preventDefault();
        onItemSelect(item);
      } : null,
      disabled: item.disabled
    }, item));
  };
  let groupName = null;
  data.forEach((item, index) => {
    if (item.creatable) {
      creatableDataIndex = index;
    } else if (!item.group) {
      unGroupedItems.push(constructItemComponent(item, index));
    } else {
      if (groupName !== item.group) {
        groupName = item.group;
        groupedItems.push(/* @__PURE__ */ React.createElement("div", {
          className: classes.separator,
          key: index
        }, /* @__PURE__ */ React.createElement(Divider, {
          classNames: { label: classes.separatorLabel },
          label: item.group
        })));
      }
      groupedItems.push(constructItemComponent(item, index));
    }
  });
  if (creatable) {
    const creatableDataItem = data[creatableDataIndex];
    const selected = typeof isItemSelected === "function" ? isItemSelected(data[creatableDataIndex].value) : false;
    unGroupedItems.push(/* @__PURE__ */ React.createElement("div", {
      key: creatableDataItem.value,
      className: cx(classes.item, {
        [classes.hovered]: hovered === creatableDataIndex,
        [classes.selected]: selected
      }),
      onMouseEnter: () => onItemHover(creatableDataIndex),
      onMouseDown: (event) => {
        event.preventDefault();
        onItemSelect(creatableDataItem);
      },
      tabIndex: -1,
      ref: (node) => {
        if (itemsRefs && itemsRefs.current) {
          itemsRefs.current[creatableDataItem.value] = node;
        }
      }
    }, createLabel));
  }
  if (groupedItems.length > 0 && unGroupedItems.length > 0) {
    unGroupedItems.unshift(/* @__PURE__ */ React.createElement("div", {
      className: classes.separator
    }, /* @__PURE__ */ React.createElement(Divider, null)));
  }
  return groupedItems.length > 0 || unGroupedItems.length > 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, groupedItems, unGroupedItems) : /* @__PURE__ */ React.createElement(Text, {
    size,
    className: classes.nothingFound
  }, nothingFound);
}
SelectItems.displayName = "@mantine/core/SelectItems";

export { SelectItems };
//# sourceMappingURL=SelectItems.js.map
