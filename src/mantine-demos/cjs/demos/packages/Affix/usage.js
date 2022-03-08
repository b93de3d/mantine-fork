'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ArrowUpIcon } from '@modulz/radix-icons';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text align="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowUpIcon />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
`;
function Demo() {
  const [scroll, scrollTo] = hooks.useWindowScroll();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Text, {
    align: "center"
  }, "Affix is located at the bottom of the screen, scroll to see it"), /* @__PURE__ */ React__default.createElement(core.Affix, {
    position: { bottom: 20, right: 20 }
  }, /* @__PURE__ */ React__default.createElement(core.Transition, {
    transition: "slide-up",
    mounted: scroll.y > 0
  }, (transitionStyles) => /* @__PURE__ */ React__default.createElement(core.Button, {
    leftIcon: /* @__PURE__ */ React__default.createElement(radixIcons.ArrowUpIcon, null),
    style: transitionStyles,
    onClick: () => scrollTo({ y: 0 })
  }, "Scroll to top"))));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
