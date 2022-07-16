const connection = require('./connection');

class Client{

    selectClient = () => {
        const query = "SELECT * FROM client";
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insertClient = (values) => {
        const query = "INSERT INTO client SET ?";
        return new Promise((resolve, reject) => {
            connection.query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

module.exports = Client;