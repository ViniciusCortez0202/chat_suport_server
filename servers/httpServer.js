exports.createServer = (http, express) => {
    
    const app = express();
    const server = http.createServer(app);

    const port = process.env.port || 3000;

    server.listen(port, '192.168.1.106', () => {
        console.log("CONNECTION OPEN " + port);
    });

    return { server, app }
}


