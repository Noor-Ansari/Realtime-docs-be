import { Server } from "socket.io";
import { Server as HttpServer } from "http";

import DocService from "./service";

export const initDocSocket = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    const { roomId = "new_room" } = socket.handshake.query;
    socket.join(roomId);

    socket.on("docUpdated-on-client", async (event) => {
      const { id, content } = event;
      await DocService.updateDoc(id, content);
      socket.to(roomId).emit("docUpdated-on-server", { content });
    });
  });
};
