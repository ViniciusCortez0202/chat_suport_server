import connection from './connection.js';

class CallsData{

    selectCalls = () => {
        const query = "SELECT * FROM calls";
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insertCalls = (values) => {
        const query = "INSERT INTO calls SET ?";
        return new Promise((resolve, reject) => {
            connection.query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

export default CallsData