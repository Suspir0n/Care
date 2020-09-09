import { Request } from 'express';
import { BaseController } from "./BaseController";
import { SubCategoryEntity } from '../entity/SubCategoryEntity';

export class SubCategoryController extends BaseController<SubCategoryEntity> {

  constructor() {
    super(SubCategoryEntity, true);
  }
  async save(request: Request) {
    let _subCategory = <SubCategoryEntity>request.body;
    
    super.isRequired(_subCategory.name, 'O nome da SubCategoria é obrigatório');
    super.isRequired(_subCategory.categoryFK, 'A categoria é obrigatória');
    return super.save(_subCategory, request);
  }
}