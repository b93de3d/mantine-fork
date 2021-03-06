'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _base = require('./_base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
<Timeline active={1} bulletSize={24} lineWidth={2}>
  <Timeline.Item bullet={<GitBranchIcon size={12} />} title="New branch">
    <Text color="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
    <Text size="xs" style={{ marginTop: 4 }}>2 hours ago</Text>
  </Timeline.Item>

  <Timeline.Item bullet={<GitCommitIcon size={12} />} title="Commits">
    <Text color="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
    <Text size="xs" style={{ marginTop: 4 }}>52 minutes ago</Text>
  </Timeline.Item>

  <Timeline.Item title="Pull request" bullet={<GitPullRequestIcon size={12} />} lineVariant="dashed">
    <Text color="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
    <Text size="xs" style={{ marginTop: 4 }}>34 minutes ago</Text>
  </Timeline.Item>

  <Timeline.Item title="Code review" bullet={<CommentDiscussionIcon size={12} />}>
    <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
    <Text size="xs" style={{ marginTop: 4 }}>12 minutes ago</Text>
  </Timeline.Item>
</Timeline>
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 320, marginLeft: "auto", marginRight: "auto" }
  }, /* @__PURE__ */ React__default.createElement(_base.TimelineBase, null));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=usage.js.map
