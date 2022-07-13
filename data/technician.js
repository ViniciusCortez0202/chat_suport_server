const connection = require('./connection');

class Technician{

    selectTechnician = () => {
        const query = "SELECT * FROM technician";
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

module.exports = Technician;