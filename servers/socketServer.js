exports.createSocket = (io, server, options = {}) => {

    const connection = io(server, options);

    return { connection }
}