'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useIntersection } from '@mantine/hooks';
import { Paper, Text, useMantineTheme } from '@mantine/core';

function Demo() {
  const containerRef = useRef();
  const theme = useMantineTheme();
  const [ref, observer] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} style={{ overflowY: 'scroll', height: 300 }}>
      <div style={{ paddingTop: 260, paddingBottom: 280 }}>
        <Paper
          ref={ref}
          padding="xl"
          style={{
            backgroundColor: observer?.isIntersecting ? theme.colors.green[9] : theme.colors.red[9],
            minWidth: '50%',
          }}
        >
          <Text style={{ color: theme.white }} weight={700}>
            {observer?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </div>
    </Paper>
  );
}
`;
function Demo() {
  const containerRef = React.useRef();
  const theme = core.useMantineTheme();
  const [ref, observer] = hooks.useIntersection({
    root: containerRef.current,
    threshold: 1
  });
  return /* @__PURE__ */ React__default.createElement(core.Paper, {
    ref: containerRef,
    style: { overflowY: "scroll", height: 300 }
  }, /* @__PURE__ */ React__default.createElement("div", {
    style: { paddingTop: 260, paddingBottom: 280 }
  }, /* @__PURE__ */ React__default.createElement(core.Paper, {
    ref,
    padding: "xl",
    style: {
      backgroundColor: (observer == null ? void 0 : observer.isIntersecting) ? theme.colors.green[9] : theme.colors.red[9],
      minWidth: "50%"
    }
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    style: { color: theme.white },
    weight: 700
  }, (observer == null ? void 0 : observer.isIntersecting) ? "Fully visible" : "Obscured"))));
}
const useIntersectionDemo = {
  type: "demo",
  code,
  component: Demo
};

exports.useIntersectionDemo = useIntersectionDemo;
//# sourceMappingURL=use-intersection.js.map
