import { createConnection } from "typeorm";
import { UserEntity } from "../entity/UserEntity";
import { AddressEntity } from "../entity/AddressEntity";

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
                UserEntity,
                AddressEntity
            ]
          }
        );
        console.log('Database connected');
    }
}