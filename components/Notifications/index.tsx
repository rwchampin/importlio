// Toast.js
"use client";
import React, { useState } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState<any>([]);

  const removeNotification = (id:any) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="toast-container">
      {notifications.map((notification:any) => (
        <div
          key={notification.id}
          className={`toast toast-${notification.type}`}
        >
          <button
            className="close-button"
            onClick={() => removeNotification(notification.id)}
          >
            &times;
          </button>
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
