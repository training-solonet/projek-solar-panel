require('dotenv').config();

const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const cors = require('cors');
const app = express();
const server = createServer(app);
const io = new Server(server);
const sensorRoutes = require('./routes/sensor');
const port = process.env.PORT || 3000;

// Middleware untuk memeriksa API key
const apiKeyCheck = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Gunakan middleware untuk memeriksa API key pada semua rute /api
app.use('/api', apiKeyCheck, sensorRoutes);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // Contoh event custom
    socket.on('custom event', (data) => {
        console.log('Received custom event:', data);
    });
});

// Simpan instance io di global agar bisa diakses oleh controller
global.io = io;

server.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));
