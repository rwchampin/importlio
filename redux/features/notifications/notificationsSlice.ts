// src/features/notifications/notificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { NotificationProps } from '@/lib/constants';

const initialState = {
  notifications: [] as NotificationProps[],
}
  
const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    addNotification: (state:any, action:any) => {
      state.notifications.push(action.payload);
    },
    removeNotification: (state:any, action:any) => {
      debugger
      state.notifications = state.notifications.filter((notification:any) => notification.id !== action.payload);
    },
    removeAllNotifications: (state:any) => {
      state.notifications = [];
    },
  },
});


export const { 
  addNotification,
  removeNotification,
  removeAllNotifications,
} = notificationsSlice.actions;
export default notificationsSlice.reducer;
