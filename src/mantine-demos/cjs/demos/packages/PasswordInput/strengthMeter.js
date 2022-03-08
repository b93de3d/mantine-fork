'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var radixIcons = require('@modulz/radix-icons');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { CheckIcon, Cross1Icon } from '@modulz/radix-icons';
import { PasswordInput, Progress, Text, Popover } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <CheckIcon /> : <Cross1Icon />} <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export function PasswordStrength() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Popover
      opened={popoverOpened}
      position="bottom"
      placement="start"
      withArrow
      styles={{ popover: { width: '100%' } }}
      noFocusTrap
      transition="pop-top-left"
      onFocusCapture={() => setPopoverOpened(true)}
      onBlurCapture={() => setPopoverOpened(false)}
      target={
        <PasswordInput
          required
          label="Your password"
          placeholder="Your password"
          description="Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      }
    >
      <Progress color={color} value={strength} size={5} style={{ marginBottom: 10 }} />
      <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
      {checks}
    </Popover>
  );
}
`;
function PasswordRequirement({ meets, label }) {
  return /* @__PURE__ */ React__default.createElement(core.Text, {
    color: meets ? "teal" : "red",
    sx: { display: "flex", alignItems: "center" },
    mt: 7,
    size: "sm"
  }, meets ? /* @__PURE__ */ React__default.createElement(radixIcons.CheckIcon, null) : /* @__PURE__ */ React__default.createElement(radixIcons.Cross1Icon, null), " ", /* @__PURE__ */ React__default.createElement(core.Box, {
    ml: 10
  }, label));
}
const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" }
];
function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;
  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });
  return Math.max(100 - 100 / (requirements.length + 1) * multiplier, 10);
}
function Demo() {
  const [popoverOpened, setPopoverOpened] = React.useState(false);
  const [value, setValue] = React.useState("");
  const checks = requirements.map((requirement, index) => /* @__PURE__ */ React__default.createElement(PasswordRequirement, {
    key: index,
    label: requirement.label,
    meets: requirement.re.test(value)
  }));
  const strength = getStrength(value);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";
  return /* @__PURE__ */ React__default.createElement("div", {
    style: { maxWidth: 340, margin: "auto" }
  }, /* @__PURE__ */ React__default.createElement(core.Popover, {
    opened: popoverOpened,
    position: "bottom",
    placement: "start",
    noFocusTrap: true,
    transition: "pop-top-left",
    onFocusCapture: () => setPopoverOpened(true),
    onBlurCapture: () => setPopoverOpened(false),
    styles: { popover: { width: "100%" } },
    target: /* @__PURE__ */ React__default.createElement(core.PasswordInput, {
      required: true,
      label: "Your password",
      placeholder: "Your password",
      description: "Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol",
      value,
      onChange: (event) => setValue(event.currentTarget.value)
    })
  }, /* @__PURE__ */ React__default.createElement(core.Progress, {
    color,
    value: strength,
    size: 5,
    style: { marginBottom: 10 }
  }), /* @__PURE__ */ React__default.createElement(PasswordRequirement, {
    label: "Includes at least 6 characters",
    meets: value.length > 5
  }), checks));
}
const strengthMeter = {
  type: "demo",
  code,
  demoProps: { toggle: true },
  component: Demo
};

exports.strengthMeter = strengthMeter;
//# sourceMappingURL=strengthMeter.js.map
