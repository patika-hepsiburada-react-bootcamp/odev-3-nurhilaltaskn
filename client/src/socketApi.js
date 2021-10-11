import { io } from 'socket.io-client';

let socket;
export const connectSocket = () => {
  console.log('Connectting');
  socket = io("http://localhost:3000", { transports: ['websocket'] });

  socket.on('connect', () => {
    console.log('connected');
  });

  socket.on('connect_error', () => {
    console.error('Connection failed.');
  });
};

export const sendMessage = (topic, data) => {
  if (!socket) {
    return false;
  }

  socket.emit(topic, data);
};

export const subscribeToNewMessages = (cb) => {
  if (!socket) {
    return false;
  }

  socket.on('new-vote', (message) => {
    cb(message);
  });
};