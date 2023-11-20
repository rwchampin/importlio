"use client"

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addNotification, removeAllNotifications, removeNotification } from '@/redux/features/notifications/notificationsSlice';

export default function useNotification() {
	const dispatch = useAppDispatch();
	const {
		notifications
	} = useAppSelector(state => state.notifications);

	 

	const notificationExists = (id: string) => {
		const notifications = getNotifications();
		return notifications.find((notification: any) => notification.id === id);
	}

	const getNotifications = () => {
		return notifications;
	}

	const add = (notification: any) => {
		if (notificationExists(notification.id)) {
			return;
		}
		dispatch(addNotification(notification));
	}

	const remove = (id: any) => {
		dispatch(removeNotification(id));
	}

	const removeAll = () => {
		dispatch(removeAllNotifications());
	}

	return {
		getNotifications,
		add,
		remove,
		removeAll
	}
 
}
