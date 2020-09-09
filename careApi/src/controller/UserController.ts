import { BaseController } from "./BaseController";
import { Request } from 'express';
import * as md5 from 'md5';
import { FileHelper } from "../helpers/fileHelper";
import { UserEntity } from "../entity/UserEntity";

export class UserController extends BaseController<UserEntity> {

    constructor(){
        super(UserEntity);
    }
    async createUser(request: Request) {
        let { fisrtName, lastName, email, password, confirmPassword, photo, isRoot } = request.body;
        super.isRequired(fisrtName, 'Informe o seu primeiro nome');
        super.isRequired(lastName, 'Informe o seu  sobrenome');
        super.isRequired(email, 'Informe o seu e-mail');
        super.isRequired(password, 'Informe a sua senha');
        super.isRequired(confirmPassword, 'Informe a sua senha novamente para confirmar');
        super.isRequired(photo, 'Adicione uma foto para o seu perfil');

        let _user = new UserEntity();
        _user.firstName = fisrtName;
        _user.lastName = lastName;
        _user.email = email;
        _user.photo = photo;

        if (_user.photo) {
            let pictureCreatedResult = await FileHelper.writePicture(_user.photo)
            if (pictureCreatedResult)
                _user.photo = pictureCreatedResult
        }
        if (password != confirmPassword) return { status: 400, errors: ['A senha e a confirmação são diferentes'] };
        if (password) _user.password = md5(password);
        _user.isRoot = isRoot;
        return super.save(_user, request, true);
    }
    async save(request: Request) {
        let _user = <UserEntity>request.body;
        super.isRequired(_user.firstName, 'O nome do usuário é obrigatório');
        super.isRequired(_user.photo, 'A foto do usuário é obrigatória');

        if (_user.photo) {
            let pictureCreatedResult = await FileHelper.writePicture(_user.photo)
            if (pictureCreatedResult)
                _user.photo = pictureCreatedResult
        }
        return super.save(_user, request);
    }
}