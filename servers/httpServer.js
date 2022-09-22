import routersManagement from '../routers/router_management.js';
const createServer = (http, express, ioMediator) => {

    const app = express();
    const server = http.createServer(app);

    const port = process.env.port || 3000;

    server.listen(port, () => {
        console.log("CONNECTION OPEN " + port);
    });
    
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    routersManagement(app, express, ioMediator);

    return { server, app }
}

export default createServer;
