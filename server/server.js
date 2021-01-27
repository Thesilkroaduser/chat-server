const http = require('http').createServer();
const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

http.listen(4000, () => {
  console.log('Server started at port:4000...');
});

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('hello', (data) => {
    console.log(data)
    socket.emit('message', 'from server');});
});

