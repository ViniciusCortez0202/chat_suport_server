import UserInterfaceData from "./util/user_interface.js";

class UserData extends UserInterfaceData{

    connection;

    constructor(connection){
        super()
        this.connection = connection;
    }

    select = () => {
        const query = "SELECT * FROM user";
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    selectById = (id) => {
        const query = "SELECT name FROM user WHERE id = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [id], (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }


    login = (name, password) => {
        const query = "SELECT * FROM user WHERE name = ? and password = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [name, password] ,(err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insert = (values) => {
        const query = "INSERT INTO user SET ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }
    updateRefreshTokenId = (value, id) => {
        const query = "UPDATE user SET uuid = ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [value, id], (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }
    selectRefreshTokenId = (value) => {
        const query = "SELECT uuid FROM USER WHERE id = ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [value], (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

export default UserData;