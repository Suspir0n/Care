import {Entity, Column} from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: 'user'})
export class UserEntity extends BaseEntity {
   
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

    @Column({ default: false })
    isRoot: boolean;
}
