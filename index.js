import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import logger from 'morgan';
import { Server } from 'socket.io';
import { createServer } from 'http';

import { getDb, getChatHistory } from './db/getDb.cjs';

const port = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', async (socket) => {
  console.log('Un usuario se ha conectado');

  try {
    const chatHistory = await getChatHistory();
    io.to(socket.id).emit('chat history', chatHistory);  
  } catch (error) {
    console.error('Error al obtener el historial de chat:', error);
    io.to(socket.id).emit('error', 'Error al obtener el historial de chat'); 
  }

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });

  socket.on('chat message', async (msg) => {
    try {
      const connection = await getDb();
      if (connection) {
        await connection.query('INSERT INTO messages (username, content) VALUES (?, ?)', [msg.username, msg.content]);
        connection.release();
      } else {
        console.error('Error al obtener la conexión a la base de datos');
      }
    } catch (err) {
      console.error('Error al guardar el mensaje en la base de datos:', err);
    }

    io.emit('chat message', msg);
  });
});

app.use(logger('dev'));
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/index.html');
});

server.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port}`);
});
