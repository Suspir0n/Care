import {Entity, Column, ManyToOne} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { CategoryEntity } from "./CategoryEntity";

@Entity({ name: 'subcategory'})
export class SubCategoryEntity extends BaseEntity {

    @Column({ type: "varchar", length: 200 })
    name: string;

    @Column({ type: "varchar", length: 1000 })
    description: string;

    @ManyToOne(() => CategoryEntity, { eager: true })
    categoryFK: CategoryEntity;
}
