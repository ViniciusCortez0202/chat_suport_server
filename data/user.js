import connection from './connection.js';

class UserData{

    selectUser = () => {
        const query = "SELECT * FROM user";
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    selectById = (id) => {
        const query = "SELECT name FROM user WHERE id = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, [id], (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }


    login = (name, password) => {
        const query = "SELECT * FROM user WHERE name = ? password = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, [name, password] ,(err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    insert = (values) => {
        const query = "INSERT INTO user SET ?";
        return new Promise((resolve, reject) => {
            connection.query(query, values, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

    selectUserId = (id) => {
        const query = "SELECT * FROM user WHERE id = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, id, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }

}

export default UserData;