import UserInterfaceData from './util/user_interface.js';

class SupporCallstData extends UserInterfaceData{

    connection;

    constructor(connection){
        super()
        this.connection = connection;
    }

    verifyCallFromSupportAndReturnExceptionIfNot = (idUser, idCall) => {
        const query = "SELECT * FROM support_calls WHERE support_id = ? and calls_id = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [idUser, idCall], (err, result) => {
                if(err) return reject(err);
                if(!result.length) return reject("Array from database is empty")
                return resolve(true);
            })
        })
    }

    updateStatusCall = (value, idCall) => {
        const query = "UPDATE calls SET status = ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [value, idCall], (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insertCallToSupport = (values) => {
        const query = "INSERT INTO support_calls SET ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

export default SupporCallstData;