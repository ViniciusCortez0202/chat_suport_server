import calls from './calls/calls_router';
import jobs from './jobs/jobs_router';
import sing from './sing/sing_router';
import client from './client/client';
import technician from './technician/technician';

export default routersManagement = (app, express, ioMediator) =>{
    
    app.use('/calls', calls(express.Router(), ioMediator));
    app.use('/jobs', jobs(express.Router()));
    app.use('/sing', sing(express.Router()));
    app.use('/client', client(express.Router()));
    app.use('/technician', technician(express.Router()));

}