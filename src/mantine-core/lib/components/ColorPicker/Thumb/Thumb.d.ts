/// <reference types="react" />
import { DefaultProps, MantineSize, ClassNames } from '@mantine/styles';
import useStyles from './Thumb.styles';
export declare type ThumbStylesNames = ClassNames<typeof useStyles>;
interface Position {
    x: number;
    y: number;
}
export interface ThumbProps extends DefaultProps<ThumbStylesNames> {
    position: Position;
    size: MantineSize;
    __staticSelector: string;
}
export declare function Thumb({ position, className, styles, classNames, style, size, __staticSelector, }: ThumbProps): JSX.Element;
export declare namespace Thumb {
    var displayName: string;
}
export {};
//# sourceMappingURL=Thumb.d.ts.map