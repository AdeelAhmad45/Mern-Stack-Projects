const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')

app.use(cors())
const PORT = 5000
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ["GET", "POST"]
    },
})

io.on('connection', (socket) => {
    console.log(`User connected : ${socket.id}`);

    socket.on('disconnected', console.log(`User disconnected`))
})

server.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
})