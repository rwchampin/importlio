// withToast.js
"use client";
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const withNotification = (WrappedComponent:any) => {

  const NotificationPortal = ({ children }:any) => {
    const notificationContainerRef = useRef<any>(null);

    const showNotification = (message:any, type = 'info') => {
      const id = new Date().getTime();
      const notification = { id, message, type };
      notificationContainerRef.current.addNotification(notification);

      // Automatically remove the notification after a delay (e.g., 5 seconds)
      setTimeout(() => {
        notificationContainerRef.current.removeNotification(id);
      }, 5000);
    };

    return (
      <>
        <WrappedComponent showNotification={showNotification} />
        {ReactDOM.createPortal(
          React.cloneElement(children, { ref: notificationContainerRef }),
          document.body
        )}
      </>
    );
  };

  return NotificationPortal;
};

export default withNotification;
