import { Request } from 'express';
import { BaseController } from "./BaseController";
import { AddressEntity } from '../entity/AddressEntity';

export class AddressController extends BaseController<AddressEntity> {

    constructor() {
        super(AddressEntity);
    }
    private validationDefault(_address: AddressEntity): void {
        super.isRequired(_address.userFK, 'O nome é obrigatório');
        super.isRequired(_address.address, 'O endereço é obrigatório');
        super.isRequired(_address.phone, 'Telefone é obrigatório');
        super.isRequired(_address.zipCode, 'Informe o CEP');
        super.isRequired(_address.state, 'Informe o estado');
    }
    async save(request: Request) {
        let _address = <AddressEntity>request.body;
        super.isRequired(_address.userFK, 'O nome do usuário é obrigatório');
        super.isRequired(_address.address, 'O endereço é obrigatória');

        return super.save(_address, request);
    }
    async createAddress(request: Request) {
        let _address = <AddressEntity>request.body;

        this.validationDefault(_address);
        return super.save(_address, request, true);
    }
}