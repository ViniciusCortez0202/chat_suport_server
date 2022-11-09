import UserInterfaceData from './util/user_interface.js';

class SupportData extends UserInterfaceData{

    connection;

    constructor(connection){
        super()
        this.connection = connection;
    }

    select = () => {
        const query = "SELECT * FROM support";
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }
    selectById = (id) => {
        const query = "SELECT name FROM support WHERE id = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [id], (err, result) => {
                console.log(result)
                console.log(err)
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    login = (cpf, password) => {
        const query = "SELECT * FROM support WHERE cpf = ? and password = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [cpf, password], (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insert = (values) => {
        const query = "INSERT INTO support SET ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insert = (values) => {
        const query = "INSERT INTO support SET ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }
    updateRefreshTokenId = (value, id) => {
        const query = "UPDATE support SET uuid = ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [value, id], (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    selectRefreshTokenId = (value) => {
        const query = "SELECT uuid FROM support WHERE id = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [value], (err, result) => {
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

export default SupportData;