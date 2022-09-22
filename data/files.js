class FilesData{

    connection;
    constructor(connection){
        this.connection = connection;
    };

    insertFiles = (values) => {

        let files = [];

        values.map((element) => files.push([element.path, element.type]));
        const query = "INSERT INTO files (path, type) VALUES ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [files], (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }
}

export default FilesData;