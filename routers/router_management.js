const calls = require('./calls/calls_router')
const jobs = require('./jobs/jobs_router');

routersManagement = (app, router) =>{
    
    app.use('/calls', calls(router));
    app.use('/jobs', jobs(router));

}

module.exports = routersManagement;