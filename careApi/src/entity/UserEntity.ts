import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { baseEntity } from "./BaseEntity";

@Entity({ name: 'user'})
export class User extends baseEntity {
    @Column({ type: "varchar", length: 100 })
    firstName: string;

    @Column({ type: "varchar", length: 100 })
    lastName: string;

    @Column({ type: "varchar", length: 200 })
    email: string;

    @Column({ type: "varchar", length: 100 })
    password: string;

    @Column({ type: "varchar", length: 200 })
    photo: string;
}
