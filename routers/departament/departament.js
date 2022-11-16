import connection from '../../data/connection.js';
import DepartamentData from '../../data/departament.js';
import Authentication from './../../authentication/auth.js';

const departamentRouters = (router) => {
    
    const departamentData = new DepartamentData(connection);
    const auth = new Authentication()

    router.get('/:id?', auth.auth, async (request, response, next) => {
        try {
            const id = request.params.id;
            let data;

            if(id === undefined) {
                data = await getDepartaments();
            } else {
                data = await getDepartamentById(id);
            }
            
            response.status(200).send(data);
        } catch (error) {
            response.status(404).json({message: "Departamento não encontrado."});
        }
    });

    router.post("/add", auth.auth, async (request, response) => {
        try {

            const data = {
                client_id: request.body.clientId,
                data: JSON.stringify(request.body.data)
            }

            await departamentData.insert(data);
            response.status(201).json({message: "Departamento cadastrado com sucesso."})
        } catch (error) {
            console.log(error)
            response.status(400).json({message: "Não foi possível criar departamento. Tente novamente mais tarde."})
        }
    })
   
    return router;
}

async function getDepartamentById(id) {
    const departamentData = new DepartamentData(connection);

    const result = await departamentData.selectDepartamentById(id);
    const departament = {
        id: result[0].departament_id,
        clientId: result[0].client_id,
        data: JSON.parse(result[0].data)
    };

    return departament;
}

async function getDepartaments() {
    const departamentData = new DepartamentData(connection);
            
    const result = await departamentData.select();
    const departaments = result.map((element) => {
        return {
            id: element.departament_id,
            clientId: element.client_id,
            data: JSON.parse(element.data)
        }
    });
    
    return departaments;
}


export default departamentRouters;