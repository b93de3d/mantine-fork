import React from 'react';
import { DefaultProps, MantineMargin } from '@mantine/core';
export interface NotificationProviderProps extends Omit<DefaultProps, MantineMargin>, React.ComponentPropsWithoutRef<'div'> {
    /** Notifications position */
    position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
    /** Auto close timeout for all notifications, false to disable auto close, can be overwritten for individual notifications by showNotification function */
    autoClose?: number | false;
    /** Notification transitions duration, 0 to turn transitions off */
    transitionDuration?: number;
    /** Notification width in px, cannot exceed 100% */
    containerWidth?: number;
    /** Notification max-height in px, used for transitions */
    notificationMaxHeight?: number;
    /** Maximum amount of notifications displayed at a time, other new notifications will be added to queue */
    limit?: number;
    /** Notifications container z-index */
    zIndex?: number;
}
export declare function NotificationsProvider({ className, position, autoClose, transitionDuration, containerWidth, notificationMaxHeight, limit, zIndex, style, children, ...others }: NotificationProviderProps): JSX.Element;
export declare namespace NotificationsProvider {
    var displayName: string;
}
//# sourceMappingURL=NotificationsProvider.d.ts.map