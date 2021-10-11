const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.end('realtime colors app');
});

const votes = {
  Minecraft: 0,
  GTA5: 0,
  CSGO: 0,
  LoL: 0,
};

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.emit('new-vote', votes);

  socket.on('new-vote', (vote) => {
    console.log('New Vote:', vote);
    votes[vote] += 1;
    io.emit('new-vote', votes);
  });

  socket.on('disconnect', () => console.log('a user disconnected'));
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});