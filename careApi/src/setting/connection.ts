import { createConnection } from "typeorm";
import { User } from "../entity/UserEntity";

const cfg = require('../../ormconfig.json');

export default {
    createConnection: async () => {
        await createConnection({
            type: cfg.type,
            host: cfg.host,
            port: cfg.port,
            username: cfg.username,
            password: cfg.password,
            database: cfg.database,
            synchronize: true,
            logging: false,
            entities: [
                User
            ]
          }
        );
        console.log('Database connected');
    }
}