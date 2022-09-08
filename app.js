const express = require("express");
const app = express();
const { Server } = require("socket.io");
const user = [];
app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded());
app.use("/", require("./routes/user")); // Attach Middleware

const server = app.listen(8085, (err) => {
  if (err) {
    console.log("Server Crash ", err);
  } else {
    console.log("Server Start ", server.address().port);
  }
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  var roomno;
  socket.on("room", (data) => {
    console.log(data);
    let roomname = data;
    socket.join(roomname);
    roomno = roomname;
    roomno = data;
  });
  console.log("connected");
  socket.on("new-user-joined", (name) => {
    user[socket.id] = name;
    socket.to(roomno).emit("user-joined", { message: "  joined", name: name });
  });
  socket.on("send", (message) => {
    socket
      .to(roomno)
      .emit("recieve", { message: message, name: user[socket.id] });
  });
  socket.on("disconnect", () => {
    socket.to(roomno).emit("disconectionmessage", {
      message: " has left",
      name: user[socket.id],
    });
  });
});