const calls = require('./calls/calls_router')
const jobs = require('./jobs/jobs_router');
const sing = require('./sing/sing_router');
const client = require('./client/client');
const technician = require('./technician/technician');

routersManagement = (app, express, ioMediator) =>{
    
    app.use('/calls', calls(express.Router(), ioMediator));
    app.use('/jobs', jobs(express.Router()));
    app.use('/sing', sing(express.Router()));
    app.use('/client', client(express.Router()));
    app.use('/technician', technician(express.Router()));

}

module.exports = routersManagement;