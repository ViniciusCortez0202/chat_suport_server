import connection from './connection.js';

class SupportData{

    selectSupport = () => {
        const query = "SELECT * FROM support";
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }
    selectById = (id) => {
        const query = "SELECT name FROM support WHERE id = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, [id], (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    login = (name, password) => {
        const query = "SELECT * FROM support WHERE name = ? password = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, [name, password], (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insert = (values) => {
        const query = "INSERT INTO support SET ?";
        return new Promise((resolve, reject) => {
            _query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insertCallToSupport = (values) => {
        const query = "INSERT INTO support_calls SET ?";
        return new Promise((resolve, reject) => {
            _query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

export default SupportData;