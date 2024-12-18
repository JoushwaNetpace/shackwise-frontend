import { io, Socket } from "socket.io-client";

const socketInstance: Socket = io(process.env.REACT_APP_SOCKET_URL, {
  transports: ["websocket", "polling"],
});

export default socketInstance;
