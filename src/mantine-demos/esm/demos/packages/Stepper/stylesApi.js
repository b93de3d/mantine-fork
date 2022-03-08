import React, { useState } from 'react';
import { createStyles, Stepper } from '@mantine/core';

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
const code = `
import { useState } from 'react';
import { Stepper, StepperProps, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, params, getRef) => {
  const stepIcon = getRef('stepIcon');

  return {
    root: {
      padding: theme.spacing.md,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    separator: {
      height: 2,
      borderTop: \`2px dashed \${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
      }\`,
      borderRadius: theme.radius.xl,
      backgroundColor: 'transparent',
    },

    separatorActive: {
      borderWidth: 0,
      backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
    },

    stepIcon: {
      ref: stepIcon,
      borderColor: 'transparent',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
      borderWidth: 0,
    },

    step: {
      transition: 'transform 150ms ease',
    },

    stepProgress: {
      transform: 'scale(1.05)',
    },

    stepCompleted: {
      [\`& .\${stepIcon}\`]: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6]),
      },
    },
  };
});

function StyledStepper(props: StepperProps) {
  const { classes } = useStyles();
  return <Stepper classNames={classes} {...props} />;
}

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <StyledStepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </StyledStepper>
  );
}
`;
const useStyles = createStyles((theme, params, getRef) => {
  const stepIcon = getRef("stepIcon");
  return {
    root: {
      padding: theme.spacing.md,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
    },
    separator: {
      height: 2,
      borderTop: `2px dashed ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]}`,
      borderRadius: theme.radius.xl,
      backgroundColor: "transparent"
    },
    separatorActive: {
      borderWidth: 0,
      backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6])
    },
    stepIcon: {
      ref: stepIcon,
      borderColor: "transparent",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.white,
      borderWidth: 0
    },
    step: {
      transition: "transform 150ms ease"
    },
    stepProgress: {
      transform: "scale(1.05)",
      [`& .${stepIcon}`]: {}
    },
    stepCompleted: {
      [`& .${stepIcon}`]: {
        borderWidth: 0,
        backgroundColor: "transparent",
        backgroundImage: theme.fn.linearGradient(45, theme.colors.blue[6], theme.colors.cyan[6])
      }
    }
  };
});
function StyledStepper(props) {
  const { classes } = useStyles();
  return /* @__PURE__ */ React.createElement(Stepper, __spreadValues({
    classNames: classes
  }, props));
}
function Demo() {
  const [active, setActive] = useState(1);
  return /* @__PURE__ */ React.createElement(StyledStepper, {
    active,
    onStepClick: setActive,
    breakpoint: "sm"
  }, /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 1",
    description: "Create an account"
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 2",
    description: "Verify email"
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 3",
    description: "Get full access"
  }));
}
const stylesApi = {
  type: "demo",
  component: Demo,
  code
};

export { stylesApi };
//# sourceMappingURL=stylesApi.js.map
