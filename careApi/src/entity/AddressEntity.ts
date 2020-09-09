import {Entity, Column, ManyToOne} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { UserEntity } from "./UserEntity";

@Entity({ name: 'address'})
export class AddressEntity extends BaseEntity {
   
    @ManyToOne(() => UserEntity, { eager: true })
    userFK: UserEntity;

    @Column({ type: "varchar", length: 100 })
    address: string;

    @Column({ type: "varchar", length: 1000 })
    addressComplement: string;

    @Column({ type: "varchar", length: 2 })
    state: string;

    @Column({ type: "varchar", length: 100 })
    city: string;

    @Column({ type: "varchar", length: 20 })
    zipCode: string;

    @Column({ type: "varchar", length: 50 })
    phone: string;
}
