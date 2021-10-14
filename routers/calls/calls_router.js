calls = (router) => {

    router.post('/open', (require, response) => {
        console.log(require.body);
        response.end();
    });

    router.patch('/close', (require, response) => {

    });


    return router;
}

module.exports = calls;