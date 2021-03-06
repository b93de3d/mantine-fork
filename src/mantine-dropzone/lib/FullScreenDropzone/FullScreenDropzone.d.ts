import React from 'react';
import { MantineNumberSize, ClassNames, DefaultProps } from '@mantine/core';
import { DropzoneStatus } from '../Dropzone';
import useStyles from './FullscreenDropzone.styles';
export declare type FullScreenDropzoneStylesNames = ClassNames<typeof useStyles>;
export interface FullScreenDropzoneProps extends DefaultProps<FullScreenDropzoneStylesNames>, Omit<React.ComponentPropsWithoutRef<'div'>, 'onDrop'> {
    /** Space between dropzone and viewport edges */
    offset?: MantineNumberSize;
    /** Overlay z-index */
    zIndex?: number;
    /** Disable dropzone */
    disabled?: boolean;
    /** Accepted mime types */
    accept: string[];
    /** Dropzone padding from theme or number to set padding in px */
    padding?: MantineNumberSize;
    /** Dropzone radius from theme or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Called when files are dropped to document */
    onDrop(files: File[]): void;
    /** Render children based on dragging state */
    children(status: DropzoneStatus): React.ReactNode;
}
export declare function FullScreenDropzone({ className, style, offset, padding, radius, classNames, styles, disabled, accept, zIndex, onDrop, children, ...others }: FullScreenDropzoneProps): JSX.Element;
export declare namespace FullScreenDropzone {
    var displayName: string;
}
//# sourceMappingURL=FullScreenDropzone.d.ts.map