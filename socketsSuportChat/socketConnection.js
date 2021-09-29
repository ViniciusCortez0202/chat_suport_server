

chatSuport = (io) => {
    io.of("/suport").on("connection", (socket) => {
        console.log(socket.id);
    });
}

module.exports = chatSuport;