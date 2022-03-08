import React from 'react';
import { Language } from 'prism-react-renderer';
interface CodeDemoProps {
    code?: string;
    language?: Language;
    demoBackground?: string;
    demoBorder?: boolean;
    children?: React.ReactNode;
    toggle?: boolean;
    inline?: boolean;
    spacing?: boolean;
    zIndex?: number;
}
export default function CodeDemo({ code, language, children, demoBackground, demoBorder, toggle, inline, spacing, zIndex, }: CodeDemoProps): JSX.Element;
export {};
//# sourceMappingURL=CodeDemo.d.ts.map