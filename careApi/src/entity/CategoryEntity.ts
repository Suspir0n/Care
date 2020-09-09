import {Entity, Column, ManyToOne} from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({ name: 'category'})
export class CategoryEntity extends BaseEntity {

    @Column({ type: "varchar", length: 200 })
    name: string;

    @Column({ type: "varchar", length: 1000 })
    description: string;
}
