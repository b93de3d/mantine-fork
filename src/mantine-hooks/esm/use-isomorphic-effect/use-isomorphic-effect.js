import { useLayoutEffect, useEffect } from 'react';

const useIsomorphicEffect = typeof document !== "undefined" ? useLayoutEffect : useEffect;

export { useIsomorphicEffect };
//# sourceMappingURL=use-isomorphic-effect.js.map
