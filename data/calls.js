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

    insertCallsFiles = (values) => {
        const query = "INSERT INTO calls_files () ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

export default CallsData