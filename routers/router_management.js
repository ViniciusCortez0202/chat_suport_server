const calls = require('./calls/calls_router')
const jobs = require('./jobs/jobs_router');
const sing = require('./sing/sing_router');

routersManagement = (app, express, ioMediator) =>{
    
    app.use('/calls', calls(express.Router(), ioMediator));
    app.use('/jobs', jobs(express.Router()));
    app.use('/sing', sing(express.Router()));

}

module.exports = routersManagement;