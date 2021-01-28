const http = require('http').createServer();
const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const history = new Array();

http.listen(4000, () => {
  console.log('Server started at port:4000...');
});

io.on('connection', (socket) => {
  console.log('New User Connected');
  socket.on('get_history', () => {
    socket.emit('send_message', history);
  });
  socket.on('new_message', (data) => {
    history.push(data);
    io.sockets.emit('send_message', history);
  });
});
