import socketInstance from "../config/socketInstance";
import { INotificationDocument } from "../types/types";

export const connectToNotifications = (
  userId: string,
  onNewNotification: (payload: INotificationDocument) => void
) => {
  console.log("connecting to notifications socket.......\n");
  // Join the user room
  socketInstance.emit("join", userId);

  // Listen for new notifications
  socketInstance.on("new-notification", onNewNotification);
};

export const disconnectFromNotifications = () => {
  socketInstance.disconnect();
};
