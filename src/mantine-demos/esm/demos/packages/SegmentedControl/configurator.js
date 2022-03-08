import { SegmentedControlWrapper } from './Wrapper.js';

const codeTemplate = (props) => `<SegmentedControl${props} />`;
const configurator = {
  type: "configurator",
  component: SegmentedControlWrapper,
  codeTemplate,
  configurator: [{ name: "color", type: "color", initialValue: "blue", defaultValue: null }]
};

export { configurator };
//# sourceMappingURL=configurator.js.map
