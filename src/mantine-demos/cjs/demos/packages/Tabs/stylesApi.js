'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

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
import { TabsProps, Tabs, Tab } from '@mantine/core';
import { ImageIcon, ChatBubbleIcon, GearIcon } from '@modulz/radix-icons';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      variant="unstyled"
      styles={(theme) => ({
        tabControl: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: \`1px solid \${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]}\`,
          fontSize: theme.fontSizes.md,
          padding: \`\${theme.spacing.lg}px \${theme.spacing.xl}px\`,

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },
        },

        tabActive: {
          backgroundColor: theme.colors.blue[7],
          borderColor: theme.colors.blue[7],
          color: theme.white,
        },
      })}
      {...props}
    />
  );
}

function Demo() {
  return (
    <StyledTabs>
      <Tabs.Tab label="Settings" icon={<GearIcon width={16} height={16} />} />
      <Tabs.Tab label="Messages" icon={<ChatBubbleIcon width={16} height={16} />} />
      <Tabs.Tab label="Gallery" icon={<ImageIcon width={16} height={16} />} />
    </StyledTabs>
  );
}
`;
function StyledTabs(props) {
  return /* @__PURE__ */ React__default.createElement(core.Tabs, __spreadValues({
    variant: "unstyled",
    styles: (theme) => ({
      tabControl: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9],
        border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[4]}`,
        fontSize: theme.fontSizes.md,
        padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
        "&:not(:first-of-type)": {
          borderLeft: 0
        },
        "&:first-of-type": {
          borderTopLeftRadius: theme.radius.md,
          borderBottomLeftRadius: theme.radius.md
        },
        "&:last-of-type": {
          borderTopRightRadius: theme.radius.md,
          borderBottomRightRadius: theme.radius.md
        }
      },
      tabActive: {
        backgroundColor: theme.colors.blue[7],
        borderColor: theme.colors.blue[7],
        color: theme.white
      }
    })
  }, props));
}
function Demo() {
  return /* @__PURE__ */ React__default.createElement(StyledTabs, null, /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Settings",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.GearIcon, {
      width: 16,
      height: 16
    })
  }), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Messages",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.ChatBubbleIcon, {
      width: 16,
      height: 16
    })
  }), /* @__PURE__ */ React__default.createElement(core.Tabs.Tab, {
    label: "Gallery",
    icon: /* @__PURE__ */ React__default.createElement(radixIcons.ImageIcon, {
      width: 16,
      height: 16
    })
  }));
}
const stylesApi = {
  type: "demo",
  code,
  component: Demo
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=stylesApi.js.map
