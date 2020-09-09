import {Entity, Column, ManyToOne} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { SubCategoryEntity } from "./SubCategoryEntity";
import { UserEntity } from "./UserEntity";

@Entity({ name: 'subcategory'})
export class NewProductEntity extends BaseEntity {

    @Column({ type: "varchar", length: 200 })
    name: string;

    @Column({ type: "varchar", length: 1000 })
    description: string;

    @Column({ type: "varchar", length: 200 })
    photo: string;
    
    @Column({ type: "varchar", length: 10 })
    value: string;

    @ManyToOne(() => UserEntity, { eager: true })
    userFK: UserEntity;

    @ManyToOne(() => NewProductEntity, { eager: true })
    subcategoryFK: SubCategoryEntity;
}