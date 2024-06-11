require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const questionRoutes = require('./routes/questionRoutes');
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Update with your frontend URL
    methods: ["GET", "POST"],
  },
});


app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

app.use((req, res, next) => {
  console.log(`${req.path} ${req.method}`);
  next();
});

app.use('/questions', questionRoutes);
app.use('/courses', courseRoutes);

const userSocketMap = {};
const getAllConnectedClients = (roomId) => {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        username: userSocketMap[socketId],
      };
    }
  );
};

// Socket.IO logic
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  socket.on('join', ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId);
    const clients = getAllConnectedClients(roomId);
    console.log(`User joined room ${roomId}:`, clients);
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit('joined', {
        clients,
        username,
        socketId: socket.id,
      });
    });
  });

  socket.on("code-change", ({ roomId, code }) => {
    console.log(`Code change in room ${roomId}:`, code);
    socket.in(roomId).emit("code-change", { code });
  });

  socket.on("sync-code", ({ socketId, code }) => {
    console.log(`Sync code to socket ${socketId}:`, code);
    io.to(socketId).emit("code-change", { code });
  });

  socket.on('disconnecting', () => {
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      console.log(`User ${userSocketMap[socket.id]} is leaving room ${roomId}`);
      socket.in(roomId).emit('disconnected', {
        socketId: socket.id,
        username: userSocketMap[socket.id],
      });
    });
    delete userSocketMap[socket.id];
  });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to database');
    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
