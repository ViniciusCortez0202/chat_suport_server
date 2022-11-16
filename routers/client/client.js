// import Status from '../../enums/statusCall.js';
import connection from '../../data/connection.js';
import ClientData from './../../data/client.js';

const clientsRouters = (router) => {
    
    const client = new ClientData(connection);

    router.get('/:id?', async (request, response, next) => {
        try {
            const id = request.params.id;
            let data;

            if(id === undefined) {
                data = await getClients();
            } else {
                data = await getClientById(id);
            }
            
            response.status(200).send(data);
        } catch (error) {
            console.log(error)
            response.status(404).send("Not found");
        }
    });

    router.post("/add", async (request, response) => {
        try {

            const data = {
                data: JSON.stringify(request.body)
            }

            await client.insert(data);
            response.status(201).json({message: "Cliente cadastrado com sucesso."})
        } catch (error) {
            response.status(400).json({message: "Não foi possível criar cliente. Tente novamente mais tarde."})
        }
    })
   
    return router;
}

async function getClientById(id) {
    const clientData = new ClientData(connection);

    const result = await clientData.selectClientById(id);
    const client = {
        id: result[0].id,
        data: JSON.parse(result[0].data)
    };

    return client;
}

async function getClients() {
    const clientData = new ClientData(connection);
            
    const result = await clientData.select();
    const clients = result.map((element) => {
        return {
            id: element.id,
            data: JSON.parse(element.data)
        }
    });
    
    return clients;
}


export default clientsRouters;