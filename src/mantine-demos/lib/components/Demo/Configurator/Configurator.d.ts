/// <reference types="react" />
import { ControlProps } from './controls';
interface ConfiguratorProps {
    component: any;
    codeTemplate(props: string, children?: string): string;
    previewBackground?: string;
    multiline?: boolean;
    includeCode?: boolean;
    center?: boolean;
    props: ControlProps[];
    filter?: string[];
}
export default function Configurator({ component: Component, codeTemplate, previewBackground, props: componentProps, multiline, includeCode, center, filter, }: ConfiguratorProps): JSX.Element;
export {};
//# sourceMappingURL=Configurator.d.ts.map