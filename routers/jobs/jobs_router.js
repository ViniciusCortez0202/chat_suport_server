jobs = (router) => {

    router.get('/info', (require, response) => {
        console.log(require.body);
        response.end();
    });

    router.post('/hire', (require, response) => {

    });


    return router;
}

module.exports = jobs;