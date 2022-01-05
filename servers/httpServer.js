require('../routers/router_management')
exports.createServer = (http, express, ioMediator) => {

    const app = express();
    const server = http.createServer(app);

    const port = process.env.port || 3000;

    server.listen(port, '10.0.0.100', () => {
        console.log("CONNECTION OPEN " + port);
    });
    
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    routersManagement(app, express, ioMediator);

    return { server, app }
}


