'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var styles = require('@mantine/styles');

function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited
}) {
  const theme = styles.useMantineTheme();
  const reduceMotion = hooks.useReducedMotion();
  const [transitionStatus, setStatus] = React.useState(mounted ? "entered" : "exited");
  const [transitionDuration, setTransitionDuration] = React.useState(reduceMotion ? 0 : duration);
  const timeoutRef = React.useRef(-1);
  const handleStateChange = (shouldMount) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    setStatus(shouldMount ? "pre-entering" : "pre-exiting");
    window.clearTimeout(timeoutRef.current);
    const _duration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(_duration);
    if (_duration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      const preStateTimeout = window.setTimeout(() => {
        typeof preHandler === "function" && preHandler();
        setStatus(shouldMount ? "entering" : "exiting");
      }, 10);
      timeoutRef.current = window.setTimeout(() => {
        window.clearTimeout(preStateTimeout);
        typeof handler === "function" && handler();
        setStatus(shouldMount ? "entered" : "exited");
      }, _duration);
    }
  };
  hooks.useDidUpdate(() => {
    handleStateChange(mounted);
  }, [mounted]);
  React.useEffect(() => () => window.clearTimeout(timeoutRef.current), []);
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || theme.transitionTimingFunction
  };
}

exports.useTransition = useTransition;
//# sourceMappingURL=use-transition.js.map
