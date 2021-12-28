const calls = require('./calls/calls_router')
const jobs = require('./jobs/jobs_router');

routersManagement = (app, express, ioMediator) =>{
    
    app.use('/calls', calls(express.Router(), ioMediator));
    app.use('/jobs', jobs(express.Router()));

}

module.exports = routersManagement;