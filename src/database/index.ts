import { createConnection, getConnectionOptions } from 'typeorm';
import { User } from '../Modules/Users/entities/user';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'apilogin_db'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
    entities: [
      User
    ]
  });
});