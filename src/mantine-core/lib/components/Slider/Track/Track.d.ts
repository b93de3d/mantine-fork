import React from 'react';
import { DefaultProps, MantineNumberSize, MantineColor, ClassNames } from '@mantine/styles';
import { MarksStylesNames } from '../Marks/Marks';
import useStyles from './Track.styles';
export declare type TrackStylesNames = ClassNames<typeof useStyles> | MarksStylesNames;
export interface TrackProps extends DefaultProps<TrackStylesNames> {
    filled: number;
    offset: number;
    marks: {
        value: number;
        label?: React.ReactNode;
    }[];
    size: MantineNumberSize;
    radius: MantineNumberSize;
    color: MantineColor;
    min: number;
    max: number;
    value: number;
    children: React.ReactNode;
    onChange(value: number): void;
    onMouseEnter?(event?: React.MouseEvent<HTMLDivElement>): void;
    onMouseLeave?(event?: React.MouseEvent<HTMLDivElement>): void;
}
export declare function Track({ filled, size, color, classNames, styles, radius, children, offset, onMouseLeave, onMouseEnter, ...others }: TrackProps): JSX.Element;
export declare namespace Track {
    var displayName: string;
}
//# sourceMappingURL=Track.d.ts.map