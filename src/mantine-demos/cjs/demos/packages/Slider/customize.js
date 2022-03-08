'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Slider
  defaultValue={40}
  marks={marks}
  labelTransition="fade"
  size={2}
  styles={(theme) =>({
    track: {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
    },
    mark: {
      width: 6,
      height: 6,
      borderRadius: 6,
      transform: 'translateX(-3px) translateY(-2px)',
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
    },
    markFilled: {
      borderColor: theme.colors.blue[6],
    },
    markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
    thumb: {
      height: 16,
      width: 16,
      backgroundColor: theme.white,
      borderWidth: 1,
      boxShadow: theme.shadows.sm,
    },
  })}
/>
`;
const marks = [
  { value: 20, label: "20%" },
  { value: 50, label: "50%" },
  { value: 80, label: "80%" }
];
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { paddingTop: 15, paddingBottom: 20, maxWidth: 400, margin: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Slider, {
    defaultValue: 40,
    marks,
    labelTransition: "fade",
    size: 2,
    styles: (theme) => ({
      track: {
        "&::before": {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.blue[1]
        }
      },
      mark: {
        width: 6,
        height: 6,
        borderRadius: 6,
        transform: "translateX(-3px) translateY(-2px)",
        borderColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.blue[1]
      },
      markFilled: {
        borderColor: theme.colors.blue[6]
      },
      markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
      thumb: {
        height: 16,
        width: 16,
        backgroundColor: theme.white,
        borderWidth: 1,
        boxShadow: theme.shadows.sm
      }
    })
  }));
}
const customize = {
  type: "demo",
  component: Demo,
  code
};

exports.customize = customize;
//# sourceMappingURL=customize.js.map
