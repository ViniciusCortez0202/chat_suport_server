const jobs = (router) => {

    router.get('/info', (require, response) => {
        console.log(require);
        const id = require.query.idJob;
        console.log(require.query.token)
        response.status(200).send(jobs[id]);
    });

    router.get('/all', (require, response) => {
        
        response.status(200).send(jobs);
    });

    router.post('/hire', (require, response) => {

    });


    return router;
}

export default jobs;