import React from 'react';
import { MantineSize, ClassNames, DefaultProps } from '@mantine/core';
import useStyles from './CalendarHeader.styles';
export declare type CalendarHeaderStylesNames = ClassNames<typeof useStyles>;
export interface CalendarHeaderProps extends DefaultProps<CalendarHeaderStylesNames>, React.ComponentPropsWithoutRef<'div'> {
    hasPrevious: boolean;
    hasNext: boolean;
    onNext?(): void;
    onPrevious?(): void;
    onNextLevel?(): void;
    label?: string;
    nextLevelDisabled?: boolean;
    size?: MantineSize;
    __staticSelector?: string;
    nextLabel?: string;
    previousLabel?: string;
    preventLevelFocus?: boolean;
    preventFocus?: boolean;
}
export declare function CalendarHeader({ hasNext, hasPrevious, onNext, onPrevious, onNextLevel, className, label, nextLevelDisabled, size, classNames, styles, __staticSelector, nextLabel, previousLabel, preventLevelFocus, preventFocus, ...others }: CalendarHeaderProps): JSX.Element;
export declare namespace CalendarHeader {
    var displayName: string;
}
//# sourceMappingURL=CalendarHeader.d.ts.map