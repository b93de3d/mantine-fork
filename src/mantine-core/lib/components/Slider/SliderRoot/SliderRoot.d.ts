import React from 'react';
import { MantineNumberSize, DefaultProps, ClassNames } from '@mantine/styles';
import useStyles from './SliderRoot.styles';
export declare type SliderRootStylesNames = ClassNames<typeof useStyles>;
export interface SliderRootProps extends DefaultProps<SliderRootStylesNames>, React.ComponentPropsWithoutRef<'div'> {
    size: MantineNumberSize;
    children: React.ReactNode;
}
export declare const SliderRoot: React.ForwardRefExoticComponent<SliderRootProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SliderRoot.d.ts.map