import calls from './calls/calls_router.js';
import jobs from './jobs/jobs_router.js';
import client from './client/client.js';
import support from './support/support.js';
import supportAuth from './support/auth.js'
import userAuth from './user/auth.js'

const routersManagement = (app, express) =>{
    
    app.use('/calls', calls(express.Router()));
    app.use('/jobs', jobs(express.Router()));
    app.use('/client', client(express.Router()));
    app.use('/support', support(express.Router()));
    // app.use('/support/auth', supportAuth(express.Router()));
    app.use('/user/auth', userAuth(express.Router()));
}

export default routersManagement;