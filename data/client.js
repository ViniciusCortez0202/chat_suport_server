import { query as _query } from './connection';

class ClientData{

    selectClient = () => {
        const query = "SELECT * FROM client";
        return new Promise((resolve, reject) => {
            _query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insertClient = (values) => {
        const query = "INSERT INTO client SET ?";
        return new Promise((resolve, reject) => {
            _query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    selectClientId = (id) => {
        const query = "SELECT * FROM client WHERE id = ?";
        return new Promise((resolve, reject) => {
            _query(query, id, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

export default ClientData;