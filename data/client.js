import connection from './connection.js';

class ClientData{

    connection;
    constructor(connection) {
        this.connection = connection;
    }

    select = () => {
        const query = "SELECT * FROM client";
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insert = (values) => {
        const query = "INSERT INTO client SET ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    selectClientById = (id) => {
        const query = "SELECT * FROM client WHERE id = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, id, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

export default ClientData;