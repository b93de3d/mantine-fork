'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Editor = require('react-quill');
require('quill-mention');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var Toolbar = require('../Toolbar/Toolbar.js');
var defaultControl = require('./default-control.js');
var RichTextEditor_styles = require('./RichTextEditor.styles.js');
var defaultLabels = require('./default-labels.js');
var ImageBlot$1 = require('../../modules/image-uploader/ImageBlot.js');
var ImageUploader = require('../../modules/image-uploader/ImageUploader.js');
var replaceIcons = require('../../modules/icons/replace-icons.js');
var attachShortcuts = require('../../modules/shortcuts/attach-shortcuts.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Editor__default = /*#__PURE__*/_interopDefaultLegacy(Editor);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const InlineBlot = Editor.Quill.import("blots/block");
const ImageBlot = ImageBlot$1.createImageBlot(InlineBlot);
Editor.Quill.register({ "formats/imageBlot": ImageBlot });
Editor.Quill.register("modules/imageUploader", ImageUploader.ImageUploader);
const icons = Editor.Quill.import("ui/icons");
replaceIcons.replaceIcons(icons);
function defaultImageUpload(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}
const RichTextEditor = React.forwardRef((_a, ref) => {
  var _b = _a, {
    value,
    onChange,
    onImageUpload = defaultImageUpload,
    sticky = true,
    stickyOffset = 0,
    radius = "sm",
    labels = defaultLabels.DEFAULT_LABELS,
    controls = defaultControl.DEFAULT_CONTROLS,
    id,
    className,
    classNames,
    styles,
    placeholder,
    mentions,
    readOnly = false,
    modules: externalModules
  } = _b, others = __objRest(_b, [
    "value",
    "onChange",
    "onImageUpload",
    "sticky",
    "stickyOffset",
    "radius",
    "labels",
    "controls",
    "id",
    "className",
    "classNames",
    "styles",
    "placeholder",
    "mentions",
    "readOnly",
    "modules"
  ]);
  const uuid = hooks.useUuid(id);
  const editorRef = React.useRef();
  const { classes, cx } = RichTextEditor_styles['default']({
    saveLabel: labels.save,
    editLabel: labels.edit,
    removeLabel: labels.remove,
    radius,
    readOnly
  }, { classNames, styles, name: "RichTextEditor" });
  const modules = React.useMemo(() => __spreadProps(__spreadValues(__spreadValues({}, externalModules), uuid ? { toolbar: { container: `#${uuid}` } } : void 0), {
    mention: mentions,
    imageUploader: {
      upload: (file) => onImageUpload(file)
    }
  }), [uuid, mentions, externalModules]);
  React.useEffect(() => {
    var _a2, _b2;
    if (editorRef.current) {
      attachShortcuts.attachShortcuts((_b2 = (_a2 = editorRef == null ? void 0 : editorRef.current) == null ? void 0 : _a2.editor) == null ? void 0 : _b2.keyboard);
    }
  }, []);
  return /* @__PURE__ */ React__default.createElement(core.Box, __spreadValues({
    className: cx(classes.root, className)
  }, others), /* @__PURE__ */ React__default.createElement(Toolbar.Toolbar, {
    controls,
    labels,
    sticky,
    stickyOffset,
    classNames,
    styles,
    id: uuid,
    className: classes.toolbar
  }), /* @__PURE__ */ React__default.createElement(Editor__default, {
    theme: "snow",
    modules,
    value,
    onChange,
    ref: hooks.mergeRefs(editorRef, ref),
    placeholder,
    readOnly
  }));
});
RichTextEditor.displayName = "@mantine/rte/RichTextEditor";

exports.DEFAULT_CONTROLS = defaultControl.DEFAULT_CONTROLS;
exports.DEFAULT_LABELS = defaultLabels.DEFAULT_LABELS;
exports.RichTextEditor = RichTextEditor;
//# sourceMappingURL=RichTextEditor.js.map
