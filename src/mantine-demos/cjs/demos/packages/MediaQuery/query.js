'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<MediaQuery
  query="(max-width: 1200px) and (min-width: 800px)"
  styles={{ fontSize: 20, '&:hover': { backgroundColor: 'silver' } }}
>
  <Text>(max-width: 1200px) and (min-width: 800px) breakpoints</Text>
</MediaQuery>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MediaQuery, {
    query: "(max-width: 1200px) and (min-width: 800px)",
    styles: { fontSize: 20, "&:hover": { backgroundColor: "silver" } }
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, "(max-width: 1200px) and (min-width: 800px) breakpoints"));
}
const query = {
  type: "demo",
  component: Demo,
  code
};

exports.query = query;
//# sourceMappingURL=query.js.map
