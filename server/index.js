import { Server } from "socket.io";
import Connection from './database/db.js'
const PORT = 9000;
// Connection();
const io = new Server(PORT, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', socket =>{
    socket.on('get-document', documentId =>{
        console.log('connected');

        const data ="";
        socket.join(documentId);
        socket.emit('load-document', data);

        socket.on('send-changes', delta =>{
            console.log(delta);
            socket.broadcast.to(documentId).emit('receive-changes', delta);
            
        })
    }) 
});