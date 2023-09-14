import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Você pode especificar domínios específicos aqui, em vez de "*"
    methods: ["GET", "POST"]
  }
});


io.on('connection', (socket) => {
  console.log('Novo usuário conectado');
  
  socket.on('message', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

server.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});
