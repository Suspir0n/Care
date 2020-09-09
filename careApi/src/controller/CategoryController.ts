import { Request } from 'express';
import { CategoryEntity } from "../entity/CategoryEntity";
import { BaseController } from "./BaseController";
import { getRepository } from 'typeorm';
import { SubCategoryEntity } from '../entity/SubCategoryEntity';

export class CategoryController extends BaseController<CategoryEntity> {

  private _subCategoryRespository = getRepository(SubCategoryEntity)

  constructor() {
    super(CategoryEntity, true);
  }

  async save(request: Request) {
    let _category = <CategoryEntity>request.body;
    super.isRequired(_category.name, 'O nome da categoria é obrigatório');
    return super.save(_category, request);
  }

  getAllSubCategorys(request: Request) {
    const { id: categoryId } = request.params;
    return this._subCategoryRespository.find({
      where: {
        category: categoryId, 
        deleted: false
      }
    })
  }

}