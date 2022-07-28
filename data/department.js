import { query as _query } from './connection';

class Departament{

    selectDepartment = () => {
        const query = "SELECT * FROM department";
        return new Promise((resolve, reject) => {
            _query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insertDepartment = (values) => {
        const query = "INSERT INTO department SET ?";
        return new Promise((resolve, reject) => {
            _query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

export default Departament;