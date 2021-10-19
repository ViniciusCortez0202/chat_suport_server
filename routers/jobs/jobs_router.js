jobs = (router) => {

    jobs = [
        {
            idJob: "50",
            name: "Arpa",
            isHire: true,
            dateHire: '30/06/2022',
            description: '',
            cost: '',

        },
        {
            idJob: "45",
            name: "Infra",
            isHire: false,
            dateHire: '',
            description: '',
            cost: '',
        },
        {
            idJob: "63",
            name: "Suporte",
            isHire: false,
            dateHire: '',
            description: '',
            cost: '',
        },
        {
            idJob: "47",
            name: "Desenvolvimento",
            isHire: true,
            dateHire: '25/08/2025',
            description: '',
            cost: '',
        },
    ]

    router.get('/info', (require, response) => {
        console.log(require.body);
        response.end();
    });

    router.get('/all', (require, response) => {
        
        response.status(200).send(jobs);
    });

    router.post('/hire', (require, response) => {

    });


    return router;
}

module.exports = jobs;