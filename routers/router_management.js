const calls = require('./calls/calls_router')

routersManagement = (app, router) =>{
    
    app.use('/calls', calls(router));

}

module.exports = routersManagement;