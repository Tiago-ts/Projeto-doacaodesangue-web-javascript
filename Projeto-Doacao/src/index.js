const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(cors())
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended: false}));

io.on('connection', (socket)=>{
    console.log('a user connected');
    socket.on('disconnect', ()=>{
        console.log('user disconnected');
      });
  });

  require('./app/controllers/index')({io:io,app:app})

server.listen(5000, ()=>{
    console.log('Server rodando na porta 5000')
})
module.exports.subscriber = io;