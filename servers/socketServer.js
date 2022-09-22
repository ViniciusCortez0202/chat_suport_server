const createSocket = (io, server, options = {}) => {

    const connection = io(server, options);

    return { connection }
}

export default createSocket;
