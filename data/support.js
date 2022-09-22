import connection from './connection.js';

class Support{

    selectSupport = () => {
        const query = "SELECT * FROM support";
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insertSupport = (values) => {
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

export default Support;