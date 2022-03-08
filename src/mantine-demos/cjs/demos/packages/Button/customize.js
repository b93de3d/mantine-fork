'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Button
  component="a"
  target="_blank"
  rel="noopener noreferrer"
  href="https://twitter.com/mantinedev"
  leftIcon={<TwitterLogoIcon width={18} height={18} />}
  styles={(theme) => ({
    root: {
      backgroundColor: '#00acee',
      border: 0,
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,

      '&:hover': {
        backgroundColor: theme.fn.darken('#00acee', 0.05),
      },
    },

    leftIcon: {
      marginRight: 15,
    },
  })}
>
  Follow on Twitter
</Button>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    component: "a",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://twitter.com/mantinedev",
    leftIcon: /* @__PURE__ */ React__default.createElement(radixIcons.TwitterLogoIcon, {
      width: 18,
      height: 18
    }),
    styles: (theme) => ({
      root: {
        backgroundColor: "#00acee",
        border: 0,
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        "&:hover": {
          backgroundColor: theme.fn.darken("#00acee", 0.05)
        }
      },
      leftIcon: {
        marginRight: 15
      }
    })
  }, "Follow on Twitter"));
}
const customize = {
  type: "demo",
  code,
  component: Demo
};

exports.customize = customize;
//# sourceMappingURL=customize.js.map
