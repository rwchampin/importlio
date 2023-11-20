// Toast.js
"use client";
import useNotification  from "@/hooks/use-notification";
import '@/assets/styles/notifications.css';

const Notification = () => {

  const { getNotifications, remove } = useNotification();
  const notifications = getNotifications();

  const getTheme = (type: any) => {
    switch (type) {
      case "info":
        return "info";
      case "success":
        return "success";
      case "error":
        return "error";
      case "warning":
        return "warning";
      default:
        return "info";
    }
  };

  if (!notifications.length) return null;

  return (
    <div className="fixed bg-black/70 top-0 left-0 h-screen w-screen z-50">
      <div className="flex flex-col gap-3 items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed w-full">
        {notifications.map((notification: any, i: any) => {
          const type = notification.type || "info";

          const theme = getTheme(type);

          return (
            <div
              key={i}
              className={`notification rounded-lg shadow-lg h-auto min-h-[100px] w-full max-w-[500px] border-4  p-4 ${theme}`}
            >
              <div className="title">
                {notification.title}
              </div>
              <div className="message">
                {notification.message}
              </div>
              <button
                className="close-button close"
                onClick={() => remove(notification.id)}
              >
                &times;
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notification;
