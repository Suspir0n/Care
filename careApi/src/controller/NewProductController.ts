import { BaseController } from "./BaseController";
import { Request } from 'express';
import { FileHelper } from "../helpers/fileHelper";
import { NewProductEntity } from "../entity/NewProductEntity";

export class NewProductController extends BaseController<NewProductEntity> {

    constructor(){
        super(NewProductEntity);
    }
    private validationDefault(_newProduct: NewProductEntity): void {
        super.isRequired(_newProduct.name, 'O nome do produto é obrigatório');
        super.isRequired(_newProduct.description, 'A descrição é obrigatória');
        super.isRequired(_newProduct.photo, 'Adicione uma foto para o seu produto');
        super.isRequired(_newProduct.value, 'Adicione o valor do seu produto');
        super.isRequired(_newProduct.subcategoryFK, 'Informe em qual categoria ele se encontra');
    }
    async createNewProduct(request: Request) {
        let _newProduct = <NewProductEntity>request.body;
        
        this.validationDefault(_newProduct);
        if (_newProduct.photo) {
            let pictureCreatedResult = await FileHelper.writePicture(_newProduct.photo)
            if (pictureCreatedResult)
                _newProduct.photo = pictureCreatedResult
        }
        return super.save(_newProduct, request, true);
    }
    async save(request: Request) {
        let _newProduct = <NewProductEntity>request.body;

        this.validationDefault(_newProduct);
        if (_newProduct.photo) {
            let pictureCreatedResult = await FileHelper.writePicture(_newProduct.photo)
            if (pictureCreatedResult)
                _newProduct.photo = pictureCreatedResult
        }
        return super.save(_newProduct, request);
    }
}