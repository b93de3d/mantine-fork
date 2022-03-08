'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Badge, Button, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider theme={{
      colors: {
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
      },
    }}>
      <Button color="ocean-blue">Ocean blue button</Button>
      <Badge color="bright-pink" variant="filled">Bright pink badge</Badge>
    </MantineProvider>
  );
}
`;
function Demo() {
  const { colorScheme } = core.useMantineColorScheme();
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    theme: {
      colorScheme,
      colors: {
        "ocean-blue": [
          "#7AD1DD",
          "#5FCCDB",
          "#44CADC",
          "#2AC9DE",
          "#1AC2D9",
          "#11B7CD",
          "#09ADC3",
          "#0E99AC",
          "#128797",
          "#147885"
        ],
        "bright-pink": [
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
      }
    }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    color: "ocean-blue"
  }, "Ocean blue button"), /* @__PURE__ */ React__default.createElement(core.Badge, {
    color: "bright-pink",
    variant: "filled",
    size: "lg"
  }, "Bright pink badge")));
}
const themeColorsExtend = {
  type: "demo",
  component: Demo,
  code
};

exports.themeColorsExtend = themeColorsExtend;
//# sourceMappingURL=theme-colors-extend.js.map
