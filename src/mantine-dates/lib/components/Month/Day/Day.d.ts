import React from 'react';
import { DefaultProps, MantineSize, ClassNames } from '@mantine/core';
import useStyles from './Day.styles';
export declare type DayStylesNames = ClassNames<typeof useStyles>;
export interface DayProps extends DefaultProps<DayStylesNames>, Omit<React.ComponentPropsWithoutRef<'button'>, 'value' | 'onMouseEnter'> {
    value: Date;
    selected: boolean;
    weekend: boolean;
    outside: boolean;
    onMouseEnter(date: Date, event: React.MouseEvent): void;
    disabled: boolean;
    hasValue: boolean;
    inRange: boolean;
    firstInRange: boolean;
    lastInRange: boolean;
    size: MantineSize;
    fullWidth: boolean;
    __staticSelector?: string;
    firstInMonth: boolean;
    focusable?: boolean;
    hideOutsideDates?: boolean;
}
export declare const Day: React.ForwardRefExoticComponent<DayProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Day.d.ts.map