const app = require("express")();
const http = require("http").Server(app);

const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

io.on("connection", function (socket) {
  console.log("A user with ID: " + socket.id + " connected");

  socket.on("disconnect", function () {
    console.log("A user with ID: " + socket.id + " disconnected");
  });

  socket.on("chat-message", async (message) => {
    const data = {
      message: message.message,
      user_id: socket.id,
      name: message.user,
    };
    socket.broadcast.emit("chat-message", message);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("stopTyping", () => {
    socket.broadcast.emit("stopTyping");
  });

  socket.on("joined", async (name) => {
    console.log("Something happened in joined", name);
    socket.broadcast.emit("joined", name);
  });

  socket.on("leave", (data) => {
    socket.broadcast.emit("leave", data);
  });
});

http.listen(3023, () => {
  console.log("Listening on port *: 3023");
});
