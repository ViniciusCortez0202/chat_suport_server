exports.createServer = (http, express) => {
    
    const app = express();
    const server = http.createServer(app);

    const port = process.env.port || 3000;

    server.listen(port, '10.0.0.102', () => {
        console.log("CONNECTION OPEN " + port);
    });

    return { server, app }
}


