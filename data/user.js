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

    insertUser = (values) => {
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