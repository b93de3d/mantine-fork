'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
import { Accordion, AccordionProps, createStyles } from '@mantine/core';
import { PlusIcon } from '@modulz/radix-icons';

const useStyles = createStyles((theme, _params, getRef) => {
  const controlRef = getRef('control');
  const iconRef = getRef('icon');
  const itemTitleRef = getRef('itemTitle');

  return {
    icon: { ref: iconRef },
    itemTitle: { ref: itemTitleRef },

    control: {
      ref: controlRef,
      border: 0,
      opacity: 0.6,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      '&:hover': {
        backgroundColor: 'transparent',
        opacity: 1,
      },
    },

    item: {
      borderBottom: 0,
      overflow: 'hidden',
      transition: \`box-shadow 150ms \${theme.transitionTimingFunction}\`,
      border: '1px solid transparent',
      borderRadius: theme.radius.sm,
    },

    itemOpened: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3],

      [\`& .\${controlRef}\`]: {
        opacity: 1,
      },

      [\`& > .\${itemTitleRef} .\${iconRef}\`]: {
        transform: 'rotate(45deg)',
      },
    },

    content: {
      paddingLeft: 0,
    },
  };
});

function StyledAccordion(props: AccordionProps) {
  const { classes } = useStyles();
  return <Accordion classNames={classes} icon={<PlusIcon />} {...props} />;
}

function Demo() {
  return (
    <StyledAccordion initialItem={0}>
      {/* <Accordion.Item /> components */}
    </StyledAccordion>
  );
}
`;
const useStyles = core.createStyles((theme, _params, getRef) => {
  const controlRef = getRef("control");
  const iconRef = getRef("icon");
  const itemTitleRef = getRef("itemTitle");
  return {
    icon: { ref: iconRef },
    itemTitle: { ref: itemTitleRef },
    control: {
      ref: controlRef,
      border: 0,
      opacity: 0.6,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      "&:hover": {
        backgroundColor: "transparent",
        opacity: 1
      }
    },
    item: {
      borderBottom: 0,
      overflow: "hidden",
      transition: `box-shadow 150ms ${theme.transitionTimingFunction}`,
      border: "1px solid transparent",
      borderRadius: theme.radius.sm
    },
    itemOpened: {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
      borderColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3],
      [`& .${controlRef}`]: {
        opacity: 1
      },
      [`& > .${itemTitleRef} .${iconRef}`]: {
        transform: "rotate(45deg)"
      }
    },
    content: {
      paddingLeft: 0
    }
  };
});
function StyledAccordion(props) {
  const { classes } = useStyles();
  return /* @__PURE__ */ React__default.createElement(core.Accordion, __spreadValues({
    classNames: classes,
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.PlusIcon, null)
  }, props));
}
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 540, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(StyledAccordion, {
    initialItem: 0
  }, _base.baseDemoItems));
}
const stylesApi = {
  type: "demo",
  code,
  component: Demo
};

exports.StyledAccordion = StyledAccordion;
exports.stylesApi = stylesApi;
//# sourceMappingURL=stylesApi.js.map
