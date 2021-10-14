jobs = (router) => {

    router.get('/info', (require, response) => {
        console.log(require.body);
        response.end();
    });

    router.get('/all', (require, response) => {

    });

    router.post('/hire', (require, response) => {

    });


    return router;
}

module.exports = jobs;