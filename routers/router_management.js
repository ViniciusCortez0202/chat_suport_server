import calls from './calls/calls_router.js';
import jobs from './jobs/jobs_router.js';
// import sing from './sing/sing_router.js';
import client from './client/client.js';
import technician from './technician/technician.js';

const routersManagement = (app, express, ioMediator) =>{
    
    app.use('/calls', calls(express.Router(), ioMediator));
    app.use('/jobs', jobs(express.Router()));
    // app.use('/sing', sing(express.Router()));
    app.use('/client', client(express.Router()));
    app.use('/technician', technician(express.Router()));

}

export default routersManagement;