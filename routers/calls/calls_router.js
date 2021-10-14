calls = (router) => {

    router.post('/open', (require, response) => {
        console.log(require.body);
        response.end();
    });

    router.get('/all:idUser', (require, response) => {
        response.status(200).json(
            {}, {}, {},
        );
    });

    router.patch('/close', (require, response) => {

    });


    return router;
}

module.exports = calls;