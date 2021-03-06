import React from 'react';
import { DefaultProps, MantineNumberSize, ForwardRefWithStaticComponents } from '@mantine/styles';
import { Col } from './Col/Col';
export interface GridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** <Col /> components only */
    children: React.ReactNode;
    /** Spacing between columns predefined value from theme.spacing or number for gutter in px  */
    gutter?: MantineNumberSize;
    /** Should columns in the last row take 100% of grid width */
    grow?: boolean;
    /** Set grid justify-content property */
    justify?: React.CSSProperties['justifyContent'];
    /** Set grid align-content property */
    align?: React.CSSProperties['alignContent'];
    /** Amount of columns in each row */
    columns?: number;
}
declare type GridComponent = ForwardRefWithStaticComponents<GridProps, {
    Col: typeof Col;
}>;
export declare const Grid: GridComponent;
export {};
//# sourceMappingURL=Grid.d.ts.map