import { createConnection } from 'mysql';
const connection = createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'db_chamados'
});

export default connection;

