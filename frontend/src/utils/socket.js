import { io } from "socket.io-client";

const token = localStorage.getItem("whiteboard_user_token");

const socket = io(process.env.API_BASE_URL, {
  extraHeaders: token ? { Authorization: `Bearer ${token}` } : {}, 
});

export default socket;
