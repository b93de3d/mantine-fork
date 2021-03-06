import React, { forwardRef, useRef, useMemo, useEffect } from 'react';
import Editor, { Quill } from 'react-quill';
import 'quill-mention';
import { Box } from '@mantine/core';
import { useUuid, mergeRefs } from '@mantine/hooks';
import { Toolbar } from '../Toolbar/Toolbar.js';
import { DEFAULT_CONTROLS } from './default-control.js';
export { DEFAULT_CONTROLS } from './default-control.js';
import useStyles from './RichTextEditor.styles.js';
import { DEFAULT_LABELS } from './default-labels.js';
export { DEFAULT_LABELS } from './default-labels.js';
import { createImageBlot } from '../../modules/image-uploader/ImageBlot.js';
import { ImageUploader } from '../../modules/image-uploader/ImageUploader.js';
import { replaceIcons } from '../../modules/icons/replace-icons.js';
import { attachShortcuts } from '../../modules/shortcuts/attach-shortcuts.js';

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
const InlineBlot = Quill.import("blots/block");
const ImageBlot = createImageBlot(InlineBlot);
Quill.register({ "formats/imageBlot": ImageBlot });
Quill.register("modules/imageUploader", ImageUploader);
const icons = Quill.import("ui/icons");
replaceIcons(icons);
function defaultImageUpload(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}
const RichTextEditor = forwardRef((_a, ref) => {
  var _b = _a, {
    value,
    onChange,
    onImageUpload = defaultImageUpload,
    sticky = true,
    stickyOffset = 0,
    radius = "sm",
    labels = DEFAULT_LABELS,
    controls = DEFAULT_CONTROLS,
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
  const uuid = useUuid(id);
  const editorRef = useRef();
  const { classes, cx } = useStyles({
    saveLabel: labels.save,
    editLabel: labels.edit,
    removeLabel: labels.remove,
    radius,
    readOnly
  }, { classNames, styles, name: "RichTextEditor" });
  const modules = useMemo(() => __spreadProps(__spreadValues(__spreadValues({}, externalModules), uuid ? { toolbar: { container: `#${uuid}` } } : void 0), {
    mention: mentions,
    imageUploader: {
      upload: (file) => onImageUpload(file)
    }
  }), [uuid, mentions, externalModules]);
  useEffect(() => {
    var _a2, _b2;
    if (editorRef.current) {
      attachShortcuts((_b2 = (_a2 = editorRef == null ? void 0 : editorRef.current) == null ? void 0 : _a2.editor) == null ? void 0 : _b2.keyboard);
    }
  }, []);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.root, className)
  }, others), /* @__PURE__ */ React.createElement(Toolbar, {
    controls,
    labels,
    sticky,
    stickyOffset,
    classNames,
    styles,
    id: uuid,
    className: classes.toolbar
  }), /* @__PURE__ */ React.createElement(Editor, {
    theme: "snow",
    modules,
    value,
    onChange,
    ref: mergeRefs(editorRef, ref),
    placeholder,
    readOnly
  }));
});
RichTextEditor.displayName = "@mantine/rte/RichTextEditor";

export { RichTextEditor };
//# sourceMappingURL=RichTextEditor.js.map
