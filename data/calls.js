class CallsData{
    connection;
    constructor(connection){
        this.connection = connection;
    };

    selectCalls = () => {
        const query = "SELECT * FROM calls";
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insertCalls = (values) => {
        const query = "INSERT INTO calls SET ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insertCallsFiles = (idCall, initialImageId, range) => {
        const values = [];
        for(let i = 0; i < range; i++){
            values.push([initialImageId++, idCall]);
        }
        const query = "INSERT INTO calls_files (files_id, calls_id) VALUES ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [values], (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    commitCallSupport = (values) => {
        const query = "INSERT INTO support_calls SET ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    endCall = (idCall) => {
        const query = "UPDATE calls SET status = 'FECHADO' and close_data = NOW() where id = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, idCall, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

export default CallsData