import {Entity, Column, ManyToOne} from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: 'card'})
export class CardEntity extends BaseEntity {

    @Column({ type: "varchar", length: 20 })
    numCard: string;

    @Column({ type: "varchar", length: 100 })
    name: string;

    @Column({ type: "varchar", length: 5 })
    dateValid: string;

    @Column({ type: "varchar", length: 3 })
    codSecurity: string;
}
