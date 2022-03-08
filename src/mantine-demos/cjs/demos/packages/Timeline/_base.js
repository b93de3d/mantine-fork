'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var octiconsReact = require('@primer/octicons-react');
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
function TimelineBase(props) {
  const displayIcon = !(props == null ? void 0 : props.noIcon);
  return /* @__PURE__ */ React__default.createElement(core.Timeline, __spreadValues({
    active: 1,
    bulletSize: 24,
    lineWidth: 2
  }, props), /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    bullet: displayIcon ? /* @__PURE__ */ React__default.createElement(octiconsReact.GitBranchIcon, {
      size: 12
    }) : null,
    title: "New branch"
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "You've created new branch", " ", /* @__PURE__ */ React__default.createElement(core.Text, {
    variant: "link",
    component: "span",
    inherit: true
  }, "fix-notifications"), " ", "from master"), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "xs",
    style: { marginTop: 4 }
  }, "2 hours ago")), /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    bullet: displayIcon ? /* @__PURE__ */ React__default.createElement(octiconsReact.GitCommitIcon, {
      size: 12
    }) : null,
    title: "Commits"
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "You've pushed 23 commits to", " ", /* @__PURE__ */ React__default.createElement(core.Text, {
    variant: "link",
    component: "span",
    inherit: true
  }, "fix-notifications"), " ", "branch"), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "xs",
    style: { marginTop: 4 }
  }, "52 minutes ago")), /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    title: "Pull request",
    bullet: displayIcon ? /* @__PURE__ */ React__default.createElement(octiconsReact.GitPullRequestIcon, {
      size: 12
    }) : null,
    lineVariant: "dashed"
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "You've submitted a pull request", " ", /* @__PURE__ */ React__default.createElement(core.Text, {
    variant: "link",
    component: "span",
    inherit: true
  }, "Fix incorrect notification message (#187)"), " "), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "xs",
    style: { marginTop: 4 }
  }, "34 minutes ago")), /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    title: "Code review",
    bullet: displayIcon ? /* @__PURE__ */ React__default.createElement(octiconsReact.CommentDiscussionIcon, {
      size: 12
    }) : null
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    variant: "link",
    component: "span",
    inherit: true
  }, "Robert Gluesticker"), " ", "left a code review on your pull request"), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "xs",
    style: { marginTop: 4 }
  }, "12 minutes ago")));
}

exports.TimelineBase = TimelineBase;
//# sourceMappingURL=_base.js.map
