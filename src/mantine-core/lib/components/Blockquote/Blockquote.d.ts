import React from 'react';
import { DefaultProps, MantineColor, ClassNames } from '@mantine/styles';
import useStyles from './Blockquote.styles';
export declare type BlockquoteStylesNames = ClassNames<typeof useStyles>;
export interface BlockquoteProps extends DefaultProps<BlockquoteStylesNames>, Omit<React.ComponentPropsWithoutRef<'blockquote'>, 'cite'> {
    /** Icon color from theme */
    color?: MantineColor;
    /** Icon, defaults to quote icon */
    icon?: React.ReactNode;
    /** Describe a reference to a cited quote */
    cite?: React.ReactNode;
}
export declare const Blockquote: React.ForwardRefExoticComponent<BlockquoteProps & React.RefAttributes<HTMLQuoteElement>>;
//# sourceMappingURL=Blockquote.d.ts.map