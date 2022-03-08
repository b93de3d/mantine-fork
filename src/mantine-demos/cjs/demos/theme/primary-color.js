'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{
      colors: {
        brand: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82','#AD1374' ],
      },
      primaryColor: 'brand',
      colorScheme
    }}
    >
      <Button>Primary button</Button>
      <Button color="blue">Blue button</Button>
    </MantineProvider>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    theme: {
      colors: {
        brand: [
          "#F0BBDD",
          "#ED9BCF",
          "#EC7CC3",
          "#ED5DB8",
          "#F13EAF",
          "#F71FA7",
          "#FF00A1",
          "#E00890",
          "#C50E82",
          "#AD1374"
        ]
      },
      primaryColor: "brand",
      colorScheme: theme.colorScheme
    }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, null, "Primary button"), /* @__PURE__ */ React__default.createElement(core.Button, {
    color: "blue"
  }, "Blue button")));
}
const primaryColor = {
  type: "demo",
  component: Demo,
  code
};

exports.primaryColor = primaryColor;
//# sourceMappingURL=primary-color.js.map
