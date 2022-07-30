import connection from './connection.js';

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

    insertTechnician = (values) => {
        const query = "INSERT INTO technician SET ?";
        return new Promise((resolve, reject) => {
            _query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insertCallToTechnician = (values) => {
        const query = "INSERT INTO technician_calls SET ?";
        return new Promise((resolve, reject) => {
            _query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

export default Technician;