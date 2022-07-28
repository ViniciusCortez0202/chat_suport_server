import { createConnection } from 'mysql';
const connection = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_chamados'
});

export default connection;

