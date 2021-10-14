const RoutersManagement = require('../routers/router_management')
exports.createServer = (http, express) => {

    const app = express();
    const server = http.createServer(app);

    const port = process.env.port || 3000;

    server.listen(port, '10.0.0.104', () => {
        console.log("CONNECTION OPEN " + port);
    });
    
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    routersManagement(app, express.Router());

    return { server, app }
}


