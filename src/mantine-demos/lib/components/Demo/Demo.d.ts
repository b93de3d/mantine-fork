import React from 'react';
import CodeDemo from './CodeDemo/CodeDemo';
import Configurator from './Configurator/Configurator';
export { CodeDemo, Configurator };
declare type ConfiguratorProps = React.ComponentProps<typeof Configurator>;
declare type CodeDemoProps = React.ComponentProps<typeof CodeDemo>;
interface DemoProps {
    toggle?: boolean;
    demoProps?: CodeDemoProps;
    configuratorProps?: Omit<ConfiguratorProps, 'props' | 'codeTemplate' | 'component'>;
    data: MantineDemo;
}
export declare function Demo({ data, demoProps, configuratorProps }: DemoProps): JSX.Element;
//# sourceMappingURL=Demo.d.ts.map