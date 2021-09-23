const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.port || 3000;

server.listen(port, '10.0.0.104', () => {
    console.log("CONNECTION OPEN");
});

module.exports = server;