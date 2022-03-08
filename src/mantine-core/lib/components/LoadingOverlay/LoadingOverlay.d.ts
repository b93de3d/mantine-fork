import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/styles';
import { LoaderProps } from '../Loader';
export interface LoadingOverlayProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    /** Provide custom loader */
    loader?: React.ReactNode;
    /** Loader component props */
    loaderProps?: LoaderProps;
    /** Sets overlay opacity */
    overlayOpacity?: number;
    /** Sets overlay color, defaults to theme.white in light theme and to theme.colors.dark[5] in dark theme */
    overlayColor?: string;
    /** Loading overlay z-index */
    zIndex?: number;
    /** If visible overlay will take 100% width and height of first parent with relative position and overlay all of its content */
    visible: boolean;
    /** Appear and disappear animation duration */
    transitionDuration?: number;
    /** Value from theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
}
export declare const LoadingOverlay: React.ForwardRefExoticComponent<LoadingOverlayProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=LoadingOverlay.d.ts.map