'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineProvider, Button, Badge } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      styles={{
        Button: (theme) => ({
          // Shared button styles are applied to all buttons
          root: { height: 42, padding: '0 30px' },

          // These styles are applied only to buttons with outline variant
          outline: {
            // You can use any selectors inside (the same way as in createStyles function)
            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
          },
        }),

        // Use raw styles object if you do not need theme dependency
        Badge: {
          dot: {
            borderWidth: 2,
          },
        },
      }}
    >
      <Button variant="outline">Outline button</Button>
      <Button variant="filled">Filled button</Button>
      <Badge variant="dot">Dot badge</Badge>
    </MantineProvider>
  );
}
`;
function Demo() {
  const { colorScheme } = core.useMantineColorScheme();
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    theme: { colorScheme },
    styles: {
      Button: (theme) => ({
        root: { height: 42, padding: "0 30px" },
        outline: {
          "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
          }
        }
      }),
      Badge: {
        dot: {
          borderWidth: 2
        }
      }
    }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "Outline button"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "filled"
  }, "Filled button"), /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "dot"
  }, "Dot badge")));
}
const providerStyles = {
  type: "demo",
  component: Demo,
  code
};

exports.providerStyles = providerStyles;
//# sourceMappingURL=provider-styles.js.map
