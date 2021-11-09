jobs = (router) => {

    jobs = [
        {
            idJob: "50",
            name: "Arpa",
            isHire: true,
            dateHire: '30/06/2022',
            description: 'SIstema ERP',
            cost: 'a combinar',

        },
        {
            idJob: "45",
            name: "Infra",
            isHire: false,
            dateHire: '',
            description: 'Infra estrutura de redes',
            cost: '50/Gb',
        },
        {
            idJob: "63",
            name: "Suporte",
            isHire: false,
            dateHire: '',
            description: 'Suporte para dispositivos',
            cost: '50/dispositivo',
        }
    ]

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

module.exports = jobs;